'use client'

import { useThemeComponent, useTheme } from './lib/components/theme-provider'
import PerformanceMonitor, { PerformanceOptimizationTips } from './components/PerformanceMonitor';

export default function Home() {
  // 获取主题状态
  const { theme, isLoading, error } = useTheme()
  
  // 获取主题组件
  const Header = useThemeComponent('block', 'Header')
  const Hero = useThemeComponent('block', 'HeroSection')
  const Services = useThemeComponent('block', 'Services')
  const About = useThemeComponent('block', 'About')
  const Contact = useThemeComponent('block', 'Contact')
  const Footer = useThemeComponent('block', 'Footer')
  
  // 调试信息：显示当前主题和可用组件
  // console.log('当前主题:', theme?.metadata?.name)
  // console.log('可用组件:', {
  //   Header: !!Header,
  //   Hero: !!Hero,
  //   Services: !!Services,
  //   About: !!About,
  //   Contact: !!Contact,
  //   Footer: !!Footer
  // });
  
  // 使用模块化组件组合构建页面
  return (
    <div className="min-h-screen">
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      <PerformanceOptimizationTips />
      
      {/* Header Section */}
      {Header && <Header />}
      
      {/* Hero Section */}
      {Hero && <Hero />}
      
      {/* Services Section */}
      {Services && <Services />}
      
      {/* About Section */}
      {About && <About />}
      
      {/* Contact Section */}
      {Contact && <Contact />}
      
      {/* Footer Section */}
      {Footer && <Footer />}
    </div>
  );
}