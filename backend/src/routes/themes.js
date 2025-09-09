const express = require('express');
const { supabaseAdmin } = require('../config/supabase');
const router = express.Router();

// 获取活跃主题
router.get('/active', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('themes')
      .select('*')
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('获取活跃主题错误:', error);
      return res.status(500).json({ error: '获取活跃主题失败' });
    }

    if (!data) {
      return res.status(404).json({ error: '未找到活跃主题' });
    }

    res.json(data);
  } catch (error) {
    console.error('获取活跃主题错误:', error);
    res.status(500).json({ error: '获取活跃主题失败' });
  }
});

// 获取所有主题
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('themes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('获取主题列表错误:', error);
      return res.status(500).json({ error: '获取主题列表失败' });
    }

    res.json(data || []);
  } catch (error) {
    console.error('获取主题列表错误:', error);
    res.status(500).json({ error: '获取主题列表失败' });
  }
});

// 获取单个主题
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabaseAdmin
      .from('themes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: '主题不存在' });
      }
      console.error('获取主题错误:', error);
      return res.status(500).json({ error: '获取主题失败' });
    }

    res.json(data);
  } catch (error) {
    console.error('获取主题错误:', error);
    res.status(500).json({ error: '获取主题失败' });
  }
});

// 创建主题（需要管理员权限）
router.post('/', async (req, res) => {
  try {
    // 这里应该添加权限验证中间件
    const { name, description, config } = req.body;

    if (!name || !config) {
      return res.status(400).json({ error: '缺少必要的主题信息' });
    }

    const themeData = {
      name,
      description: description || '',
      config,
      is_active: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabaseAdmin
      .from('themes')
      .insert(themeData)
      .select()
      .single();

    if (error) {
      console.error('创建主题错误:', error);
      return res.status(500).json({ error: '创建主题失败' });
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('创建主题错误:', error);
    res.status(500).json({ error: '创建主题失败' });
  }
});

// 更新主题（需要管理员权限）
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, config } = req.body;

    const updateData = {
      updated_at: new Date().toISOString()
    };

    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (config !== undefined) updateData.config = config;

    const { data, error } = await supabaseAdmin
      .from('themes')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: '主题不存在' });
      }
      console.error('更新主题错误:', error);
      return res.status(500).json({ error: '更新主题失败' });
    }

    res.json(data);
  } catch (error) {
    console.error('更新主题错误:', error);
    res.status(500).json({ error: '更新主题失败' });
  }
});

// 激活主题（需要管理员权限）
router.post('/:id/activate', async (req, res) => {
  try {
    const { id } = req.params;

    // 首先将所有主题设为非活跃
    const { error: deactivateError } = await supabaseAdmin
      .from('themes')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .neq('id', '00000000-0000-0000-0000-000000000000'); // 排除不存在的ID

    if (deactivateError) {
      console.error('取消激活主题错误:', deactivateError);
      return res.status(500).json({ error: '激活主题失败' });
    }

    // 激活指定主题
    const { data, error } = await supabaseAdmin
      .from('themes')
      .update({ is_active: true, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: '主题不存在' });
      }
      console.error('激活主题错误:', error);
      return res.status(500).json({ error: '激活主题失败' });
    }

    res.json(data);
  } catch (error) {
    console.error('激活主题错误:', error);
    res.status(500).json({ error: '激活主题失败' });
  }
});

// 删除主题（需要管理员权限）
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 检查是否是活跃主题
    const { data: theme, error: checkError } = await supabaseAdmin
      .from('themes')
      .select('is_active')
      .eq('id', id)
      .single();

    if (checkError) {
      if (checkError.code === 'PGRST116') {
        return res.status(404).json({ error: '主题不存在' });
      }
      console.error('检查主题错误:', checkError);
      return res.status(500).json({ error: '删除主题失败' });
    }

    if (theme.is_active) {
      return res.status(400).json({ error: '无法删除活跃主题' });
    }

    const { error } = await supabaseAdmin
      .from('themes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('删除主题错误:', error);
      return res.status(500).json({ error: '删除主题失败' });
    }

    res.json({ message: '主题删除成功' });
  } catch (error) {
    console.error('删除主题错误:', error);
    res.status(500).json({ error: '删除主题失败' });
  }
});

// 检查主题状态（管理接口）
router.get('/admin/check', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('themes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('检查主题状态错误:', error);
      return res.status(500).json({ error: '检查主题状态失败' });
    }

    const themes = data || [];
    const activeThemes = themes.filter(theme => theme.is_active);
    const activeTheme = activeThemes.length > 0 ? activeThemes[0] : null;

    const result = {
      totalThemes: themes.length,
      activeThemeCount: activeThemes.length,
      activeTheme: activeTheme,
      themes: themes.map(theme => ({
        id: theme.id,
        name: theme.name,
        slug: theme.slug,
        isActive: theme.is_active,
        isSystemTheme: theme.is_system_theme || false,
        version: theme.version || '1.0.0',
        author: theme.author || 'Unknown',
        createdAt: theme.created_at
      }))
    };

    res.json(result);
  } catch (error) {
    console.error('检查主题状态错误:', error);
    res.status(500).json({ error: '检查主题状态失败' });
  }
});

module.exports = router;
