#!/bin/bash

# 服务器资源清理脚本
# 用于清理Docker/Podman镜像和容器，释放磁盘空间

echo "🧹 开始清理服务器资源..."

# 1. 清理未使用的镜像
echo "📦 清理未使用的镜像..."
podman image prune -a -f

# 2. 清理未使用的容器
echo "🗑️ 清理停止的容器..."
podman container prune -f

# 3. 清理未使用的卷
echo "💾 清理未使用的卷..."
podman volume prune -f

# 4. 清理构建缓存
echo "🔧 清理构建缓存..."
podman builder prune -a -f

# 5. 清理系统缓存
echo "🧽 清理系统缓存..."
podman system prune -a -f

# 6. 显示清理后的状态
echo "📊 清理完成，当前状态："
podman system df

echo "✅ 清理完成！"