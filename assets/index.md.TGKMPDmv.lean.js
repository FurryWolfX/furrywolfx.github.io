import{_ as a,c as i,a3 as n,o as l}from"./chunks/framework.CDetKDz4.js";const o=JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Wolfx's Notebook","text":"","tagline":"Keep coding keep living. Stay hungry stay foolish.","actions":[{"theme":"brand","text":"My Notes","link":"/docs/"},{"theme":"alt","text":"About This Site","link":"/pages/about"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md"}`),e={name:"index.md"};function p(t,s,h,k,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<div class="language-asm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">section .rodata</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">msg:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .ascii  &quot;Hello, world\\n&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .global _start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rdx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $msg, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rsi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rdx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    syscall</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rdx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    syscall</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,1)]))}const g=a(e,[["render",p]]);export{o as __pageData,g as default};