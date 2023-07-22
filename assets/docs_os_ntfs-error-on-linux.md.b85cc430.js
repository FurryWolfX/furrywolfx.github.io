import{_ as s,o as a,c as n,V as e}from"./chunks/framework.4acca30d.js";const t="/assets/c8d70e44-ebe9-f673-0c7c-080563b2196c.ccb3b1f7.png",l="/assets/c109daf0-bf00-0cd9-e4a8-460c114524ca.b6682706.png",o="/assets/7df67bf7-dfb5-1205-f873-9f859baf286d.2aab37cd.png",g=JSON.parse('{"title":"双系统 Linux（Ubuntu）进入 Windows 的 NTFS 分区之挂载错误","description":"","frontmatter":{"title":"双系统 Linux（Ubuntu）进入 Windows 的 NTFS 分区之挂载错误","catalog":true,"date":"2016-08-21T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/ntfs-error-on-linux.md","filePath":"docs/os/ntfs-error-on-linux.md"}'),r={name:"docs/os/ntfs-error-on-linux.md"},p=e('<h1 id="双系统-linux-ubuntu-进入-windows-的-ntfs-分区之挂载错误" tabindex="-1">双系统 Linux（Ubuntu）进入 Windows 的 NTFS 分区之挂载错误 <a class="header-anchor" href="#双系统-linux-ubuntu-进入-windows-的-ntfs-分区之挂载错误" aria-label="Permalink to &quot;双系统 Linux（Ubuntu）进入 Windows 的 NTFS 分区之挂载错误&quot;">​</a></h1><p>自从装了双系统（Ubuntu&amp;Win10）后，发现有时在 Ubuntu 下无法进入 Win 磁盘，于是在网上搜了点资料得以解决，并在此记录一下；</p><p>问题如下：</p><p><img src="'+t+'" alt=""></p><p>解决步骤：</p><h2 id="_1-ctrl-alt-t-打开终端-输入命令检测-ntfs-3g-是否已经安装" tabindex="-1">1. ctrl+alt+t 打开终端，输入命令检测 ntfs-3g 是否已经安装： <a class="header-anchor" href="#_1-ctrl-alt-t-打开终端-输入命令检测-ntfs-3g-是否已经安装" aria-label="Permalink to &quot;1. ctrl+alt+t 打开终端，输入命令检测 ntfs-3g 是否已经安装：&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">locate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ntfs-3g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+l+'" alt=""></p><p>如出现类似上图，则说明已经安装！没有安装输入安装命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ntfs-3g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-修复挂载错误的相应的分区如提示中的-dev-sda6-输入修复命令" tabindex="-1">2. 修复挂载错误的相应的分区如提示中的 /dev/sda6，输入修复命令： <a class="header-anchor" href="#_2-修复挂载错误的相应的分区如提示中的-dev-sda6-输入修复命令" aria-label="Permalink to &quot;2. 修复挂载错误的相应的分区如提示中的 /dev/sda6，输入修复命令：&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ntfsfix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt=""></p><p>至此表明已经修复成功了！</p>',14),i=[p];function c(d,u,b,h,m,_){return a(),n("div",null,i)}const C=s(r,[["render",c]]);export{g as __pageData,C as default};
