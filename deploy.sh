#!/bin/bash

# SiteFrame Podman 部署脚本

set -e

echo "🚀 开始部署 SiteFrame 应用..."

# 检查 .env.production 文件
if [ ! -f ".env.production" ]; then
    echo "❌ 错误: .env.production 文件不存在"
    echo "请复制 .env.production 文件并配置相应的环境变量"
    exit 1
fi

# 停止现有容器
echo "🛑 停止现有容器..."
podman-compose down || true

# 构建镜像
echo "🔨 构建应用镜像..."
podman-compose build --no-cache

# 启动服务
echo "🚀 启动服务..."
podman-compose --env-file .env.production up -d

# 检查服务状态
echo "📊 检查服务状态..."
sleep 5
podman-compose ps

echo "✅ 部署完成!"
echo "前端访问地址: http://localhost:3000"
echo "后端API地址: http://localhost:3001"
echo "健康检查: http://localhost:3001/api/health"

echo "📝 查看日志命令:"
echo "  podman-compose logs -f frontend"
echo "  podman-compose logs -f backend"