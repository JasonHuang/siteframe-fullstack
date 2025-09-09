'use client';

import React, { useState } from 'react';
import { withAuth, useAuth } from '../contexts/AuthContext';
import { PermissionArea } from '../components/auth/PermissionGuard';
import UserProfile from '../components/auth/UserProfile';
import ThemeManager from '../components/admin/ThemeManager';
import Sidebar from '../components/admin/Sidebar';

type ViewMode = 'profile' | 'themes';

const AdminDashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<ViewMode>('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    if (isLoggingOut) {
      return;
    }
    
    try {
      setIsLoggingOut(true);
      await signOut();
      // 退出登录后会自动重定向到登录页面
    } catch (error) {
      // 退出登录失败
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          currentView={currentView}
          onViewChange={setCurrentView}
          user={user}
          onSignOut={handleSignOut}
          isLoggingOut={isLoggingOut}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative">
            <Sidebar
              currentView={currentView}
              onViewChange={(view) => {
                setCurrentView(view);
                setMobileMenuOpen(false);
              }}
              user={user}
              onSignOut={handleSignOut}
              isLoggingOut={isLoggingOut}
            />
          </div>
        </div>
      )}

      {/* 右侧主要内容区域 */}
      <main className="flex-1 overflow-auto bg-gray-50 transition-all duration-300">
        {/* Mobile Header */}
        <div className="md:hidden bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">管理系统</h1>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="h-full">
          {currentView === 'profile' && (
            <div className="p-6">
              <UserProfile />
            </div>
          )}
          
          {currentView === 'themes' && (
            <div className="p-6">
              <PermissionArea permission="themes:read">
                <ThemeManager
                  className="w-full"
                />
              </PermissionArea>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default withAuth(AdminDashboard);