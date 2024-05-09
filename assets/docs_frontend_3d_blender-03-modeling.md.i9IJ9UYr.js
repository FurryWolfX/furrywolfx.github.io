import{_ as e,c as a,o as m,a4 as g}from"./chunks/framework.CWaimgAe.js";const u=JSON.parse('{"title":"Blender 笔记03: 建模篇","description":"","frontmatter":{"title":"Blender 笔记03: 建模篇","catalog":true,"date":"2020-10-26T16:50:00.000Z","subtitle":null,"header-img":null,"tags":["3D","Blender"],"recommend":"blender"},"headers":[],"relativePath":"docs/frontend/3d/blender-03-modeling.md","filePath":"docs/frontend/3d/blender-03-modeling.md"}'),i={name:"docs/frontend/3d/blender-03-modeling.md"},p=g('<h1 id="blender-笔记-03-建模篇" tabindex="-1">Blender 笔记 03: 建模篇 <a class="header-anchor" href="#blender-笔记-03-建模篇" aria-label="Permalink to &quot;Blender 笔记 03: 建模篇&quot;">​</a></h1><h2 id="平面挖孔建模案例-01" tabindex="-1">平面挖孔建模案例 01 <a class="header-anchor" href="#平面挖孔建模案例-01" aria-label="Permalink to &quot;平面挖孔建模案例 01&quot;">​</a></h2><h3 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h3><p>对一个平面做镜像</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230007692.png" alt="image-20201024230007692"></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024225958351.png" alt="image-20201024225958351"></p><h3 id="ctrl-shift-b-打孔" tabindex="-1">CTRL+SHIFT+B 打孔 <a class="header-anchor" href="#ctrl-shift-b-打孔" aria-label="Permalink to &quot;CTRL+SHIFT+B 打孔&quot;">​</a></h3><p>选中需要打洞的顶点</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230033319.png" alt="image-20201024230033319"></p><p>CTRL+SHIFT+B 或 CTRL+BV</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230351098.png" alt="image-20201024230351098"></p><p>按 X 删除选中的面</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230548973.png" alt="image-20201024230548973"></p><h3 id="用切线控制细分的弧度" tabindex="-1">用切线控制细分的弧度 <a class="header-anchor" href="#用切线控制细分的弧度" aria-label="Permalink to &quot;用切线控制细分的弧度&quot;">​</a></h3><p>如果不希望角的弧度过大：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230614161.png" alt="image-20201024230614161"></p><p>可以用 K 加两条切线，注意可以用 C 来锁定角度</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024231024531.png" alt="image-20201024231024531"></p><h2 id="平面挖孔建模案例-02" tabindex="-1">平面挖孔建模案例 02 <a class="header-anchor" href="#平面挖孔建模案例-02" aria-label="Permalink to &quot;平面挖孔建模案例 02&quot;">​</a></h2><h3 id="用-e-挤出来创建圆环" tabindex="-1">用 E 挤出来创建圆环 <a class="header-anchor" href="#用-e-挤出来创建圆环" aria-label="Permalink to &quot;用 E 挤出来创建圆环&quot;">​</a></h3><p>用 SHIFT+A 添加一个顶点 60 的圆环</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025213901474.png" alt="image-20201025213901474"></p><p>按 E 挤出，并按 S 缩放</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214014929.png" alt="image-20201025214014929"></p><p>重复上述步骤</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214057993.png" alt="image-20201025214057993"></p><p>删除上部分</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214254798.png" alt="image-20201025214254798"></p><p>添加镜像修改器</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214331865.png" alt="image-20201025214331865"></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214337497.png" alt="image-20201025214337497"></p><p>用 EY 挤出下面的边</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214427176.png" alt="image-20201025214427176"></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214513515.png" alt="image-20201025214513515"></p><h3 id="sy0-打平有弧度的边" tabindex="-1">SY0 打平有弧度的边 <a class="header-anchor" href="#sy0-打平有弧度的边" aria-label="Permalink to &quot;SY0 打平有弧度的边&quot;">​</a></h3><p>用 SY0 打平边</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214559224.png" alt="image-20201025214559224"></p><h3 id="ctrl-r-环切保护边" tabindex="-1">CTRL+R 环切保护边 <a class="header-anchor" href="#ctrl-r-环切保护边" aria-label="Permalink to &quot;CTRL+R 环切保护边&quot;">​</a></h3><p>用 CTRL+R，SY0 添加保护边</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214810429.png" alt="image-20201025214810429"></p><p>用 GY 拖动到合适的位置</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025214857306.png" alt="image-20201025214857306"></p><p>用 CTRL+R+滚轮添加多个循环边</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025215020407.png" alt="image-20201025215020407"></p><p>用 CTRL+SHIFT+B 和滚轮加倒角</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025215301497.png" alt="image-20201025215301497"></p><h3 id="loop-插件-圆环" tabindex="-1">loop 插件-圆环 <a class="header-anchor" href="#loop-插件-圆环" aria-label="Permalink to &quot;loop 插件-圆环&quot;">​</a></h3><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025215354072.png" alt="image-20201025215354072"></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025215521697.png" alt="image-20201025215521697"></p><p>用 I 添加保护边后挖孔</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224027225.png" alt="image-20201025224027225"></p><p>由于不是两边对称挖孔，需要退出编辑模式，应用镜像修改器</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025220002034.png" alt="image-20201025220002034"></p><p>挖孔后用 E 挤出厚度，并添加表面细分修改器，添加多个循环边让细分更硬朗。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025223810790.png" alt="image-20201025223810790"></p><h3 id="硬切倒角-shift-e-边线折痕" tabindex="-1">硬切倒角（SHIFT+E 边线折痕） <a class="header-anchor" href="#硬切倒角-shift-e-边线折痕" aria-label="Permalink to &quot;硬切倒角（SHIFT+E 边线折痕）&quot;">​</a></h3><p>选择圆孔边线</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224227754.png" alt="image-20201025224227754"></p><p>用 GZ 下移</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224308583.png" alt="image-20201025224308583"></p><p>选择外边</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224335724.png" alt="image-20201025224335724"></p><p>SHIFT+E 边线折痕</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224426416.png" alt="image-20201025224426416"></p><p>用同样的方式缩小并处理内边，得到如下效果：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224516239.png" alt="image-20201025224516239"></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201025224826883.png" alt="image-20201025224826883"></p>',67),o=[p];function l(c,n,d,t,s,r){return m(),a("div",null,o)}const b=e(i,[["render",l]]);export{u as __pageData,b as default};
