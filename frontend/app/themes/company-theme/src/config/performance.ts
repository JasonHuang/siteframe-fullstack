/**
 * Performance Configuration for Company Theme
 * 性能优化配置，定义CSS优化策略和加载性能改进方案
 */

const performanceConfig = {
  // CSS 优化配置
  css: {
    // 启用 CSS 压缩
    minification: true,
    
    // 移除未使用的 CSS
    purgeCSS: {
      enabled: true,
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}'
      ],
      safelist: [
        // 保留动态类名
        /^bg-/,
        /^text-/,
        /^border-/,
        /^shadow-/,
        /^hover:/,
        /^focus:/,
        /^active:/,
        /^disabled:/
      ]
    },
    
    // 关键 CSS 内联
    criticalCSS: {
      enabled: true,
      inline: true,
      minify: true,
      extract: true,
      dimensions: [
        {
          width: 1920,
          height: 1080
        },
        {
          width: 1366,
          height: 768
        },
        {
          width: 768,
          height: 1024
        },
        {
          width: 375,
          height: 667
        }
      ]
    },
    
    // CSS 分割策略
    splitting: {
      enabled: true,
      strategy: 'component', // 'component' | 'page' | 'vendor'
      chunkSize: 50000, // 50KB
      asyncLoading: true
    }
  },
  
  // 字体优化
  fonts: {
    // 字体预加载
    preload: [
      {
        href: '/fonts/inter-variable.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      },
      {
        href: '/fonts/jetbrains-mono-variable.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }
    ],
    
    // 字体显示策略
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    
    // 字体子集化
    subset: {
      enabled: true,
      unicode: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
    }
  },
  
  // 图片优化
  images: {
    // 懒加载
    lazyLoading: {
      enabled: true,
      threshold: '50px',
      placeholder: 'blur' // 'blur' | 'empty' | 'skeleton'
    },
    
    // 响应式图片
    responsive: {
      enabled: true,
      breakpoints: [640, 768, 1024, 1280, 1536],
      formats: ['webp', 'avif', 'jpg'],
      quality: 85
    },
    
    // 图片压缩
    compression: {
      enabled: true,
      quality: {
        jpg: 85,
        png: 90,
        webp: 85,
        avif: 80
      }
    }
  },
  
  // 缓存策略
  caching: {
    // 静态资源缓存
    staticAssets: {
      css: {
        maxAge: '1y',
        immutable: true
      },
      js: {
        maxAge: '1y',
        immutable: true
      },
      fonts: {
        maxAge: '1y',
        immutable: true
      },
      images: {
        maxAge: '1y',
        immutable: false
      }
    },
    
    // 服务工作者缓存
    serviceWorker: {
      enabled: false,
      strategy: 'cacheFirst', // 'cacheFirst' | 'networkFirst' | 'staleWhileRevalidate'
      cacheName: 'company-theme-v1',
      precache: [
        '/css/critical.css',
        '/fonts/inter-variable.woff2'
      ]
    }
  },
  
  // 代码分割
  codeSplitting: {
    enabled: true,
    strategy: 'route', // 'route' | 'component' | 'vendor'
    chunkSize: {
      min: 20000,  // 20KB
      max: 244000  // 244KB
    },
    
    // 预加载策略
    preloading: {
      enabled: true,
      strategy: 'hover', // 'hover' | 'visible' | 'intent'
      delay: 100 // ms
    }
  },
  
  // 运行时优化
  runtime: {
    // 虚拟滚动
    virtualScrolling: {
      enabled: true,
      itemHeight: 50,
      bufferSize: 5
    },
    
    // 防抖和节流
    debouncing: {
      search: 300,
      resize: 100,
      scroll: 16
    },
    
    // 内存管理
    memoryManagement: {
      componentCleanup: true,
      eventListenerCleanup: true,
      observerCleanup: true
    }
  },
  
  // 监控和分析
  monitoring: {
    // 性能指标
    metrics: {
      enabled: true,
      vitals: ['FCP', 'LCP', 'FID', 'CLS', 'TTFB'],
      customMetrics: [
        'themeLoadTime',
        'componentRenderTime',
        'cssParseTime'
      ]
    },
    
    // 错误监控
    errorTracking: {
      enabled: true,
      sampleRate: 0.1,
      ignoreErrors: [
        'ResizeObserver loop limit exceeded',
        'Non-Error promise rejection captured'
      ]
    },
    
    // 性能预算
    budget: {
      enabled: true,
      limits: {
        css: '100KB',
        js: '500KB',
        fonts: '200KB',
        images: '1MB',
        total: '2MB'
      }
    }
  },
  
  // 开发环境优化
  development: {
    // 热重载
    hotReload: {
      enabled: true,
      overlay: true,
      quiet: false
    },
    
    // 源码映射
    sourceMaps: {
      enabled: true,
      type: 'eval-source-map' // 'eval' | 'eval-source-map' | 'source-map'
    },
    
    // 构建分析
    bundleAnalysis: {
      enabled: false,
      openAnalyzer: false,
      generateStatsFile: true
    }
  },
  
  // 生产环境优化
  production: {
    // 代码压缩
    minification: {
      css: true,
      js: true,
      html: true,
      removeComments: true,
      removeWhitespace: true
    },
    
    // Tree Shaking
    treeShaking: {
      enabled: true,
      sideEffects: false,
      usedExports: true
    },
    
    // 模块联邦
    moduleFederation: {
      enabled: false,
      remotes: {},
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    }
  }
};

export default performanceConfig;