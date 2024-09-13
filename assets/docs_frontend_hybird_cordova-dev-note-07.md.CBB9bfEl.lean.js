import{_ as a,c as i,a3 as n,o as e}from"./chunks/framework.CDetKDz4.js";const k=JSON.parse('{"title":"Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题","description":"","frontmatter":{"title":"Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题","catalog":true,"date":"2016-08-01T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript","Cordova"],"recommend":"cordova-dev-note"},"headers":[],"relativePath":"docs/frontend/hybird/cordova-dev-note-07.md","filePath":"docs/frontend/hybird/cordova-dev-note-07.md"}'),t={name:"docs/frontend/hybird/cordova-dev-note-07.md"};function l(o,s,p,r,d,h){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="cordova-开发日记-07-cordova-plugin-baidu-geolocation-定位偏差问题" tabindex="-1">Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题 <a class="header-anchor" href="#cordova-开发日记-07-cordova-plugin-baidu-geolocation-定位偏差问题" aria-label="Permalink to &quot;Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题&quot;">​</a></h1><p>使用这个 SDK 定位出的经纬度，在百度地图中显示的位置有很大偏差。</p><p>经过研究，其实定位的地址是对的，只是百度使用的是自己的坐标系 (bd09ll), 而 SDK 默认是 gcj02.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  enableHighAccuracy: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否使用 GPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  maximumAge: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓存时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  timeout: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 超时时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  coorType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bd09ll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认是 gcj02，可填 bd09ll 以获取百度经纬度用于访问百度 API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>修改 coorType 即可。</p><h2 id="关于坐标系的补充" tabindex="-1">关于坐标系的补充 <a class="header-anchor" href="#关于坐标系的补充" aria-label="Permalink to &quot;关于坐标系的补充&quot;">​</a></h2><p><strong>wgs84</strong> --GPS 系统直接通过卫星定位获得的坐标。（最基础的坐标。)</p><p><strong>gcj02</strong> -- 兲朝已安全原因为由，要求在中国使用的地图产品使用的都必须是加密后的坐标。这套加密后的坐标就是 gcj02 google 的中国地图。高德地图。他们为中国市场的产品都是用这套坐标。</p><p><strong>bd09ll</strong> -- 百度又在 gcj02 的技术上将坐标加密就成了 bd09ll 坐标。</p>`,9)]))}const g=a(t,[["render",l]]);export{k as __pageData,g as default};