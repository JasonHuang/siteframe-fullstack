const express = require('express');
const { supabase, supabaseAdmin } = require('../config/supabase');
const router = express.Router();

// 获取用户资料
router.get('/profile/:userId?', async (req, res) => {
  try {
    const { userId } = req.params;
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: '未提供认证令牌' });
    }

    // 如果没有指定用户ID，从认证令牌获取当前用户
    let targetUserId = userId;
    if (!targetUserId) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (error || !user) {
        return res.status(401).json({ error: '无效的认证令牌' });
      }
      
      targetUserId = user.id;
    }

    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', targetUserId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: '用户不存在' });
      }
      console.error('获取用户资料错误:', error);
      return res.status(500).json({ error: '获取用户资料失败' });
    }

    res.json(data);
  } catch (error) {
    console.error('获取用户资料错误:', error);
    res.status(500).json({ error: '获取用户资料失败' });
  }
});

// 更新用户资料
router.put('/profile', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: '未提供认证令牌' });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return res.status(401).json({ error: '无效的认证令牌' });
    }

    const { name, avatar, bio, website, social_links } = req.body;
    
    const updateData = {
      updated_at: new Date().toISOString()
    };
    
    if (name !== undefined) updateData.name = name;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (bio !== undefined) updateData.bio = bio;
    if (website !== undefined) updateData.website = website;
    if (social_links !== undefined) updateData.social_links = social_links;

    const { data, error } = await supabaseAdmin
      .from('users')
      .update(updateData)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      console.error('更新用户资料错误:', error);
      return res.status(500).json({ error: '更新用户资料失败' });
    }

    res.json(data);
  } catch (error) {
    console.error('更新用户资料错误:', error);
    res.status(500).json({ error: '更新用户资料失败' });
  }
});

module.exports = router;
