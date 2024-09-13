import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.CDetKDz4.js";const C=JSON.parse('{"title":"记录两种内网linux上网的方式","description":"","frontmatter":{"title":"记录两种内网linux上网的方式","catalog":true,"date":"2021-03-09T16:02:00.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-iptables-proxy.md","filePath":"docs/os/linux-iptables-proxy.md"}'),p={name:"docs/os/linux-iptables-proxy.md"};function e(h,s,t,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="记录两种内网-linux-上网的方式" tabindex="-1">记录两种内网 linux 上网的方式 <a class="header-anchor" href="#记录两种内网-linux-上网的方式" aria-label="Permalink to &quot;记录两种内网 linux 上网的方式&quot;">​</a></h1><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><p>网络环境如下：</p><p>机器 1（可上外网）：</p><p><code>enp0s3: 192.168.100.55/24</code>（可上网的网卡）</p><p><code>enp0s8: 192.168.56.103/24</code>（内网）</p><p>机器 2（内网）：</p><p><code>enp0s3: 192.168.56.101/24</code></p><p>想达到的效果：机器 2 通过机器 1 访问外网</p><h2 id="nat-上网" tabindex="-1">NAT 上网 <a class="header-anchor" href="#nat-上网" aria-label="Permalink to &quot;NAT 上网&quot;">​</a></h2><h3 id="清理可能会影响-nat-的规则" tabindex="-1">清理可能会影响 NAT 的规则 <a class="header-anchor" href="#清理可能会影响-nat-的规则" aria-label="Permalink to &quot;清理可能会影响 NAT 的规则&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## reset the default policies in the filter table.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FORWARD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## reset the default policies in the nat table.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PREROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POSTROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## reset the default policies in the mangle table.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mangle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PREROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mangle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## flush all the rules in the filter and nat tables.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mangle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## erase all chains that&#39;s not default in filter and nat table.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mangle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="配置-nat-服务" tabindex="-1">配置 nat 服务 <a class="header-anchor" href="#配置-nat-服务" aria-label="Permalink to &quot;配置 nat 服务&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Enable IP forwarding</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net.ipv4.ip_forward=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net.ipv6.conf.all.forwarding=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Disable ICMP redirects</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net.ipv4.conf.all.send_redirects=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POSTROUTING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enp0s3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.56.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SNAT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.100.55</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> save</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="设置内网机器的网关" tabindex="-1">设置内网机器的网关 <a class="header-anchor" href="#设置内网机器的网关" aria-label="Permalink to &quot;设置内网机器的网关&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gw</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.56.103</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="nat-服务完整的-iptables-设置" tabindex="-1">NAT 服务完整的 iptables 设置 <a class="header-anchor" href="#nat-服务完整的-iptables-设置" aria-label="Permalink to &quot;NAT 服务完整的 iptables 设置&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## cat /etc/sysconfig/iptables</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generated by iptables-save v1.8.4 on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">raw</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:PREROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [14276:898910]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [20516:3683176]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COMMIT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Completed on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generated by iptables-save v1.8.4 on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mangle</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:PREROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [14276:898910]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:INPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [14131:882622]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:FORWARD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [145:16288]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [20516:3683176]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:POSTROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [20661:3699464]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COMMIT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Completed on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generated by iptables-save v1.8.4 on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:INPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [14131:882622]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:FORWARD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [145:16288]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [20516:3683176]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COMMIT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Completed on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generated by iptables-save v1.8.4 on Sun Mar  7 03:07:59 2021</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:PREROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [51:4059]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:INPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [2:458]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:POSTROUTING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [33:3264]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:OUTPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [33:3264]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POSTROUTING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.56.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enp0s3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SNAT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --to-source</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.100.55</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COMMIT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Completed on Sun Mar  7 03:07:59 2021</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="阿里-ecs-的-nat-配置" tabindex="-1">阿里 ECS 的 NAT 配置 <a class="header-anchor" href="#阿里-ecs-的-nat-配置" aria-label="Permalink to &quot;阿里 ECS 的 NAT 配置&quot;">​</a></h3><p>由于阿里 ECS 可以在网页端配置自定义路由，配置过程有些变化</p><p>首先需要打开内核转发，方式同上。</p><p>然后去阿里云控制台 <code>专有网络-&gt;路由表</code> 添加自定义路由：</p><p>目标网段 <code>0.0.0.0/0</code> 下一跳地址设置为可上网的 ECS。</p><p>最后应用 iptables 规则：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## iptables 的规则如下</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 172.16.0.0/16 为内网网段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POSTROUTING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 172.16.0.0/16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MASQUERADE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="squid-代理上网" tabindex="-1">squid 代理上网 <a class="header-anchor" href="#squid-代理上网" aria-label="Permalink to &quot;squid 代理上网&quot;">​</a></h2><h3 id="安装-squid" tabindex="-1">安装 squid <a class="header-anchor" href="#安装-squid" aria-label="Permalink to &quot;安装 squid&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> squid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/squid/squid.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 默认配置是只允许内网网段访问</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 端口3128</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="配置防火墙" tabindex="-1">配置防火墙 <a class="header-anchor" href="#配置防火墙" aria-label="Permalink to &quot;配置防火墙&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewald.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewald.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables-services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables-devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.56.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3128</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3128</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DROP</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="客户机代理设置" tabindex="-1">客户机代理设置 <a class="header-anchor" href="#客户机代理设置" aria-label="Permalink to &quot;客户机代理设置&quot;">​</a></h3><p>编辑 <code>.bashrc</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://192.168.56.103:3128</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://192.168.56.103:3128</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 应用环境变量</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,35)]))}const c=i(p,[["render",e]]);export{C as __pageData,c as default};
