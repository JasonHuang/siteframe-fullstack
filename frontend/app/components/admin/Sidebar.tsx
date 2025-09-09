'use client';

import React from 'react';
import { PermissionButton } from '../auth/PermissionGuard';
import type { Permission } from '../../lib/types/database';

type ViewMode = 'profile' | 'themes';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  user: any;
  onSignOut: () => void;
  isLoggingOut: boolean;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onViewChange,
  user,
  onSignOut,
  isLoggingOut,
  collapsed = false,
  onToggleCollapse,
  mobileMenuOpen = false,
  onMobileMenuToggle
}) => {
  const menuItems = [
    {
      id: 'profile',
      label: '个人资料',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      onClick: () => onViewChange('profile')
    },
    {
      id: 'themes',
      label: '主题管理',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      onClick: () => onViewChange('themes'),
      permission: 'theme:read' as Permission
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:block`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              {!collapsed && (
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  管理面板
                </h2>
              )}
              {onToggleCollapse && (
                <button
                  onClick={onToggleCollapse}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                 const isActive = currentView === item.id;
                 const buttonClass = `w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                   isActive
                     ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                     : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                 }`;
                 
                 return (
                   <li key={item.id}>
                     {item.permission ? (
                       <PermissionButton
                         permission={item.permission}
                         onClick={item.onClick}
                         className={buttonClass}
                       >
                         <span className="flex-shrink-0">{item.icon}</span>
                         {!collapsed && (
                           <span className="ml-3 text-sm font-medium">{item.label}</span>
                         )}
                       </PermissionButton>
                     ) : (
                       <button
                         onClick={item.onClick}
                         className={buttonClass}
                       >
                         <span className="flex-shrink-0">{item.icon}</span>
                         {!collapsed && (
                           <span className="ml-3 text-sm font-medium">{item.label}</span>
                         )}
                       </button>
                     )}
                   </li>
                 );
               })}
            </ul>
          </nav>

          {/* User Info & Sign Out */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            {!collapsed && (
              <div className="mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">登录用户</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.email || '未知用户'}
                </p>
              </div>
            )}
            <button
              onClick={onSignOut}
              disabled={isLoggingOut}
              className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {!collapsed && (
                <span className="ml-3">{isLoggingOut ? '退出中...' : '退出登录'}</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onMobileMenuToggle} />
          <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    管理面板
                  </h2>
                  <button
                    onClick={onMobileMenuToggle}
                    className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                     const isActive = currentView === item.id;
                     const buttonClass = `w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                       isActive
                         ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                         : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                     }`;
                     
                     return (
                       <li key={item.id}>
                         {item.permission ? (
                           <PermissionButton
                             permission={item.permission}
                             onClick={() => {
                               item.onClick();
                               onMobileMenuToggle?.();
                             }}
                             className={buttonClass}
                           >
                             <span className="flex-shrink-0">{item.icon}</span>
                             <span className="ml-3 text-sm font-medium">{item.label}</span>
                           </PermissionButton>
                         ) : (
                           <button
                             onClick={() => {
                               item.onClick();
                               onMobileMenuToggle?.();
                             }}
                             className={buttonClass}
                           >
                             <span className="flex-shrink-0">{item.icon}</span>
                             <span className="ml-3 text-sm font-medium">{item.label}</span>
                           </button>
                         )}
                       </li>
                     );
                   })}
                </ul>
              </nav>

              {/* User Info & Sign Out */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">登录用户</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.email || '未知用户'}
                  </p>
                </div>
                <button
                  onClick={onSignOut}
                  disabled={isLoggingOut}
                  className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="ml-3">{isLoggingOut ? '退出中...' : '退出登录'}</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;