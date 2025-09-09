/**
 * Company Theme - Professional Business Theme
 * Professional theme suitable for corporate websites and business purposes
 */


import { ModernTheme } from '../../lib/types/modern-theme';

// Import components
import DefaultLayout from './src/components/layouts/DefaultLayout';
import PostLayout from './src/components/layouts/PostLayout';
import Header from './src/components/blocks/Header';
import Footer from './src/components/blocks/Footer';
import PostCard from './src/components/blocks/PostCard';
import Navigation from './src/components/blocks/Navigation';
import Hero from './src/components/blocks/Hero';
import Services from './src/components/blocks/Services';
import About from './src/components/blocks/About';
import Contact from './src/components/blocks/Contact';
import Gallery from './src/components/blocks/Gallery';

// Import templates
// CompanyHomepage removed - using modular blocks instead

// Import styles and configuration
import designTokens from './src/styles/tokens';
import componentStyles from './src/styles/components';
import defaultConfig from './src/config/default';
import performanceConfig from './src/config/performance';

// Import component metadata
import DefaultLayoutMeta from './src/components/layouts/DefaultLayout/meta';
import PostLayoutMeta from './src/components/layouts/PostLayout/meta';
import HeaderMeta from './src/components/blocks/Header/meta';
import FooterMeta from './src/components/blocks/Footer/meta';
import PostCardMeta from './src/components/blocks/PostCard/meta';
import NavigationMeta from './src/components/blocks/Navigation/meta';
import HeroMeta from './src/components/blocks/Hero/meta';
import ServicesMeta from './src/components/blocks/Services/meta';
import AboutMeta from './src/components/blocks/About/meta';
import ContactMeta from './src/components/blocks/Contact/meta';
import GalleryMeta from './src/components/blocks/Gallery/meta';

// Import template metadata
// CompanyHomepage meta is defined inline in the component

