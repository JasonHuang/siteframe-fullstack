const express = require('express');
const { supabase } = require('../config/supabase');
const router = express.Router();

// 健康检查端点
router.get('/', async (req, res) => {
  try {
    // 检查数据库连接
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (error) {
      console.error('数据库连接检查失败:', error);
      return res.status(503).json({
        status: 'unhealthy',
        message: '数据库连接失败',
        timestamp: new Date().toISOString(),
        services: {
          database: 'down',
          api: 'up'
        }
      });
    }

    res.json({
      status: 'healthy',
      message: '服务运行正常',
      timestamp: new Date().toISOString(),
      services: {
        database: 'up',
        api: 'up'
      },
      version: process.env.npm_package_version || '1.0.0'
    });
  } catch (error) {
    console.error('健康检查错误:', error);
    res.status(503).json({
      status: 'unhealthy',
      message: '服务异常',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

module.exports = router;
