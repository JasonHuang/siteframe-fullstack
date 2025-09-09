import config from './theme.config';
import { componentLoaders, componentMeta } from './src/components';

// 主题加载器
export async function loadTheme() {
  return {
    // 主题元数据
    metadata: {
      name: 'original-theme',
      displayName: '原始主题',
      version: '1.0.0',
      description: '经典的原始设计主题',
      author: 'SiteFrame'
    },
    
    // 组件系统
    components: componentLoaders,
    componentMeta,
    
    // 默认配置
    defaultConfig: config,
    
    // 配置Schema（简单版本）
    configSchema: {
      type: 'object',
      properties: {
        colors: { type: 'object' },
        typography: { type: 'object' },
        spacing: { type: 'object' },
        layout: { type: 'object' }
      }
    },
    
    // 样式系统（可选）
    styles: {
      tokens: {},
      themes: {},
      globalCSS: ''
    },
    
    // 获取组件
    getComponent: async (type: 'layouts' | 'blocks' | 'widgets', name: string) => {
      const componentGroup = componentLoaders[type] as any;
      const componentLoader = componentGroup?.[name];
      if (!componentLoader) {
        throw new Error(`Component ${type}/${name} not found in theme`);
      }
      
      const componentModule = await componentLoader();
      return componentModule.default;
    },
    
    // 获取组件元数据
    getComponentMeta: (type: 'layouts' | 'blocks' | 'widgets', name: string) => {
      const metaGroup = componentMeta[type] as any;
      return metaGroup?.[name];
    }
  };
}

// 默认导出
export default loadTheme;