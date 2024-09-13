import{_ as e,c,a3 as o,o as r}from"./chunks/framework.CDetKDz4.js";const h=JSON.parse('{"title":"Fabric.js 补充笔记","description":"","frontmatter":{"title":"Fabric.js 补充笔记","catalog":true,"date":"2022-11-24T09:30:00.000Z","subtitle":null,"header-img":null,"tags":["Fabric","Canvas"],"recommend":"canvas"},"headers":[],"relativePath":"docs/frontend/canvas/fabric.md","filePath":"docs/frontend/canvas/fabric.md"}'),d={name:"docs/frontend/canvas/fabric.md"};function t(i,a,s,n,l,b){return r(),c("div",null,a[0]||(a[0]=[o('<h1 id="fabric-js-补充笔记" tabindex="-1">Fabric.js 补充笔记 <a class="header-anchor" href="#fabric-js-补充笔记" aria-label="Permalink to &quot;Fabric.js 补充笔记&quot;">​</a></h1><h2 id="选中状态元素置顶问题" tabindex="-1">选中状态元素置顶问题 <a class="header-anchor" href="#选中状态元素置顶问题" aria-label="Permalink to &quot;选中状态元素置顶问题&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>老版本无需设置该属性</p></div><p><code>fabric canvas</code> 的 <code>preserveObjectStacking</code>，当设置为 <code>true</code> 的时候是在当前层,设置为 <code>false</code> 时是置顶选中元素,默认的是 <code>false</code>。</p><h2 id="思路-图层排序问题" tabindex="-1">思路：图层排序问题 <a class="header-anchor" href="#思路-图层排序问题" aria-label="Permalink to &quot;思路：图层排序问题&quot;">​</a></h2><p><code>fabric</code> 中没有 <code>CSS</code> 中 <code>z-index</code> 的概念，需要通过 <code>moveTo()</code> 和 <code>bringToXXX()</code> 来处理。</p><h2 id="思路-缩放后的尺寸计算" tabindex="-1">思路：缩放后的尺寸计算 <a class="header-anchor" href="#思路-缩放后的尺寸计算" aria-label="Permalink to &quot;思路：缩放后的尺寸计算&quot;">​</a></h2><p>对象用 <code>scale</code> 缩放后，取 <code>width</code> 和 <code>height</code> 依旧是缩放前的值，所以需要乘以缩放系数才能得到真实的值。</p><h2 id="思路-针对-fabric-不支持的-canvas-操作" tabindex="-1">思路：针对 fabric 不支持的 canvas 操作 <a class="header-anchor" href="#思路-针对-fabric-不支持的-canvas-操作" aria-label="Permalink to &quot;思路：针对 fabric 不支持的 canvas 操作&quot;">​</a></h2><p>针对 <code>fabric</code> 不支持的 <code>canvas</code> 操作，可以通过用原生或其他库生成后转换成图片，再通过 <code>fabric.Image</code> 渲染到 <code>fabric</code> 的画布上。</p>',10)]))}const p=e(d,[["render",t]]);export{h as __pageData,p as default};
