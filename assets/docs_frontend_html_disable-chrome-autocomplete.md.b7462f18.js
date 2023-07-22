import{_ as s,o as a,c as o,V as n}from"./chunks/framework.4acca30d.js";const u=JSON.parse('{"title":"如何禁止 (表单) 用户名、密码自动填充","description":"","frontmatter":{"title":"如何禁止 (表单) 用户名、密码自动填充","catalog":true,"date":"2016-09-02T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["HTML"]},"headers":[],"relativePath":"docs/frontend/html/disable-chrome-autocomplete.md","filePath":"docs/frontend/html/disable-chrome-autocomplete.md"}'),l={name:"docs/frontend/html/disable-chrome-autocomplete.md"},e=n(`<h1 id="如何禁止-表单-用户名、密码自动填充" tabindex="-1">如何禁止 (表单) 用户名、密码自动填充 <a class="header-anchor" href="#如何禁止-表单-用户名、密码自动填充" aria-label="Permalink to &quot;如何禁止 (表单) 用户名、密码自动填充&quot;">​</a></h1><p>HTML 登录表单经常被自动填充，有的甚至用户从来没有登录过的网站也会有自动填充，甚是让人讨厌。</p><p>Mozilla developer documentation 建议使用表单设置属性 <code>tautocomplete=&quot;off&quot;</code> 来阻止浏览器从 cache 获取数据填充登录表单。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autocomplete</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是这种方案不兼容某些 Chrome、Firefox。</p><p>最终决定使用使用隐藏 <code>input</code> 来接受浏览器自动填充，这样不会影响用户体验，也可以兼容所有浏览器。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">display:none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- for disable autocomplete on chrome --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autocomplete</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,7),p=[e];function t(c,r,D,F,y,i){return a(),o("div",null,p)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
