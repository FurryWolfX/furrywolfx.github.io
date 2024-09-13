import{_ as a,c as i,a3 as n,o as e}from"./chunks/framework.CDetKDz4.js";const c=JSON.parse('{"title":"2 种 NodeJS 包管理工具的仓库和缓存配置笔记","description":"","frontmatter":{"title":"2 种 NodeJS 包管理工具的仓库和缓存配置笔记","catalog":true,"date":"2019-05-14T09:31:00.000Z","subtitle":null,"header-img":null,"tags":["NPM","Yarn"]},"headers":[],"relativePath":"docs/nodejs/node-pkg-manager-note.md","filePath":"docs/nodejs/node-pkg-manager-note.md"}'),l={name:"docs/nodejs/node-pkg-manager-note.md"};function p(t,s,h,r,d,k){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="_2-种-nodejs-包管理工具的仓库和缓存配置笔记" tabindex="-1">2 种 NodeJS 包管理工具的仓库和缓存配置笔记 <a class="header-anchor" href="#_2-种-nodejs-包管理工具的仓库和缓存配置笔记" aria-label="Permalink to &quot;2 种 NodeJS 包管理工具的仓库和缓存配置笔记&quot;">​</a></h1><h2 id="_2-种-nodejs-包管理工具" tabindex="-1">2 种 NodeJS 包管理工具 <a class="header-anchor" href="#_2-种-nodejs-包管理工具" aria-label="Permalink to &quot;2 种 NodeJS 包管理工具&quot;">​</a></h2><h3 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;NPM&quot;">​</a></h3><p>NPM 是 JavaScript 世界的包管理工具，并且是 Node.js 平台的默认包管理工具。 通过 npm 可以安装、共享、分发代码,管理项目依赖关系。</p><h3 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;Yarn&quot;">​</a></h3><p>Yarn 是 Facebook 发布的，代替 NPM 的方案。目前最成熟的代替方案。</p><h2 id="临时指定仓库路径" tabindex="-1">临时指定仓库路径 <a class="header-anchor" href="#临时指定仓库路径" aria-label="Permalink to &quot;临时指定仓库路径&quot;">​</a></h2><blockquote><p>解决国内下载慢的问题</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npm.taobao.org</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改仓库配置" tabindex="-1">修改仓库配置 <a class="header-anchor" href="#修改仓库配置" aria-label="Permalink to &quot;修改仓库配置&quot;">​</a></h2><blockquote><p>解决国内下载慢的问题</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 更换为淘宝源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disturl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://npm.taobao.org/dist</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## node-sass bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sass-binary-site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://npm.taobao.org/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## phantomjs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phantomjs-cdnurl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://cnpmjs.org/downloads</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 更换为淘宝源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## node-sass bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sass-binary-site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://npm.taobao.org/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## phantomjs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phantomjs-cdnurl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://cnpmjs.org/downloads</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="npm-私服" tabindex="-1">NPM 私服 <a class="header-anchor" href="#npm-私服" aria-label="Permalink to &quot;NPM 私服&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/verdaccio" target="_blank" rel="noreferrer">https://www.npmjs.com/package/verdaccio</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unsafe-perm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Verdaccio 默认是 localhost，要使用 ip 给其它电脑访问，可在 config.yaml 文件中添加一行 listen: 0.0.0.0:4873</p><h2 id="修改-npm-缓存配置" tabindex="-1">修改 NPM 缓存配置 <a class="header-anchor" href="#修改-npm-缓存配置" aria-label="Permalink to &quot;修改 NPM 缓存配置&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D:\\npm-cache&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>清除缓存：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改-yarn-缓存配置" tabindex="-1">修改 Yarn 缓存配置 <a class="header-anchor" href="#修改-yarn-缓存配置" aria-label="Permalink to &quot;修改 Yarn 缓存配置&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Yarn 会在你的用户目录下开辟一块全局缓存用以保存下载的包。<code>yarn cache list</code> 用于列出所有已经缓存的包。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行 <code>yarn cache dir</code> 命令会打印出当前的 yarn 全局缓存在哪里。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行此命令将清除本地缓存。下次执行 yarn 或 <code>yarn install</code> 时将会重新填充缓存。</p><p>改变 yarn 的缓存路径</p><p>设置 <code>cache-folder</code> 的值用来改变缓存目录：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache-folder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你还可以利用 <code>--cache-folder</code> 参数来指定缓存目录：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cache-folder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改-npm-全局安装时的路径" tabindex="-1">修改 NPM 全局安装时的路径 <a class="header-anchor" href="#修改-npm-全局安装时的路径" aria-label="Permalink to &quot;修改 NPM 全局安装时的路径&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 创建新目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.npm-global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;~/.npm-global&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 修改环境变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/.npm-global/bin:$PATH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="unix-like-系统修改-npm-全局安装时的路径" tabindex="-1">Unix-like 系统修改 NPM 全局安装时的路径 <a class="header-anchor" href="#unix-like-系统修改-npm-全局安装时的路径" aria-label="Permalink to &quot;Unix-like 系统修改 NPM 全局安装时的路径&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 创建新目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.npm-global</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;~/.npm-global&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 修改环境变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/.npm-global/bin:$PATH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="yarn-2-x-换源" tabindex="-1">yarn 2.x 换源 <a class="header-anchor" href="#yarn-2-x-换源" aria-label="Permalink to &quot;yarn 2.x 换源&quot;">​</a></h2><p>注意：只支持项目级切换（需要切换到项目根目录）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npmRegistryServer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="yarn-2-x-使用-npm-兼容模式" tabindex="-1">yarn 2.x 使用 npm 兼容模式 <a class="header-anchor" href="#yarn-2-x-使用-npm-兼容模式" aria-label="Permalink to &quot;yarn 2.x 使用 npm 兼容模式&quot;">​</a></h2><p>新建 <code>.yarnrc.yml</code></p><p>添加</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nodeLinker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node-modules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,45)]))}const g=a(l,[["render",p]]);export{c as __pageData,g as default};
