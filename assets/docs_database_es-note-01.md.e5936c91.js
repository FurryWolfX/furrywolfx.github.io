import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5795de3.js";const d=JSON.parse('{"title":"Elasticsearch 笔记 01","description":"","frontmatter":{"title":"Elasticsearch 笔记 01","catalog":true,"date":"2020-08-13T23:32:00.000Z","subtitle":null,"header-img":null,"tags":["Elasticsearch"]},"headers":[],"relativePath":"docs/database/es-note-01.md","filePath":"docs/database/es-note-01.md"}'),p={name:"docs/database/es-note-01.md"},o=l(`<h1 id="elasticsearch-笔记-01" tabindex="-1">Elasticsearch 笔记 01 <a class="header-anchor" href="#elasticsearch-笔记-01" aria-label="Permalink to &quot;Elasticsearch 笔记 01&quot;">​</a></h1><h2 id="插入示例" tabindex="-1">插入示例 <a class="header-anchor" href="#插入示例" aria-label="Permalink to &quot;插入示例&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 新建员工</span></span>
<span class="line"><span style="color:#B392F0;">PUT</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/megacorp/employee/1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span>
<span class="line"><span style="color:#B392F0;">Content-Type:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 新建员工</span></span>
<span class="line"><span style="color:#6F42C1;">PUT</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/megacorp/employee/1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span>
<span class="line"><span style="color:#6F42C1;">Content-Type:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;first_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;John&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;last_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Smith&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;about&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;I love to go rock climbing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;interests&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;sports&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;music&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;first_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;John&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;last_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Smith&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;about&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;I love to go rock climbing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;interests&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;sports&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;music&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="检索示例" tabindex="-1">检索示例 <a class="header-anchor" href="#检索示例" aria-label="Permalink to &quot;检索示例&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检索员工1</span></span>
<span class="line"><span style="color:#B392F0;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/megacorp/employee/1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 轻量检索</span></span>
<span class="line"><span style="color:#B392F0;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/megacorp/_search?q=last_name:Smith</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表达式检索</span></span>
<span class="line"><span style="color:#B392F0;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/megacorp/_search</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span>
<span class="line"><span style="color:#B392F0;">Content-Type:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检索员工1</span></span>
<span class="line"><span style="color:#6F42C1;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/megacorp/employee/1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 轻量检索</span></span>
<span class="line"><span style="color:#6F42C1;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/megacorp/_search?q=last_name:Smith</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 表达式检索</span></span>
<span class="line"><span style="color:#6F42C1;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/megacorp/_search</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span>
<span class="line"><span style="color:#6F42C1;">Content-Type:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;last_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Smith&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;last_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Smith&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 复杂检索</span></span>
<span class="line"><span style="color:#6A737D;"># 现在尝试下更复杂的搜索。 同样搜索姓氏为 Smith 的员工，但这次我们只需要年龄大于 30 的。</span></span>
<span class="line"><span style="color:#6A737D;"># 查询需要稍作调整，使用过滤器 filter ，它支持高效地执行一个结构化查询。</span></span>
<span class="line"><span style="color:#B392F0;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/megacorp/_search</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span>
<span class="line"><span style="color:#B392F0;">Content-Type:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 复杂检索</span></span>
<span class="line"><span style="color:#6A737D;"># 现在尝试下更复杂的搜索。 同样搜索姓氏为 Smith 的员工，但这次我们只需要年龄大于 30 的。</span></span>
<span class="line"><span style="color:#6A737D;"># 查询需要稍作调整，使用过滤器 filter ，它支持高效地执行一个结构化查询。</span></span>
<span class="line"><span style="color:#6F42C1;">GET</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/megacorp/_search</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span>
<span class="line"><span style="color:#6F42C1;">Content-Type:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;must&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;last_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;smith&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filter&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: { </span><span style="color:#79B8FF;">&quot;gt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bool&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;must&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;last_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;smith&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filter&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;range&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">: { </span><span style="color:#005CC5;">&quot;gt&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="匹配连续文本" tabindex="-1">匹配连续文本 <a class="header-anchor" href="#匹配连续文本" aria-label="Permalink to &quot;匹配连续文本&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;match_phrase&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;last_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Smith&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;match_phrase&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;last_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Smith&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="精确匹配" tabindex="-1">精确匹配 <a class="header-anchor" href="#精确匹配" aria-label="Permalink to &quot;精确匹配&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filter&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;term&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;字段名.keyword&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;字段值&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bool&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filter&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;term&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;字段名.keyword&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;字段值&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="删除示例" tabindex="-1">删除示例 <a class="header-anchor" href="#删除示例" aria-label="Permalink to &quot;删除示例&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">DELETE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.1.5:9200/demo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP/1.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">DELETE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.1.5:9200/demo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP/1.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),e=[o];function t(c,r,i,E,y,u){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};