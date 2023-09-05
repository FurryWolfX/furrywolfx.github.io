import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.a5795de3.js";const _=JSON.parse('{"title":"PHP 如何关闭 notice 级别的错误提示","description":"","frontmatter":{"title":"PHP 如何关闭 notice 级别的错误提示","catalog":true,"date":"2016-10-04T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["PHP"]},"headers":[],"relativePath":"docs/backend/close-notice-in-php.md","filePath":"docs/backend/close-notice-in-php.md"}'),o={name:"docs/backend/close-notice-in-php.md"},p=n(`<h1 id="php-如何关闭-notice-级别的错误提示" tabindex="-1">PHP 如何关闭 notice 级别的错误提示 <a class="header-anchor" href="#php-如何关闭-notice-级别的错误提示" aria-label="Permalink to &quot;PHP 如何关闭 notice 级别的错误提示&quot;">​</a></h1><h2 id="方法-1" tabindex="-1">方法 1 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法 1&quot;">​</a></h2><p>在 <code>php.ini</code> 文件中改动 <code>error_reporting</code></p><p>改为：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">error_reporting</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">E_ALL</span><span style="color:#E1E4E8;"> &amp; </span><span style="color:#B392F0;">~E_NOTICE</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">error_reporting</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">E_ALL</span><span style="color:#24292E;"> &amp; </span><span style="color:#6F42C1;">~E_NOTICE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="方法-2" tabindex="-1">方法 2 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法 2&quot;">​</a></h2><p>如果你不能操作<code>php.ini</code>文件，你可以使用如下方法</p><p>在你想禁止 <code>notice</code> 错误提示的页面中加入如下代码：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Report</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">errors</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">except</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">E_NOTICE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">/</span></span>
<span class="line"><span style="color:#B392F0;">error_reporting(E_ALL^E_NOTICE</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Report</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">errors</span><span style="color:#24292E;"> </span><span style="color:#032F62;">except</span><span style="color:#24292E;"> </span><span style="color:#032F62;">E_NOTICE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">/</span></span>
<span class="line"><span style="color:#6F42C1;">error_reporting(E_ALL^E_NOTICE</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9),l=[p];function r(t,c,i,d,E,h){return a(),e("div",null,l)}const u=s(o,[["render",r]]);export{_ as __pageData,u as default};
