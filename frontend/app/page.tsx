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
  const Gallery = useThemeComponent('block', 'Gallery')
  const Contact = useThemeComponent('block', 'Contact')
  const Footer = useThemeComponent('block', 'Footer')
  
  // 使用模块化组件组合构建页面
  return (
    <div className="min-h-screen">
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      <PerformanceOptimizationTips />
      
      {/* Header Section */}
      {Header && <Header />}
      
      {/* Hero Section */}
      {Hero && (
        <section id="home" style={{ scrollMarginTop: '80px' }}>
          <Hero />
        </section>
      )}
      
      {/* Services Section */}
      {Services && (
        <section id="services" style={{ scrollMarginTop: '80px' }}>
          <Services />
        </section>
      )}
      
      {/* About Section */}
      {About && (
        <section id="about" style={{ scrollMarginTop: '80px' }}>
          <About />
        </section>
      )}

      {/* Portfolio Section */}
      {Gallery && (
        <section id="portfolio" style={{ scrollMarginTop: '80px' }}>
          <Gallery />
        </section>
      )}
      
      {/* Contact Section */}
      {Contact && (
        <section id="contact" style={{ scrollMarginTop: '80px' }}>
          <Contact />
        </section>
      )}
      
      {/* Footer Section */}
      {Footer && <Footer />}
    </div>
  );
}