import{_ as a,c as i,a3 as n,o as e}from"./chunks/framework.CDetKDz4.js";const o=JSON.parse('{"title":"Manjaro 安装后的一些优化（待添加）","description":"","frontmatter":{"title":"Manjaro 安装后的一些优化（待添加）","catalog":true,"date":"2017-11-20T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Manjaro","Linux"]},"headers":[],"relativePath":"docs/os/linux-manjaro-optimize.md","filePath":"docs/os/linux-manjaro-optimize.md"}'),l={name:"docs/os/linux-manjaro-optimize.md"};function t(p,s,h,r,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="manjaro-安装后的一些优化-待添加" tabindex="-1">Manjaro 安装后的一些优化（待添加） <a class="header-anchor" href="#manjaro-安装后的一些优化-待添加" aria-label="Permalink to &quot;Manjaro 安装后的一些优化（待添加）&quot;">​</a></h1><h2 id="添加-archlinuxcn-源" tabindex="-1">添加 archlinuxCN 源 <a class="header-anchor" href="#添加-archlinuxcn-源" aria-label="Permalink to &quot;添加 archlinuxCN 源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pacman.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在文件底部加入如下几行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[archlinuxcn]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigLevel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Optional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TrustAll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://repo.archlinuxcn.org/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或者（USTC）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[archlinuxcn]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigLevel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Optional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TrustAll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.ustc.edu.cn/archlinuxcn/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或者（163）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[archlinuxcn]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SigLevel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Optional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TrustAll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://mirrors.163.com/archlinux-cn/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="pacman-基本用法" tabindex="-1">pacman 基本用法 <a class="header-anchor" href="#pacman-基本用法" aria-label="Permalink to &quot;pacman 基本用法&quot;">​</a></h2><p><a href="https://site.douban.com/234383/widget/notes/16373827/note/528386068/" target="_blank" rel="noreferrer">https://site.douban.com/234383/widget/notes/16373827/note/528386068/</a></p><h2 id="开启-ssh" tabindex="-1">开启 ssh <a class="header-anchor" href="#开启-ssh" aria-label="Permalink to &quot;开启 ssh&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装-rz-sz" tabindex="-1">安装 rz/sz <a class="header-anchor" href="#安装-rz-sz" aria-label="Permalink to &quot;安装 rz/sz&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lrzsz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装中文输入法" tabindex="-1">安装中文输入法 <a class="header-anchor" href="#安装中文输入法" aria-label="Permalink to &quot;安装中文输入法&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx-sogoupinyin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx-im</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcitx-configtool</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.xprofile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>追加：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GTK_IM_MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fcitx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QT_IM_MODULE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fcitx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> XMODIFIERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@im=fcitx&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,19)]))}const u=a(l,[["render",t]]);export{o as __pageData,u as default};
