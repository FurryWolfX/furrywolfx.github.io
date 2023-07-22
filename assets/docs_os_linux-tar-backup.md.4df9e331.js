import{_ as s,o as n,c as a,V as l}from"./chunks/framework.4acca30d.js";const d=JSON.parse('{"title":"Linux 使用自带的 tar 实现增量备份","description":"","frontmatter":{"title":"Linux 使用自带的 tar 实现增量备份","catalog":true,"date":"2017-09-10T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-tar-backup.md","filePath":"docs/os/linux-tar-backup.md"}'),p={name:"docs/os/linux-tar-backup.md"},e=l(`<h1 id="linux-使用自带的-tar-实现增量备份" tabindex="-1">Linux 使用自带的 tar 实现增量备份 <a class="header-anchor" href="#linux-使用自带的-tar-实现增量备份" aria-label="Permalink to &quot;Linux 使用自带的 tar 实现增量备份&quot;">​</a></h1><h2 id="增量备份的方式" tabindex="-1">增量备份的方式 <a class="header-anchor" href="#增量备份的方式" aria-label="Permalink to &quot;增量备份的方式&quot;">​</a></h2><p>利用 <code>tar -g</code> 参数，在第一次备份时候生成时间戳文件，里面包含指定备份目录下的所有文件的一个时间戳，下次增量备份，tar 会利用时间戳文件去比较，只有那些内容在这段时间有修改的文件，才会被打包。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 先执行完整备份</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/backup</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">snapshot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcpPf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-full.tar.gz</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/proc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/mnt \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/lost+found \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/sys \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/media \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/backup </span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 差量备份</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/backup</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">snapshot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcpPf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-incremental_1.tar.gz</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/proc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/mnt \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/lost+found \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/sys \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/media \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/backup </span><span style="color:#C3E88D;">/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="定义成脚本" tabindex="-1">定义成脚本 <a class="header-anchor" href="#定义成脚本" aria-label="Permalink to &quot;定义成脚本&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">date</span><span style="color:#C3E88D;"> +%Y%m%d%H%M%S</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/backup</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">snapshot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcpPf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-incremental_</span><span style="color:#A6ACCD;">$DATE</span><span style="color:#C3E88D;">.tar.gz</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/proc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/mnt \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/lost+found \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/sys \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/media \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude=/backup </span><span style="color:#C3E88D;">/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="还原" tabindex="-1">还原 <a class="header-anchor" href="#还原" aria-label="Permalink to &quot;还原&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xzPf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-full.tar.gz</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xzPf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-incremental_1.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mkdir proc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mdkir lost+found</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mkdir mnt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mkdir sys</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mkdir media</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## mkdir run</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8),c=[e];function o(r,t,i,u,C,b){return n(),a("div",null,c)}const A=s(p,[["render",o]]);export{d as __pageData,A as default};
