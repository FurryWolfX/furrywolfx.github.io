import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CJ5b-wv3.js";const C=JSON.parse('{"title":"Linux VPN Server 异地组网","description":"","frontmatter":{"title":"Linux VPN Server 异地组网","catalog":true,"date":"2020-01-05T21:10:00.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-vpn.md","filePath":"docs/os/linux-vpn.md"}'),e={name:"docs/os/linux-vpn.md"},l=n(`<h1 id="linux-vpn-server-异地组网" tabindex="-1">Linux VPN Server 异地组网 <a class="header-anchor" href="#linux-vpn-server-异地组网" aria-label="Permalink to &quot;Linux VPN Server 异地组网&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>虚拟专用网（VPN），是一种常用于连接中、大型企业或团体与团体间的私人网络的通讯方法。虚拟私人网络的讯息透过公用的网络架构来传送内联网的网络讯息。它利用已加密的通道协议来达到保密、发送端认证、消息准确性等私人消息安全效果。这种技术可以用不安全的网络来发送可靠、安全的消息。</p></div><h2 id="docker-版安装" tabindex="-1">docker 版安装 <a class="header-anchor" href="#docker-版安装" aria-label="Permalink to &quot;docker 版安装&quot;">​</a></h2><p><a href="https://hub.docker.com/r/siomiz/softethervpn" target="_blank" rel="noreferrer">https://hub.docker.com/r/siomiz/softethervpn</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cap-add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NET_ADMIN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 500:500/udp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4500:4500/udp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1701:1701/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1194:1194/udp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5555:5555/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PSK=共享密码</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USERNAME=用户名</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PASSWORD=密码</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> siomiz/softethervpn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常规安装并启动" tabindex="-1">常规安装并启动 <a class="header-anchor" href="#常规安装并启动" aria-label="Permalink to &quot;常规安装并启动&quot;">​</a></h2><p>在 softether 官网下载 Linux Server 版压缩包。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./xxx.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装编译需要的依赖</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-g77</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bison</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libtool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libtool-libs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autoconf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kernel-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> crontabs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libjpeg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libjpeg-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libpng</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libpng-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libpng10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libpng10-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gd-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxml2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxml2-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glib2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glib2-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bzip2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bzip2-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libevent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libevent-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ncurses</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ncurses-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libcurl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libcurl-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> e2fsprogs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> e2fsprogs-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> krb5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> krb5-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libidn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libidn-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim-minimal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gettext</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gettext-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ncurses-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gmp-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pspell-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libcap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diffutils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libc-client-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> psmisc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libXpm-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git-core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c-ares-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libicu-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxslt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxslt-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> expat-devel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一路 yes 之后，会生成 <code>vpnserver</code> 的可执行文件。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vpnserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #开启服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vpnserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #关闭服务</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="设置远程管理密码" tabindex="-1">设置远程管理密码 <a class="header-anchor" href="#设置远程管理密码" aria-label="Permalink to &quot;设置远程管理密码&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vpncmd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入交互环境后，用 <code>ServerPasswordSet</code> 设置密码。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VPN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Serve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ServerPasswordSet</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ServerPasswordSet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VPN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Administrator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Password</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> To</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cancel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> press</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ctrl+D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Password:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ****************</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Confirm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ****************</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> completed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后可以通过远程配置工具进行图形化配置了。</p>`,18),h=[l];function t(p,k,F,r,d,g){return a(),i("div",null,h)}const o=s(e,[["render",t]]);export{C as __pageData,o as default};
