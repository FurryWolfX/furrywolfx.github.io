import{_ as s,o as a,c as e,V as n}from"./chunks/framework.4acca30d.js";const u=JSON.parse('{"title":"PHP 如何关闭 notice 级别的错误提示","description":"","frontmatter":{"title":"PHP 如何关闭 notice 级别的错误提示","catalog":true,"date":"2016-10-04T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["PHP"]},"headers":[],"relativePath":"docs/backend/close-notice-in-php.md","filePath":"docs/backend/close-notice-in-php.md"}'),o={name:"docs/backend/close-notice-in-php.md"},l=n(`<h1 id="php-如何关闭-notice-级别的错误提示" tabindex="-1">PHP 如何关闭 notice 级别的错误提示 <a class="header-anchor" href="#php-如何关闭-notice-级别的错误提示" aria-label="Permalink to &quot;PHP 如何关闭 notice 级别的错误提示&quot;">​</a></h1><h2 id="方法-1" tabindex="-1">方法 1 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法 1&quot;">​</a></h2><p>在 <code>php.ini</code> 文件中改动 <code>error_reporting</code></p><p>改为：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">error_reporting</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">E_ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">~E_NOTICE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="方法-2" tabindex="-1">方法 2 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法 2&quot;">​</a></h2><p>如果你不能操作<code>php.ini</code>文件，你可以使用如下方法</p><p>在你想禁止 <code>notice</code> 错误提示的页面中加入如下代码：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">errors</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">except</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">E_NOTICE</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">error_reporting(E_ALL^E_NOTICE</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9),p=[l];function t(r,c,i,d,h,C){return a(),e("div",null,p)}const b=s(o,[["render",t]]);export{u as __pageData,b as default};
