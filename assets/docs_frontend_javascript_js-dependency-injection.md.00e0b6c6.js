import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4acca30d.js";const p="/assets/fafc9e30-744f-4485-0975-2161244e81a3.906bc5c7.jpg",u=JSON.parse('{"title":"初识 JavaScript 依赖注入","description":"","frontmatter":{"title":"初识 JavaScript 依赖注入","catalog":true,"date":"2018-01-15T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript"]},"headers":[],"relativePath":"docs/frontend/javascript/js-dependency-injection.md","filePath":"docs/frontend/javascript/js-dependency-injection.md"}'),o={name:"docs/frontend/javascript/js-dependency-injection.md"},e=l('<h1 id="初识-javascript-依赖注入" tabindex="-1">初识 JavaScript 依赖注入 <a class="header-anchor" href="#初识-javascript-依赖注入" aria-label="Permalink to &quot;初识 JavaScript 依赖注入&quot;">​</a></h1><blockquote><p><a href="https://github.com/Aaaaaaaty/Blog/issues/26" target="_blank" rel="noreferrer">https://github.com/Aaaaaaaty/Blog/issues/26</a></p></blockquote><h2 id="什么是依赖注入" tabindex="-1">什么是依赖注入 <a class="header-anchor" href="#什么是依赖注入" aria-label="Permalink to &quot;什么是依赖注入&quot;">​</a></h2><p>第一次听到这个说法是在 angular 的时候，我们都知道 angular 内部大量使用了依赖注入。虽然我到现在也没玩过：），不过这并不影响我们来探究一下它。</p><p>首先试图形象的说明一下（个人观点、有问题欢迎指正）：有那么一群人，这群人的职业是程序员。他们除了工作不想费力气去做别的事。除了上班剩下的只有买吃的和买格子衫。具体吃什么和格子衫什么样子他们并不关心。那么也许我们可以提供一个公共服务，来专门为程序员提供吃的和格子衫。程序员不需要关心我们怎么做吃的和去哪里买格子衫，他们只需要告诉我们他们需要就可以了，买好之后我们自然会给他们送到。这样就可以避免每个程序员还要花费心思独自的去吃东西和买格子衫，省去了大把时间就可以更好的投入到工作中了。</p><p>刚刚那段说法可以抽象为下面这张简易示意图：</p><p><img src="'+p+`" alt=""></p><p>按照上面图的流程中我们可以知道我们需要实现这么几件事：</p><ul><li>提供一个服务容器</li><li>为目标函数注册需要的依赖</li><li>获取目标函数注册的依赖项</li><li>通过依赖项来查询对应服务</li><li>将获取的依赖项传入目标函数</li></ul><h2 id="提供一个服务容器" tabindex="-1">提供一个服务容器 <a class="header-anchor" href="#提供一个服务容器" aria-label="Permalink to &quot;提供一个服务容器&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 假装提供一些服务</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> services </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">A</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">B</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">C</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="为目标函数注册需要的依赖" tabindex="-1">为目标函数注册需要的依赖 <a class="header-anchor" href="#为目标函数注册需要的依赖" aria-label="Permalink to &quot;为目标函数注册需要的依赖&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 目标函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Service</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">A</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">B</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">A</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">B</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>目前的注册方式采用在形参的方式来传递，我们不需要关心 A、B 是怎么实现的，我们只需要知道这些代表着吃的和格子衫就可以了：） 获取目标函数注册的依赖项</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 获取 func 的参数列表（依赖列表)</span></span>
<span class="line"><span style="color:#82AAFF;">getFuncParams</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">func</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">matches</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">function\\s</span><span style="color:#89DDFF;">*[^</span><span style="color:#A6ACCD;">\\(</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">\\(</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">*([^</span><span style="color:#A6ACCD;">\\)</span><span style="color:#89DDFF;">]*)</span><span style="color:#A6ACCD;">\\)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">m</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">matches</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">matches</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">matches</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>实现原理为将传入的目标函数进行正则匹配，匹配出形参。这其中的关键点在于这段正则表达式：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">function\\s</span><span style="color:#89DDFF;">*[^</span><span style="color:#A6ACCD;">\\(</span><span style="color:#89DDFF;">]*</span><span style="color:#A6ACCD;">\\(</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">*([^</span><span style="color:#A6ACCD;">\\)</span><span style="color:#89DDFF;">]*)</span><span style="color:#A6ACCD;">\\)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">m</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中、(\\s*([^)]* 通过括号来提取匹配到 function 后面参数括号的内部内容，也就是可以得到参数字符串。这里面是运用了括号的提取数据的规则来获取的信息，规则如下：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> regex </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{2})</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{2})/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> string </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2017-06-12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(string</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(regex))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; [&quot;2017-06-12&quot;, &quot;2017&quot;, &quot;06&quot;, &quot;12&quot;, index: 0, input: &quot;2017-06-12&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>结果数组中第一个元素为匹配结果，之后为括号内的数据，由此我们便可知道，这段正则通过括号的使用，获取到了整个形参作为一个字符串，之后再通过 split 进行拆分就得到了我们想要的结果。</p><h2 id="通过依赖项来查询对应服务" tabindex="-1">通过依赖项来查询对应服务 <a class="header-anchor" href="#通过依赖项来查询对应服务" aria-label="Permalink to &quot;通过依赖项来查询对应服务&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 简易实现</span></span>
<span class="line"><span style="color:#82AAFF;">setFuncParams</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">services</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 依次对应服务中的项进行查找返回结果。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="将获取的依赖项传入目标函数" tabindex="-1">将获取的依赖项传入目标函数 <a class="header-anchor" href="#将获取的依赖项传入目标函数" aria-label="Permalink to &quot;将获取的依赖项传入目标函数&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 注射器</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Activitor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">scope</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scope</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setFuncParams</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">getFuncParams</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#F07178;">)))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实例化 Service 并调用方法</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> service </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Activitor</span><span style="color:#A6ACCD;">(Service)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">service</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//1 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>至此我们便完整地实现了一个很简单的依赖注入的模式，<a href="https://github.com/Aaaaaaaty/Blog/blob/master/designPattern/DependencyInjection.js" target="_blank" rel="noreferrer">源码在这里</a>。 非常简单，同时也没有做很多的判断。不过核心的思路还是梳理了出来。 自己闷头琢磨了半天，有不对的地方欢迎斧正~ PS：下面的几篇参考资料写的都很好，其中<a href="https://zhuanlan.zhihu.com/yanhaijing" target="_blank" rel="noreferrer">颜海镜</a> 老师的 <a href="http://yanhaijing.com/javascript/2014/01/24/dependency-injection-in-javascript/" target="_blank" rel="noreferrer">JavaScript 里的依赖注入</a> 很有深意，拜读了很久，也分享给大家。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/26176550" target="_blank" rel="noreferrer">依赖注入通俗解释</a></li><li><a href="http://imweb.io/topic/5618a9d05d6f37745e8f498a" target="_blank" rel="noreferrer">js 依赖注入初探</a></li><li><a href="http://yanhaijing.com/javascript/2014/01/24/dependency-injection-in-javascript/" target="_blank" rel="noreferrer">JavaScript 里的依赖注入</a></li></ul>`,28),t=[e];function r(c,i,y,F,D,A){return a(),n("div",null,t)}const b=s(o,[["render",r]]);export{u as __pageData,b as default};
