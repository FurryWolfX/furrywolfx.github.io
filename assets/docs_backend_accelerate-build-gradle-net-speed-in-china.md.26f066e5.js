import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5c044c0e.js";const u=JSON.parse('{"title":"加速 build.gradle 的下载速度","description":"","frontmatter":{"title":"加速 build.gradle 的下载速度","catalog":true,"date":"2017-07-05T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Gradle"]},"headers":[],"relativePath":"docs/backend/accelerate-build-gradle-net-speed-in-china.md","filePath":"docs/backend/accelerate-build-gradle-net-speed-in-china.md"}'),p={name:"docs/backend/accelerate-build-gradle-net-speed-in-china.md"},o=l(`<h1 id="加速-build-gradle-的下载速度" tabindex="-1">加速 build.gradle 的下载速度 <a class="header-anchor" href="#加速-build-gradle-的下载速度" aria-label="Permalink to &quot;加速 build.gradle 的下载速度&quot;">​</a></h1><p>找到 <code>build.gradle</code> 文件，修改成如下</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Top-level</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">you</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">can</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">configuration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">common</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sub-projects/modules.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">buildscript</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repositories</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/google&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/jcenter&#39;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dependencies</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">classpath</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;com.android.tools.build:gradle:2.2.2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">allprojects</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repositories</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/google&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/jcenter&#39;}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">maven</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">task</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Delete</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rootProject.buildDir</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Top-level</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">where</span><span style="color:#24292E;"> </span><span style="color:#032F62;">you</span><span style="color:#24292E;"> </span><span style="color:#032F62;">can</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">configuration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">options</span><span style="color:#24292E;"> </span><span style="color:#032F62;">common</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sub-projects/modules.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">buildscript</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repositories</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/google&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/jcenter&#39;}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dependencies</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">classpath</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;com.android.tools.build:gradle:2.2.2&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">allprojects</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repositories</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/google&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/jcenter&#39;}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">maven</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">task</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Delete</span><span style="color:#24292E;">) </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rootProject.buildDir</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="方案二" tabindex="-1">方案二 <a class="header-anchor" href="#方案二" aria-label="Permalink to &quot;方案二&quot;">​</a></h2><p>在用户目录下的 <code>.gradle</code> 中 <code>gradle.properties</code> 设置代理</p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">systemProp.https.proxyPort</span><span style="color:#E1E4E8;">=1087</span></span>
<span class="line"><span style="color:#F97583;">systemProp.http.proxyHost</span><span style="color:#E1E4E8;">=127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">systemProp.https.proxyHost</span><span style="color:#E1E4E8;">=127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">systemProp.http.proxyPort</span><span style="color:#E1E4E8;">=1087</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">systemProp.https.proxyPort</span><span style="color:#24292E;">=1087</span></span>
<span class="line"><span style="color:#D73A49;">systemProp.http.proxyHost</span><span style="color:#24292E;">=127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">systemProp.https.proxyHost</span><span style="color:#24292E;">=127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">systemProp.http.proxyPort</span><span style="color:#24292E;">=1087</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,6),e=[o];function r(c,t,E,y,i,F){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};