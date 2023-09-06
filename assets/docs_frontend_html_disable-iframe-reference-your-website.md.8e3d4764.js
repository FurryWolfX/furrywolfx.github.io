import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.a5795de3.js";const _=JSON.parse('{"title":"禁止别人以 iframe 加载你的页面","description":"","frontmatter":{"title":"禁止别人以 iframe 加载你的页面","catalog":true,"date":"2016-09-21T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["HTML"]},"headers":[],"relativePath":"docs/frontend/html/disable-iframe-reference-your-website.md","filePath":"docs/frontend/html/disable-iframe-reference-your-website.md"}'),o={name:"docs/frontend/html/disable-iframe-reference-your-website.md"},l=n(`<h1 id="禁止别人以-iframe-加载你的页面" tabindex="-1">禁止别人以 iframe 加载你的页面 <a class="header-anchor" href="#禁止别人以-iframe-加载你的页面" aria-label="Permalink to &quot;禁止别人以 iframe 加载你的页面&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果页面不再 <code>iframe</code> 中，<code>window.parent.location</code> 的值是当前的 <code>window.location</code></p></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (window.location </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> window.parent.location) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.parent.location </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (window.location </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> window.parent.location) {</span></span>
<span class="line"><span style="color:#24292E;">  window.parent.location </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.location;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),t=[l];function i(r,c,p,d,m,f){return e(),s("div",null,t)}const b=a(o,[["render",i]]);export{_ as __pageData,b as default};