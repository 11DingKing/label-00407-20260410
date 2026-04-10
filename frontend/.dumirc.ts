import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  metas: [
    { name: 'google', content: 'notranslate' },
  ],
  themeConfig: {
    name: 'utils-lib',
    logo: '/logo.svg',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'API', link: '/functions/debounce' },
    ],
    footer: false,
    socialLinks: {
      github: 'https://github.com/your-username/utils-lib',
    },
  },
  styles: [
    `
    :root {
      --dumi-color-primary: #10b981;
    }
    body {
      background: #fff;
    }
    .dumi-default-hero {
      display: none !important;
    }
    .dumi-default-hero-decoration,
    .dumi-default-hero__decoration {
      display: none !important;
    }
    .dumi-default-features {
      display: none !important;
    }
    .dumi-default-doc-layout-content {
      background: #fff !important;
    }
    .dumi-default-sidebar {
      background: #fafafa !important;
      border-right: 1px solid #e5e7eb !important;
    }
    .dumi-default-sidebar a {
      color: #4b5563 !important;
    }
    .dumi-default-sidebar a:hover,
    .dumi-default-sidebar a.active {
      color: #10b981 !important;
    }
    .markdown {
      color: #374151;
      max-width: 100%;
      padding: 0 !important;
    }
    .markdown h1, .markdown h2, .markdown h3 {
      color: #111827;
      font-weight: 600;
    }
    .markdown h2 {
      font-size: 1.25rem;
      margin-top: 32px;
      margin-bottom: 16px;
    }
    .markdown p {
      color: #4b5563;
      line-height: 1.6;
    }
    .markdown a {
      color: #10b981;
    }
    .markdown a.btn {
      color: inherit !important;
    }
    .markdown a.btn-outline {
      color: #1f2937 !important;
    }
    .markdown a.btn-primary {
      color: #fff !important;
    }
    .markdown a.btn-primary:hover,
    .markdown a.btn-secondary:hover,
    .btn-primary:hover,
    .btn-secondary:hover {
      transform: none !important;
      box-shadow: none !important;
      opacity: 1 !important;
      filter: none !important;
      text-decoration: none !important;
      padding: 14px 28px !important;
      line-height: 1 !important;
      vertical-align: middle !important;
    }
    a.btn-primary:hover {
      background: #10b981 !important;
      border-color: #10b981 !important;
    }
    a.btn-secondary:hover {
      border-color: #d1d5db !important;
      color: #374151 !important;
      background: #fff !important;
    }
    .card h3 a[aria-hidden="true"],
    .markdown h3 a[aria-hidden="true"],
    .markdown h1 a[aria-hidden="true"],
    .home-page h3 a,
    .home-page h1 a,
    .hero-content h1 a {
      display: none !important;
    }
    .card h3 {
      display: block !important;
    }
    .card h3::before {
      display: none !important;
    }
    .markdown code {
      background: #f3f4f6;
      color: #10b981;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.875em;
    }
    .markdown pre {
      background: #fafafa !important;
      border-radius: 8px !important;
      padding: 20px !important;
      border: 1px solid #e5e7eb !important;
      margin: 16px 0 24px 0 !important;
    }
    .markdown pre code {
      background: transparent !important;
      color: #1f2937 !important;
      padding: 0;
      font-size: 14px !important;
      line-height: 1.7 !important;
      font-family: 'SF Mono', 'Fira Code', Consolas, monospace !important;
    }
    .dumi-default-source-code {
      background: #fafafa !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 8px !important;
      margin: 16px 0 24px 0 !important;
    }
    .dumi-default-source-code pre {
      background: #fafafa !important;
      border: none !important;
      margin: 0 !important;
      padding: 20px !important;
    }
    .dumi-default-source-code pre code {
      border: none !important;
    }
    .dumi-default-source-code code {
      color: #1f2937 !important;
      font-size: 14px !important;
      line-height: 1.7 !important;
    }
    .prism-code {
      background: #fafafa !important;
    }
    .token.keyword {
      color: #9333ea !important;
      font-weight: 600 !important;
    }
    .token.string {
      color: #059669 !important;
    }
    .token.function {
      color: #0d9488 !important;
    }
    .token.number {
      color: #d97706 !important;
    }
    .token.operator {
      color: #374151 !important;
    }
    .token.punctuation {
      color: #6b7280 !important;
    }
    .token.comment {
      color: #9ca3af !important;
      font-style: italic !important;
    }
    .token.class-name {
      color: #0d9488 !important;
    }
    .token.property {
      color: #374151 !important;
    }
    .token.builtin {
      color: #0d9488 !important;
    }
    .token.attr-name {
      color: #9333ea !important;
    }
    .token.attr-value {
      color: #059669 !important;
    }
    .markdown table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
    }
    .markdown th {
      background: #f9fafb;
      color: #111827;
      font-weight: 600;
      padding: 10px 12px;
      text-align: left;
      border: 1px solid #e5e7eb;
    }
    .markdown td {
      padding: 10px 12px;
      border: 1px solid #e5e7eb;
      color: #4b5563;
    }
    .dumi-default-footer {
      display: none !important;
    }
    [class*="decoration"],
    [class*="Decoration"] {
      display: none !important;
    }
    /* 暗色模式全局适配 */
    [data-theme="dark"] .dumi-default-sidebar,
    html[data-prefers-color="dark"] .dumi-default-sidebar {
      background: #111827 !important;
      border-right-color: #374151 !important;
    }
    [data-theme="dark"] .dumi-default-sidebar a,
    html[data-prefers-color="dark"] .dumi-default-sidebar a {
      color: #9ca3af !important;
    }
    [data-theme="dark"] .dumi-default-sidebar a:hover,
    [data-theme="dark"] .dumi-default-sidebar a.active,
    html[data-prefers-color="dark"] .dumi-default-sidebar a:hover,
    html[data-prefers-color="dark"] .dumi-default-sidebar a.active {
      color: #10b981 !important;
    }
    [data-theme="dark"] .markdown pre,
    html[data-prefers-color="dark"] .markdown pre {
      background: #1f2937 !important;
      border-color: #374151 !important;
    }
    [data-theme="dark"] .markdown pre code,
    html[data-prefers-color="dark"] .markdown pre code {
      color: #e5e7eb !important;
    }
    [data-theme="dark"] .dumi-default-source-code,
    html[data-prefers-color="dark"] .dumi-default-source-code {
      background: #1f2937 !important;
      border-color: #374151 !important;
    }
    [data-theme="dark"] .dumi-default-source-code pre,
    html[data-prefers-color="dark"] .dumi-default-source-code pre {
      background: #1f2937 !important;
    }
    [data-theme="dark"] .dumi-default-source-code code,
    html[data-prefers-color="dark"] .dumi-default-source-code code {
      color: #e5e7eb !important;
    }
    [data-theme="dark"] .prism-code,
    html[data-prefers-color="dark"] .prism-code {
      background: #1f2937 !important;
    }
    [data-theme="dark"] .markdown code,
    html[data-prefers-color="dark"] .markdown code {
      background: #374151 !important;
      color: #34d399 !important;
    }
    [data-theme="dark"] .dumi-default-doc-layout-content,
    html[data-prefers-color="dark"] .dumi-default-doc-layout-content {
      background: #111827 !important;
    }
    [data-theme="dark"] .markdown,
    html[data-prefers-color="dark"] .markdown {
      color: #d1d5db !important;
    }
    [data-theme="dark"] .markdown h1,
    [data-theme="dark"] .markdown h2,
    [data-theme="dark"] .markdown h3,
    html[data-prefers-color="dark"] .markdown h1,
    html[data-prefers-color="dark"] .markdown h2,
    html[data-prefers-color="dark"] .markdown h3 {
      color: #f9fafb !important;
    }
    [data-theme="dark"] .markdown p,
    html[data-prefers-color="dark"] .markdown p {
      color: #9ca3af !important;
    }
    [data-theme="dark"] .markdown th,
    html[data-prefers-color="dark"] .markdown th {
      background: #1f2937 !important;
      border-color: #374151 !important;
      color: #f9fafb !important;
    }
    [data-theme="dark"] .markdown td,
    html[data-prefers-color="dark"] .markdown td {
      border-color: #374151 !important;
      color: #d1d5db !important;
    }
    /* 搜索栏暗色模式 */
    [data-theme="dark"] .dumi-default-search-bar,
    html[data-prefers-color="dark"] .dumi-default-search-bar {
      border-color: #374151 !important;
      outline: none !important;
    }
    [data-theme="dark"] .dumi-default-search-bar *,
    html[data-prefers-color="dark"] .dumi-default-search-bar * {
      outline: none !important;
      box-shadow: none !important;
    }
    [data-theme="dark"] .dumi-default-search-bar input,
    html[data-prefers-color="dark"] .dumi-default-search-bar input {
      color: #f9fafb !important;
      outline: none !important;
      box-shadow: none !important;
    }
    [data-theme="dark"] .dumi-default-search-bar input:focus,
    html[data-prefers-color="dark"] .dumi-default-search-bar input:focus {
      outline: none !important;
      box-shadow: none !important;
    }
    [data-theme="dark"] .dumi-default-search-bar input::placeholder,
    html[data-prefers-color="dark"] .dumi-default-search-bar input::placeholder {
      color: #6b7280 !important;
    }
    [data-theme="dark"] .dumi-default-search-bar svg,
    html[data-prefers-color="dark"] .dumi-default-search-bar svg {
      color: #6b7280 !important;
    }
    [data-theme="dark"] .dumi-default-search-bar:focus-within,
    html[data-prefers-color="dark"] .dumi-default-search-bar:focus-within {
      border-color: #10b981 !important;
      box-shadow: none !important;
      outline: none !important;
    }
    .dumi-default-search-bar input:focus-visible {
      outline: none !important;
      box-shadow: none !important;
    }
    [data-theme="dark"] .dumi-default-search-bar-input,
    html[data-prefers-color="dark"] .dumi-default-search-bar-input {
      border-color: #374151 !important;
      box-shadow: none !important;
      outline: none !important;
    }
    [data-theme="dark"] .dumi-default-search-popover,
    html[data-prefers-color="dark"] .dumi-default-search-popover {
      background: #1f2937 !important;
      border-color: #374151 !important;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
    }
    [data-theme="dark"] .dumi-default-search-empty,
    html[data-prefers-color="dark"] .dumi-default-search-empty {
      color: #6b7280 !important;
    }
    [data-theme="dark"] .dumi-default-search-result,
    html[data-prefers-color="dark"] .dumi-default-search-result {
      background: #1f2937 !important;
      border-color: #374151 !important;
    }
    [data-theme="dark"] .dumi-default-search-result li,
    html[data-prefers-color="dark"] .dumi-default-search-result li {
      border-color: #374151 !important;
    }
    [data-theme="dark"] .dumi-default-search-result li:hover,
    html[data-prefers-color="dark"] .dumi-default-search-result li:hover {
      background: #374151 !important;
    }
    [data-theme="dark"] .dumi-default-search-result a,
    html[data-prefers-color="dark"] .dumi-default-search-result a {
      color: #f9fafb !important;
    }
    [data-theme="dark"] [class*="search"] input:focus,
    html[data-prefers-color="dark"] [class*="search"] input:focus {
      outline: none !important;
      box-shadow: none !important;
    }
    `,
  ],
});
