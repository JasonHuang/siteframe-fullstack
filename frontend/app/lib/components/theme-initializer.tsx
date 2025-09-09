'use client'

import { useEffect } from 'react'
import { useTheme } from './theme-provider'

/**
 * 主题初始化组件
 * 负责在应用启动时加载激活的主题
 */
export function ThemeInitializer() {
  const { theme, isLoading, loadTheme } = useTheme()

  // 简化日志输出

  // ThemeInitializer现在只负责监控主题状态，不再主动加载主题
  // 主题加载由ThemeProvider的initialTheme属性处理
  useEffect(() => {
    // console.log('ThemeInitializer监控主题状态:', { 
    //   themeName: theme?.metadata?.name, 
    //   isLoading,
    //   hasTheme: !!theme 
    // });
  }, [theme, isLoading]);

  return null // 这是一个逻辑组件，不渲染任何内容
}