const theme: ModernTheme = {
  metadata: {
    name: 'company-theme',
    version: '1.0.0',
    author: 'Theme Generator',
    description: 'Professional company theme, suitable for business websites',
    homepage: 'https://github.com/themes/company-theme',
    repository: 'https://github.com/themes/company-theme.git',
    license: 'MIT',
    tags: ['responsive', 'dark-mode', 'typography', 'business', 'corporate'],
    screenshot: './public/images/screenshot.png',
    compatibility: {
      minVersion: '1.0.0'
    }
  },
  
  components: {
    layouts: {
      DefaultLayout,
      PostLayout
    },
    blocks: {
      Header,
      Footer,
      PostCard,
      Navigation,
      Hero,
      HeroSection: Hero,  // 为兼容性添加别名
      Services,
      About,
      Contact,
      Gallery
    },
    widgets: {}
  },
  
  componentMeta: {
    layouts: {
      DefaultLayout: DefaultLayoutMeta,
      PostLayout: PostLayoutMeta
    },
    blocks: {
      Header: HeaderMeta,
      Footer: FooterMeta,
      PostCard: PostCardMeta,
      Navigation: NavigationMeta,
      Hero: HeroMeta,
      HeroSection: HeroMeta,  // 为兼容性添加别名
      Services: ServicesMeta,
      About: AboutMeta,
      Contact: ContactMeta,
      Gallery: GalleryMeta
    },
    widgets: {}
  },
  
  styles: {
    tokens: {
      colors: {
        primary: { ...designTokens.colors.primary, 950: '#0c2d48' },
        secondary: { ...designTokens.colors.secondary, 950: '#020617' },
        accent: { ...designTokens.colors.primary, 950: '#0c2d48' },
        neutral: { ...designTokens.colors.neutral, 950: '#0a0a0a' },
        semantic: {
          success: { ...designTokens.colors.success, 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 600: '#16a34a', 700: '#15803d', 800: '#166534', 950: '#052e16' },
          warning: { ...designTokens.colors.warning, 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 600: '#d97706', 700: '#b45309', 800: '#92400e', 950: '#451a03' },
          error: { ...designTokens.colors.error, 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 950: '#450a0a' },
          info: { ...designTokens.colors.primary, 950: '#0c2d48' }
        }
      },
      typography: {
        fontFamilies: {
          sans: designTokens.typography.fontFamily.sans.join(', '),
          serif: designTokens.typography.fontFamily.serif.join(', '),
          mono: designTokens.typography.fontFamily.mono.join(', ')
        },
        fontSizes: designTokens.typography.fontSize,
        fontWeights: {
          thin: 100,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900
        },
        lineHeights: {
          none: 1,
          tight: 1.25,
          snug: 1.375,
          normal: 1.5,
          relaxed: 1.625,
          loose: 2
        }
      },
      spacing: designTokens.spacing,
      borderRadius: designTokens.borders.radius,
      shadows: designTokens.shadows,
      breakpoints: designTokens.breakpoints,
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        auto: 1
      }
    },
    themes: {
      light: {
        'background': 'var(--color-neutral-50)',
        'foreground': 'var(--color-neutral-900)',
        'primary': 'var(--color-primary-500)',
        'secondary': 'var(--color-secondary-500)',
        'muted': 'var(--color-neutral-100)',
        'border': 'var(--color-neutral-200)',
        'card': 'var(--color-white)',
        'card-foreground': 'var(--color-neutral-900)'
      },
      dark: {
        'background': 'var(--color-neutral-900)',
        'foreground': 'var(--color-neutral-50)',
        'primary': 'var(--color-primary-400)',
        'secondary': 'var(--color-secondary-400)',
        'muted': 'var(--color-neutral-800)',
        'border': 'var(--color-neutral-700)',
        'card': 'var(--color-neutral-800)',
        'card-foreground': 'var(--color-neutral-50)'
      }
    },
    globalCSS: `
      :root {
        /* Color Variables */
        --color-primary-50: #eff6ff;
        --color-primary-100: #dbeafe;
        --color-primary-200: #bfdbfe;
        --color-primary-300: #93c5fd;
        --color-primary-400: #60a5fa;
        --color-primary-500: #3b82f6;
        --color-primary-600: #2563eb;
        --color-primary-700: #1d4ed8;
        --color-primary-800: #1e40af;
        --color-primary-900: #1e3a8a;
        --color-primary-950: #0c2d48;
        
        --color-secondary-50: #faf5ff;
        --color-secondary-100: #f3e8ff;
        --color-secondary-200: #e9d5ff;
        --color-secondary-300: #d8b4fe;
        --color-secondary-400: #c084fc;
        --color-secondary-500: #a855f7;
        --color-secondary-600: #9333ea;
        --color-secondary-700: #7c3aed;
        --color-secondary-800: #6b21a8;
        --color-secondary-900: #581c87;
        --color-secondary-950: #020617;
        
        --color-neutral-50: #fafafa;
        --color-neutral-100: #f5f5f5;
        --color-neutral-200: #e5e5e5;
        --color-neutral-300: #d4d4d4;
        --color-neutral-400: #a3a3a3;
        --color-neutral-500: #737373;
        --color-neutral-600: #525252;
        --color-neutral-700: #404040;
        --color-neutral-800: #262626;
        --color-neutral-900: #171717;
        --color-neutral-950: #0a0a0a;
        
        --color-white: #ffffff;
        --color-black: #000000;
        
        /* Font Variables */
        --font-sans: 'Inter Variable', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
        --font-serif: 'Crimson Pro Variable', 'Crimson Pro', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif';
        --font-mono: 'JetBrains Mono Variable', 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace';
        
        /* Font Size Variables */
        --font-size-xs: 0.75rem;
        --font-size-sm: 0.875rem;
        --font-size-base: 1rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
        --font-size-2xl: 1.5rem;
        --font-size-3xl: 1.875rem;
        --font-size-4xl: 2.25rem;
        --font-size-5xl: 3rem;
        --font-size-6xl: 3.75rem;
        
        /* Font Weight Variables */
        --font-weight-thin: 100;
        --font-weight-light: 300;
        --font-weight-normal: 400;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --font-weight-extrabold: 800;
        --font-weight-black: 900;
        
        /* Line Height Variables */
        --line-height-none: 1;
        --line-height-tight: 1.25;
        --line-height-snug: 1.375;
        --line-height-normal: 1.5;
        --line-height-relaxed: 1.625;
        --line-height-loose: 2;
        
        /* Border Radius Variables */
        --border-radius-none: 0;
        --border-radius-sm: 0.125rem;
        --border-radius-base: 0.25rem;
        --border-radius-md: 0.375rem;
        --border-radius-lg: 0.5rem;
        --border-radius-xl: 0.75rem;
        --border-radius-2xl: 1rem;
        --border-radius-3xl: 1.5rem;
        --border-radius-full: 9999px;
        
        /* Shadow Variables */
        --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        --shadow-2xl: 0 50px 100px -20px rgba(0, 0, 0, 0.25);
        
        /* Theme Variables */
        --background: var(--color-neutral-50);
        --foreground: var(--color-neutral-900);
        --primary: var(--color-primary-500);
        --secondary: var(--color-secondary-500);
        --muted: var(--color-neutral-100);
        --border: var(--color-neutral-200);
        --card: var(--color-white);
        --card-foreground: var(--color-neutral-900);
      }
      
      * {
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        font-family: var(--font-sans);
        background: var(--background);
        color: var(--foreground);
        line-height: var(--line-height-normal);
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1rem 0;
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-tight);
      }
      
      p {
        margin: 0 0 1rem 0;
      }
      
      a {
        color: var(--primary);
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .prose {
        max-width: 65ch;
        line-height: var(--line-height-relaxed);
      }
      
      .prose h1 { font-size: var(--font-size-3xl); }
      .prose h2 { font-size: var(--font-size-2xl); }
      .prose h3 { font-size: var(--font-size-xl); }
      .prose h4 { font-size: var(--font-size-lg); }
      
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border);
        border-radius: var(--border-radius-base);
        background: var(--card);
        color: var(--card-foreground);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .btn:hover {
        background: var(--muted);
        text-decoration: none;
      }
      
      .btn-primary {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
      }
      
      .btn-primary:hover {
        opacity: 0.9;
      }
      
      .btn-lg {
        padding: 1rem 2rem;
        font-size: var(--font-size-lg);
      }
      
      .card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--border-radius-lg);
        padding: 1.5rem;
        box-shadow: var(--shadow-sm);
      }
      
      .card:hover {
         box-shadow: var(--shadow-md);
       }

       /* Hero Section Styles */
       .hero-section {
         background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-secondary-600) 100%);
         color: white;
         padding: 6rem 0;
         text-align: center;
         min-height: 500px;
         display: flex;
         align-items: center;
       }
       
       .hero-content {
         max-width: 800px;
         margin: 0 auto;
       }
       
       .hero-subtitle {
         font-size: var(--font-size-lg);
         margin-bottom: 1rem;
         opacity: 0.9;
         font-weight: var(--font-weight-medium);
       }
       
       .hero-title {
         font-size: var(--font-size-5xl);
         font-weight: var(--font-weight-bold);
         margin-bottom: 1.5rem;
         line-height: var(--line-height-tight);
       }
       
       .hero-description {
         font-size: var(--font-size-xl);
         margin-bottom: 2.5rem;
         opacity: 0.9;
         line-height: var(--line-height-relaxed);
       }
       
       .hero-actions {
         margin-top: 2rem;
         display: flex;
         gap: 1rem;
         justify-content: center;
         flex-wrap: wrap;
       }

       /* Services Section Styles */
       .services-section {
         padding: 5rem 0;
         background: var(--color-neutral-50);
       }
       
       .services-header {
         text-align: center;
         margin-bottom: 4rem;
       }
       
       .services-title {
         font-size: var(--font-size-4xl);
         font-weight: var(--font-weight-bold);
         margin-bottom: 1rem;
         color: var(--foreground);
       }
       
       .services-subtitle {
         font-size: var(--font-size-lg);
         color: var(--color-neutral-600);
         max-width: 600px;
         margin: 0 auto;
         line-height: var(--line-height-relaxed);
       }
       
       .services-grid {
         display: grid;
         gap: 2rem;
       }
       
       .services-grid-2 {
         grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
       }
       
       .services-grid-3 {
         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
       }
       
       .services-grid-4 {
         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
       }
       
       .service-card {
         background: var(--card);
         padding: 2rem;
         border-radius: var(--border-radius-lg);
         box-shadow: var(--shadow-sm);
         text-align: center;
         transition: transform 0.3s ease, box-shadow 0.3s ease;
         border: 1px solid var(--border);
       }
       
       .service-card:hover {
         transform: translateY(-5px);
         box-shadow: var(--shadow-lg);
       }
       
       .service-icon {
         font-size: var(--font-size-5xl);
         margin-bottom: 1rem;
         color: var(--primary);
       }
       
       .service-title {
         font-size: var(--font-size-xl);
         font-weight: var(--font-weight-semibold);
         margin-bottom: 1rem;
         color: var(--foreground);
       }
       
       .service-description {
         color: var(--color-neutral-600);
         line-height: var(--line-height-relaxed);
         margin-bottom: 1.5rem;
       }
       
       .service-link {
         color: var(--primary);
         text-decoration: none;
         font-weight: var(--font-weight-medium);
         transition: color 0.3s ease;
       }
       
       .service-link:hover {
         color: var(--color-primary-700);
         text-decoration: underline;
       }

       /* About Section Styles */
        .about-section {
          padding: 3rem 0;
          background: var(--color-neutral-50);
        }
        
        .about-intro {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }
        
        .about-content {
          background: white;
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-neutral-200);
        }
        
        .about-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        
        .about-description {
          font-size: var(--font-size-base);
          color: var(--color-neutral-600);
          line-height: var(--line-height-relaxed);
          margin-bottom: 1.5rem;
        }
        
        .about-details {
          display: grid;
          gap: 1rem;
        }
        
        .detail-item {
          padding: 1.25rem;
          background: white;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--color-neutral-200);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.3s ease;
        }
        
        .detail-item:hover {
          box-shadow: var(--shadow-md);
        }
        
        .detail-item h3 {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          margin-bottom: 0.5rem;
          color: var(--foreground);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        

        
        .detail-item p {
          color: var(--color-neutral-600);
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-sm);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }
        
        .value-item {
          background: white;
          color: var(--foreground);
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          font-weight: var(--font-weight-semibold);
          font-size: var(--font-size-sm);
          transition: box-shadow 0.3s ease;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-neutral-200);
        }
        
        .value-item:hover {
          box-shadow: var(--shadow-md);
        }
        
        .about-image {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-neutral-200);
        }
        
        .image-placeholder {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-neutral-100);
          color: var(--color-neutral-500);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
        }
        
        .team-section {
          margin-top: 5rem;
          position: relative;
          z-index: 1;
        }
        
        .team-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          text-align: center;
          margin-bottom: 3rem;
          color: var(--foreground);
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        
        .team-member {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-neutral-200);
          transition: box-shadow 0.3s ease;
        }
        
        .team-member:hover {
          box-shadow: var(--shadow-lg);
        }
        
        .member-avatar {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          position: relative;
        }
        
        .avatar-placeholder {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--color-primary-600));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .avatar-placeholder::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          transition: all 0.5s ease;
          opacity: 0;
        }
        
        .team-member:hover .avatar-placeholder {
          transform: scale(1.1);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
        }
        
        .team-member:hover .avatar-placeholder::before {
          opacity: 1;
          top: -10%;
          left: -10%;
        }
        
        .member-name {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }
        
        .member-position {
          background: linear-gradient(135deg, var(--primary), var(--color-primary-600));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: var(--font-weight-semibold);
          margin-bottom: 1.5rem;
          font-size: var(--font-size-lg);
        }
        
        .member-bio {
          color: var(--color-neutral-600);
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-base);
          padding: 0 0.75rem;
        }

       /* Contact Section Styles */
        .contact-section {
          padding: 3rem 0;
          background: var(--color-neutral-50);
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }
        
        .contact-title {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }
        
        .contact-subtitle {
          font-size: var(--font-size-base);
          color: var(--color-neutral-600);
          max-width: 500px;
          margin: 0 auto;
          line-height: var(--line-height-relaxed);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .contact-info {
          background: white;
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-neutral-200);
          display: flex;
          flex-direction: column;
        }
        
        .contact-info h3 {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          margin-bottom: 1.25rem;
          color: var(--foreground);
          position: relative;
        }
        
        .contact-info h3::after {
          content: '';
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          width: 4rem;
          height: 0.25rem;
          background: linear-gradient(90deg, var(--primary), var(--color-secondary-500));
          border-radius: 0.125rem;
        }
        
        .info-items {
          display: grid;
          gap: 0.75rem;
        }
        
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: var(--border-radius-lg);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .info-item:hover {
          background: linear-gradient(135deg, var(--color-neutral-50) 0%, var(--color-neutral-100) 100%);
          border-color: rgba(59, 130, 246, 0.2);
          transform: translateX(5px);
        }
        
        .info-icon {
          font-size: var(--font-size-lg);
          background: linear-gradient(135deg, var(--primary), var(--color-secondary-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          width: 1.5rem;
          text-align: center;
          flex-shrink: 0;
        }
        
        .info-details strong {
          display: block;
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-bold);
          margin-bottom: 0.25rem;
          color: var(--foreground);
        }
        
        .info-details p {
          color: var(--color-neutral-600);
          margin: 0;
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-sm);
        }
        
        .contact-form {
          background: white;
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-neutral-200);
          min-height: 500px;
          display: flex;
          flex-direction: column;
        }
        
        .contact-form h3 {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          margin-bottom: 1.25rem;
          color: var(--foreground);
          position: relative;
        }
        
        .contact-form h3::after {
          content: '';
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          width: 4rem;
          height: 0.25rem;
          background: linear-gradient(90deg, var(--primary), var(--color-secondary-500));
          border-radius: 0.125rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .form-row.full-width {
          grid-template-columns: 1fr;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: var(--font-weight-semibold);
          color: var(--foreground);
          font-size: var(--font-size-sm);
        }
        
        .form-input,
        .form-textarea,
        .form-select,
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        select,
        textarea {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid var(--color-neutral-300);
          border-radius: var(--border-radius-base);
          font-size: var(--font-size-sm);
          line-height: var(--line-height-normal);
          color: var(--foreground);
          background: white;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          font-family: inherit;
        }
        
        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus,
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-textarea {
          min-height: 100px;
          resize: vertical;
          line-height: var(--line-height-relaxed);
        }
        
        .form-submit {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-semibold);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .form-submit:hover:not(:disabled) {
          background: var(--color-primary-700);
        }
        
        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .submit-status {
          margin-top: 1rem;
          padding: 0.75rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          font-weight: var(--font-weight-semibold);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: var(--font-size-sm);
        }
        
        .submit-status.success {
          background: linear-gradient(135deg, var(--color-green-50) 0%, var(--color-green-100) 100%);
          color: var(--color-green-700);
          border: 1px solid var(--color-green-300);
        }
        
        .submit-status.error {
           background: linear-gradient(135deg, var(--color-red-50) 0%, var(--color-red-100) 100%);
           color: var(--color-red-700);
           border: 1px solid var(--color-red-300);
         }
 
        /* Footer Styles */
        .footer {
          background: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: 3rem 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-section {
          display: flex;
          flex-direction: column;
        }
        
        .company-info {
          max-width: 350px;
        }
        
        .company-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .logo-icon {
          font-size: var(--font-size-2xl);
        }
        
        .company-logo h3 {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-bold);
          color: white;
          margin: 0;
        }
        
        .company-description {
          color: var(--color-neutral-300);
          line-height: var(--line-height-relaxed);
          margin-bottom: 1.5rem;
        }
        
        .contact-info {
          display: grid;
          gap: 0.125rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--color-neutral-300);
          font-size: var(--font-size-sm);
          line-height: var(--line-height-normal);
        }
        
        .contact-icon {
          font-size: var(--font-size-base);
          width: 1.25rem;
          text-align: center;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }
        
        .contact-item span:not(.contact-icon) {
          word-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
          flex: 1;
        }
        
        .section-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          color: white;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: var(--color-neutral-300);
          text-decoration: none;
          font-size: var(--font-size-sm);
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .social-links {
          display: grid;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-neutral-300);
          text-decoration: none;
          font-size: var(--font-size-sm);
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: white;
        }
        
        .social-icon {
          font-size: var(--font-size-base);
          width: 1.25rem;
          text-align: center;
        }
        
        .qr-code {
          margin-top: 1rem;
        }
        
        .qr-placeholder {
          background: var(--color-neutral-800);
          border: 1px solid var(--color-neutral-700);
          border-radius: var(--border-radius-base);
          padding: 1rem;
          text-align: center;
          width: 120px;
        }
        
        .qr-placeholder span {
          font-size: var(--font-size-2xl);
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .qr-placeholder p {
          color: var(--color-neutral-400);
          font-size: var(--font-size-xs);
          margin: 0;
        }
        
        .footer-bottom {
          border-top: 1px solid var(--color-neutral-700);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .copyright {
          color: var(--color-neutral-400);
          font-size: var(--font-size-sm);
        }
        
        .copyright p {
          margin: 0;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .bottom-link {
          color: var(--color-neutral-400);
          text-decoration: none;
          font-size: var(--font-size-sm);
          transition: color 0.3s ease;
        }
        
        .bottom-link:hover {
          color: white;
        }
 
        /* Header Styles */
       .header {
         background: var(--card);
         border-bottom: 1px solid var(--border);
         position: sticky;
         top: 0;
         z-index: 50;
       }

       .header-content {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 1rem 0;
       }

       .logo {
         display: flex;
         align-items: center;
         font-weight: var(--font-weight-bold);
         font-size: var(--font-size-lg);
         color: var(--foreground);
       }

       .logo-icon {
         margin-right: 0.5rem;
         font-size: var(--font-size-xl);
       }

       .desktop-nav {
         display: none;
       }

       .nav-list {
         display: flex;
         list-style: none;
         margin: 0;
         padding: 0;
         gap: 2rem;
       }

       .nav-link {
         color: var(--foreground);
         font-weight: var(--font-weight-medium);
         transition: color 0.2s ease;
       }

       .nav-link:hover,
       .nav-link.active {
         color: var(--primary);
       }

       .header-cta {
         display: none;
       }

       .cta-button {
         background: var(--primary);
         color: white;
         padding: 0.5rem 1rem;
         border-radius: var(--border-radius-base);
         font-weight: var(--font-weight-medium);
         transition: opacity 0.2s ease;
       }

       .cta-button:hover {
         opacity: 0.9;
         text-decoration: none;
       }

       .mobile-menu-button {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 2.5rem;
         height: 2.5rem;
         background: none;
         border: none;
         cursor: pointer;
       }

       .hamburger {
         display: flex;
         flex-direction: column;
         width: 1.5rem;
         height: 1.125rem;
         justify-content: space-between;
       }

       .hamburger span {
         display: block;
         height: 2px;
         width: 100%;
         background: var(--foreground);
         transition: all 0.3s ease;
       }

       .hamburger.open span:nth-child(1) {
         transform: rotate(45deg) translate(5px, 5px);
       }

       .hamburger.open span:nth-child(2) {
         opacity: 0;
       }

       .hamburger.open span:nth-child(3) {
         transform: rotate(-45deg) translate(7px, -6px);
       }

       .mobile-nav {
         display: none;
         position: absolute;
         top: 100%;
         left: 0;
         right: 0;
         background: var(--card);
         border-bottom: 1px solid var(--border);
         box-shadow: var(--shadow-lg);
       }

       .mobile-nav.open {
         display: block;
       }

       .mobile-nav-list {
         list-style: none;
         margin: 0;
         padding: 1rem 0;
       }

       .mobile-nav-item {
         border-bottom: 1px solid var(--border);
       }

       .mobile-nav-item:last-child {
         border-bottom: none;
       }

       .mobile-nav-link,
       .mobile-cta-button {
         display: block;
         padding: 1rem;
         color: var(--foreground);
         font-weight: var(--font-weight-medium);
         transition: background-color 0.2s ease;
       }

       .mobile-nav-link:hover,
       .mobile-nav-link.active {
         background: var(--muted);
         color: var(--primary);
         text-decoration: none;
       }

       .mobile-cta-button {
         background: var(--primary);
         color: white;
         margin: 0 1rem;
         border-radius: var(--border-radius-base);
         text-align: center;
       }

       .mobile-cta-button:hover {
         opacity: 0.9;
         text-decoration: none;
       }

       /* Desktop navigation (>=768px) */
       @media (min-width: 768px) {
         .desktop-nav { display: block; }
         .header-cta { display: block; }
         .mobile-menu-button { display: none; }
         .mobile-nav,
         .mobile-nav.open { display: none !important; }
       }

       /* Gallery Styles */
       .gallery-section {
         padding: 4rem 0;
       }

       .gallery-header {
         text-align: center;
         margin-bottom: 2rem;
       }

       .gallery-title {
         font-size: var(--font-size-4xl);
         font-weight: var(--font-weight-bold);
         color: var(--foreground);
         margin: 0 0 0.5rem 0;
       }

       .gallery-subtitle {
         color: var(--color-neutral-500);
         font-size: var(--font-size-base);
       }

       .gallery-grid {
         display: grid;
         gap: 1rem;
       }

       .gallery-grid-2 {
         grid-template-columns: repeat(2, minmax(0, 1fr));
       }

       .gallery-grid-3 {
         grid-template-columns: repeat(3, minmax(0, 1fr));
       }

       .gallery-grid-4 {
         grid-template-columns: repeat(4, minmax(0, 1fr));
       }

       .gallery-item {
         cursor: pointer;
       }

       .gallery-image-wrapper {
         position: relative;
         border-radius: var(--border-radius-lg);
         overflow: hidden;
         box-shadow: var(--shadow-base);
         background: var(--card);
       }

       .gallery-image {
         width: 100%;
         height: auto;
         display: block;
       }

       .gallery-overlay {
         position: absolute;
         inset: 0;
         background: rgba(0, 0, 0, 0.45);
         opacity: 0;
         transition: opacity 0.25s ease;
         display: flex;
         align-items: flex-end;
       }

       .gallery-item:hover .gallery-overlay {
         opacity: 1;
       }

       .gallery-overlay-content {
         color: white;
         padding: 1rem;
         width: 100%;
         background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
       }

       .gallery-item-title {
         margin: 0 0 0.25rem 0;
         font-size: var(--font-size-lg);
         font-weight: var(--font-weight-semibold);
       }

       .gallery-item-description {
         margin: 0;
         font-size: var(--font-size-sm);
         color: rgba(255,255,255,0.9);
       }

       /* Gallery Modal */
       .gallery-modal {
         position: fixed;
         inset: 0;
         background: rgba(0, 0, 0, 0.7);
         display: flex;
         align-items: center;
         justify-content: center;
         z-index: 100;
         padding: 1rem;
       }

       .gallery-modal-content {
         background: var(--card);
         color: var(--foreground);
         border-radius: var(--border-radius-xl);
         max-width: 900px;
         width: 100%;
         box-shadow: var(--shadow-xl);
         position: relative;
         overflow: hidden;
       }

       .gallery-modal-close {
         position: absolute;
         top: 0.5rem;
         right: 0.75rem;
         background: transparent;
         border: none;
         color: white;
         font-size: 2rem;
         line-height: 1;
         cursor: pointer;
         z-index: 101;
       }

       .gallery-modal-image {
         background: black;
       }

       .modal-image {
         width: 100%;
         height: auto;
         display: block;
       }

       .gallery-modal-info {
         padding: 1rem 1.25rem 1.5rem;
       }

       .modal-title {
         margin: 0 0 0.25rem 0;
         font-size: var(--font-size-xl);
         font-weight: var(--font-weight-semibold);
       }

       .modal-description {
         margin: 0;
         color: var(--color-neutral-600);
         font-size: var(--font-size-sm);
       }

       @media (max-width: 768px) {
         .gallery-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
         .gallery-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
         .gallery-grid-2 { grid-template-columns: 1fr; }
       }

       @media (max-width: 480px) {
         .gallery-section { padding: 2rem 0; }
         .gallery-title { font-size: var(--font-size-3xl); }
       }
     `
  },
  hooks: {
    'theme:init': async (context: any) => {
      // Theme initialized
      
      // Set default theme mode
      if (context.config?.styles?.theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        context.setThemeMode?.(prefersDark ? 'dark' : 'light');
      }
    },
    
    'theme:beforeRender': async () => {
      // Logic to execute before rendering
      // Before render
    },
    
    'theme:afterRender': async () => {
      // Logic to execute after rendering
      // After render
    },
    
    'config:change': async (context: any, changes: any) => {
      // Handle configuration changes
      // Config changed
      
      if (changes.styles?.theme) {
        context.setThemeMode?.(changes.styles.theme);
      }
    }
  },
  
  configSchema: {},
  defaultConfig: {
    site: {
      title: defaultConfig.site.title,
      description: defaultConfig.site.description
    },
    layout: {
      header: {
        enabled: true,
        sticky: false,
        transparent: false
      },
      footer: {
        enabled: true,
        columns: 3
      },
      sidebar: {
        enabled: false,
        position: 'right' as const,
        width: '300px'
      }
    },
    styles: {
      theme: defaultConfig.styles.theme,
      primaryColor: defaultConfig.styles.primaryColor,
      fontFamily: defaultConfig.styles.fontFamily,
      fontSize: defaultConfig.styles.fontSize
    },
    features: {
      search: defaultConfig.features.search,
      comments: defaultConfig.features.comments,
      newsletter: defaultConfig.features.newsletter,
      analytics: defaultConfig.features.analytics
    },
    custom: {}
  },
  
  templates: {
    
    'blog-post': {
      name: 'Blog Post',
      displayName: 'Blog Post',
      description: 'Blog post page template',
      layout: 'PostLayout',
      blocks: [
          {
            name: 'Header',
            type: 'block',
            props: { showNavigation: true }
          },
          {
            name: 'PostCard',
            type: 'block',
            props: { 
              showAuthor: true,
              showDate: true,
              showExcerpt: true
            }
          },
          {
            name: 'Footer',
            type: 'block',
            props: { showSocial: true }
          }
        ]
    },
    
    'home-page': {
      name: 'Home Page',
      displayName: 'Homepage',
    description: 'Homepage template',
      layout: 'DefaultLayout',
      blocks: [
          {
            name: 'Header',
            type: 'block',
            props: { 
              showNavigation: true,
              showSearch: true
            }
          },
          {
            name: 'PostCard',
            type: 'block',
            props: { 
              variant: 'featured',
              showAuthor: true
            }
          },
          {
            name: 'Footer',
            type: 'block',
            props: { 
              showSocial: true,
              showNewsletter: true
            }
          }
        ]
    }
  },
  
  features: {
    customizer: true,
    darkMode: true,
    rtl: false,
    multiLanguage: false
  }
};

export default theme;

// Export components for direct use
export {
  DefaultLayout,
  PostLayout,
  Header,
  Footer,
  PostCard,
  Navigation
};

// Export styles and configurations
export {
  designTokens,
  componentStyles,
  defaultConfig,
  performanceConfig
};

// Export hooks and utilities
export * from './src/hooks';
export * from './src/utils';