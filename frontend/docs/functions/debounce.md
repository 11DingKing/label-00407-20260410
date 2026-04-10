<div class="api-page">
  <div class="api-header">
    <div class="api-badge">函数</div>
    <h1>debounce</h1>
    <p class="api-desc">创建防抖函数，延迟执行直到停止调用</p>
    <div class="api-meta">
      <span class="meta-item">
        <span class="meta-icon">📦</span>
        <span>~200B</span>
      </span>
      <span class="meta-item">
        <span class="meta-icon">✅</span>
        <span>已测试</span>
      </span>
    </div>
  </div>

  <div class="api-section">
    <h2>
      <span class="section-num">01</span>
      用法
    </h2>

```typescript
import { debounce } from 'utils-lib';

const fn = debounce((value: string) => {
  console.log(value);
}, { wait: 300 });
```

  </div>

  <div class="api-section">
    <h2>
      <span class="section-num">02</span>
      参数
    </h2>
    <div class="params-table">
      <div class="param-row header">
        <span>参数</span>
        <span>类型</span>
        <span>必填</span>
        <span>说明</span>
      </div>
      <div class="param-row">
        <span class="param-name">func</span>
        <span class="param-type">Function</span>
        <span class="param-required">✅</span>
        <span class="param-desc">要防抖的函数</span>
      </div>
      <div class="param-row">
        <span class="param-name">options.wait</span>
        <span class="param-type">number</span>
        <span class="param-required">-</span>
        <span class="param-desc">延迟毫秒数，默认 300</span>
      </div>
      <div class="param-row">
        <span class="param-name">options.leading</span>
        <span class="param-type">boolean</span>
        <span class="param-required">-</span>
        <span class="param-desc">是否立即执行，默认 false</span>
      </div>
      <div class="param-row">
        <span class="param-name">options.trailing</span>
        <span class="param-type">boolean</span>
        <span class="param-required">-</span>
        <span class="param-desc">是否延迟后执行，默认 true</span>
      </div>
      <div class="param-row">
        <span class="param-name">options.maxWait</span>
        <span class="param-type">number</span>
        <span class="param-required">-</span>
        <span class="param-desc">最大等待时间</span>
      </div>
    </div>
  </div>

  <div class="api-section">
    <h2>
      <span class="section-num">03</span>
      返回值
    </h2>
    <div class="return-cards">
      <div class="return-card">
        <div class="return-name">cancel()</div>
        <div class="return-desc">取消待执行的函数调用</div>
      </div>
      <div class="return-card">
        <div class="return-name">flush()</div>
        <div class="return-desc">立即执行待执行的函数</div>
      </div>
      <div class="return-card">
        <div class="return-name">pending()</div>
        <div class="return-desc">检查是否有待执行的调用</div>
      </div>
    </div>
  </div>

  <div class="api-section">
    <h2>
      <span class="section-num">04</span>
      示例
    </h2>

  <div class="example-block">
    <div class="example-title">
      <span class="example-icon">🔍</span>
      搜索防抖
    </div>

```typescript
const search = debounce((q: string) => {
  fetch(`/api/search?q=${q}`);
}, { wait: 500 });
```

  </div>

  <div class="example-block">
    <div class="example-title">
      <span class="example-icon">⚡</span>
      立即执行
    </div>

```typescript
const submit = debounce(submitForm, {
  wait: 1000,
  leading: true,
  trailing: false,
});
```

  </div>

  </div>

  <div class="api-tip">
    <div class="tip-icon">⚠️</div>
    <div class="tip-content">
      <strong>注意</strong>
      <p>组件卸载时调用 <code>cancel()</code> 避免内存泄漏</p>
    </div>
  </div>
</div>

<style>
.api-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.api-header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
}

.api-badge {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #059669;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 20px;
  margin-bottom: 16px;
}

.api-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 12px 0;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
}

.api-desc {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.api-meta {
  display: flex;
  gap: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: #6b7280;
}

.meta-icon {
  font-size: 1rem;
}

.api-section {
  margin-bottom: 40px;
}

.api-section h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;
}

.section-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: #10b981;
  background: #ecfdf5;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'SF Mono', monospace;
}

.params-table {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.param-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.5fr 2fr;
  padding: 14px 20px;
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.2s;
}

.param-row:last-child {
  border-bottom: none;
}

.param-row:not(.header):hover {
  background: #f9fafb;
}

