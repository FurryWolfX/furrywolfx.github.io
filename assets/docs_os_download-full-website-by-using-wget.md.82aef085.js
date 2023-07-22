import{_ as s,o as a,c as e,V as n}from"./chunks/framework.4acca30d.js";const b=JSON.parse('{"title":"用 linux 下常用命令 wget 进行整站下载（递归下载至本地）","description":"","frontmatter":{"title":"用 linux 下常用命令 wget 进行整站下载（递归下载至本地）","catalog":true,"date":"2016-09-03T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/download-full-website-by-using-wget.md","filePath":"docs/os/download-full-website-by-using-wget.md"}'),l={name:"docs/os/download-full-website-by-using-wget.md"},o=n(`<h1 id="用-linux-下常用命令-wget-进行整站下载-递归下载至本地" tabindex="-1">用 linux 下常用命令 wget 进行整站下载（递归下载至本地） <a class="header-anchor" href="#用-linux-下常用命令-wget-进行整站下载-递归下载至本地" aria-label="Permalink to &quot;用 linux 下常用命令 wget 进行整站下载（递归下载至本地）&quot;">​</a></h1><p>这个命令可以以递归的方式下载整站，并可以将下载的页面中的链接转换为本地链接。</p><p><code>wget</code> 加上参数之后，即可成为相当强大的下载工具。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-np</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://xxx.com/abc/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-r,</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--recursive</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## （递归）          specify recursive download.（指定递归下载）</span></span>
<span class="line"><span style="color:#FFCB6B;">-k,</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--convert-links</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## （转换链接）      make links in downloaded HTML point to local files.（将下载的 HTML 页面中的链接转换为相对链接即本地链接）</span></span>
<span class="line"><span style="color:#FFCB6B;">-p,</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--page-requisites</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## （页面必需元素）    get all images, etc. needed to display HTML page.（下载所有的图片等页面显示所需的内容）</span></span>
<span class="line"><span style="color:#FFCB6B;">-np,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-parent</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">## （不追溯至父级）          don&#39;t ascend to the parent directory.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>另外断点续传用 <code>-nc</code> 参数 日志 用 <code>-o</code> 参数 ​ 熟练掌握 <code>wget</code> 命令，可以帮助你方便的使用 linux。</p>`,6),t=[o];function p(c,r,i,d,u,y){return a(),e("div",null,t)}const g=s(l,[["render",p]]);export{b as __pageData,g as default};
