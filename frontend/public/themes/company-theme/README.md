# 主题静态资源目录

这个目录用于存放 company-theme 主题的静态资源文件。

## 目录结构

```
public/
├── images/
│   ├── hero/           # 首页英雄区域图片
│   ├── team/           # 团队成员头像
│   ├── services/       # 服务相关图片
│   ├── about/          # 关于我们页面图片
│   └── icons/          # 图标文件
└── README.md
```

## 使用方法

### 在主题组件中引用图片

```tsx
// 正确的引用方式
<img src="/themes/company-theme/images/team/ceo.svg" alt="CEO" />

// 或者在组件配置中
const teamMember = {
  name: 'John Doe',
  avatar: '/themes/company-theme/images/team/john.jpg'
};
```

### 路径规则

- 主题内部的静态资源会自动复制到 `public/themes/company-theme/` 目录
- 在代码中使用 `/themes/company-theme/` 前缀来引用资源
- 支持所有常见的图片格式：SVG、PNG、JPG、WebP 等

### 注意事项

1. 图片文件名建议使用小写字母和连字符，如 `hero-background.jpg`
2. SVG 格式适合图标和简单图形
3. WebP 或 JPG 格式适合照片和复杂图像
4. 确保图片经过优化以提升加载性能
5. 修改静态资源后需要重启开发服务器才能生效

## 自动复制机制

当运行 `npm run dev` 或 `npm run build` 时，webpack 会自动将此目录下的所有文件复制到 `public/themes/company-theme/` 目录，使其可以通过 HTTP 访问。