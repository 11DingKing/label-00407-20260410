---
hero:
  title: false
features: false
---

<div class="home-page" translate="no">
  <div class="bg-effects">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    <div class="dots-bg"></div>
  </div>
  <section class="hero-section">
    <div class="hero-content">
      <span class="badge">🚀 v1.0.0 · 轻量级工具库</span>
      <h1>构建 <em>更好的</em><br/>JavaScript <em>应用</em></h1>
      <p class="desc">一套精心设计的 TypeScript 工具函数集合<br/>零依赖 · 类型安全 · 极致轻量</p>
      <div class="btns">
        <a class="btn-primary" href="/guide">快速开始 →</a>
        <a class="btn-secondary" href="/functions/debounce">浏览函数</a>
      </div>
      <div class="stats">
        <div class="stat-item"><strong>0</strong><span>依赖</span></div>
        <div class="stat-item"><strong>&lt;2KB</strong><span>体积</span></div>
        <div class="stat-item"><strong>100%</strong><span>TS</span></div>
        <div class="stat-item"><strong>9</strong><span>测试</span></div>
      </div>
    </div>
    <div class="hero-logo">
      <div class="logo-bg"></div>
      <div class="logo-glow"></div>
      <div class="orbit orbit1"><div class="orbit-dot"></div></div>
      <div class="orbit orbit2"><div class="orbit-dot"></div></div>
      <div class="orbit orbit3"><div class="orbit-dot"></div></div>
      <div class="logo-ring"></div>
      <div class="logo-ring r2"></div>
      <div class="logo-ring r3"></div>
      <div class="floating-dot dot1"></div>
      <div class="floating-dot dot2"></div>
      <div class="floating-dot dot3"></div>
      <div class="floating-dot dot4"></div>
      <div class="code-tag tag1">&lt;/&gt;</div>
      <div class="code-tag tag2">{ }</div>
      <div class="code-tag tag3">TS</div>
      <div class="logo-inner">
        <div class="pulse-ring"></div>
        <div class="pulse-ring delay"></div>
        <svg width="90" height="90" viewBox="0 0 180 180" fill="none">
          <defs>
            <linearGradient id="g1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#047857"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
          </defs>
          <path d="M55 50V110C55 127.673 69.327 142 87 142C104.673 142 119 127.673 119 110V50" stroke="url(#g1)" stroke-width="18" stroke-linecap="round"/>
          <circle cx="119" cy="50" r="12" fill="#047857"/>
          <circle cx="119" cy="50" r="6" fill="#10b981"/>
        </svg>
      </div>
    </div>
  </section>
  <section class="features-section">
    <h2 class="section-title">核心特性</h2>
    <div class="features">
      <div class="card">
        <div class="icon blue">📦</div>
        <h3>零依赖</h3>
        <p>无第三方依赖，纯净轻量</p>
      </div>
      <div class="card">
        <div class="icon purple">🔷</div>
        <h3>TypeScript</h3>
        <p>完整类型定义，智能提示</p>
      </div>
      <div class="card">
        <div class="icon amber">⚡</div>
        <h3>Tree Shaking</h3>
        <p>按需引入，体积最小化</p>
      </div>
      <div class="card">
        <div class="icon green">✅</div>
        <h3>完整测试</h3>
        <p>100% 测试覆盖率</p>
      </div>
      <div class="card">
        <div class="icon rose">📖</div>
        <h3>文档完善</h3>
        <p>详细 API 文档与示例</p>
      </div>
      <div class="card">
        <div class="icon cyan">🔄</div>
        <h3>持续更新</h3>
        <p>持续维护，不断迭代</p>
      </div>
      <div class="card">
        <div class="icon indigo">🌐</div>
        <h3>浏览器兼容</h3>
        <p>支持所有现代浏览器</p>
      </div>
      <div class="card">
        <div class="icon orange">🛡️</div>
        <h3>稳定可靠</h3>
        <p>生产环境验证</p>
      </div>
    </div>
  </section>
</div>

