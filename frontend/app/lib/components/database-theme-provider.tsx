/**
 * 数据库主题提供者组件
 * 从数据库加载激活的主题，如果没有激活主题则使用fallback主题
 */

'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';

interface DatabaseThemeProviderProps {
  children: ReactNode;
  fallbackTheme?: {
    id: string;
    source: { type: 'local'; path: string };
  };
  onThemeChange?: (theme: any) => void;
  onError?: (error: Error) => void;
}

export function DatabaseThemeProvider({
  children,
  fallbackTheme = {
    id: 'company-theme',
    source: { type: 'local', path: 'themes/company-theme' }
  },
  onThemeChange,
  onError
}: DatabaseThemeProviderProps) {
  const [activeTheme, setActiveTheme] = useState<{
    id: string;
    source: { type: 'local'; path: string };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadActiveTheme = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('🔍 正在通过API加载激活主题...');
        
        // 通过API获取激活主题
        const response = await fetch('http://localhost:3001/api/themes/active');
        
        if (!response.ok) {
          if (response.status === 404) {
            console.log('⚠️ API中没有激活主题，使用fallback主题:', fallbackTheme.id);
            setActiveTheme(fallbackTheme);
            onThemeChange?.(null);
            return;
          } else {
            throw new Error('获取主题失败');
          }
        }
        
        const dbActiveTheme = await response.json();
        
        if (dbActiveTheme) {
          console.log('✅ 找到API激活主题:', dbActiveTheme.name);
          
          // 将API主题转换为ThemeProvider需要的格式
          const themeConfig = {
            id: dbActiveTheme.name,
            source: { 
              type: 'local' as const, 
              path: `themes/${dbActiveTheme.name}` 
            }
          };
          
          setActiveTheme(themeConfig);
          // onThemeChange 期望 ModernTheme，这里先不调用
          // onThemeChange?.(dbActiveTheme);
        } else {
          console.log('⚠️ API中没有激活主题，使用fallback主题:', fallbackTheme.id);
          setActiveTheme(fallbackTheme);
          onThemeChange?.(null);
        }
      } catch (err) {
        const error = err as Error;
        console.error('❌ 通过API加载主题失败:', error);
        setError(error);
        onError?.(error);
        
        // 出错时使用fallback主题
        console.log('🔄 使用fallback主题:', fallbackTheme.id);
        setActiveTheme(fallbackTheme);
      } finally {
        setIsLoading(false);
      }
    };

    loadActiveTheme();
  }, []);

  // 如果还在加载中，显示加载状态
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">正在加载主题...</span>
      </div>
    );
  }

  // 如果有错误但没有activeTheme，显示错误状态
  if (error && !activeTheme) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 mb-2">主题加载失败</div>
          <div className="text-sm text-gray-600">{error.message}</div>
        </div>
      </div>
    );
  }

  // 使用确定的主题渲染ThemeProvider
  return (
    <ThemeProvider
      initialTheme={activeTheme!}
      onThemeChange={onThemeChange}
      onError={onError}
    >
      {children}
    </ThemeProvider>
  );
}

export default DatabaseThemeProvider;