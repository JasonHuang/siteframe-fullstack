const express = require('express');
const { supabase, supabaseAdmin } = require('../config/supabase');
const router = express.Router();

// 用户注册
router.post('/signup', async (req, res) => {
  try {
    const { email, password, name, isAdmin = false } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: '缺少必要的注册信息' });
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    if (authData.user) {
      // 检查是否是已存在的邮箱
      if (!authData.user.identities || authData.user.identities.length === 0) {
        return res.status(400).json({ error: '该邮箱已被注册，请直接登录或使用其他邮箱' });
      }

      // 同步用户到 public.users 表
      await syncUserToPublicTable(authData.user, isAdmin);

      return res.json({
        user: {
          id: authData.user.id,
          email: authData.user.email,
          user_metadata: authData.user.user_metadata
        }
      });
    }

    res.status(400).json({ error: '注册失败' });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ error: '注册过程中发生错误' });
  }
});

// 用户登录
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: '缺少邮箱或密码' });
    }

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    if (authData.user) {
      // 自动同步用户到 public.users 表
      await syncUserToPublicTable(authData.user);
      
      return res.json({
        user: {
          id: authData.user.id,
          email: authData.user.email,
          user_metadata: authData.user.user_metadata
        },
        session: authData.session
      });
    }

    res.status(400).json({ error: '登录失败' });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ error: '登录过程中发生错误' });
  }
});

// 用户登出
router.post('/signout', async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: '登出成功' });
  } catch (error) {
    console.error('登出错误:', error);
    res.status(500).json({ error: '登出过程中发生错误' });
  }
});

// 获取当前用户
router.get('/user', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: '未提供认证令牌' });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: '无效的认证令牌' });
    }

    res.json({ user });
  } catch (error) {
    console.error('获取用户错误:', error);
    res.status(500).json({ error: '获取用户信息失败' });
  }
});

// 重置密码
router.post('/reset-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: '缺少邮箱地址' });
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.FRONTEND_URL}/auth/reset-password`
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: '密码重置邮件已发送' });
  } catch (error) {
    console.error('重置密码错误:', error);
    res.status(500).json({ error: '重置密码过程中发生错误' });
  }
});

// 更新密码
router.post('/update-password', async (req, res) => {
  try {
    const { newPassword } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: '未提供认证令牌' });
    }

    if (!newPassword) {
      return res.status(400).json({ error: '缺少新密码' });
    }

    const token = authHeader.replace('Bearer ', '');
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: '密码更新成功' });
  } catch (error) {
    console.error('更新密码错误:', error);
    res.status(500).json({ error: '更新密码过程中发生错误' });
  }
});

// 检查管理员是否存在
router.get('/check-admin', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('role', 'admin')
      .limit(1);

    if (error) {
      console.error('检查管理员错误:', error);
      return res.status(500).json({ error: '检查管理员状态失败' });
    }

    res.json({ hasAdmin: data && data.length > 0 });
  } catch (error) {
    console.error('检查管理员错误:', error);
    res.status(500).json({ error: '检查管理员状态失败' });
  }
});

// 同步用户到 public.users 表的辅助函数
const syncUserToPublicTable = async (authUser, forceAdmin = false) => {
  try {
    if (!supabaseAdmin) {
      console.warn('Supabase admin client not available');
      return;
    }

    // 检查用户是否已存在
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', authUser.id)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('检查用户存在性错误:', checkError);
      return;
    }

    if (!existingUser) {
      // 检查是否是第一个用户（设为管理员）
      const { count, error: countError } = await supabaseAdmin
        .from('users')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        console.error('统计用户数量错误:', countError);
        return;
      }

      const isFirstUser = count === 0;
      const role = forceAdmin || isFirstUser ? 'admin' : 'user';

      const userData = {
        id: authUser.id,
        email: authUser.email,
        name: authUser.user_metadata?.name || authUser.email?.split('@')[0] || '',
        role: role,
        avatar: authUser.user_metadata?.avatar_url || null,
        bio: null,
        website: null,
        social_links: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const { error: insertError } = await supabaseAdmin
        .from('users')
        .insert(userData);

      if (insertError) {
        console.error('插入用户数据错误:', insertError);
      } else {
        console.log(`用户 ${authUser.email} 已同步到 public.users 表，角色: ${role}`);
      }
    }
  } catch (error) {
    console.error('同步用户到 public.users 表错误:', error);
  }
};

module.exports = router;
