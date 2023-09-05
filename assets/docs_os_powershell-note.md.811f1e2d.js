import{_ as s,o as e,c as a,Q as o}from"./chunks/framework.a5795de3.js";const E=JSON.parse('{"title":"PowerShell 笔记","description":"","frontmatter":{"title":"PowerShell 笔记","catalog":true,"date":"2015-01-12T14:13:00.000Z","subtitle":null,"header-img":null,"tags":["PowerShell"]},"headers":[],"relativePath":"docs/os/powershell-note.md","filePath":"docs/os/powershell-note.md"}'),l={name:"docs/os/powershell-note.md"},n=o(`<h1 id="powershell-笔记" tabindex="-1">PowerShell 笔记 <a class="header-anchor" href="#powershell-笔记" aria-label="Permalink to &quot;PowerShell 笔记&quot;">​</a></h1><h2 id="递归拷贝" tabindex="-1">递归拷贝 <a class="header-anchor" href="#递归拷贝" aria-label="Permalink to &quot;递归拷贝&quot;">​</a></h2><p>其中<code>recurse</code>表示递归，<code>-Force</code>代表强制。</p><div class="language-powershell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Copy-Item</span><span style="color:#E1E4E8;"> .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">public</span><span style="color:#F97583;">/*</span><span style="color:#E1E4E8;"> .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">.deploy_git </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">recurse </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Copy-Item</span><span style="color:#24292E;"> .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">public</span><span style="color:#D73A49;">/*</span><span style="color:#24292E;"> .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">.deploy_git </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">recurse </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="递归删除" tabindex="-1">递归删除 <a class="header-anchor" href="#递归删除" aria-label="Permalink to &quot;递归删除&quot;">​</a></h2><div class="language-powershell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Remove-Item</span><span style="color:#E1E4E8;"> .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">.deploy_git</span><span style="color:#F97583;">/*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">recurse </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Remove-Item</span><span style="color:#24292E;"> .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">.deploy_git</span><span style="color:#D73A49;">/*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">recurse </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="设置-ss-代理" tabindex="-1">设置 SS 代理 <a class="header-anchor" href="#设置-ss-代理" aria-label="Permalink to &quot;设置 SS 代理&quot;">​</a></h2><div class="language-powershell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$</span><span style="color:#79B8FF;">env:</span><span style="color:#E1E4E8;">HTTPS_PROXY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:1080&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">$</span><span style="color:#79B8FF;">env:</span><span style="color:#E1E4E8;">HTTP_PROXY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:1080&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$</span><span style="color:#005CC5;">env:</span><span style="color:#24292E;">HTTPS_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://127.0.0.1:1080&quot;</span></span>
<span class="line"><span style="color:#24292E;">$</span><span style="color:#005CC5;">env:</span><span style="color:#24292E;">HTTP_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://127.0.0.1:1080&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="因为在此系统中禁止执行脚本" tabindex="-1">因为在此系统中禁止执行脚本 <a class="header-anchor" href="#因为在此系统中禁止执行脚本" aria-label="Permalink to &quot;因为在此系统中禁止执行脚本&quot;">​</a></h2><p>在 Powershell 直接脚本时会出现：</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>无法加载文件 ******.ps1，因为在此系统中禁止执行脚本。有关详细信息，请参阅 &quot;get-help about_signing&quot;。 所在位置 行：1 字符：17</p><ul><li>E:\\Test\\test.ps1 &lt;&lt;&lt;&lt; <ul><li>CategoryInfo : NotSpecified: (:) [], PSSecurityException</li><li>FullyQualifiedErrorId : RuntimeException 查看“get-help about_signing”:</li></ul></li></ul></div><h3 id="简短说明" tabindex="-1">简短说明 <a class="header-anchor" href="#简短说明" aria-label="Permalink to &quot;简短说明&quot;">​</a></h3><p>说明如何对脚本进行签名以使其符合 <code>Windows PowerShell</code> 执行策略。</p><h3 id="详细说明" tabindex="-1">详细说明 <a class="header-anchor" href="#详细说明" aria-label="Permalink to &quot;详细说明&quot;">​</a></h3><p><code>Restricted</code> 执行策略不允许任何脚本运行。 <code>AllSigned</code> 和 <code>RemoteSigned</code> 执行策略可防止 <code>Windows PowerShell</code> 运行没有数字签名的脚本。 本主题说明如何运行所选未签名脚本（即使在执行策略为 <code>RemoteSigned</code> 的情况下），还说明如何对 脚本进行签名以便您自己使用。 有关 <code>Windows PowerShell</code> 执行策略的详细信息，请参阅 <code>about_Execution_Policy</code>。</p><h3 id="允许运行签名脚本" tabindex="-1">允许运行签名脚本 <a class="header-anchor" href="#允许运行签名脚本" aria-label="Permalink to &quot;允许运行签名脚本&quot;">​</a></h3><p>首次在计算机上启动 Windows PowerShell 时，现用执行策略很可能是 <code>Restricted</code>（默认设置）。 <code>Restricted</code> 策略不允许任何脚本运行。 若要了解计算机上的现用执行策略，请键入： <code>get-executionpolicy</code> 若要在本地计算机上运行您编写的未签名脚本和来自其他用户的签名脚本，请使用以下命令将计算机上的 执行策略更改为 <code>RemoteSigned</code>： <code>set-executionpolicy remotesigned</code> 有关详细信息，请参阅 <code>Set-ExecutionPolicy</code>。 执行<code>set-ExecutionPolicy RemoteSigned</code>：</p><h3 id="执行策略更改" tabindex="-1">执行策略更改 <a class="header-anchor" href="#执行策略更改" aria-label="Permalink to &quot;执行策略更改&quot;">​</a></h3><p>执行策略可以防止您执行不信任的脚本。更改执行策略可能会使您面临 <code>about_Execution_Policies</code> 帮助主题中所述的安全风险。是否要更改执行策略？</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[Y] 是 (</span><span style="color:#B392F0;">Y</span><span style="color:#E1E4E8;">)  [N] 否 (</span><span style="color:#B392F0;">N</span><span style="color:#E1E4E8;">)  [S] 挂起 (</span><span style="color:#B392F0;">S</span><span style="color:#E1E4E8;">)  [</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;">] 帮助 （默认值为“Y”): y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[Y] 是 (</span><span style="color:#6F42C1;">Y</span><span style="color:#24292E;">)  [N] 否 (</span><span style="color:#6F42C1;">N</span><span style="color:#24292E;">)  [S] 挂起 (</span><span style="color:#6F42C1;">S</span><span style="color:#24292E;">)  [</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">] 帮助 （默认值为“Y”): y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,20),p=[n];function t(c,r,i,d,h,y){return e(),a("div",null,p)}const b=s(l,[["render",t]]);export{E as __pageData,b as default};
