# 构建阶段
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源码
COPY . .

# 构建文档站点
RUN npm run docs:build

# 运行阶段
FROM --platform=$TARGETPLATFORM nginx:alpine

# 复制构建产物到 nginx
COPY --from=builder /app/docs-dist /usr/share/nginx/html

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