<style>
  .home-page{max-width:1100px;margin:0 auto;padding:60px 40px 80px;position:relative}
  .bg-effects{position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:-1}
  .glow{position:absolute;border-radius:50%;filter:blur(100px)}
  .glow-1{width:500px;height:500px;background:rgba(16,185,129,0.12);top:-150px;right:-100px;animation:float 20s ease-in-out infinite}
  .glow-2{width:400px;height:400px;background:rgba(52,211,153,0.08);bottom:0;left:-100px;animation:float 25s ease-in-out infinite reverse}
  .dots-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(16,185,129,0.12) 1px,transparent 1px);background-size:32px 32px}
  @keyframes float{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}}
  .hero-section{display:flex;align-items:center;justify-content:space-between;gap:60px;padding:40px 0 80px}
  .hero-content{flex:1;max-width:560px}
  .badge{display:inline-block;padding:8px 16px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);border-radius:24px;font-size:0.85rem;color:#059669;margin-bottom:24px}
  .hero-content h1{font-size:3.5rem;font-weight:800;line-height:1.15;color:#111827;margin:0 0 20px}
  .hero-content h1 a{display:none!important}
  .hero-content h1::before{display:none!important}
  .hero-content h1 em{font-style:normal;background:linear-gradient(135deg,#10b981,#059669);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .desc{font-size:1.1rem;color:#6b7280;line-height:1.7;margin:0 0 32px}
  .btns{display:flex;gap:12px;margin-bottom:40px}
  .btn-primary,.btn-secondary{display:inline-flex;align-items:center;padding:14px 28px;border-radius:12px;font-size:0.95rem;font-weight:600;text-decoration:none;transition:none;border:1px solid transparent;line-height:1;vertical-align:middle}
  .btn-primary{background:#10b981;color:#fff!important;border-color:#10b981}
  .btn-primary:hover{background:#10b981;border-color:#10b981;color:#fff!important}
  .btn-secondary{background:#fff;color:#374151!important;border:1px solid #d1d5db}
  .btn-secondary:hover{background:#fff;border-color:#d1d5db;color:#374151!important}
  .stats{display:flex;gap:32px}
  .stat-item{text-align:center}
  .stat-item strong{display:block;font-size:1.5rem;font-weight:800;color:#111827}
  .stat-item span{font-size:0.75rem;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em}
  .hero-logo{position:relative;width:320px;height:320px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .logo-bg{position:absolute;width:200px;height:200px;background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(52,211,153,0.06));border-radius:50%;filter:blur(50px)}
  .logo-glow{position:absolute;width:120px;height:120px;background:radial-gradient(circle,rgba(16,185,129,0.3),transparent 70%);border-radius:50%;animation:glow 3s ease-in-out infinite}
  @keyframes glow{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
  .logo-inner{position:relative;width:140px;height:140px;background:linear-gradient(145deg,#fff,#f0fdf4);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 25px 70px rgba(16,185,129,0.25),0 0 0 1px rgba(16,185,129,0.1),inset 0 -4px 12px rgba(16,185,129,0.05);z-index:2}
  .logo-inner svg{filter:drop-shadow(0 8px 16px rgba(16,185,129,0.3))}
  .pulse-ring{position:absolute;width:100%;height:100%;border:2px solid rgba(16,185,129,0.3);border-radius:50%;animation:pulse 2.5s ease-out infinite}
  .pulse-ring.delay{animation-delay:1.25s}
  @keyframes pulse{0%{transform:scale(1);opacity:1}100%{transform:scale(1.8);opacity:0}}
  .logo-ring{position:absolute;width:200px;height:200px;border:1px solid rgba(16,185,129,0.12);border-radius:50%;animation:spin 30s linear infinite}
  .logo-ring.r2{width:260px;height:260px;border-style:dashed;border-color:rgba(16,185,129,0.08);animation-direction:reverse;animation-duration:40s}
  .logo-ring.r3{width:300px;height:300px;border-width:1px;border-color:rgba(16,185,129,0.06);animation-duration:50s}
  .orbit{position:absolute;border:1px dashed transparent;border-radius:50%;animation:spin 8s linear infinite}
  .orbit1{width:180px;height:180px;animation-duration:10s}
  .orbit2{width:240px;height:240px;animation-duration:15s;animation-direction:reverse}
  .orbit3{width:290px;height:290px;animation-duration:20s}
  .orbit-dot{position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:8px;height:8px;background:linear-gradient(135deg,#10b981,#34d399);border-radius:50%;box-shadow:0 0 10px rgba(16,185,129,0.5)}
  .orbit2 .orbit-dot{width:6px;height:6px;top:auto;bottom:-3px;background:#34d399}
  .orbit3 .orbit-dot{width:5px;height:5px;left:auto;right:-2px;top:50%;background:#6ee7b7}
  .floating-dot{position:absolute;background:#10b981;border-radius:50%;animation:floatDot 5s ease-in-out infinite}
  .floating-dot.dot1{top:30px;right:50px;width:8px;height:8px;animation-delay:0s;opacity:0.7}
  .floating-dot.dot2{bottom:50px;left:20px;width:6px;height:6px;animation-delay:1.5s;opacity:0.5}
  .floating-dot.dot3{top:45%;right:5px;width:10px;height:10px;animation-delay:3s;opacity:0.6}
  .floating-dot.dot4{top:60px;left:40px;width:5px;height:5px;animation-delay:2s;opacity:0.4}
  .code-tag{position:absolute;padding:6px 10px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;font-size:0.7rem;font-weight:600;color:#6b7280;box-shadow:0 4px 12px rgba(0,0,0,0.06);animation:floatTag 6s ease-in-out infinite;font-family:monospace}
  .code-tag.tag1{top:15px;left:20px;animation-delay:0s;color:#10b981}
  .code-tag.tag2{bottom:30px;right:10px;animation-delay:2s;color:#8b5cf6}
  .code-tag.tag3{top:50%;left:-5px;animation-delay:4s;color:#0ea5e9;background:linear-gradient(135deg,#f0f9ff,#fff)}
  @keyframes floatTag{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-8px) rotate(2deg)}}
  @keyframes floatDot{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  .features-section{padding:60px 0}
  .section-title{text-align:center;font-size:1.5rem;font-weight:700;color:#111827;margin:0 0 48px;position:relative;display:inline-block;width:100%}
  .section-title::after{content:'';display:block;width:40px;height:3px;background:linear-gradient(90deg,#10b981,#34d399);margin:12px auto 0;border-radius:2px}
  .features{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .card{background:#fff;border:1px solid #f3f4f6;border-radius:16px;padding:28px;text-align:center;transition:box-shadow 0.3s,border-color 0.3s}
  .card:hover{box-shadow:0 8px 24px rgba(16,185,129,0.1);border-color:#d1fae5}
  .card:hover .icon{transform:scale(1.1)}
  .icon{width:48px;height:48px;margin:0 auto 16px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;transition:transform 0.3s}
  .icon.blue{background:#dbeafe}
  .icon.purple{background:#ede9fe}
  .icon.amber{background:#fef3c7}
  .icon.green{background:#d1fae5}
  .icon.rose{background:#fce7f3}
  .icon.cyan{background:#cffafe}
  .icon.indigo{background:#e0e7ff}
  .icon.orange{background:#ffedd5}
  .card h3{font-size:1rem;font-weight:700;color:#111827;margin:0 0 8px;text-align:center}
  .card p{font-size:0.85rem;color:#6b7280;margin:0;line-height:1.5;text-align:center}
  @media(max-width:900px){.hero-section{flex-direction:column;text-align:center}.btns,.stats{justify-content:center}.features{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:600px){.hero-content h1{font-size:2.5rem}.features{grid-template-columns:1fr}.home-page{padding:30px 20px 60px}}
  
  /* 暗色模式 */
  [data-theme="dark"] .home-page,
  .dark .home-page,
  html[data-prefers-color="dark"] .home-page{background:transparent}
  [data-theme="dark"] .hero-content h1,
  .dark .hero-content h1,
  html[data-prefers-color="dark"] .hero-content h1{color:#f9fafb}
  [data-theme="dark"] .desc,
  .dark .desc,
  html[data-prefers-color="dark"] .desc{color:#9ca3af}
  [data-theme="dark"] .stat-item strong,
  .dark .stat-item strong,
  html[data-prefers-color="dark"] .stat-item strong{color:#f9fafb}
  [data-theme="dark"] .btn-secondary,
  .dark .btn-secondary,
  html[data-prefers-color="dark"] .btn-secondary{background:#1f2937;color:#f9fafb!important;border-color:#374151}
  [data-theme="dark"] .btn-secondary:hover,
  .dark .btn-secondary:hover,
  html[data-prefers-color="dark"] .btn-secondary:hover{background:#1f2937;border-color:#374151;color:#f9fafb!important}
  [data-theme="dark"] .card,
  .dark .card,
  html[data-prefers-color="dark"] .card{background:#1f2937;border-color:#374151}
  [data-theme="dark"] .card:hover,
  .dark .card:hover,
  html[data-prefers-color="dark"] .card:hover{border-color:#10b981;box-shadow:0 8px 24px rgba(16,185,129,0.15)}
  [data-theme="dark"] .card h3,
  .dark .card h3,
  html[data-prefers-color="dark"] .card h3{color:#f9fafb}
  [data-theme="dark"] .card p,
  .dark .card p,
  html[data-prefers-color="dark"] .card p{color:#9ca3af}
  [data-theme="dark"] .section-title,
  .dark .section-title,
  html[data-prefers-color="dark"] .section-title{color:#f9fafb}
  [data-theme="dark"] .logo-inner,
  .dark .logo-inner,
  html[data-prefers-color="dark"] .logo-inner{background:linear-gradient(145deg,#1f2937,#111827);box-shadow:0 25px 70px rgba(16,185,129,0.2),0 0 0 1px rgba(16,185,129,0.2)}
  [data-theme="dark"] .code-tag,
  .dark .code-tag,
  html[data-prefers-color="dark"] .code-tag{background:#1f2937;border-color:#374151;color:#9ca3af}
  [data-theme="dark"] .code-tag.tag1,
  .dark .code-tag.tag1{color:#34d399}
  [data-theme="dark"] .code-tag.tag3,
  .dark .code-tag.tag3{background:#1f2937}
  [data-theme="dark"] .badge,
  .dark .badge,
  html[data-prefers-color="dark"] .badge{background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.3)}
</style>
