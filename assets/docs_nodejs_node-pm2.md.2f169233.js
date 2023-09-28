import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5c044c0e.js";const F=JSON.parse('{"title":"node.js pm2 的使用","description":"","frontmatter":{"title":"node.js pm2 的使用","catalog":true,"date":"2017-08-11T20:50:00.000Z","subtitle":null,"header-img":null,"tags":["JavaScript","NodeJS"]},"headers":[],"relativePath":"docs/nodejs/node-pm2.md","filePath":"docs/nodejs/node-pm2.md"}'),p={name:"docs/nodejs/node-pm2.md"},e=l(`<h1 id="node-js-pm2-的使用" tabindex="-1">node.js pm2 的使用 <a class="header-anchor" href="#node-js-pm2-的使用" aria-label="Permalink to &quot;node.js pm2 的使用&quot;">​</a></h1><p>下面是项目的 package.json 文件部分代码：</p><h2 id="查看进程列表" tabindex="-1">查看进程列表 <a class="header-anchor" href="#查看进程列表" aria-label="Permalink to &quot;查看进程列表&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="重启进程" tabindex="-1">重启进程 <a class="header-anchor" href="#重启进程" aria-label="Permalink to &quot;重启进程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name或i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name或i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="停止进程" tabindex="-1">停止进程 <a class="header-anchor" href="#停止进程" aria-label="Permalink to &quot;停止进程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name或i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name或i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除进程" tabindex="-1">删除进程 <a class="header-anchor" href="#删除进程" aria-label="Permalink to &quot;删除进程&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">del</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name或i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">del</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name或i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="清理日志" tabindex="-1">清理日志 <a class="header-anchor" href="#清理日志" aria-label="Permalink to &quot;清理日志&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flush</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flush</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="将日志对接到-elasticsearch" tabindex="-1">将日志对接到 ElasticSearch <a class="header-anchor" href="#将日志对接到-elasticsearch" aria-label="Permalink to &quot;将日志对接到 ElasticSearch&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-c++</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2-elasticsearch-logger</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2-elasticsearch-logger:elasticUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://172.16.162.197:9200</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-c++</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2-elasticsearch-logger</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2-elasticsearch-logger:elasticUrl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://172.16.162.197:9200</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="pm2-下使用-npm-run-dev" tabindex="-1">pm2 下使用 npm run dev <a class="header-anchor" href="#pm2-下使用-npm-run-dev" aria-label="Permalink to &quot;pm2 下使用 npm run dev&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="保存当前应用列表" tabindex="-1">保存当前应用列表 <a class="header-anchor" href="#保存当前应用列表" aria-label="Permalink to &quot;保存当前应用列表&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="重新加载保存的应用列表" tabindex="-1">重新加载保存的应用列表 <a class="header-anchor" href="#重新加载保存的应用列表" aria-label="Permalink to &quot;重新加载保存的应用列表&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">resurrect</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">resurrect</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="bash-判断" tabindex="-1">bash 判断 <a class="header-anchor" href="#bash-判断" aria-label="Permalink to &quot;bash 判断&quot;">​</a></h2><p>如果已经存在就重启，不存在就创建</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;flow&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">## 项目名</span></span>
<span class="line"><span style="color:#E1E4E8;">info</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">pm2</span><span style="color:#9ECBFF;"> ls </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">grep</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$name</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">## 执行过滤并将结果赋值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## 在info中查找子字符串name</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [[ </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$info</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$name</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> ]]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;restarting...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> $name</span></span>
<span class="line"><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;initing...&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> $name </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;flow&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">## 项目名</span></span>
<span class="line"><span style="color:#24292E;">info</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">pm2</span><span style="color:#032F62;"> ls </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$name</span><span style="color:#032F62;">\`</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">## 执行过滤并将结果赋值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## 在info中查找子字符串name</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [[ </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$info</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$name</span><span style="color:#032F62;">&quot;</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> ]]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;restarting...&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> $name</span></span>
<span class="line"><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;initing...&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> $name </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,23),o=[e];function t(r,c,i,y,d,E){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};