import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.a5795de3.js";const _=JSON.parse('{"title":"SSH 免密登录","description":"","frontmatter":{"title":"SSH 免密登录","catalog":true,"date":"2017-10-20T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Linux"]},"headers":[],"relativePath":"docs/os/ssh-login-without-password.md","filePath":"docs/os/ssh-login-without-password.md"}'),o={name:"docs/os/ssh-login-without-password.md"},l=e(`<h1 id="ssh-免密登录" tabindex="-1">SSH 免密登录 <a class="header-anchor" href="#ssh-免密登录" aria-label="Permalink to &quot;SSH 免密登录&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span></span>
<span class="line"><span style="color:#B392F0;">ssh-copy-id</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">user@I</span><span style="color:#E1E4E8;">P</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-copy-id</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">user@I</span><span style="color:#24292E;">P</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),t=[l];function p(r,c,i,d,h,u){return a(),n("div",null,t)}const E=s(o,[["render",p]]);export{_ as __pageData,E as default};
