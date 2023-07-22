import{_ as s,o as n,c as a,V as e}from"./chunks/framework.4acca30d.js";const u=JSON.parse('{"title":"Docker 笔记(部署)","description":"","frontmatter":{"title":"Docker 笔记(部署)","catalog":true,"date":"2018-01-21T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Docker"],"recommend":"docker-note"},"headers":[],"relativePath":"docs/backend/docker-note.md","filePath":"docs/backend/docker-note.md"}'),l={name:"docs/backend/docker-note.md"},p=e(`<h1 id="docker-笔记-部署" tabindex="-1">Docker 笔记(部署) <a class="header-anchor" href="#docker-笔记-部署" aria-label="Permalink to &quot;Docker 笔记(部署)&quot;">​</a></h1><h2 id="镜像加速" tabindex="-1">镜像加速 <a class="header-anchor" href="#镜像加速" aria-label="Permalink to &quot;镜像加速&quot;">​</a></h2><p>编辑 <code>/etc/default/docker</code> 文件</p><p>CentOS 系统的配置文件是 <code>/etc/docker/daemon.json</code> Ubuntu 系统的配置文件是 <code>/etc/default/docker</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">debug</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">experimental</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">registry-mirrors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://9zh8kwqg.mirror.aliyuncs.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://hub-mirror.c.163.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daemon-reload</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="免-sudo" tabindex="-1">免 sudo <a class="header-anchor" href="#免-sudo" aria-label="Permalink to &quot;免 sudo&quot;">​</a></h2><p>如果还没有 docker group 就添加一个：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">groupadd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将用户加入该 group 内。然后退出并重新登录就生效啦。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gpasswd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">USER</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启 docker 服务</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切换当前会话到新 group 或者重启 X 会话</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">newgrp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意: 最后一步是必须的，否则因为 groups 命令获取到的是缓存的组信息，刚添加的组信息未能生效，所以 docker images 执行时同样有错。</p><h2 id="管理面板-portainer" tabindex="-1">管理面板(portainer) <a class="header-anchor" href="#管理面板-portainer" aria-label="Permalink to &quot;管理面板(portainer)&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">volume</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">portainer_data</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8000</span><span style="color:#C3E88D;">:8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#C3E88D;">:9000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name=portainer-ce</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--restart=always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock:/var/run/docker.sock</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">portainer_data:/data</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">portainer/portainer-ce</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>装完访问 9000 即可。</p><h2 id="centos-7-附录" tabindex="-1">CentOS 7 附录 <a class="header-anchor" href="#centos-7-附录" aria-label="Permalink to &quot;CentOS 7 附录&quot;">​</a></h2><h3 id="centos-7-安装后无法联网" tabindex="-1">CentOS 7 安装后无法联网 <a class="header-anchor" href="#centos-7-安装后无法联网" aria-label="Permalink to &quot;CentOS 7 安装后无法联网&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">addr</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## 查看网卡名称</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 编辑 /etc/sysconfig/network-scripts/网卡名称，设置 ONBOOT=YES</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="centos-7-关闭-selinux" tabindex="-1">CentOS 7 关闭 SELinux <a class="header-anchor" href="#centos-7-关闭-selinux" aria-label="Permalink to &quot;CentOS 7 关闭 SELinux&quot;">​</a></h3><ul><li><p>查看命令<code>getenforce</code></p></li><li><p>临时关闭<code>setenforce 0</code></p></li><li><p>永久关闭【enforcing—-&gt;disabled 或者 permissive—-&gt;disabled】</p></li></ul><p><code>vim /etc/selinux/config</code></p><p>将<code>SELINUX=enforcing</code>改为<code>SELINUX=disabled</code>设置后保存，需要重启才能生效。</p><h3 id="centos-7-关闭防火墙" tabindex="-1">CentOS 7 关闭防火墙 <a class="header-anchor" href="#centos-7-关闭防火墙" aria-label="Permalink to &quot;CentOS 7 关闭防火墙&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld.service</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">## 停止firewall</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld.service</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">## 禁止firewall开机启动</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="centos-8-安装-docker" tabindex="-1">CentOS 8 安装 docker <a class="header-anchor" href="#centos-8-安装-docker" aria-label="Permalink to &quot;CentOS 8 安装 docker&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-utils</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">device-mapper-persistent-data</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">lvm2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-repo=http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">containerd.io</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--nobest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-ce</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-ce-cli</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="centos-8-提示-container-io-版本不匹配" tabindex="-1">CentOS 8 提示 Container.io 版本不匹配 <a class="header-anchor" href="#centos-8-提示-container-io-版本不匹配" aria-label="Permalink to &quot;CentOS 8 提示 Container.io 版本不匹配&quot;">​</a></h3><p>从 <code>https://download.docker.com/linux/fedora/31/x86_64/stable/Packages/</code> 下载需要的版本。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 也可以从阿里镜像的rpm安装</span></span>
<span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://mirrors.aliyun.com/docker-ce/linux/centos/8/x86_64/stable/Packages/containerd.io-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">.el8.x86_64.rpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="centos-8-安装-docker-compose" tabindex="-1">CentOS 8 安装 docker-compose <a class="header-anchor" href="#centos-8-安装-docker-compose" aria-label="Permalink to &quot;CentOS 8 安装 docker-compose&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">epel-release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-utils</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">epel</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-compose</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="复制-迁移-文件保留权限" tabindex="-1">复制（迁移）文件保留权限 <a class="header-anchor" href="#复制-迁移-文件保留权限" aria-label="Permalink to &quot;复制（迁移）文件保留权限&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rsync</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rvzpgo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--progress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="centos-8-docker-ce-repo" tabindex="-1">CentOS 8 docker-ce.repo <a class="header-anchor" href="#centos-8-docker-ce-repo" aria-label="Permalink to &quot;CentOS 8 docker-ce.repo&quot;">​</a></h3><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[docker-ce-stable]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Stable - $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/$basearch/stable</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-stable-debuginfo]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Stable - Debuginfo $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/debug-$basearch/stable</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-stable-source]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Stable - Sources</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/source/stable</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-test]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Test - $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/$basearch/test</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-test-debuginfo]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Test - Debuginfo $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/debug-$basearch/test</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-test-source]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Test - Sources</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/source/test</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-nightly]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Nightly - $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/$basearch/nightly</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-nightly-debuginfo]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Nightly - Debuginfo $basearch</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/debug-$basearch/nightly</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[docker-ce-nightly-source]</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Docker CE Nightly - Sources</span></span>
<span class="line"><span style="color:#F07178;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/$releasever/source/nightly</span></span>
<span class="line"><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#F07178;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#F07178;">gpgkey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https://mirrors.ustc.edu.cn/docker-ce/linux/centos/gpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,39),o=[p];function r(c,t,i,y,C,D){return n(),a("div",null,o)}const b=s(l,[["render",r]]);export{u as __pageData,b as default};
