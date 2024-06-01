import{_ as i,c as s,o as a,a4 as e}from"./chunks/framework.CJ5b-wv3.js";const g=JSON.parse('{"title":"如何禁止 iPhone Safari video 标签视频自动全屏？","description":"","frontmatter":{"title":"如何禁止 iPhone Safari video 标签视频自动全屏？","catalog":true,"date":"2016-09-01T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["HTML"]},"headers":[],"relativePath":"docs/frontend/html/disable-video-full-screen-ios.md","filePath":"docs/frontend/html/disable-video-full-screen-ios.md"}'),t={name:"docs/frontend/html/disable-video-full-screen-ios.md"},n=e(`<h1 id="如何禁止-iphone-safari-video-标签视频自动全屏" tabindex="-1">如何禁止 iPhone Safari video 标签视频自动全屏？ <a class="header-anchor" href="#如何禁止-iphone-safari-video-标签视频自动全屏" aria-label="Permalink to &quot;如何禁止 iPhone Safari video 标签视频自动全屏？&quot;">​</a></h1><p>最近做一个移动端微信页面项目，在微信页面中有视频播放，但是需要禁止 IOS 的自动全屏播放（前提必须使用 video 标签）。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;post&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoplay</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loop</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> preload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://segmentfault.com/a/foo.mp4&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;video/mp4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 iPhone safari 点击视频会弹出播放器进行全屏播放。</p><p>在网上看了看别人给出的答案，引用如下：</p><p>可以在 video 标签上加一个 <code>webkit-playsinline</code> 属性 ，如下：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;video&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;280&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;140&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> webkit-playsinline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我想说这能解决问题吗？ 答案当然是不能。。。。</p><p>当然在 iOS APP 中使用网页视频，是可以禁止全屏播放的，方法如下：</p><p>前端将 video 标签加入属性 <code>webkit-playsinline</code>，如：<code>&lt;video id=&quot;player&quot; width=&quot;480&quot; height=&quot;320&quot; webkit-playsinline&gt;</code>； <code>Obj-C</code> 中，添加配置：<code>webview.allowsInlineMediaPlayback = YES</code>;</p><p>还有网友这样回答答案：</p><p>把视频转码，用 ajax 去分段请求数据来填充到 canvas。</p><p>当然如果确实需要退出全屏，可以使用这样的方法，但是毕竟这样没什么必要。</p>`,13),l=[n];function h(p,d,k,o,r,E){return a(),s("div",null,l)}const u=i(t,[["render",h]]);export{g as __pageData,u as default};
