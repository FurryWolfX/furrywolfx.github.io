import{_ as s,o as a,c as e,V as n}from"./chunks/framework.4acca30d.js";const m=JSON.parse('{"title":"SSH 免密登录","description":"","frontmatter":{"title":"SSH 免密登录","catalog":true,"date":"2017-10-20T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/ssh-login-without-password.md","filePath":"docs/os/ssh-login-without-password.md"}'),o={name:"docs/os/ssh-login-without-password.md"},t=n(`<h1 id="ssh-免密登录" tabindex="-1">SSH 免密登录 <a class="header-anchor" href="#ssh-免密登录" aria-label="Permalink to &quot;SSH 免密登录&quot;">​</a></h1><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-copy-id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">user@I</span><span style="color:#A6ACCD;">P</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),l=[t];function r(p,c,i,d,h,_){return a(),e("div",null,l)}const C=s(o,[["render",r]]);export{m as __pageData,C as default};
