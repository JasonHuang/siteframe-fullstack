# 基础镜像 - 使用Alpine减少镜像大小
FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制package文件
COPY package*.json ./
RUN npm ci --only=production --no-audit --no-fund

# 构建阶段 - 使用Alpine减少镜像大小
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 构建应用
RUN npm run build

# 生产运行阶段 - 使用Alpine减少镜像大小
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# 创建非root用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制构建产物
# 复制public目录（包含主题图片等静态资源）
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# 复制standalone构建产物
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]