import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.5c044c0e.js";const C=JSON.parse('{"title":"Linux VPN Server 异地组网","description":"","frontmatter":{"title":"Linux VPN Server 异地组网","catalog":true,"date":"2020-01-05T21:10:00.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-vpn.md","filePath":"docs/os/linux-vpn.md"}'),p={name:"docs/os/linux-vpn.md"},o=n(`<h1 id="linux-vpn-server-异地组网" tabindex="-1">Linux VPN Server 异地组网 <a class="header-anchor" href="#linux-vpn-server-异地组网" aria-label="Permalink to &quot;Linux VPN Server 异地组网&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>虚拟专用网（VPN），是一种常用于连接中、大型企业或团体与团体间的私人网络的通讯方法。虚拟私人网络的讯息透过公用的网络架构来传送内联网的网络讯息。它利用已加密的通道协议来达到保密、发送端认证、消息准确性等私人消息安全效果。这种技术可以用不安全的网络来发送可靠、安全的消息。</p></div><h2 id="docker-版安装" tabindex="-1">docker 版安装 <a class="header-anchor" href="#docker-版安装" aria-label="Permalink to &quot;docker 版安装&quot;">​</a></h2><p><a href="https://hub.docker.com/r/siomiz/softethervpn" target="_blank" rel="noreferrer">https://hub.docker.com/r/siomiz/softethervpn</a></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cap-add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NET_ADMIN</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#9ECBFF;">:500/udp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4500</span><span style="color:#9ECBFF;">:4500/udp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1701</span><span style="color:#9ECBFF;">:1701/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1194</span><span style="color:#9ECBFF;">:1194/udp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5555</span><span style="color:#9ECBFF;">:5555/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PSK=共享密码</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">USERNAME=用户名</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PASSWORD=密码</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">siomiz/softethervpn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cap-add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NET_ADMIN</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#032F62;">:500/udp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4500</span><span style="color:#032F62;">:4500/udp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1701</span><span style="color:#032F62;">:1701/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1194</span><span style="color:#032F62;">:1194/udp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5555</span><span style="color:#032F62;">:5555/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PSK=共享密码</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">USERNAME=用户名</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PASSWORD=密码</span><span style="color:#24292E;"> </span><span style="color:#032F62;">siomiz/softethervpn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常规安装并启动" tabindex="-1">常规安装并启动 <a class="header-anchor" href="#常规安装并启动" aria-label="Permalink to &quot;常规安装并启动&quot;">​</a></h2><p>在 softether 官网下载 Linux Server 版压缩包。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zxvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./xxx.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zxvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./xxx.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装编译需要的依赖</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cmake</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-c++</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-g77</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flex</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bison</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libtool</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libtool-libs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autoconf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kernel-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">patch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">crontabs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libjpeg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libjpeg-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libpng</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libpng-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libpng10</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libpng10-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libxml2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libxml2-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">glib2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">glib2-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unzip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bzip2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bzip2-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libevent</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libevent-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncurses</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncurses-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libcurl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libcurl-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">e2fsprogs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">e2fsprogs-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">krb5</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">krb5-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libidn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libidn-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssl-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim-minimal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gettext</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gettext-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncurses-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gmp-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pspell-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unzip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libcap</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diffutils</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ca-certificates</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">net-tools</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libc-client-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">psmisc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libXpm-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git-core</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">c-ares-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libicu-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libxslt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libxslt-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expat-devel</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cmake</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-c++</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-g77</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flex</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bison</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libtool</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libtool-libs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autoconf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kernel-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">patch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">crontabs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libjpeg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libjpeg-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libpng</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libpng-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libpng10</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libpng10-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libxml2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libxml2-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">glib2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">glib2-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unzip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bzip2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bzip2-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libevent</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libevent-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncurses</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncurses-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libcurl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libcurl-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">e2fsprogs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">e2fsprogs-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">krb5</span><span style="color:#24292E;"> </span><span style="color:#032F62;">krb5-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libidn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libidn-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssl-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim-minimal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gettext</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gettext-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncurses-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gmp-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pspell-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unzip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libcap</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diffutils</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ca-certificates</span><span style="color:#24292E;"> </span><span style="color:#032F62;">net-tools</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libc-client-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">psmisc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libXpm-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git-core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">c-ares-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libicu-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libxslt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libxslt-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expat-devel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一路 yes 之后，会生成 <code>vpnserver</code> 的可执行文件。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vpnserver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#开启服务</span></span>
<span class="line"><span style="color:#B392F0;">./vpnserver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">#关闭服务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vpnserver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">#开启服务</span></span>
<span class="line"><span style="color:#6F42C1;">./vpnserver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;">     </span><span style="color:#6A737D;">#关闭服务</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="设置远程管理密码" tabindex="-1">设置远程管理密码 <a class="header-anchor" href="#设置远程管理密码" aria-label="Permalink to &quot;设置远程管理密码&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vpncmd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vpncmd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入交互环境后，用 <code>ServerPasswordSet</code> 设置密码。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">VPN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Serve</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">ServerPasswordSet</span></span>
<span class="line"><span style="color:#B392F0;">ServerPasswordSet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">command</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VPN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Administrator</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Password</span></span>
<span class="line"><span style="color:#B392F0;">Please</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enter</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">password.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">To</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cancel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">press</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Ctrl+D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">key.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Password:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">****************</span></span>
<span class="line"><span style="color:#B392F0;">Confirm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">input:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">****************</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">The</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">command</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">completed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">successfully.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">VPN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Serve</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">ServerPasswordSet</span></span>
<span class="line"><span style="color:#6F42C1;">ServerPasswordSet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">command</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VPN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Administrator</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Password</span></span>
<span class="line"><span style="color:#6F42C1;">Please</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">To</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cancel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">press</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Ctrl+D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">key.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Password:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">****************</span></span>
<span class="line"><span style="color:#6F42C1;">Confirm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">input:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">****************</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">The</span><span style="color:#24292E;"> </span><span style="color:#032F62;">command</span><span style="color:#24292E;"> </span><span style="color:#032F62;">completed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">successfully.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后可以通过远程配置工具进行图形化配置了。</p>`,18),e=[o];function r(c,t,E,y,F,i){return a(),l("div",null,e)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
