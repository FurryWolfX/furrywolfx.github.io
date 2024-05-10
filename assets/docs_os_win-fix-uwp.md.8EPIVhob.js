import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CWaimgAe.js";const g=JSON.parse('{"title":"修复UWP应用在启动页闪退的问题","description":"","frontmatter":{"title":"修复UWP应用在启动页闪退的问题","catalog":true,"date":"2022-11-06T16:50:24.000Z","subtitle":null,"tags":["Windows"]},"headers":[],"relativePath":"docs/os/win-fix-uwp.md","filePath":"docs/os/win-fix-uwp.md"}'),t={name:"docs/os/win-fix-uwp.md"},n=e('<h1 id="修复-uwp-应用在启动页闪退的问题" tabindex="-1">修复 UWP 应用在启动页闪退的问题 <a class="header-anchor" href="#修复-uwp-应用在启动页闪退的问题" aria-label="Permalink to &quot;修复 UWP 应用在启动页闪退的问题&quot;">​</a></h1><p>这种问题一般是内置的应用程序文件损坏导致的，解决步骤如下：</p><p>使用快捷键 <code>Win+X</code> 打开功能菜单，选择 <code>Windows Powershell(管理员)</code></p><p>运行命令：</p><div class="language-powershell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AppXPackage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AllUsers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Foreach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Add-AppxPackage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DisableDevelopmentMode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Register </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.InstallLocation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\AppXManifest.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}​​</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>等待 <code>PowerShell</code> 停止输出，并另起一行显示 <code>PS C:\\WINDOWS\\system32&gt;</code> ，此时操作完成，过程中出现红色报错为正常现象</p><p>参考资料：<a href="https://answers.microsoft.com/zh-hans/insider/forum/all/%E6%89%80%E6%9C%89uwp%E5%BA%94%E7%94%A8%E9%97%AA/34147c35-7f29-4dc4-bddb-a3594c0f2fac" target="_blank" rel="noreferrer">https://answers.microsoft.com/zh-hans/insider/forum/all/所有uwp应用闪/34147c35-7f29-4dc4-bddb-a3594c0f2fac</a></p>',7),p=[n];function l(h,r,d,o,k,c){return a(),i("div",null,p)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
