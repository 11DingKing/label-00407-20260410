# Utils-Lib 工具函数库

## How to Run

```bash
# 使用 Docker Compose 启动
docker-compose up --build -d

# 停止服务
docker-compose down
```

## Services

| 服务 | 地址 | 说明 |
|------|------|------|
| frontend | http://localhost:8081 | 工具库文档站点 |

## 测试账号

无需登录

## 题目内容

构建一个 TypeScript 工具函数库，包含常用方法（如防抖函数），提供完整的文档和测试用例。

---

## 项目介绍

一套精心设计的 TypeScript 工具函数集合，零依赖、类型安全、极致轻量。

### 特性

- 零依赖 - 无第三方依赖
- TypeScript - 完整类型定义
- Tree Shaking - 按需引入
- 测试覆盖 - 100% 覆盖率

### 本地开发

```bash
cd frontend

# 安装依赖
npm install

# 启动文档开发服务器
npm start

# 运行测试
npm test

# 构建库
npm run build

# 构建文档
npm run docs:build
```

### 目录结构

```
frontend/
├── src/              # 源码
│   ├── debounce/     # 防抖函数
│   └── index.ts      # 入口
├── docs/             # 文档
├── Dockerfile        # Docker 构建文件
└── package.json
```
