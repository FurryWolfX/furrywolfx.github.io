import{_ as i,c as s,a3 as e,o as n}from"./chunks/framework.CDetKDz4.js";const c=JSON.parse('{"title":"Linux zip 解压文件名乱码解决方法","description":"","frontmatter":{"title":"Linux zip 解压文件名乱码解决方法","catalog":true,"date":"2016-08-22T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-zip-unreadable.md","filePath":"docs/os/linux-zip-unreadable.md"}'),t={name:"docs/os/linux-zip-unreadable.md"};function l(r,a,p,d,h,o){return n(),s("div",null,a[0]||(a[0]=[e('<h1 id="linux-zip-解压文件名乱码解决方法" tabindex="-1">Linux zip 解压文件名乱码解决方法 <a class="header-anchor" href="#linux-zip-解压文件名乱码解决方法" aria-label="Permalink to &quot;Linux zip 解压文件名乱码解决方法&quot;">​</a></h1><h2 id="控制输出编码" tabindex="-1">控制输出编码 <a class="header-anchor" href="#控制输出编码" aria-label="Permalink to &quot;控制输出编码&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CP936</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.zip</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## 用 GBK, GB18030 也可以</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-unar-解压" tabindex="-1">安装 unar 解压 <a class="header-anchor" href="#安装-unar-解压" aria-label="Permalink to &quot;安装 unar 解压&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5)]))}const k=i(t,[["render",l]]);export{c as __pageData,k as default};