'use client'
import React from 'react';

interface DefaultLayoutProps {
  children: React.ReactNode;
  config?: any;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, config }) => {
  return (
    <div className="default-layout">
      <main className="layout-container">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;