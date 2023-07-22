import{_ as s,o as n,c as a,V as l}from"./chunks/framework.4acca30d.js";const b=JSON.parse('{"title":"nuxt 构建相关笔记","description":"","frontmatter":{"title":"nuxt 构建相关笔记","catalog":true,"date":"2020-08-13T23:32:00.000Z","subtitle":null,"header-img":null,"tags":["JavaScript","Vue","Nuxt","Babel"]},"headers":[],"relativePath":"docs/frontend/mvvm/nuxt-build-note.md","filePath":"docs/frontend/mvvm/nuxt-build-note.md"}'),p={name:"docs/frontend/mvvm/nuxt-build-note.md"},e=l(`<h1 id="nuxt-构建相关笔记" tabindex="-1">nuxt 构建相关笔记 <a class="header-anchor" href="#nuxt-构建相关笔记" aria-label="Permalink to &quot;nuxt 构建相关笔记&quot;">​</a></h1><h2 id="支持最新的-babel-env" tabindex="-1">支持最新的 babel env <a class="header-anchor" href="#支持最新的-babel-env" aria-label="Permalink to &quot;支持最新的 babel env&quot;">​</a></h2><p>修改 <code>nuxt.config.js</code></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  ** Build configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  */</span></span>
<span class="line"><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/* 如果node_modules中使用了ES6导致浏览器报错，使用transpile告知babel需要编译 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">transpile</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">has-values</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">ramda</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">babel</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">babelrc</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">cacheDirectory</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/preset-env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/transform-runtime</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 编译除了node_modules的所有代码 */</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">filename</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>注意：如果是普通的 vue 项目，可以通过 <code>transpileDependencies</code> 来配置 <code>transpile</code></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">transpileDependencies</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">short-uuid</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">js-base64</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="在-nuxt-中通过插件去掉-console" tabindex="-1">在 nuxt 中通过插件去掉 console <a class="header-anchor" href="#在-nuxt-中通过插件去掉-console" aria-label="Permalink to &quot;在 nuxt 中通过插件去掉 console&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">babel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transform-remove-console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8),o=[e];function t(r,c,F,i,D,y){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};
