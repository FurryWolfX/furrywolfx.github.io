import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a5795de3.js";const u=JSON.parse('{"title":"Linux 按时间批量删除文件（删除30天前文件）","description":"","frontmatter":{"title":"Linux 按时间批量删除文件（删除30天前文件）","catalog":true,"date":"2020-09-01T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/linux-del-file-by-date.md","filePath":"docs/os/linux-del-file-by-date.md"}'),e={name:"docs/os/linux-del-file-by-date.md"},p=n('<h1 id="linux-按时间批量删除文件-删除-30-天前文件" tabindex="-1">Linux 按时间批量删除文件（删除 30 天前文件） <a class="header-anchor" href="#linux-按时间批量删除文件-删除-30-天前文件" aria-label="Permalink to &quot;Linux 按时间批量删除文件（删除 30 天前文件）&quot;">​</a></h1><p>需要根据时间删除这个目录下的文件，<code>/home/demo</code>，清理掉 30 天之前的无效数据。</p><p>可以使用下面一条命令去完成：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/demo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-mtime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+30</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;*.*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{}</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">find</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/demo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-mtime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+30</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;*.*&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{}</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个是根据时间删除。</p><p>下面简要解释一下，这句 shell 命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/demo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-mtime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+30</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;*.*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{}</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">find</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/demo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-mtime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+30</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;*.*&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{}</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>/home/demo</code>：准备要进行清理的任意目录</p><p><code>-mtime</code>：标准语句写法</p><p><code>＋ 10</code>：查找 10 天前的文件，这里用数字代表天数，＋ 30 表示查找 30 天前的文件</p><p><code>&quot;*.*&quot;</code>：希望查找的数据类型，&quot;*.jpg&quot;表示查找扩展名为 jpg 的所有文件，&quot;*&quot;表示查找所有文件</p><p><code>-exec</code>：固定写法</p><p><code>rm -rf</code>：强制删除文件，包括目录</p><p><code>{} \\;</code>：固定写法，一对大括号+空格+/+;</p>',14),l=[p];function t(c,r,y,E,d,i){return a(),o("div",null,l)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};
