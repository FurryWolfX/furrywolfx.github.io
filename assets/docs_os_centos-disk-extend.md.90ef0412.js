import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4acca30d.js";const d=JSON.parse('{"title":"CentOS 磁盘扩容","description":"","frontmatter":{"title":"CentOS 磁盘扩容","catalog":true,"date":"2020-04-10T21:10:00.000Z","subtitle":null,"header-img":null,"tags":["Linux"],"recommend":"CentOS"},"headers":[],"relativePath":"docs/os/centos-disk-extend.md","filePath":"docs/os/centos-disk-extend.md"}'),p={name:"docs/os/centos-disk-extend.md"},e=l(`<h1 id="centos-磁盘扩容" tabindex="-1">CentOS 磁盘扩容 <a class="header-anchor" href="#centos-磁盘扩容" aria-label="Permalink to &quot;CentOS 磁盘扩容&quot;">​</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以看到现在的分区情况如下</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Device</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Boot</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">Start</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">End</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">Blocks</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Id</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">System</span></span>
<span class="line"><span style="color:#FFCB6B;">/dev/sda1</span><span style="color:#A6ACCD;">   </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">512000</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">83</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Linux</span></span>
<span class="line"><span style="color:#FFCB6B;">/dev/sda2</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">1306</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">9972736</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">e</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LVM</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>创建分区 sda3</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">WARNING:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DOS-compatible</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deprecated.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">It</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">strongly</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">recommended</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;"> (command </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) and change display units to</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">sectors</span><span style="color:#A6ACCD;"> (command </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">u</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Command</span><span style="color:#A6ACCD;"> (m </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;">): n   </span><span style="color:#676E95;font-style:italic;">## 输入 n 表示创建新分区</span></span>
<span class="line"><span style="color:#FFCB6B;">Command</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">e</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">extended</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">primary</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">partition</span><span style="color:#A6ACCD;"> (1-4)</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span></span>
<span class="line"><span style="color:#FFCB6B;">Partition</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">number</span><span style="color:#A6ACCD;"> (1-4): 3   </span><span style="color:#676E95;font-style:italic;">## 输入 3 表示sda3，因为前面已经有两个了</span></span>
<span class="line"><span style="color:#FFCB6B;">First</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cylinder</span><span style="color:#A6ACCD;"> (1306-4568, </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1306</span><span style="color:#A6ACCD;">):     </span><span style="color:#676E95;font-style:italic;">## 回车，按默认值</span></span>
<span class="line"><span style="color:#FFCB6B;">Using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1306</span></span>
<span class="line"><span style="color:#FFCB6B;">Last</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cylinder,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+cylinders</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+size{K,M,G}</span><span style="color:#A6ACCD;"> (1306-4568, </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4568</span><span style="color:#A6ACCD;">):   </span><span style="color:#676E95;font-style:italic;">## 回车，按默认值</span></span>
<span class="line"><span style="color:#FFCB6B;">Using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4568</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Command</span><span style="color:#A6ACCD;"> (m </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help</span><span style="color:#A6ACCD;">): w     </span><span style="color:#676E95;font-style:italic;">## 输入 w 保存退出</span></span>
<span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">partition</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">has</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">been</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">altered!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Calling</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ioctl</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">re-read</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">partition</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">WARNING:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Re-reading</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">partition</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Device</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resource</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">busy.</span></span>
<span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kernel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">still</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uses</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">old</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">will</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">used</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">at</span></span>
<span class="line"><span style="color:#FFCB6B;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">next</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">partprobe</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">8</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kpartx</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">8</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">Syncing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disks.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>再次查看分区情况</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以看到现在的分区情况如下</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Device</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Boot</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">Start</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">End</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">Blocks</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Id</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">System</span></span>
<span class="line"><span style="color:#FFCB6B;">/dev/sda1</span><span style="color:#A6ACCD;">   </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">512000</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">83</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Linux</span></span>
<span class="line"><span style="color:#FFCB6B;">/dev/sda2</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">1306</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">9972736</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">e</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LVM</span></span>
<span class="line"><span style="color:#FFCB6B;">/dev/sda3</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">1306</span><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">4568</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">26206700</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">83</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Linux</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>重启操作系统</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">reboot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>格式化新分区为 ext4</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ext4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将物理硬盘分区初始化为物理卷，以便被 LVM 使用，输入指令</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lvs</span></span>
<span class="line"><span style="color:#FFCB6B;">pvcreate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>向卷组中添加物理卷来增加卷组的容量</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vgextend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">centos-root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看可扩展的空间大小</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vgdisplay</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中 Free PE / Size 就是可供分配的自由空间，最多有 24.99G，在扩展时输入小于该值</p><p>扩充磁盘空间</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lvextend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L+24G</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/mapper/vg_test001-lv_root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sda3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 resize2fs 指令来增大或者收缩未加载的“ext”文件系统的大小</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">resize2fs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/mapper/centos-root</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果是 xfs 文件系统</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xfs_growfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/mapper/centos-root</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,29),o=[e];function r(t,c,C,y,i,A){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{d as __pageData,b as default};