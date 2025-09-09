/**
 * 现代化主题提供者组件
 * 为React应用提供主题上下文和状态管理
 */

'use client';

import React, { createContext, useContext, useEffect, useLayoutEffect, useState, useCallback, useRef, ReactNode } from 'react';
import { ModernThemeEngine, themeEngine } from '../services/modern-theme-engine';
import { ThemeInitializer } from './theme-initializer';
import { getActiveTheme, getAllThemes, activateTheme } from '../services/api-auth';
import {
  ModernTheme,
  ThemeConfig,
  ThemeContext,
  ThemeSource,
  ComponentConfig
} from '../types/modern-theme';

// ============================================================================
// 主题上下文定义
// ============================================================================

interface ThemeProviderContextValue {
  // 当前状态
  theme: ModernTheme | null;
  config: ThemeConfig | null;
  isLoading: boolean;
  error: Error | null;
  
  // 主题操作
  loadTheme: (themeId: string, source: ThemeSource) => Promise<void>;
  unloadTheme: () => Promise<void>;
  updateConfig: (config: Partial<ThemeConfig>) => void;
  resetConfig: () => void;
  
  // 组件获取
  getComponent: (type: string, name: string) => React.ComponentType<any> | null;
  
  // 钩子系统
  executeHook: (hookName: string, data?: any) => Promise<any>;
  
  // 引擎实例
  engine: ModernThemeEngine;
}

const ThemeProviderContext = createContext<ThemeProviderContextValue | null>(null);

// ============================================================================
// 主题提供者组件
// ============================================================================

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: {
    id: string;
    source: ThemeSource;
  };
  fallbackTheme?: string;
  onThemeChange?: (theme: ModernTheme | null) => void;
  onError?: (error: Error) => void;
}

