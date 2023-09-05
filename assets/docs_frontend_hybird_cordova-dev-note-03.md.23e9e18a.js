import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a5795de3.js";const F=JSON.parse('{"title":"Cordova 开发日记 03：如何生成安卓 apk-release 版","description":"","frontmatter":{"title":"Cordova 开发日记 03：如何生成安卓 apk-release 版","catalog":true,"date":"2016-07-21T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript","Cordova"],"recommend":"cordova-dev-note"},"headers":[],"relativePath":"docs/frontend/hybird/cordova-dev-note-03.md","filePath":"docs/frontend/hybird/cordova-dev-note-03.md"}'),o={name:"docs/frontend/hybird/cordova-dev-note-03.md"},e=l(`<h1 id="cordova-开发日记-03-如何生成安卓-apk-release-版" tabindex="-1">Cordova 开发日记 03：如何生成安卓 apk-release 版 <a class="header-anchor" href="#cordova-开发日记-03-如何生成安卓-apk-release-版" aria-label="Permalink to &quot;Cordova 开发日记 03：如何生成安卓 apk-release 版&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cordova</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">android</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–release</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cordova</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">android</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>生成以下三个文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">XXXX-release.apk</span><span style="color:#E1E4E8;"> (signed, </span><span style="color:#9ECBFF;">aligned</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">XXXX-release-unaligned.apk</span><span style="color:#E1E4E8;"> (signed, </span><span style="color:#9ECBFF;">unaligned</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">XXXX-release-unsigned.apk</span><span style="color:#E1E4E8;"> (unsigned, </span><span style="color:#9ECBFF;">unaligned</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">XXXX-release.apk</span><span style="color:#24292E;"> (signed, </span><span style="color:#032F62;">aligned</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">XXXX-release-unaligned.apk</span><span style="color:#24292E;"> (signed, </span><span style="color:#032F62;">unaligned</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">XXXX-release-unsigned.apk</span><span style="color:#24292E;"> (unsigned, </span><span style="color:#032F62;">unaligned</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>获得第一个（XXXX-release.apk） APK 文件需要进行签名。签名方法参考如下：</p><ol><li>使用 JDK 的 keytool 工具生成 keystore 文件</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">keytool</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-genkey</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-keystore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lzwme-release-key.keystore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-alias</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lzwme</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-keyalg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">RSA</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-validity</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">365</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">keytool</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-genkey</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-keystore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lzwme-release-key.keystore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-alias</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lzwme</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-keyalg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">RSA</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-validity</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">365</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>按照提示输入操作。</p><ol start="2"><li>使用签名打包</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cordova</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">android</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--release</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keystore=./XXX.jks</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--storePassword=XXX</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--alias=XXX</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--password=XXX</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cordova</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">android</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--release</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keystore=./XXX.jks</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--storePassword=XXX</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--alias=XXX</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--password=XXX</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但每次输入命令行参数是很重复的，Cordova 允许我们建立一个 <code>build.json</code> 配置文件来简化操作。文件内容如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;android&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;release&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;keystore&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;release-key.keystore&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;alias&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cordova-demo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;storePassword&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;testing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;password&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;testing2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;android&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;release&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;keystore&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;release-key.keystore&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;alias&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cordova-demo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;storePassword&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;testing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;password&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;testing2&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>下次就可以直接用 <code>cordova build --release</code> 了。</p><p>为了安全性考虑，建议不要把密码放在在配置文件或者命令行中，而是手动输入。你可以把密码相关的配置去掉，下次 build 过程中会弹出一个 Java 小窗口，提示你输入密码。</p>`,14),p=[e];function r(t,c,i,y,E,d){return a(),n("div",null,p)}const b=s(o,[["render",r]]);export{F as __pageData,b as default};
