/**
 * Design Tokens for Minimal Theme
 * 设计令牌定义了主题的基础设计系统
 */

const designTokens = {
  // 颜色系统
  colors: {
    // 主色调 - 企业蓝色系，提升专业感和可访问性
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',  // 主色调，更好的对比度
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'   // 新增深色变体
    },
    
    // 辅助色 - 紫色系，增加品牌识别度
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764'
    },
    
    // 中性色
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    
    // 语义色 - 完整的色彩变体，提升可访问性
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    
    // 信息色
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    
    // 特殊颜色
    white: '#ffffff',
    black: '#000000'
  },
  
  // 字体系统
  typography: {
    fontFamily: {
      sans: [
        'Inter Variable',
        'Inter', 
        'system-ui', 
        '-apple-system', 
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji'
      ],
      serif: [
        'Crimson Pro Variable',
        'Crimson Pro',
        'Georgia', 
        'Cambria', 
        'Times New Roman', 
        'Times',
        'serif'
      ],
      mono: [
        'JetBrains Mono Variable',
        'JetBrains Mono',
        'Fira Code', 
        'Monaco', 
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ],
      display: [
        'Cal Sans',
        'Inter Variable',
        'Inter',
        'system-ui',
        'sans-serif'
      ]
    },
    
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem'       // 128px
    },
    
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',     // 12px
      4: '1rem',      // 16px
      5: '1.25rem',   // 20px
      6: '1.5rem',    // 24px
      7: '1.75rem',   // 28px
      8: '2rem',      // 32px
      9: '2.25rem',   // 36px
      10: '2.5rem'    // 40px
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    
    // 文本样式预设
    textStyles: {
      h1: {
        fontSize: '2.25rem',
        fontWeight: '700',
        lineHeight: '1.2',
        letterSpacing: '-0.025em'
      },
      h2: {
        fontSize: '1.875rem',
        fontWeight: '600',
        lineHeight: '1.3',
        letterSpacing: '-0.025em'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.4'
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.5'
      },
      body: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.6'
      },
      caption: {
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.4'
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: '600',
        lineHeight: '1.5',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    }
  },
  
  // 间距系统
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem'     // 256px
  },
  
  // 边框系统
  borders: {
    width: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    
    radius: {
      none: '0',
      sm: '0.125rem',   // 2px
      base: '0.25rem',  // 4px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px'
    }
  },
  
  // 阴影系统
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    none: 'none',
    // 彩色阴影
    primary: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)',
    secondary: '0 10px 15px -3px rgba(168, 85, 247, 0.1), 0 4px 6px -4px rgba(168, 85, 247, 0.1)',
    success: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(34, 197, 94, 0.1)',
    warning: '0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -4px rgba(245, 158, 11, 0.1)',
    error: '0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -4px rgba(239, 68, 68, 0.1)'
  },
  
  // 动画系统
  animations: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // 断点系统
  breakpoints: {
    xs: '475px',     // 超小屏幕
    sm: '640px',     // 小屏幕
    md: '768px',     // 中等屏幕
    lg: '1024px',    // 大屏幕
    xl: '1280px',    // 超大屏幕
    '2xl': '1536px', // 2K屏幕
    '3xl': '1920px'  // 4K屏幕
  },
  
  // 容器尺寸
  containers: {
    xs: '100%',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px'
  },
  
  // Z-index 系统
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto'
  },
  
  // 渐变色系统
  gradients: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    secondary: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    success: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    info: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    // 品牌渐变
    brand: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
    sunset: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    ocean: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    forest: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    // 中性渐变
    neutral: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    dark: 'linear-gradient(135deg, #374151 0%, #111827 100%)'
  },
  
  // 模糊效果
  blur: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px'
  },
  
  // 透明度
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1'
  },
  
  // 变换效果
  transforms: {
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5'
    },
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    }
  }
};

export default designTokens;