import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4acca30d.js";const e="/assets/d588c5a4-b716-469d-bdd3-6012d8956c01.adddea75.png",d=JSON.parse('{"title":"Flutter 学习笔记","description":"","frontmatter":{"title":"Flutter 学习笔记","catalog":true,"date":"2020-08-10T13:59:00.000Z","subtitle":null,"header-img":null,"tags":["Dart","Flutter"]},"headers":[],"relativePath":"docs/frontend/hybird/flutter-note.md","filePath":"docs/frontend/hybird/flutter-note.md"}'),p={name:"docs/frontend/hybird/flutter-note.md"},o=l(`<h1 id="flutter-学习笔记" tabindex="-1">Flutter 学习笔记 <a class="header-anchor" href="#flutter-学习笔记" aria-label="Permalink to &quot;Flutter 学习笔记&quot;">​</a></h1><h2 id="安装开发环境" tabindex="-1">安装开发环境 <a class="header-anchor" href="#安装开发环境" aria-label="Permalink to &quot;安装开发环境&quot;">​</a></h2><h3 id="用-git-下载-sdk" tabindex="-1">用 git 下载 SDK <a class="header-anchor" href="#用-git-下载-sdk" aria-label="Permalink to &quot;用 git 下载 SDK&quot;">​</a></h3><p>国内镜像 <code>https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git</code></p><h3 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h3><p><strong>（Linux 下开发 Android 为例）</strong></p><p>在 <code>~/.profile</code> 加入下面代码</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## flutter</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$PATH</span><span style="color:#C3E88D;">:/media/wolfx/HDD/SDK/Flutter/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## android_sdk</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ANDROID_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/media/wolfx/HDD/android/sdk</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=\${</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ANDROID_HOME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/tools</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">## windows %ANDROID_HOME%\\tools</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=\${</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ANDROID_HOME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/platform-tools</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## windows %ANDROID_HOME%\\platform-tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## flutter-mirror in China</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PUB_HOSTED_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://pub.flutter-io.cn</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> FLUTTER_STORAGE_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://storage.flutter-io.cn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>重启电脑</p><h3 id="检查是否配置正常" tabindex="-1">检查是否配置正常 <a class="header-anchor" href="#检查是否配置正常" aria-label="Permalink to &quot;检查是否配置正常&quot;">​</a></h3><p>运行 <code>flutter doctor</code> 输出如下（正常）：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wolfx@wolfx-linux:~/Desktop$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doctor</span></span>
<span class="line"><span style="color:#FFCB6B;">Doctor</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">summary</span><span style="color:#A6ACCD;"> (to </span><span style="color:#C3E88D;">see</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">details,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doctor</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;">):</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">✓</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Flutter </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Channel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beta,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v0.11.9,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Linux,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">locale</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zh_CN.UTF-8</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">✓</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Android toolchain - develop </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> Android devices </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Android</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SDK</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28.0</span><span style="color:#C3E88D;">.3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">✓</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Android Studio </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[!]</span><span style="color:#A6ACCD;"> VS Code </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.29</span><span style="color:#C3E88D;">.1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[!]</span><span style="color:#A6ACCD;"> Connected device</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devices</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Doctor</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">issues</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">categories.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果有异常，根据提示依次解决</p><h3 id="开启桌面级应用支持" tabindex="-1">开启桌面级应用支持 <a class="header-anchor" href="#开启桌面级应用支持" aria-label="Permalink to &quot;开启桌面级应用支持&quot;">​</a></h3><p><code>flutter config --enable-linux-desktop</code> to enable Linux. <code>flutter config --enable-macos-desktop</code> to enable macOS. <code>flutter config --enable-windows-desktop</code> to enable Windows.</p><p>执行 <code>flutter devices</code></p><p><img src="`+e+`" alt=""></p><h3 id="桌面级应用的创建" tabindex="-1">桌面级应用的创建 <a class="header-anchor" href="#桌面级应用的创建" aria-label="Permalink to &quot;桌面级应用的创建&quot;">​</a></h3><p>用于桌面的 Flutter 仍然是一个实验特性，<code>flutter create</code> 无法直接创建。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/google/flutter-desktop-embedding.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flutter-desktop-embedding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="预下载构建工具" tabindex="-1">预下载构建工具 <a class="header-anchor" href="#预下载构建工具" aria-label="Permalink to &quot;预下载构建工具&quot;">​</a></h3><p>桌面系统特定的构建工具在默认情况下是不下载的，我们可以预下载它。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">precache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--macos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="入口函数" tabindex="-1">入口函数 <a class="header-anchor" href="#入口函数" aria-label="Permalink to &quot;入口函数&quot;">​</a></h2><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">runApp</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="定义组件" tabindex="-1">定义组件 <a class="header-anchor" href="#定义组件" aria-label="Permalink to &quot;定义组件&quot;">​</a></h2><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyWidgetName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatelessWidget</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyHomePage</span><span style="color:#A6ACCD;">(title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;Flutter Demo Home Page&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyHomePage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatefulWidget</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">MyHomePage</span><span style="color:#A6ACCD;">({</span><span style="color:#FFCB6B;">Key</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title}) </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> super(key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> key)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> title</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="flutter-获取屏幕宽度高度-通知栏高度等屏幕信息" tabindex="-1">flutter 获取屏幕宽度高度 通知栏高度等屏幕信息 <a class="header-anchor" href="#flutter-获取屏幕宽度高度-通知栏高度等屏幕信息" aria-label="Permalink to &quot;flutter 获取屏幕宽度高度 通知栏高度等屏幕信息&quot;">​</a></h2><p><a href="https://blog.csdn.net/u011272795/article/details/82707645" target="_blank" rel="noreferrer">https://blog.csdn.net/u011272795/article/details/82707645</a></p><h2 id="两种内置的路由跳转方式" tabindex="-1">两种内置的路由跳转方式 <a class="header-anchor" href="#两种内置的路由跳转方式" aria-label="Permalink to &quot;两种内置的路由跳转方式&quot;">​</a></h2><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:flutter/material.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:flutter/cupertino.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Utils</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/// 用于简化路由构建（安卓MD风格）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialPageRoute</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMaterialPageRoute</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> myWidget</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> fullscreenDialog]</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialPageRoute</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      builder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> myWidget</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      fullscreenDialog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fullscreenDialog </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/// 用于简化路由构建（iOS风格）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CupertinoPageRoute</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCupertinoPageRoute</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> myWidget</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CupertinoPageRoute</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      builder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> myWidget</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>使用方式：</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#A6ACCD;">(context)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCupertinoPageRoute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyWidget</span><span style="color:#A6ACCD;">()))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="插件指南" tabindex="-1">插件指南 <a class="header-anchor" href="#插件指南" aria-label="Permalink to &quot;插件指南&quot;">​</a></h2><h3 id="推送" tabindex="-1">推送 <a class="header-anchor" href="#推送" aria-label="Permalink to &quot;推送&quot;">​</a></h3><p><a href="https://pub.flutter-io.cn/packages/flutter_umpush" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages/flutter_umpush</a></p><h3 id="微信相关" tabindex="-1">微信相关 <a class="header-anchor" href="#微信相关" aria-label="Permalink to &quot;微信相关&quot;">​</a></h3><p><a href="https://pub.flutter-io.cn/packages/flutter_wechat" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages/flutter_wechat</a></p><h3 id="qq-相关" tabindex="-1">QQ 相关 <a class="header-anchor" href="#qq-相关" aria-label="Permalink to &quot;QQ 相关&quot;">​</a></h3><p><a href="https://pub.flutter-io.cn/packages/flutter_qq" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages/flutter_qq</a></p><h3 id="轮播" tabindex="-1">轮播 <a class="header-anchor" href="#轮播" aria-label="Permalink to &quot;轮播&quot;">​</a></h3><p><a href="https://pub.flutter-io.cn/packages/flutter_swiper" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages/flutter_swiper</a><a href="https://github.com/serenader2014/flutter_carousel_slider" target="_blank" rel="noreferrer">https://github.com/serenader2014/flutter_carousel_slider</a></p><h3 id="视频播放" tabindex="-1">视频播放 <a class="header-anchor" href="#视频播放" aria-label="Permalink to &quot;视频播放&quot;">​</a></h3><p><a href="https://pub.dartlang.org/packages/video_player" target="_blank" rel="noreferrer">https://pub.dartlang.org/packages/video_player</a></p><h3 id="打开-url" tabindex="-1">打开 URL <a class="header-anchor" href="#打开-url" aria-label="Permalink to &quot;打开 URL&quot;">​</a></h3><p><a href="https://pub.flutter-io.cn/packages/url_launcher" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages/url_launcher</a></p><h2 id="学习资源" tabindex="-1">学习资源 <a class="header-anchor" href="#学习资源" aria-label="Permalink to &quot;学习资源&quot;">​</a></h2><p><a href="https://segmentfault.com/u/yuwanhenshu" target="_blank" rel="noreferrer">基础入门</a>, (适合初学者) <a href="https://www.jianshu.com/nb/28065966" target="_blank" rel="noreferrer">基础入门</a></p>`,50),t=[o];function r(c,i,C,y,D,A){return a(),n("div",null,t)}const b=s(p,[["render",r]]);export{d as __pageData,b as default};