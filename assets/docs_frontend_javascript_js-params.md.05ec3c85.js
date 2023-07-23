import{_ as s,o as a,c as n,V as p}from"./chunks/framework.4acca30d.js";const b=JSON.parse('{"title":"图解 JavaScript 的参数传递","description":"","frontmatter":{"title":"图解 JavaScript 的参数传递","catalog":true,"date":"2018-01-16T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript"]},"headers":[],"relativePath":"docs/frontend/javascript/js-params.md","filePath":"docs/frontend/javascript/js-params.md"}'),o={name:"docs/frontend/javascript/js-params.md"},l=p(`<h1 id="图解-javascript-的参数传递" tabindex="-1">图解 JavaScript 的参数传递 <a class="header-anchor" href="#图解-javascript-的参数传递" aria-label="Permalink to &quot;图解 JavaScript 的参数传递&quot;">​</a></h1><blockquote><p><a href="https://segmentfault.com/a/1190000012672374" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000012672374</a></p></blockquote><h2 id="参数到底如何传递" tabindex="-1">参数到底如何传递？ <a class="header-anchor" href="#参数到底如何传递" aria-label="Permalink to &quot;参数到底如何传递？&quot;">​</a></h2><p>借用红宝书的一句话：</p><blockquote><p>ECMAScript 中所有函数的参数都是按值传递的</p></blockquote><p>这个值如果是简单类型，那么就是其本身。如果是引用类型也就是对象传递的就是指向这个对象的地址。故我们可以认为参数传递全部都是值传递，那么具体怎么理解呢？看下例子：</p><p>第一个例子</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>先不说为什么原因，我们就通过画图的方式来走一遍流程，我相信应该就能理解其中的参数传递了。切记传递引用类型传递的是指针！</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/92523cc0-c5aa-2b5e-a0c3-05473af861fe.jpg" alt=""></p><p>首先执行 <code>var obj = {n: 1};</code> ，可以看作在栈的 001 地址中存入了一个指向 <code>{n:1}</code> 的指针 <code>*p</code></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/7ba7e1bd-e0e5-04c3-969b-6805d2b4cd10.jpg" alt=""></p><p>接下来为声明 <code>function foo</code> 此时会创建函数执行上下文，产生一个变量对象，其中声明了形参 data，由于函数没有执行，当前值为 <code>undefined</code>。我们记 data 地址为 022。 关于更多变量对象的知识可以参考冴羽老师的这篇 <a href="https://github.com/mqyqingfeng/Blog/issues/5" target="_blank" rel="noreferrer">JavaScript 深入之变量对象</a>，本文不深入研究关于 AO 相关，你只需要知道在声明这个函数的时候里面的形参已经被创建出来了。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/846f6c56-d590-423c-a3fb-64f48001c32b.jpg" alt=""></p><p>执行 <code>foo(obj)</code> 其中会进行参数传递，其中将 obj 中存储的、*p 拷贝给处在 022 地址的 data，那么此时它们就指向了同一个对象，如果某一个变量更改了 n 的值，另一个变量中 n 的值也会更改，因为其中保存的是指针。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/569923d9-24e8-f15e-eddd-b540dec3a151.jpg" alt=""></p><p>进入函数内部，顺序执行 <code>data = 2;</code> 此时 002 地址存储了基本类型值，则直接存储在栈中，从而与堆中的 <code>{n:1}</code> 失去了联系。从而打印 <code>console.log(data) // 2</code>，最后发现初始开辟的 <code>{n:1}</code> 对象没有过更改，故而 <code>console.log(obj.n) // 1</code> 仍然打印 1。</p><p>第二个例子</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(obj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">n)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>整体来看这个例子中出现了同名覆盖的问题。不太了解代码如何执行的流程，可能会因为同名的关系而有些混乱，不过没关系。只要按照上一个例子的流程图中的执行过程，一定可以得出正确的结果。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/7cc99162-9322-debe-dc07-75fab77997b2.jpg" alt=""></p><p>声明变量 obj，地址为 011 其中存入指向 <code>{n:1}</code> 的指针 <code>*p</code></p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/577c80a9-6275-9f48-ad18-9d46582ad346.jpg" alt=""></p><p>声明函数，虽然同为 obj 变量名，但是形参 obj 为 AO 中的属性，不会与全局造成覆盖，其拥有新的地址记作 022，在未执行前其值为 undefined。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/bbfcbc5f-b872-54d5-a8b1-dd1ad5bb4d4d.jpg" alt=""></p><p>函数立即执行，此时将全局 obj 赋值给形参 obj，我们忽略这个重复命名的问题，其实就是将 011 中的 指针、*p 拷贝了一份给了 022。同时执行第一个 console.log(obj.n) 结果即为 1。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/8fdae669-d0e0-9d52-7452-eeaeab1cc292.jpg" alt=""></p><p>执行 <code>obj.n=3</code>，此时为函数的形参即 022 中的 obj 来改变了对象内 n 的值。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/js-params/f4c369d0-1ddd-e1a6-ef64-7b9614e94a2b.jpg" alt=""></p><p>最关键的一步：<code>var obj = {n:2};</code> 由于对象命名的关系可能很多童鞋就会有点懵，但依然按照同样的方式来分析即可，由于使用了 var 那么就是新声明一个对象，从而会在栈中压入新的地址记作 033，其中存入了新的指针指向了新的对象 <code>{n:2}</code>。从而之后打印的 <code>console.log(obj.n)</code> 结果则应是新开辟的对象中的 n 的值。</p><p>最后打印 <code>console.log(obj.n) //3</code> 很显然，全局的对象有过一次更改其值为 3。</p>`,31),e=[l];function c(t,r,y,d,i,F){return a(),n("div",null,e)}const A=s(o,[["render",c]]);export{b as __pageData,A as default};
