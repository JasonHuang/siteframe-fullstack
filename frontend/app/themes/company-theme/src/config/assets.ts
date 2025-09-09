/**
 * 主题静态资源配置
 * 
 * 这个文件定义了主题内部静态资源的路径配置
 * 所有路径都基于 /themes/company-theme/ 前缀
 */

// 主题资源基础路径
export const THEME_ASSETS_BASE = '/themes/company-theme';

// 图片资源路径配置
export const images = {
  // 英雄区域图片
  hero: {
    background: `${THEME_ASSETS_BASE}/images/hero/hero-bg.jpg`,
    banner: `${THEME_ASSETS_BASE}/images/hero/hero-banner.jpg`,
  },
  
  // 团队成员头像
  team: {
    ceo: `${THEME_ASSETS_BASE}/images/team/ceo.svg`,
    cto: `${THEME_ASSETS_BASE}/images/team/cto.svg`,
    cmo: `${THEME_ASSETS_BASE}/images/team/cmo.svg`,
  },
  
  // 服务相关图片
  services: {
    consulting: `${THEME_ASSETS_BASE}/images/services/consulting.jpg`,
    development: `${THEME_ASSETS_BASE}/images/services/development.jpg`,
    support: `${THEME_ASSETS_BASE}/images/services/support.jpg`,
  },
  
  // 关于我们页面图片
  about: {
    company: `${THEME_ASSETS_BASE}/images/about/company-photo.jpg`,
    office: `${THEME_ASSETS_BASE}/images/about/office-photo.jpg`,
  },
  
  // 图标
  icons: {
    logo: `${THEME_ASSETS_BASE}/images/icons/logo.svg`,
    favicon: `${THEME_ASSETS_BASE}/images/icons/favicon.ico`,
  },
};

// 使用示例：
// import { images } from './assets';
// <img src={images.team.ceo} alt="CEO" />

export default {
  images,
  THEME_ASSETS_BASE,
};