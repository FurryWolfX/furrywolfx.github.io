import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.a1e87edc.js";const b=JSON.parse('{"title":"NodeJS 处理二进制","description":"","frontmatter":{"title":"NodeJS 处理二进制","catalog":true,"date":"2020-07-08T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["NodeJS","JavaScript"]},"headers":[],"relativePath":"docs/nodejs/bin-in-nodejs.md","filePath":"docs/nodejs/bin-in-nodejs.md"}'),l={name:"docs/nodejs/bin-in-nodejs.md"},p=o(`<h1 id="nodejs-处理二进制" tabindex="-1">NodeJS 处理二进制 <a class="header-anchor" href="#nodejs-处理二进制" aria-label="Permalink to &quot;NodeJS 处理二进制&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将base64编码的二进制报文解析成buffer</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;KA==&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;base64&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 将buffer解析成hex字符串</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hex&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 将hex字符串解析成10进制整数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(s, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将base64编码的二进制报文解析成buffer</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;KA==&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;base64&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 将buffer解析成hex字符串</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">s</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hex&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 将hex字符串解析成10进制整数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(s, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),e=[p];function t(c,r,y,E,i,d){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{b as __pageData,F as default};