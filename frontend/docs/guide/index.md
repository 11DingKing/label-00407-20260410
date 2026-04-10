<div class="guide-page">
  <div class="page-header">
    <div class="header-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    </div>
    <div class="header-content">
      <h1>快速开始</h1>
      <p class="header-desc">几分钟内开始使用 utils-lib</p>
    </div>
  </div>

  <div class="content-section">
    <h2>
      <span class="section-icon">📦</span>
      安装
    </h2>
    <div class="install-tabs">
      <div class="tab-item">
        <span class="tab-label">npm</span>
        <code>npm install utils-lib</code>
      </div>
      <div class="tab-item">
        <span class="tab-label">yarn</span>
        <code>yarn add utils-lib</code>
      </div>
      <div class="tab-item">
        <span class="tab-label">pnpm</span>
        <code>pnpm add utils-lib</code>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2>
      <span class="section-icon">🚀</span>
      使用
    </h2>

```typescript
import { debounce } from 'utils-lib';

const fn = debounce(() => {
  console.log('执行');
}, { wait: 300 });
```

  </div>

  <div class="content-section">
    <h2>
      <span class="section-icon">✨</span>
      特性
    </h2>
    <div class="feature-list">
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>零依赖</strong>
          <span>无第三方依赖</span>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>TypeScript</strong>
          <span>完整类型支持</span>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Tree Shaking</strong>
          <span>按需引入</span>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>测试覆盖</strong>
          <span>100% 覆盖率</span>
        </div>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2>
      <span class="section-icon">🌐</span>
      浏览器支持
    </h2>
    <div class="browser-grid">
      <div class="browser-item">
        <div class="browser-icon">🌐</div>
        <span>Chrome</span>
        <span class="check">✅</span>
      </div>
      <div class="browser-item">
        <div class="browser-icon">🦊</div>
        <span>Firefox</span>
        <span class="check">✅</span>
      </div>
      <div class="browser-item">
        <div class="browser-icon">🧭</div>
        <span>Safari</span>
        <span class="check">✅</span>
      </div>
      <div class="browser-item">
        <div class="browser-icon">📐</div>
        <span>Edge</span>
        <span class="check">✅</span>
      </div>
    </div>
  </div>
</div>

<style>
.guide-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
}

.header-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #059669;
  flex-shrink: 0;
}

.header-icon svg {
  width: 32px;
  height: 32px;
}

.header-content h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}

.header-desc {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;
}

.section-icon {
  font-size: 1.2rem;
}

.install-tabs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px 20px;
  transition: all 0.2s;
}

.tab-item:hover {
  border-color: #10b981;
  background: #ecfdf5;
}

.tab-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #9ca3af;
  min-width: 50px;
}

.tab-item code {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 0.9rem;
  color: #374151;
  background: transparent !important;
  padding: 0 !important;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;
}

.feature-item:hover {
  border-color: #10b981;
  transform: translateY(-2px);
}

.feature-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.feature-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.feature-text strong {
  color: #111827;
  font-weight: 600;
}

.feature-text span {
  font-size: 0.875rem;
  color: #6b7280;
}

.browser-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.browser-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s;
}

.browser-item:hover {
  border-color: #10b981;
  transform: translateY(-2px);
}

.browser-icon {
  font-size: 1.5rem;
}

.browser-item span {
  font-size: 0.875rem;
  color: #374151;
}

.browser-item .check {
  font-size: 1rem;
}

@media (max-width: 640px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
  .browser-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .page-header {
    flex-direction: column;
    text-align: center;
  }
}

/* 暗色模式 */
[data-theme="dark"] .page-header,
html[data-prefers-color="dark"] .page-header {
  border-bottom-color: #374151;
}
[data-theme="dark"] .header-icon,
html[data-prefers-color="dark"] .header-icon {
  background: linear-gradient(135deg, #065f46 0%, #047857 100%);
  color: #34d399;
}
[data-theme="dark"] .header-content h1,
html[data-prefers-color="dark"] .header-content h1 {
  color: #f9fafb;
}
[data-theme="dark"] .header-desc,
html[data-prefers-color="dark"] .header-desc {
  color: #9ca3af;
}
[data-theme="dark"] .content-section h2,
html[data-prefers-color="dark"] .content-section h2 {
  color: #f9fafb;
}
[data-theme="dark"] .tab-item,
html[data-prefers-color="dark"] .tab-item {
  background: #1f2937;
  border-color: #374151;
}
[data-theme="dark"] .tab-item:hover,
html[data-prefers-color="dark"] .tab-item:hover {
  background: #1f2937;
  border-color: #10b981;
}
[data-theme="dark"] .tab-item code,
html[data-prefers-color="dark"] .tab-item code {
  color: #d1d5db !important;
}
[data-theme="dark"] .feature-item,
html[data-prefers-color="dark"] .feature-item {
  background: #1f2937;
  border-color: #374151;
}
[data-theme="dark"] .feature-item:hover,
html[data-prefers-color="dark"] .feature-item:hover {
  border-color: #10b981;
}
[data-theme="dark"] .feature-text strong,
html[data-prefers-color="dark"] .feature-text strong {
  color: #f9fafb;
}
[data-theme="dark"] .feature-text span,
html[data-prefers-color="dark"] .feature-text span {
  color: #9ca3af;
}
[data-theme="dark"] .browser-item,
html[data-prefers-color="dark"] .browser-item {
  background: #1f2937;
  border-color: #374151;
}
[data-theme="dark"] .browser-item:hover,
html[data-prefers-color="dark"] .browser-item:hover {
  border-color: #10b981;
}
[data-theme="dark"] .browser-item span,
html[data-prefers-color="dark"] .browser-item span {
  color: #d1d5db;
}
</style>
