import{_ as s,o,c as a,Q as n}from"./chunks/framework.a5795de3.js";const m=JSON.parse('{"title":"如何禁止 (表单) 用户名、密码自动填充","description":"","frontmatter":{"title":"如何禁止 (表单) 用户名、密码自动填充","catalog":true,"date":"2016-09-02T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["HTML"]},"headers":[],"relativePath":"docs/frontend/html/disable-chrome-autocomplete.md","filePath":"docs/frontend/html/disable-chrome-autocomplete.md"}'),l={name:"docs/frontend/html/disable-chrome-autocomplete.md"},p=n(`<h1 id="如何禁止-表单-用户名、密码自动填充" tabindex="-1">如何禁止 (表单) 用户名、密码自动填充 <a class="header-anchor" href="#如何禁止-表单-用户名、密码自动填充" aria-label="Permalink to &quot;如何禁止 (表单) 用户名、密码自动填充&quot;">​</a></h1><p>HTML 登录表单经常被自动填充，有的甚至用户从来没有登录过的网站也会有自动填充，甚是让人讨厌。</p><p>Mozilla developer documentation 建议使用表单设置属性 <code>tautocomplete=&quot;off&quot;</code> 来阻止浏览器从 cache 获取数据填充登录表单。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">autocomplete</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;off&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autocomplete</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是这种方案不兼容某些 Chrome、Firefox。</p><p>最终决定使用使用隐藏 <code>input</code> 来接受浏览器自动填充，这样不会影响用户体验，也可以兼容所有浏览器。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display:none&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- for disable autocomplete on chrome --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">autocomplete</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;off&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display:none&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- for disable autocomplete on chrome --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autocomplete</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;off&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,7),t=[p];function e(c,r,E,y,i,u){return o(),a("div",null,t)}const F=s(l,[["render",e]]);export{m as __pageData,F as default};