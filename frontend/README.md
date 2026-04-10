# utils-lib

轻量级、类型安全的 JavaScript/TypeScript 工具函数库。

## 特性

- 🔒 **类型安全** - 完整的 TypeScript 类型定义
- 🚀 **轻量级** - 按需引入，Tree-shaking 友好
- ✅ **完善测试** - 100% 测试覆盖率
- 📖 **文档详尽** - 每个函数都有详细文档和示例

## 安装

```bash
npm install utils-lib
```

## 使用

```ts
import { debounce } from 'utils-lib';

const debouncedFn = debounce(() => {
  console.log('执行');
}, { wait: 300 });
```

## 函数列表

| 函数 | 说明 |
| --- | --- |
| `debounce` | 防抖函数，延迟执行直到停止调用 |

## 开发

```bash
# 安装依赖
npm install

# 启动文档开发服务器
npm start

# 运行测试
npm test

# 构建
npm run build
```

## License

MIT
