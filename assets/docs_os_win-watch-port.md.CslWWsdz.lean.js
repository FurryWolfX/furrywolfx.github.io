import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CDetKDz4.js";const C=JSON.parse('{"title":"Windows 上如何查看端口占用情况","description":"","frontmatter":{"title":"Windows 上如何查看端口占用情况","catalog":true,"date":"2016-10-13T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Windows"]},"headers":[],"relativePath":"docs/os/win-watch-port.md","filePath":"docs/os/win-watch-port.md"}'),h={name:"docs/os/win-watch-port.md"};function p(t,s,k,e,F,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="windows-上如何查看端口占用情况" tabindex="-1">Windows 上如何查看端口占用情况 <a class="header-anchor" href="#windows-上如何查看端口占用情况" aria-label="Permalink to &quot;Windows 上如何查看端口占用情况&quot;">​</a></h1><p>我们在启动应用的时候发现系统需要的端口被别的程序占用，如何知道谁占有了我们需要的端口，很多人都比较头疼，下面就介绍一种非常简单的方法，希望对大家有用</p><p>假如我们需要确定谁占用了我们的 9050 端口</p><p>在 windows 命令行窗口下执行：</p><h2 id="查看所有的端口占用情况" tabindex="-1">查看所有的端口占用情况 <a class="header-anchor" href="#查看所有的端口占用情况" aria-label="Permalink to &quot;查看所有的端口占用情况&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ano</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  协议</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    本地地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     外部地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               状态</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:1434</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       3236</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:5679</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       4168</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:7438</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       4168</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:8015</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       1456</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:139</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:1957</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     220.181.31.225:443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     3068</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:2020</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     183.62.96.189:1522</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     1456</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:2927</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     117.79.91.18:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4732</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:2929</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     117.79.91.18:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4732</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:2930</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     117.79.91.18:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4732</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    192.168.3.230:2931</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     117.79.91.18:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4732</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="查看指定端口的占用情况" tabindex="-1">查看指定端口的占用情况 <a class="header-anchor" href="#查看指定端口的占用情况" aria-label="Permalink to &quot;查看指定端口的占用情况&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -aon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findstr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;9050&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  协议</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    本地地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     外部地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               状态</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:9050</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         0.0.0.0:0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              LISTENING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       2016</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>P: 看到了吗，端口被进程号为 2016 的进程占用，继续执行下面命令： （也可以去任务管理器中查看 pid 对应的进程）</p><h2 id="查看-pid-对应的进程" tabindex="-1">查看 PID 对应的进程 <a class="header-anchor" href="#查看-pid-对应的进程" aria-label="Permalink to &quot;查看 PID 对应的进程&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tasklist</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findstr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2016&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 映像名称</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       PID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 会话名</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              会话##</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       内存使用</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =========================</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ========</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  tor.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                     2016</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Console</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     16,064</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> K</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>P: 很清楚吧，tor 占用了你的端口。</p><h2 id="结束该进程" tabindex="-1">结束该进程 <a class="header-anchor" href="#结束该进程" aria-label="Permalink to &quot;结束该进程&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">taskkill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /im</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tor.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14)]))}const g=i(h,[["render",p]]);export{C as __pageData,g as default};
