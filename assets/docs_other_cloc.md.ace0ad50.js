import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4acca30d.js";const F=JSON.parse('{"title":"优雅地统计代码行数","description":"","frontmatter":{"title":"优雅地统计代码行数","catalog":true,"date":"2019-08-21T11:40:24.000Z","subtitle":null,"header-img":null,"tags":null},"headers":[],"relativePath":"docs/other/cloc.md","filePath":"docs/other/cloc.md"}'),o={name:"docs/other/cloc.md"},p=l(`<h1 id="优雅地统计代码行数" tabindex="-1">优雅地统计代码行数 <a class="header-anchor" href="#优雅地统计代码行数" aria-label="Permalink to &quot;优雅地统计代码行数&quot;">​</a></h1><h2 id="bash-脚本法" tabindex="-1">bash 脚本法 <a class="header-anchor" href="#bash-脚本法" aria-label="Permalink to &quot;bash 脚本法&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.m</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.mm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.cpp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.h</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.rss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-print</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>缺点：</p><ul><li>不同的编程语言，有不同的文件后缀名，需要自行配置</li><li>不能过滤掉注释</li><li>不能过滤掉空行</li></ul><h2 id="cloc" tabindex="-1">cloc <a class="header-anchor" href="#cloc" aria-label="Permalink to &quot;cloc&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>cloc 是一个 perl 脚本，它可以统计很多种编程语言的代码文件中的空行、注释以及实际的代 码行数。 CLOC 是 Count Lines of Code 的意思，可以计算空行数、注释行数、各种语言的有效行数，还可以比较两个代码库在各种行数之间的不同。CLOC 是完全由 Perl 实现的，不依赖第三方组件，移植性强。</p></div><h3 id="下载安装-macos" tabindex="-1">下载安装（macOS） <a class="header-anchor" href="#下载安装-macos" aria-label="Permalink to &quot;下载安装（macOS）&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cloc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="下载安装-windows" tabindex="-1">下载安装（Windows） <a class="header-anchor" href="#下载安装-windows" aria-label="Permalink to &quot;下载安装（Windows）&quot;">​</a></h3><p>请参考：<a href="https://blog.csdn.net/liutengteng130/article/details/79696898" target="_blank" rel="noreferrer">https://blog.csdn.net/liutengteng130/article/details/79696898</a></p><h3 id="统计目录" tabindex="-1">统计目录 <a class="header-anchor" href="#统计目录" aria-label="Permalink to &quot;统计目录&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cloc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">http://cloc.sourceforge.net</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.62</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">T=</span><span style="color:#F78C6C;">0.37</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> (174.4 </span><span style="color:#C3E88D;">files/s,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13545.8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lines/s</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">Language</span><span style="color:#A6ACCD;">                     </span><span style="color:#C3E88D;">files</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">blank</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">comment</span><span style="color:#A6ACCD;">           </span><span style="color:#C3E88D;">code</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">Python</span><span style="color:#A6ACCD;">                          </span><span style="color:#F78C6C;">38</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">480</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">507</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">2632</span></span>
<span class="line"><span style="color:#FFCB6B;">Bourne</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Shell</span><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">17</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">82</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">183</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">674</span></span>
<span class="line"><span style="color:#FFCB6B;">HTML</span><span style="color:#A6ACCD;">                             </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">124</span></span>
<span class="line"><span style="color:#FFCB6B;">JSON</span><span style="color:#A6ACCD;">                             </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">99</span></span>
<span class="line"><span style="color:#FFCB6B;">YAML</span><span style="color:#A6ACCD;">                             </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">79</span></span>
<span class="line"><span style="color:#FFCB6B;">Javascript</span><span style="color:#A6ACCD;">                       </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">43</span></span>
<span class="line"><span style="color:#FFCB6B;">CSS</span><span style="color:#A6ACCD;">                              </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">SUM:</span><span style="color:#A6ACCD;">                            </span><span style="color:#F78C6C;">65</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">601</span><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">797</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">3652</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------------------------------------------------------------</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,14),e=[p];function t(r,c,C,y,i,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};
