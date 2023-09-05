import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5795de3.js";const B=JSON.parse('{"title":"常用正则校验整理","description":"","frontmatter":{"title":"常用正则校验整理","catalog":true,"date":"2018-07-09T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["JavaScript"]},"headers":[],"relativePath":"docs/frontend/javascript/regexps-for-you.md","filePath":"docs/frontend/javascript/regexps-for-you.md"}'),p={name:"docs/frontend/javascript/regexps-for-you.md"},o=l(`<h1 id="常用正则校验整理" tabindex="-1">常用正则校验整理 <a class="header-anchor" href="#常用正则校验整理" aria-label="Permalink to &quot;常用正则校验整理&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> RegExps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Email: </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-zA-Z0-9_-]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">@(</span><span style="color:#79B8FF;">[a-zA-Z0-9_-]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">((</span><span style="color:#79B8FF;">.[a-zA-Z0-9_-]</span><span style="color:#F97583;">{2,3}</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">{1,2}</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 电子邮箱</span></span>
<span class="line"><span style="color:#E1E4E8;">  Mobile:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">(13</span><span style="color:#79B8FF;">[0-9]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">14</span><span style="color:#79B8FF;">[579]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">15</span><span style="color:#79B8FF;">[0-3,5-9]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">16</span><span style="color:#79B8FF;">[6]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">17</span><span style="color:#79B8FF;">[0135678]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">18</span><span style="color:#79B8FF;">[0-9]</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">19</span><span style="color:#79B8FF;">[89]</span><span style="color:#DBEDFF;">)</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">{8}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 手机号码 2018 版</span></span>
<span class="line"><span style="color:#E1E4E8;">  Phone:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[0-9]</span><span style="color:#F97583;">{3,4}</span><span style="color:#DBEDFF;">-)</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">[0-9]</span><span style="color:#F97583;">{7,8}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  IDCard: </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[1-9]\\d</span><span style="color:#F97583;">{5}</span><span style="color:#DBEDFF;">(18</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">19</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[23]\\d</span><span style="color:#DBEDFF;">))</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">{2}</span><span style="color:#DBEDFF;">((0</span><span style="color:#79B8FF;">[1-9]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">(10</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">11</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">12))((</span><span style="color:#79B8FF;">[0-2][1-9]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">10</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">20</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">30</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">31)</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">{3}</span><span style="color:#79B8FF;">[0-9Xx]</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 18位身份证</span></span>
<span class="line"><span style="color:#E1E4E8;">  IDCard15: </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[1-9]\\d</span><span style="color:#F97583;">{5}</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">{2}</span><span style="color:#DBEDFF;">((0</span><span style="color:#79B8FF;">[1-9]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">(10</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">11</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">12))((</span><span style="color:#79B8FF;">[0-2][1-9]</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">10</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">20</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">30</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">31)</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">{2}</span><span style="color:#79B8FF;">[0-9Xx]</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 15位身份证</span></span>
<span class="line"><span style="color:#E1E4E8;">  Currency:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">(</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 货币</span></span>
<span class="line"><span style="color:#E1E4E8;">  Number:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 数字</span></span>
<span class="line"><span style="color:#E1E4E8;">  Float:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">(-</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)(</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 浮点数</span></span>
<span class="line"><span style="color:#E1E4E8;">  Zip:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[1-9]\\d</span><span style="color:#F97583;">{5}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 邮编</span></span>
<span class="line"><span style="color:#E1E4E8;">  QQ:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[1-9]\\d</span><span style="color:#F97583;">{4,8}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// QQ</span></span>
<span class="line"><span style="color:#E1E4E8;">  English:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[A-Za-z]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 英文</span></span>
<span class="line"><span style="color:#E1E4E8;">  Chinese:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[\\u2E80-\\u9FFF]</span><span style="color:#F97583;">+$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Unicode编码中的汉字范围</span></span>
<span class="line"><span style="color:#E1E4E8;">  Password:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">{6,16}$</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 6-16数字或字母</span></span>
<span class="line"><span style="color:#E1E4E8;">  Hex:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">#</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[a-fA-F0-9]</span><span style="color:#F97583;">{6}|</span><span style="color:#79B8FF;">[a-fA-F0-9]</span><span style="color:#F97583;">{3}</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 十六进制色值，如：#AAA，#AAAAAA</span></span>
<span class="line"><span style="color:#E1E4E8;">  VehicleNumber:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]</span><span style="color:#F97583;">{1}</span><span style="color:#79B8FF;">[A-Z]</span><span style="color:#F97583;">{1}</span><span style="color:#79B8FF;">[A-Z0-9]</span><span style="color:#F97583;">{4}</span><span style="color:#79B8FF;">[A-Z0-9挂学警港澳]</span><span style="color:#F97583;">{1}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 等待补充...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> RegExps </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  Email: </span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-zA-Z0-9_-]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">@(</span><span style="color:#005CC5;">[a-zA-Z0-9_-]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">((</span><span style="color:#005CC5;">.[a-zA-Z0-9_-]</span><span style="color:#D73A49;">{2,3}</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">{1,2}</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 电子邮箱</span></span>
<span class="line"><span style="color:#24292E;">  Mobile:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">(13</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">14</span><span style="color:#005CC5;">[579]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">15</span><span style="color:#005CC5;">[0-3,5-9]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">16</span><span style="color:#005CC5;">[6]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">17</span><span style="color:#005CC5;">[0135678]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">18</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">19</span><span style="color:#005CC5;">[89]</span><span style="color:#032F62;">)</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">{8}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 手机号码 2018 版</span></span>
<span class="line"><span style="color:#24292E;">  Phone:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{3,4}</span><span style="color:#032F62;">-)</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">[0-9]</span><span style="color:#D73A49;">{7,8}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  IDCard: </span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[1-9]\\d</span><span style="color:#D73A49;">{5}</span><span style="color:#032F62;">(18</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">19</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[23]\\d</span><span style="color:#032F62;">))</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">{2}</span><span style="color:#032F62;">((0</span><span style="color:#005CC5;">[1-9]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">(10</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">11</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">12))((</span><span style="color:#005CC5;">[0-2][1-9]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">10</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">20</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">30</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">31)</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">{3}</span><span style="color:#005CC5;">[0-9Xx]</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 18位身份证</span></span>
<span class="line"><span style="color:#24292E;">  IDCard15: </span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[1-9]\\d</span><span style="color:#D73A49;">{5}</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">{2}</span><span style="color:#032F62;">((0</span><span style="color:#005CC5;">[1-9]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">(10</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">11</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">12))((</span><span style="color:#005CC5;">[0-2][1-9]</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">10</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">20</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">30</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">31)</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">{2}</span><span style="color:#005CC5;">[0-9Xx]</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 15位身份证</span></span>
<span class="line"><span style="color:#24292E;">  Currency:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">(</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">?$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 货币</span></span>
<span class="line"><span style="color:#24292E;">  Number:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 数字</span></span>
<span class="line"><span style="color:#24292E;">  Float:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">(-</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)(</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">?$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 浮点数</span></span>
<span class="line"><span style="color:#24292E;">  Zip:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[1-9]\\d</span><span style="color:#D73A49;">{5}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 邮编</span></span>
<span class="line"><span style="color:#24292E;">  QQ:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[1-9]\\d</span><span style="color:#D73A49;">{4,8}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// QQ</span></span>
<span class="line"><span style="color:#24292E;">  English:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[A-Za-z]</span><span style="color:#D73A49;">+$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 英文</span></span>
<span class="line"><span style="color:#24292E;">  Chinese:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[\\u2E80-\\u9FFF]</span><span style="color:#D73A49;">+$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Unicode编码中的汉字范围</span></span>
<span class="line"><span style="color:#24292E;">  Password:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">{6,16}$</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">i</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 6-16数字或字母</span></span>
<span class="line"><span style="color:#24292E;">  Hex:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">[a-fA-F0-9]</span><span style="color:#D73A49;">{6}|</span><span style="color:#005CC5;">[a-fA-F0-9]</span><span style="color:#D73A49;">{3}</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 十六进制色值，如：#AAA，#AAAAAA</span></span>
<span class="line"><span style="color:#24292E;">  VehicleNumber:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]</span><span style="color:#D73A49;">{1}</span><span style="color:#005CC5;">[A-Z]</span><span style="color:#D73A49;">{1}</span><span style="color:#005CC5;">[A-Z0-9]</span><span style="color:#D73A49;">{4}</span><span style="color:#005CC5;">[A-Z0-9挂学警港澳]</span><span style="color:#D73A49;">{1}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 等待补充...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="传送门" tabindex="-1">传送门 <a class="header-anchor" href="#传送门" aria-label="Permalink to &quot;传送门&quot;">​</a></h2><p>正则在线校验：<a href="http://tool.oschina.net/regex/" target="_blank" rel="noreferrer">http://tool.oschina.net/regex/</a></p><p>正则表达式语法：<a href="http://www.runoob.com/regexp/regexp-syntax.html" target="_blank" rel="noreferrer">http://www.runoob.com/regexp/regexp-syntax.html</a></p><p>过目不忘 JS 正则表达式：<a href="https://www.cnblogs.com/moqing/archive/2016/07/13/5665126.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/moqing/archive/2016/07/13/5665126.html</a></p>`,6),e=[o];function r(c,t,y,F,E,D){return n(),a("div",null,e)}const i=s(p,[["render",r]]);export{B as __pageData,i as default};
