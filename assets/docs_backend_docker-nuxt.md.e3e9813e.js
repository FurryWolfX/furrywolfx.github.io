import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a5795de3.js";const u=JSON.parse('{"title":"Docker 打包 NuxtJS","description":"","frontmatter":{"title":"Docker 打包 NuxtJS","catalog":true,"date":"2019-11-06T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Docker"],"recommend":"docker-note"},"headers":[],"relativePath":"docs/backend/docker-nuxt.md","filePath":"docs/backend/docker-nuxt.md"}'),p={name:"docs/backend/docker-nuxt.md"},o=l(`<h1 id="docker-打包-nuxtjs" tabindex="-1">Docker 打包 NuxtJS <a class="header-anchor" href="#docker-打包-nuxtjs" aria-label="Permalink to &quot;Docker 打包 NuxtJS&quot;">​</a></h1><h2 id="docker-镜像加速-linux-为例" tabindex="-1">Docker 镜像加速（Linux 为例） <a class="header-anchor" href="#docker-镜像加速-linux-为例" aria-label="Permalink to &quot;Docker 镜像加速（Linux 为例）&quot;">​</a></h2><p>创建 <code>/etc/docker/daemon.json</code> 的配置文件</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;registry-mirrors&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;https://registry.docker-cn.com&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;https://9zh8kwqg.mirror.aliyuncs.com&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;registry-mirrors&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;https://registry.docker-cn.com&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;https://9zh8kwqg.mirror.aliyuncs.com&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="编写-dockerfle" tabindex="-1">编写 dockerfle <a class="header-anchor" href="#编写-dockerfle" aria-label="Permalink to &quot;编写 dockerfle&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node:10.17.0</span></span>
<span class="line"><span style="color:#B392F0;">MAINTAINER</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wolfx</span></span>
<span class="line"><span style="color:#B392F0;">ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#B392F0;">ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HOST</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.0</span><span style="color:#9ECBFF;">.0.0</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"><span style="color:#B392F0;">COPY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"><span style="color:#B392F0;">WORKDIR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/app</span></span>
<span class="line"><span style="color:#B392F0;">EXPOSE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#6A737D;">## RUN npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://127.0.0.1:8889/repository/npm-proxy/</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#B392F0;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;npm&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;start&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node:10.17.0</span></span>
<span class="line"><span style="color:#6F42C1;">MAINTAINER</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wolfx</span></span>
<span class="line"><span style="color:#6F42C1;">ENV</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#6F42C1;">ENV</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HOST</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.0</span><span style="color:#032F62;">.0.0</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"><span style="color:#6F42C1;">COPY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"><span style="color:#6F42C1;">WORKDIR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/app</span></span>
<span class="line"><span style="color:#6F42C1;">EXPOSE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span></span>
<span class="line"><span style="color:#6A737D;">## RUN npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://127.0.0.1:8889/repository/npm-proxy/</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"><span style="color:#6F42C1;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;npm&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;start&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="如何构建" tabindex="-1">如何构建 <a class="header-anchor" href="#如何构建" aria-label="Permalink to &quot;如何构建&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">## build image</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-demo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">## build image</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-demo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="如何导出" tabindex="-1">如何导出 <a class="header-anchor" href="#如何导出" aria-label="Permalink to &quot;如何导出&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myimages.gz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-demo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myimages.gz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-demo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="如何导入" tabindex="-1">如何导入 <a class="header-anchor" href="#如何导入" aria-label="Permalink to &quot;如何导入&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myimages.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">load</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myimages.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">## serve at localhost:8080</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span><span style="color:#9ECBFF;">:3000</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-demo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">## serve at localhost:8080</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span><span style="color:#032F62;">:3000</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-demo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),e=[o];function r(c,t,i,y,E,d){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};
