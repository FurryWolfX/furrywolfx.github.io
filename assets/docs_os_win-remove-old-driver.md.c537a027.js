import{_ as e,o as a,c as s,Q as o}from"./chunks/framework.a5795de3.js";const u=JSON.parse('{"title":"笔记：如何从 Windows 中删除旧设备驱动程序","description":"","frontmatter":{"title":"笔记：如何从 Windows 中删除旧设备驱动程序","catalog":true,"date":"2023-09-08T16:50:24.000Z","subtitle":null,"tags":["Windows"]},"headers":[],"relativePath":"docs/os/win-remove-old-driver.md","filePath":"docs/os/win-remove-old-driver.md"}'),n={name:"docs/os/win-remove-old-driver.md"},t=o(`<h1 id="笔记-如何从-windows-中删除旧设备驱动程序" tabindex="-1">笔记：如何从 Windows 中删除旧设备驱动程序 <a class="header-anchor" href="#笔记-如何从-windows-中删除旧设备驱动程序" aria-label="Permalink to &quot;笔记：如何从 Windows 中删除旧设备驱动程序&quot;">​</a></h1><p>Windows 更换硬件后并不会删除原来硬件的驱动，需要手动删除。</p><p>官方解决方案：<a href="https://support.microsoft.com/en-gb/topic/device-manager-does-not-display-devices-that-are-not-connected-e7148232-40ae-bb07-0077-88f2e859b53f" target="_blank" rel="noreferrer">https://support.microsoft.com/en-gb/topic/device-manager-does-not-display-devices-that-are-not-connected-e7148232-40ae-bb07-0077-88f2e859b53f</a></p><h2 id="_1-进入命令提示符-输入以下命令" tabindex="-1">1. 进入命令提示符，输入以下命令： <a class="header-anchor" href="#_1-进入命令提示符-输入以下命令" aria-label="Permalink to &quot;1. 进入命令提示符，输入以下命令：&quot;">​</a></h2><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">SET</span><span style="color:#E1E4E8;"> DEVMGR_SHOW_NONPRESENT_DEVICES</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">devmgmt.msc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">SET</span><span style="color:#24292E;"> DEVMGR_SHOW_NONPRESENT_DEVICES</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">devmgmt.msc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-点击显示隐藏设备" tabindex="-1">2. 点击显示隐藏设备 <a class="header-anchor" href="#_2-点击显示隐藏设备" aria-label="Permalink to &quot;2. 点击显示隐藏设备&quot;">​</a></h2><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo/win-remove-old-driver__2023-09-08-21-48-36.png" alt="win-remove-old-driver__2023-09-08-21-48-36"></p><h2 id="_3-可以查看到隐藏设备-即未使用的设备" tabindex="-1">3. 可以查看到隐藏设备(即未使用的设备) <a class="header-anchor" href="#_3-可以查看到隐藏设备-即未使用的设备" aria-label="Permalink to &quot;3. 可以查看到隐藏设备(即未使用的设备)&quot;">​</a></h2><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo/win-remove-old-driver__2023-09-08-21-49-11.png" alt="win-remove-old-driver__2023-09-08-21-49-11"></p>`,9),r=[t];function i(l,c,d,p,_,m){return a(),s("div",null,r)}const v=e(n,[["render",i]]);export{u as __pageData,v as default};