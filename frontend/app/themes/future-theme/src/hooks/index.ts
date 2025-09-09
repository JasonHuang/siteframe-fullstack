/**
 * Theme Hooks Export - 主题钩子导出
 * 统一导出所有主题钩子函数
 */

export * from './useTheme';

// 钩子处理器
export const hookHandlers = {
  'theme:init': () => {
    // 主题初始化
  },
  'theme:loaded': () => {
    // 主题加载完成
  },
  'page:before-render': () => {
    // 页面渲染前
  },
  'page:after-render': () => {
    // 页面渲染后
  }
};

// 钩子映射
export const hooks = {
  useThemeMode: () => import('./useTheme').then(m => m.useThemeMode),
  useThemeConfig: () => import('./useTheme').then(m => m.useThemeConfig),
  useBreakpoint: () => import('./useTheme').then(m => m.useBreakpoint)
};