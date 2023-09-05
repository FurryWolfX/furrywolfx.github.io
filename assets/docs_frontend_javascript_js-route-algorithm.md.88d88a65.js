import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5795de3.js";const b=JSON.parse('{"title":"记一个路径遍历算法（JS）","description":"","frontmatter":{"title":"记一个路径遍历算法（JS）","catalog":true,"date":"2020-04-20T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript"]},"headers":[],"relativePath":"docs/frontend/javascript/js-route-algorithm.md","filePath":"docs/frontend/javascript/js-route-algorithm.md"}'),p={name:"docs/frontend/javascript/js-route-algorithm.md"},o=l(`<h1 id="记一个路径遍历算法-js" tabindex="-1">记一个路径遍历算法（JS） <a class="header-anchor" href="#记一个路径遍历算法-js" aria-label="Permalink to &quot;记一个路径遍历算法（JS）&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 输入</span></span>
<span class="line"><span style="color:#6A737D;"> * [&quot;A&quot;, &quot;B&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   [&quot;C&quot;, &quot;D&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   [&quot;E&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   输出</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;C&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;C&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;D&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;D&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;C&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;C&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;D&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;D&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rec</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">input</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">level</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxLevel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (level </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> maxLevel) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">cr]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentRow</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> input[level];</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentRow.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cr[level] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">rec</span><span style="color:#E1E4E8;">(input, level </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, maxLevel);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rec</span><span style="color:#E1E4E8;">(input, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, input.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 输入</span></span>
<span class="line"><span style="color:#6A737D;"> * [&quot;A&quot;, &quot;B&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   [&quot;C&quot;, &quot;D&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   [&quot;E&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   输出</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;C&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;C&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;D&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;A&quot;, &quot;D&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;C&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;C&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;D&quot;, &quot;E&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  [&quot;B&quot;, &quot;D&quot;, &quot;F&quot;],</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#E36209;">input</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">input</span><span style="color:#24292E;">, </span><span style="color:#E36209;">level</span><span style="color:#24292E;">, </span><span style="color:#E36209;">maxLevel</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (level </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> maxLevel) {</span></span>
<span class="line"><span style="color:#24292E;">      result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">cr]);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentRow</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> input[level];</span></span>
<span class="line"><span style="color:#24292E;">    currentRow.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      cr[level] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">rec</span><span style="color:#24292E;">(input, level </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, maxLevel);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rec</span><span style="color:#24292E;">(input, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, input.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,2),e=[o];function t(c,r,E,u,y,i){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
