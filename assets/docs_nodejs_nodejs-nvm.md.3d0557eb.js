import{_ as e,o as a,c as o,V as t}from"./chunks/framework.4acca30d.js";const u=JSON.parse('{"title":"NodeJS NVM 使用笔记","description":"","frontmatter":{"title":"NodeJS NVM 使用笔记","catalog":true,"date":"2018-02-07T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript","NodeJS"]},"headers":[],"relativePath":"docs/nodejs/nodejs-nvm.md","filePath":"docs/nodejs/nodejs-nvm.md"}'),n={name:"docs/nodejs/nodejs-nvm.md"},d=t('<h1 id="nodejs-nvm-使用笔记" tabindex="-1">NodeJS NVM 使用笔记 <a class="header-anchor" href="#nodejs-nvm-使用笔记" aria-label="Permalink to &quot;NodeJS NVM 使用笔记&quot;">​</a></h1><p>源码地址：<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">https://github.com/nvm-sh/nvm</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash</code></p><h2 id="刷新环境变量" tabindex="-1">刷新环境变量 <a class="header-anchor" href="#刷新环境变量" aria-label="Permalink to &quot;刷新环境变量&quot;">​</a></h2><p><code>source /root/.bashrc</code></p><h2 id="验证环境变量是否生效" tabindex="-1">验证环境变量是否生效 <a class="header-anchor" href="#验证环境变量是否生效" aria-label="Permalink to &quot;验证环境变量是否生效&quot;">​</a></h2><p><code>echo $NVM_DIR</code></p><h2 id="验证-nvm-安装是否成功" tabindex="-1">验证 nvm 安装是否成功 <a class="header-anchor" href="#验证-nvm-安装是否成功" aria-label="Permalink to &quot;验证 nvm 安装是否成功&quot;">​</a></h2><p><code>nvm --version</code></p><h2 id="设置国内源" tabindex="-1">设置国内源 <a class="header-anchor" href="#设置国内源" aria-label="Permalink to &quot;设置国内源&quot;">​</a></h2><p>指定 <code>nvm</code> 的镜像需要在环境配置中增加 <code>NVM_NODEJS_ORG_MIRROR</code></p><p>在 <code>.bashrc</code> 中增加以下内容</p><p><code>export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node</code></p><p>刷新环境变量</p><p><code>source /root/.bashrc</code></p><h2 id="查看-nodejs-可用版本" tabindex="-1">查看 nodejs 可用版本 <a class="header-anchor" href="#查看-nodejs-可用版本" aria-label="Permalink to &quot;查看 nodejs 可用版本&quot;">​</a></h2><p><code>nvm ls-remote</code></p><h2 id="安装-nodejs" tabindex="-1">安装 nodejs <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 nodejs&quot;">​</a></h2><p><code>nvm install v8.9.4</code></p>',20),r=[d];function s(c,h,i,l,m,p){return a(),o("div",null,r)}const b=e(n,[["render",s]]);export{u as __pageData,b as default};