.param-row.header {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.param-name {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  color: #111827;
  font-weight: 500;
}

.param-type {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  color: #10b981;
  font-size: 0.875rem;
}

.param-required {
  text-align: center;
}

.param-desc {
  color: #6b7280;
  font-size: 0.9rem;
}

.return-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.return-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s;
}

.return-card:hover {
  border-color: #10b981;
  transform: translateY(-2px);
}

.return-name {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.return-desc {
  font-size: 0.875rem;
  color: #6b7280;
}

.example-block {
  margin-bottom: 24px;
}

.example-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
}

.example-icon {
  font-size: 1.1rem;
}

.api-tip {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  margin-top: 40px;
}

.tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tip-content strong {
  display: block;
  color: #92400e;
  margin-bottom: 4px;
}

.tip-content p {
  margin: 0;
  color: #a16207;
  font-size: 0.9rem;
}

.tip-content code {
  background: rgba(146, 64, 14, 0.1) !important;
  color: #92400e !important;
}

@media (max-width: 640px) {
  .return-cards {
    grid-template-columns: 1fr;
  }
  .param-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .param-row.header {
    display: none;
  }
  .param-name::before { content: '参数: '; color: #9ca3af; }
  .param-type::before { content: '类型: '; color: #9ca3af; }
  .param-desc::before { content: '说明: '; color: #9ca3af; }
}

/* 暗色模式 */
[data-theme="dark"] .api-header,
html[data-prefers-color="dark"] .api-header {
  border-bottom-color: #374151;
}
[data-theme="dark"] .api-badge,
html[data-prefers-color="dark"] .api-badge {
  background: linear-gradient(135deg, #065f46 0%, #047857 100%);
  color: #34d399;
}
[data-theme="dark"] .api-header h1,
html[data-prefers-color="dark"] .api-header h1 {
  color: #f9fafb;
}
[data-theme="dark"] .api-desc,
html[data-prefers-color="dark"] .api-desc {
  color: #9ca3af;
}
[data-theme="dark"] .meta-item,
html[data-prefers-color="dark"] .meta-item {
  color: #9ca3af;
}
[data-theme="dark"] .api-section h2,
html[data-prefers-color="dark"] .api-section h2 {
  color: #f9fafb;
}
[data-theme="dark"] .section-num,
html[data-prefers-color="dark"] .section-num {
  background: #065f46;
  color: #34d399;
}
[data-theme="dark"] .params-table,
html[data-prefers-color="dark"] .params-table {
  border-color: #374151;
}
[data-theme="dark"] .param-row,
html[data-prefers-color="dark"] .param-row {
  border-bottom-color: #374151;
}
[data-theme="dark"] .param-row.header,
html[data-prefers-color="dark"] .param-row.header {
  background: #1f2937;
  color: #d1d5db;
}
[data-theme="dark"] .param-row:not(.header):hover,
html[data-prefers-color="dark"] .param-row:not(.header):hover {
  background: #1f2937;
}
[data-theme="dark"] .param-name,
html[data-prefers-color="dark"] .param-name {
  color: #f9fafb;
}
[data-theme="dark"] .param-type,
html[data-prefers-color="dark"] .param-type {
  color: #34d399;
}
[data-theme="dark"] .param-desc,
html[data-prefers-color="dark"] .param-desc {
  color: #9ca3af;
}
[data-theme="dark"] .return-card,
html[data-prefers-color="dark"] .return-card {
  background: #1f2937;
  border-color: #374151;
}
[data-theme="dark"] .return-card:hover,
html[data-prefers-color="dark"] .return-card:hover {
  border-color: #10b981;
}
[data-theme="dark"] .return-name,
html[data-prefers-color="dark"] .return-name {
  color: #f9fafb;
}
[data-theme="dark"] .return-desc,
html[data-prefers-color="dark"] .return-desc {
  color: #9ca3af;
}
[data-theme="dark"] .example-title,
html[data-prefers-color="dark"] .example-title {
  color: #d1d5db;
}
[data-theme="dark"] .api-tip,
html[data-prefers-color="dark"] .api-tip {
  background: #422006;
  border-color: #854d0e;
}
[data-theme="dark"] .tip-content strong,
html[data-prefers-color="dark"] .tip-content strong {
  color: #fbbf24;
}
[data-theme="dark"] .tip-content p,
html[data-prefers-color="dark"] .tip-content p {
  color: #fcd34d;
}
[data-theme="dark"] .tip-content code,
html[data-prefers-color="dark"] .tip-content code {
  background: rgba(251, 191, 36, 0.2) !important;
  color: #fbbf24 !important;
}
</style>
