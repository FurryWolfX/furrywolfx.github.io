import{_ as a,c as e,o as t,a4 as n}from"./chunks/framework.CWaimgAe.js";const f=JSON.parse('{"title":"Canvas 事件系统的思考","description":"","frontmatter":{"title":"Canvas 事件系统的思考","catalog":true,"date":"2022-07-20T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Canvas"],"recommend":"canvas"},"headers":[],"relativePath":"docs/frontend/canvas/canvas-note2.md","filePath":"docs/frontend/canvas/canvas-note2.md"}'),s={name:"docs/frontend/canvas/canvas-note2.md"},o=n('<h1 id="canvas-事件系统的思考" tabindex="-1">Canvas 事件系统的思考 <a class="header-anchor" href="#canvas-事件系统的思考" aria-label="Permalink to &quot;Canvas 事件系统的思考&quot;">​</a></h1><h2 id="基于投影的事件系统-投影法" tabindex="-1">基于投影的事件系统（投影法） <a class="header-anchor" href="#基于投影的事件系统-投影法" aria-label="Permalink to &quot;基于投影的事件系统（投影法）&quot;">​</a></h2><p>这是目前我项目中使用的方式，因为公司<strong>保密协议</strong>的问题，这里只说一下思路：</p><ol><li>首先我们需要创建两个画布，一个是给用户看的主画布，另一个是用户不可见的影子画布。</li><li>当主画布渲染图形的时候，在影子画布上生成主画布形状的投影，投影的颜色和图形 ID 使用特定的算法形成映射。</li><li>当主画布被点击时，获取点击的坐标。</li><li>在影子画布上用相同的坐标去取色，将取到的颜色转换为图形 ID。</li><li>通过投影和图形的映射关系，可以找到用户点击了哪个图形。</li></ol><p>这种方式的好处是：无论图像多么复杂都能完美实现事件系统，而且无需复杂的算法。</p><p>有一篇类似的文章，可参考：</p><p><a href="https://juejin.cn/post/6888209975965909000" target="_blank" rel="noreferrer">https://juejin.cn/post/6888209975965909000</a></p><p>里面讲了射线法和投影法。</p>',8),r=[o];function c(l,i,d,_,p,h){return t(),e("div",null,r)}const u=a(s,[["render",c]]);export{f as __pageData,u as default};
