import{_ as a,c as i,o as s,a4 as e}from"./chunks/framework.CWaimgAe.js";const b=JSON.parse('{"title":"Linux zip 解压文件名乱码解决方法","description":"","frontmatter":{"title":"Linux zip 解压文件名乱码解决方法","catalog":true,"date":"2016-08-22T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/zip-unreadable-code-on-linux.md","filePath":"docs/os/zip-unreadable-code-on-linux.md"}'),n={name:"docs/os/zip-unreadable-code-on-linux.md"},t=e('<h1 id="linux-zip-解压文件名乱码解决方法" tabindex="-1">Linux zip 解压文件名乱码解决方法 <a class="header-anchor" href="#linux-zip-解压文件名乱码解决方法" aria-label="Permalink to &quot;Linux zip 解压文件名乱码解决方法&quot;">​</a></h1><h2 id="控制输出编码" tabindex="-1">控制输出编码 <a class="header-anchor" href="#控制输出编码" aria-label="Permalink to &quot;控制输出编码&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CP936</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.zip</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## 用 GBK, GB18030 也可以</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-unar-解压" tabindex="-1">安装 unar 解压 <a class="header-anchor" href="#安装-unar-解压" aria-label="Permalink to &quot;安装 unar 解压&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5),l=[t];function r(d,p,o,h,c,u){return s(),i("div",null,l)}const _=a(n,[["render",r]]);export{b as __pageData,_ as default};
