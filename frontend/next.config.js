const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 13.4+ 默认启用 app directory，无需配置
  output: 'standalone',
  
  // 生产环境性能优化
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // 实验性功能
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  }, // 启用独立输出模式，用于容器化部署
  images: {
    domains: ['localhost', 'fujiess.com', 'www.fujiess.com'],
  },
  // 暂时禁用严格模式进行调试
  reactStrictMode: false,
  // 启用SWC压缩
  swcMinify: true,
  // 忽略TypeScript错误
  typescript: {
    ignoreBuildErrors: true,
  },
  // 忽略ESLint错误
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 环境变量会自动从 .env 文件加载
  // 重定向配置
  async redirects() {
    return [
      // 示例重定向
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
  // 重写配置
  async rewrites() {
    return [
      // 示例重写
      // {
      //   source: '/api/external/:path*',
      //   destination: 'https://external-api.com/:path*',
      // },
    ]
  },
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Webpack配置优化
  webpack: (config, { dev, isServer }) => {
    // 修复服务端渲染中的浏览器全局变量问题
    const webpack = require('webpack');
    const CopyPlugin = require('copy-webpack-plugin');
    
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        util: false,
      };
    }
    
    // 为客户端环境提供 global polyfill
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        global: false,
      };
    }

    // 抑制Node.js弃用警告
    const originalEmit = process.emit;
    process.emit = function (name, data, ...args) {
      if (name === 'warning' && typeof data === 'object' && data.name === 'DeprecationWarning' && data.message.includes('punycode')) {
        return false;
      }
      return originalEmit.apply(process, arguments);
    };

    // 优化缓存配置以解决大字符串序列化警告
    if (config.cache && config.cache.type === 'filesystem') {
      config.cache.compression = 'gzip';
      config.cache.maxMemoryGenerations = 1;
      // 设置缓存大小限制
      config.cache.maxAge = 1000 * 60 * 60 * 24 * 7; // 7天
      config.cache.buildDependencies = {
        config: [__filename],
      };
    }

    // 复制主题静态资源
    if (!isServer) {
      const fs = require('fs');
      const themesDir = path.resolve(__dirname, './app/themes');
      
      if (fs.existsSync(themesDir)) {
        const themes = fs.readdirSync(themesDir).filter(item => {
          const themePath = path.join(themesDir, item);
          return fs.statSync(themePath).isDirectory();
        });
        
        const patterns = themes.map(theme => ({
          from: path.resolve(__dirname, `./app/themes/${theme}/public`),
          to: path.resolve(__dirname, `./public/themes/${theme}`),
          globOptions: {
            ignore: ['**/.DS_Store'],
          },
          noErrorOnMissing: true,
        }));
        
        if (patterns.length > 0) {
          config.plugins.push(
            new CopyPlugin({ patterns })
          );
        }
      }
    }

    // 优化模块解析
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './app'),
      '@/themes': path.resolve(__dirname, './app/themes'),
      '@/lib': path.resolve(__dirname, './app/lib'),
      '@/components': path.resolve(__dirname, './app/components'),
    };

    // 优化构建性能
    if (dev) {
      // 开发环境优化
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    } else {
      // 生产环境优化
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              maxSize: 244000, // 限制chunk大小为244KB
            },
          },
        },
      };
    }
    
    return config;
  },
}

module.exports = nextConfig