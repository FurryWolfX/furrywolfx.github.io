import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.CWaimgAe.js";const m=JSON.parse('{"title":"Docker开启Remote API 访问 2375端口","description":"","frontmatter":{"title":"Docker开启Remote API 访问 2375端口","catalog":true,"date":"2020-05-17T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Docker"],"recommend":"docker-note"},"headers":[],"relativePath":"docs/backend/docker-note-3.md","filePath":"docs/backend/docker-note-3.md"}'),n={name:"docs/backend/docker-note-3.md"},t=i(`<h1 id="docker-开启-remote-api-访问-2375-端口" tabindex="-1">Docker 开启 Remote API 访问 2375 端口 <a class="header-anchor" href="#docker-开启-remote-api-访问-2375-端口" aria-label="Permalink to &quot;Docker 开启 Remote API 访问 2375 端口&quot;">​</a></h1><h2 id="docker-常见端口" tabindex="-1">Docker 常见端口 <a class="header-anchor" href="#docker-常见端口" aria-label="Permalink to &quot;Docker 常见端口&quot;">​</a></h2><p>2375：未加密的 docker socket,远程 root 无密码访问主机</p><p>2376：tls 加密套接字,很可能这是您的 CI 服务器 4243 端口作为 https 443 端口的修改</p><p>2377：群集模式套接字,适用于群集管理器,不适用于 docker 客户端</p><p>5000：docker 注册服务</p><p>4789 和 7946：覆盖网络</p><h2 id="配置-2375-的方法" tabindex="-1">配置 2375 的方法 <a class="header-anchor" href="#配置-2375-的方法" aria-label="Permalink to &quot;配置 2375 的方法&quot;">​</a></h2><h3 id="方法一-修改-etc-default-docker" tabindex="-1">方法一：修改 /etc/default/docker <a class="header-anchor" href="#方法一-修改-etc-default-docker" aria-label="Permalink to &quot;方法一：修改 /etc/default/docker&quot;">​</a></h3><p>首先是怎么配置远程访问的 API：</p><p><code>sudo vim /etc/default/docker</code></p><p>加入下面一行</p><p><code>DOCKER_OPTS=&quot;-H tcp://0.0.0.0:2375&quot;</code></p><p>重启 <code>docker</code> 即可：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="方法二-修改-usr-lib-systemd-system-docker-service" tabindex="-1">方法二：修改 /usr/lib/systemd/system/docker.service <a class="header-anchor" href="#方法二-修改-usr-lib-systemd-system-docker-service" aria-label="Permalink to &quot;方法二：修改 /usr/lib/systemd/system/docker.service&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## vim /usr/lib/systemd/system/docker.service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/bin/dockerd</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp://0.0.0.0:2375</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unix://var/run/docker.sock</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="方法三-修改-etc-docker-daemon-json" tabindex="-1">方法三：修改 /etc/docker/daemon.json <a class="header-anchor" href="#方法三-修改-etc-docker-daemon-json" aria-label="Permalink to &quot;方法三：修改 /etc/docker/daemon.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hosts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tcp://0.0.0.0:2375&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unix://var/run/docker.sock&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>unix:///var/run/docker.sock</code>：unix socket，本地客户端将通过这个来连接 Docker Daemon。 <code>tcp://0.0.0.0:2375</code>：tcp socket，表示允许任何远程客户端通过 2375 端口连接 Docker Daemon。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,22),r=[t];function l(p,d,o,c,h,k){return a(),e("div",null,r)}const b=s(n,[["render",l]]);export{m as __pageData,b as default};
