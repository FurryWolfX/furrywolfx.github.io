import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a5795de3.js";const b=JSON.parse('{"title":"seajs 最常用 7 个方法","description":"","frontmatter":{"title":"seajs 最常用 7 个方法","catalog":true,"date":"2015-02-19T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript"]},"headers":[],"relativePath":"docs/frontend/javascript/7-useful-funs-in-seajs.md","filePath":"docs/frontend/javascript/7-useful-funs-in-seajs.md"}'),l={name:"docs/frontend/javascript/7-useful-funs-in-seajs.md"},o=p(`<h1 id="seajs-最常用-7-个方法" tabindex="-1">seajs 最常用 7 个方法 <a class="header-anchor" href="#seajs-最常用-7-个方法" aria-label="Permalink to &quot;seajs 最常用 7 个方法&quot;">​</a></h1><p><code>SeaJS</code> 是一个模块加载器，模块加载器需要实现两个基本功能：</p><ul><li>实现模块定义规范，这是模块系统的基础。</li><li>模块系统的启动与运行。</li></ul><h2 id="seajs-config" tabindex="-1">seajs.config <a class="header-anchor" href="#seajs-config" aria-label="Permalink to &quot;seajs.config&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">seajs.</span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置路径，方便跨项目调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  paths: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path1: </span><span style="color:#9ECBFF;">&quot;....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path2: </span><span style="color:#9ECBFF;">&quot;....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置别名，方便调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    class1: </span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    class2: </span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">seajs.</span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置路径，方便跨项目调用</span></span>
<span class="line"><span style="color:#24292E;">  paths: {</span></span>
<span class="line"><span style="color:#24292E;">    path1: </span><span style="color:#032F62;">&quot;....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path2: </span><span style="color:#032F62;">&quot;....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置别名，方便调用</span></span>
<span class="line"><span style="color:#24292E;">  alias: {</span></span>
<span class="line"><span style="color:#24292E;">    class1: </span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    class2: </span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="seajs-use" tabindex="-1">seajs.use <a class="header-anchor" href="#seajs-use" aria-label="Permalink to &quot;seajs.use&quot;">​</a></h2><p>用来在页面中加载一个或多个模块</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 加载一个模块</span></span>
<span class="line"><span style="color:#E1E4E8;">seajs.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./a&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载一个模块，在加载完成时，执行回调</span></span>
<span class="line"><span style="color:#E1E4E8;">seajs.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载多个模块，在加载完成时，执行回调</span></span>
<span class="line"><span style="color:#E1E4E8;">seajs.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;./a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./b&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  b.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 加载一个模块</span></span>
<span class="line"><span style="color:#24292E;">seajs.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./a&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载一个模块，在加载完成时，执行回调</span></span>
<span class="line"><span style="color:#24292E;">seajs.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./a&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  a.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载多个模块，在加载完成时，执行回调</span></span>
<span class="line"><span style="color:#24292E;">seajs.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;./a&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./b&quot;</span><span style="color:#24292E;">], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  a.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  b.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="define" tabindex="-1">define <a class="header-anchor" href="#define" aria-label="Permalink to &quot;define&quot;">​</a></h2><p>用来定义模块。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模块代码</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">require</span><span style="color:#24292E;">, </span><span style="color:#E36209;">exports</span><span style="color:#24292E;">, </span><span style="color:#E36209;">module</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模块代码</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="require" tabindex="-1">require <a class="header-anchor" href="#require" aria-label="Permalink to &quot;require&quot;">​</a></h2><p>用来获取指定模块的接口</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取模块a的接口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./a&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 调用模块a的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  a.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">require</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取模块a的接口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./a&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 调用模块a的方法</span></span>
<span class="line"><span style="color:#24292E;">  a.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="require-async" tabindex="-1">require.async <a class="header-anchor" href="#require-async" aria-label="Permalink to &quot;require.async&quot;">​</a></h2><p>用来在模块内部异步加载一个或多个模块</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 异步加载一个模块，在加载完成时执行回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  require.</span><span style="color:#B392F0;">async</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./b&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    b.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 异步加载多个模块，在加载完成时执行回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  require.</span><span style="color:#B392F0;">async</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;./c&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./d&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    c.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    d.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">require</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 异步加载一个模块，在加载完成时执行回调</span></span>
<span class="line"><span style="color:#24292E;">  require.</span><span style="color:#6F42C1;">async</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./b&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    b.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 异步加载多个模块，在加载完成时执行回调</span></span>
<span class="line"><span style="color:#24292E;">  require.</span><span style="color:#6F42C1;">async</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;./c&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./d&quot;</span><span style="color:#24292E;">], </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">c</span><span style="color:#24292E;">, </span><span style="color:#E36209;">d</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    c.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    d.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="exports" tabindex="-1">exports <a class="header-anchor" href="#exports" aria-label="Permalink to &quot;exports&quot;">​</a></h2><p>用来在模块内部对外提供接口</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对外提供foo属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对外提供doSomething方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {};</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">require</span><span style="color:#24292E;">, </span><span style="color:#E36209;">exports</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对外提供foo属性</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对外提供doSomething方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {};</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="module-exports" tabindex="-1">module.exports <a class="header-anchor" href="#module-exports" aria-label="Permalink to &quot;module.exports&quot;">​</a></h2><p>用来在模块内部对外提供接口</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">require</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exports</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">module</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对外提供接口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">doSomething</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">require</span><span style="color:#24292E;">, </span><span style="color:#E36209;">exports</span><span style="color:#24292E;">, </span><span style="color:#E36209;">module</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对外提供接口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">doSomething</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {},</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,23),e=[o];function c(r,t,E,i,y,u){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{b as __pageData,F as default};