export function ThemeProvider({
  children,
  initialTheme,
  fallbackTheme = 'default',
  onThemeChange,
  onError
}: ThemeProviderProps) {
  // 状态管理
  const [theme, setTheme] = useState<ModernTheme | null>(null);
  const [config, setConfig] = useState<ThemeConfig | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  // 初始化标记
  const initializedRef = useRef<boolean>(false);
  
  // 主题操作方法
  const loadTheme = useCallback(async (themeId: string, source: ThemeSource) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await themeEngine.loadTheme(themeId, source);
      
      const currentTheme = themeEngine.getCurrentTheme();
      const currentConfig = themeEngine.getConfig();
      
      setTheme(currentTheme);
      setConfig(currentConfig);
      
      onThemeChange?.(currentTheme);
    } catch (err) {
      const error = err as Error;
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const unloadTheme = useCallback(async () => {
    try {
      setIsLoading(true);
      await themeEngine.unloadTheme();
      
      setTheme(null);
      setConfig(null);
      
      onThemeChange?.(null);
    } catch (err) {
      const error = err as Error;
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const updateConfig = useCallback((newConfig: Partial<ThemeConfig>) => {
    themeEngine.updateConfig(newConfig);
    setConfig(themeEngine.getConfig());
  }, []);
  
  const resetConfig = useCallback(() => {
    themeEngine.resetConfig();
    setConfig(themeEngine.getConfig());
  }, []);
  
  const getComponent = useCallback((type: string, name: string) => {
    const component = themeEngine.getComponent(type, name);
    return component;
  }, []);
  
  const executeHook = useCallback(async (hookName: string, data?: any) => {
    return await themeEngine.executeHook(hookName, data);
  }, []);
  
  // 监听主题引擎事件
  useEffect(() => {
    const handleThemeLoaded = ({ theme }: { theme: ModernTheme }) => {
      setTheme(theme);
      setConfig(themeEngine.getConfig());
      setError(null);
    };
    
    const handleThemeUnloaded = () => {
      setTheme(null);
      setConfig(null);
    };
    
    const handleThemeError = ({ error }: { error: Error }) => {
      setError(error);
      onError?.(error);
    };
    
    const handleConfigChanged = ({ config }: { config: ThemeConfig }) => {
      setConfig(config);
    };
    
    themeEngine.on('theme:loaded', handleThemeLoaded);
    themeEngine.on('theme:unloaded', handleThemeUnloaded);
    themeEngine.on('theme:error', handleThemeError);
    themeEngine.on('config:changed', handleConfigChanged);
    
    return () => {
      themeEngine.off('theme:loaded', handleThemeLoaded);
      themeEngine.off('theme:unloaded', handleThemeUnloaded);
      themeEngine.off('theme:error', handleThemeError);
      themeEngine.off('config:changed', handleConfigChanged);
    };
  }, []);
  
  // 初始主题加载 - 使用useEffect确保只在客户端执行
  useEffect(() => {
    console.log('🔥 useEffect执行了!');
    console.log('🎯 useEffect: 检查是否需要加载初始主题...', {
      hasInitialTheme: !!initialTheme,
      hasTheme: !!theme,
      initialized: initializedRef.current
    });
    
    if (initialTheme && !theme && !initializedRef.current) {
      console.log('🚀 useEffect: 开始加载初始主题:', initialTheme);
      initializedRef.current = true;
      
      const loadInitialTheme = async () => {
        try {
          console.log('⏳ 设置加载状态...');
          setIsLoading(true);
          setError(null);
          
          console.log('📞 调用 themeEngine.loadTheme...', { id: initialTheme.id, source: initialTheme.source });
          await themeEngine.loadTheme(initialTheme.id, initialTheme.source);
          
          console.log('🔍 获取当前主题和配置...');
          const currentTheme = themeEngine.getCurrentTheme();
          const currentConfig = themeEngine.getConfig();
          
          console.log('📋 设置主题状态...', { 
            hasTheme: !!currentTheme, 
            themeName: currentTheme?.metadata?.name,
            hasConfig: !!currentConfig 
          });
          setTheme(currentTheme);
          setConfig(currentConfig);
          
          onThemeChange?.(currentTheme);
          console.log('✅ 初始主题加载成功:', currentTheme?.metadata?.name);
        } catch (err) {
          const error = err as Error;
          console.error('❌ 初始主题加载失败:', error);
          setError(error);
          onError?.(error);
        } finally {
          console.log('🏁 加载完成，设置loading为false');
          setIsLoading(false);
        }
      };
      
      loadInitialTheme();
    }
  }, [initialTheme?.id]);
  
  // 上下文值
  const contextValue: ThemeProviderContextValue = {
    theme,
    config,
    isLoading,
    error,
    loadTheme,
    unloadTheme,
    updateConfig,
    resetConfig,
    getComponent,
    executeHook,
    engine: themeEngine
  };
  
  return (
    <ThemeProviderContext.Provider value={contextValue}>
      <ThemeInitializer />
      {children}
    </ThemeProviderContext.Provider>
  );
}

// ============================================================================
// 主题钩子
// ============================================================================

/**
 * 使用主题上下文的钩子
 */
export function useTheme(): ThemeProviderContextValue {
  const context = useContext(ThemeProviderContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

/**
 * 获取主题组件的钩子
 */
export function useThemeComponent(type: string, name: string): React.ComponentType<any> | null {
  const { getComponent } = useTheme();
  return getComponent(type, name);
}

/**
 * 获取主题配置的钩子
 */
export function useThemeConfig(): [ThemeConfig | null, (config: Partial<ThemeConfig>) => void, () => void] {
  const { config, updateConfig, resetConfig } = useTheme();
  return [config, updateConfig, resetConfig];
}

/**
 * 执行主题钩子的钩子
 */
export function useThemeHook(hookName: string) {
  const { executeHook } = useTheme();
  
  return useCallback(async (data?: any) => {
    return await executeHook(hookName, data);
  }, [executeHook, hookName]);
}

/**
 * 获取主题状态的钩子
 */
export function useThemeState() {
  const { theme, isLoading, error } = useTheme();
  
  return {
    theme,
    isLoading,
    error,
    isThemeLoaded: !!theme,
    hasError: !!error
  };
}

// ============================================================================
// 主题组件包装器
// ============================================================================

/**
 * 主题组件包装器
 * 自动从主题中获取组件并渲染
 */
interface ThemeComponentProps {
  type: 'layout' | 'block' | 'widget';
  name: string;
  fallback?: React.ComponentType<any>;
  props?: Record<string, any>;
  children?: ReactNode;
}

export function ThemeComponent({
  type,
  name,
  fallback: Fallback,
  props = {},
  children
}: ThemeComponentProps) {
  const Component = useThemeComponent(type, name);
  
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }
  
  if (Fallback) {
    return <Fallback {...props}>{children}</Fallback>;
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Theme component not found: ${type}:${name}`);
  }
  
  return (
    <div className="theme-component-missing" data-type={type} data-name={name}>
      {children || `Missing ${type} component: ${name}`}
    </div>
  );
}

// ============================================================================
// 主题样式钩子
// ============================================================================

/**
 * 获取主题样式变量的钩子
 */
export function useThemeStyles() {
  const { theme } = useTheme();
  
  const getStyleValue = useCallback((variable: string): string => {
    if (typeof window === 'undefined') return '';
    
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue(`--${variable}`).trim();
  }, []);
  
  const setStyleValue = useCallback((variable: string, value: string): void => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    root.style.setProperty(`--${variable}`, value);
  }, []);
  
  return {
    theme,
    getStyleValue,
    setStyleValue,
    tokens: theme?.styles?.tokens
  };
}

/**
 * 响应式主题钩子
 */
export function useResponsiveTheme() {
  const { theme, config } = useTheme();
  const [breakpoint, setBreakpoint] = useState<string>('desktop');
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setBreakpoint('mobile');
      } else if (width < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    
    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);
  
  return {
    theme,
    config,
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop'
  };
}

// 导出类型
export type {
  ThemeProviderContextValue,
  ThemeProviderProps,
  ThemeComponentProps
};