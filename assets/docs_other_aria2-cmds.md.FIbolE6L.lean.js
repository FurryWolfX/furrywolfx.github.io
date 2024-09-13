import{_ as o,c as a,a3 as t,o as c}from"./chunks/framework.CDetKDz4.js";const h=JSON.parse('{"title":"aria2 常用命令","description":"","frontmatter":{"title":"aria2 常用命令","catalog":true,"date":"2018-10-29T14:45:00.000Z","subtitle":null,"header-img":null,"tags":null},"headers":[],"relativePath":"docs/other/aria2-cmds.md","filePath":"docs/other/aria2-cmds.md"}'),d={name:"docs/other/aria2-cmds.md"};function r(i,e,p,s,l,n){return c(),a("div",null,e[0]||(e[0]=[t('<h1 id="aria2-常用命令" tabindex="-1">aria2 常用命令 <a class="header-anchor" href="#aria2-常用命令" aria-label="Permalink to &quot;aria2 常用命令&quot;">​</a></h1><p><code>aria2</code> 最强大之处在于可以伪造 <code>cookie</code> 校验，下载带有验证的文件。这里记录一些常用的命令：</p><p><code>-s, --split=N</code> 下载分割数量</p><p><code>--referer=REFERER</code> 引用页面</p><p><code>-i, --input-file=FILE</code> 通过文件导入下载</p><p><code>-j, --max-concurrent-downloads=N</code> 同时下载线程数量</p><p><code>-U, --user-agent=USER_AGENT</code> UA 校验</p><p><code>--enable-http-keep-alive[=true|false]</code></p><p><code>--enable-http-pipelining[=true|false]</code></p><p><code>--header=HEADER</code> ex: <code>aria2c --header=&quot;X-A: b78&quot; --header=&quot;X-B: 9J1&quot;</code></p><hr><p>例如下载需要 <code>cookie</code> 校验的文件：</p><p><code>aria2c --header=&quot;Cookie:cookie名称=cookie内容&quot; &quot;http://...&quot;</code></p>',13)]))}const m=o(d,[["render",r]]);export{h as __pageData,m as default};