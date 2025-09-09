# Podman 部署指南

本指南介绍如何使用 Podman 将 SiteFrame 应用部署到生产服务器。

## 前置要求

- Podman 4.0+
- podman-compose
- 已配置的 Supabase 项目

## 快速部署

### 1. 配置环境变量

```bash
# 复制生产环境配置模板
cp .env.production .env.production.local

# 编辑配置文件，填入实际的 Supabase 配置
vim .env.production.local
```

### 2. 运行部署脚本

```bash
# 执行一键部署
./deploy.sh
```

### 3. 验证部署

- 前端: http://localhost:3000
- 后端API: http://localhost:3001
- 健康检查: http://localhost:3001/api/health

## 手动部署

### 构建镜像

```bash
# 构建所有服务
podman-compose build

# 或分别构建
podman-compose build frontend
podman-compose build backend
```

### 启动服务

```bash
# 启动所有服务
podman-compose --env-file .env.production up -d

# 查看服务状态
podman-compose ps

# 查看日志
podman-compose logs -f
```

## 常用命令

```bash
# 停止服务
podman-compose down

# 重启服务
podman-compose restart

# 查看日志
podman-compose logs -f frontend
podman-compose logs -f backend

# 进入容器
podman-compose exec frontend sh
podman-compose exec backend sh

# 更新应用
git pull
podman-compose build
podman-compose up -d
```

## 生产环境配置

### 必需的环境变量

```bash
# Supabase 配置
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# 应用配置
NEXT_PUBLIC_APP_URL=https://your-domain.com
FRONTEND_URL=https://your-domain.com
JWT_SECRET=your-production-jwt-secret
```

### 反向代理配置 (Nginx)

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 前端
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 后端API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 故障排除

### 常见问题

1. **容器启动失败**
   ```bash
   # 查看详细日志
   podman-compose logs
   ```

2. **端口冲突**
   ```bash
   # 修改 docker-compose.yml 中的端口映射
   ports:
     - "3001:3001"  # 改为其他端口
   ```

3. **环境变量未生效**
   ```bash
   # 确保 .env.production 文件存在且格式正确
   # 重新启动服务
   podman-compose down
   podman-compose --env-file .env.production up -d
   ```

### 性能优化

- 使用 `--memory` 限制容器内存使用
- 配置日志轮转避免日志文件过大
- 定期清理未使用的镜像和容器

```bash
# 清理系统
podman system prune -a
```

## 安全建议

1. 使用强密码和密钥
2. 定期更新容器镜像
3. 配置防火墙规则
4. 启用 HTTPS
5. 定期备份数据

## 监控和日志

```bash
# 实时监控资源使用
podman stats

# 查看容器详情
podman inspect <container_id>

# 导出日志
podman-compose logs > app.log
```