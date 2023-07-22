import{_ as s,o as a,c as e,V as n}from"./chunks/framework.4acca30d.js";const D=JSON.parse('{"title":"很有用的 Git 命令","description":"","frontmatter":{"title":"很有用的 Git 命令","catalog":true,"date":"2017-06-27T16:50:24.000Z","subtitle":null,"header-img":null,"tags":["Git"]},"headers":[],"relativePath":"docs/other/useful-git-cmds.md","filePath":"docs/other/useful-git-cmds.md"}'),l={name:"docs/other/useful-git-cmds.md"},o=n(`<h1 id="很有用的-git-命令" tabindex="-1">很有用的 Git 命令 <a class="header-anchor" href="#很有用的-git-命令" aria-label="Permalink to &quot;很有用的 Git 命令&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>迄今，我已经使用 <code>Git</code> 很长一段时间了，考虑分享一些不管你是团队开发还是个人项目，都受用的高级 <code>git</code> 命令。</p></div><h2 id="输出最后一次提交的改变" tabindex="-1">输出最后一次提交的改变 <a class="header-anchor" href="#输出最后一次提交的改变" aria-label="Permalink to &quot;输出最后一次提交的改变&quot;">​</a></h2><p>这个命令，我经常使用它 来发送其他没有使用 git 的人来检查或者集成所修改的。它会输出最近提交的修改内容到一个 zip 文件中。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../updated.zip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> diff --name-only HEAD^</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="输出两个提交间的改变" tabindex="-1">输出两个提交间的改变 <a class="header-anchor" href="#输出两个提交间的改变" aria-label="Permalink to &quot;输出两个提交间的改变&quot;">​</a></h2><p>类似的，如果你需要输出某两个提交间的改变时，你可以使用这个。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../latest.zip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NEW_COMMIT_ID_HERE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> diff --name-only OLD_COMMIT_ID_HERE NEW_COMMIT_ID_HERE</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="克隆-指定的远程分支" tabindex="-1">克隆 指定的远程分支 <a class="header-anchor" href="#克隆-指定的远程分支" aria-label="Permalink to &quot;克隆 指定的远程分支&quot;">​</a></h2><p>如果你渴望只克隆远程仓库的一个指定分支，而不是整个仓库分支，这对你帮助很大。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BRANCH_NAME_HERE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">REMOTE_REPO_URL_PATH_HERE</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BRANCH_NAME_HERE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="应用-从不相关的本地仓库来的补丁" tabindex="-1">应用 从不相关的本地仓库来的补丁 <a class="header-anchor" href="#应用-从不相关的本地仓库来的补丁" aria-label="Permalink to &quot;应用 从不相关的本地仓库来的补丁&quot;">​</a></h2><p>如果你需要其它一些不相关的本地仓库作为你现在仓库的补丁，这里就是通往那里的捷径。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--git-dir=PATH_TO_OTHER_REPOSITORY_HERE/.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">format-patch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stdout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">COMMIT_HASH_ID_HERE</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="检测-你的分支的改变是否为其它分支的一部分" tabindex="-1">检测 你的分支的改变是否为其它分支的一部分 <a class="header-anchor" href="#检测-你的分支的改变是否为其它分支的一部分" aria-label="Permalink to &quot;检测 你的分支的改变是否为其它分支的一部分&quot;">​</a></h2><p><code>cherry</code> 命令让我们检测你的分支的改变是否出现在其它一些分支中。它通过 + 或者 - 符号来显示从当前分支与所给的分支之间的改变：是否合并了 (<code>merged</code>)。.+ 指示没有出现在所给分支中，反之，- 就表示出现在了所给的分支中了。这里就是如何去检测：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OTHER_BRANCH_NAME_HERE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#例如：检测 master 分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="开始一个无历史的新分支" tabindex="-1">开始一个无历史的新分支 <a class="header-anchor" href="#开始一个无历史的新分支" aria-label="Permalink to &quot;开始一个无历史的新分支&quot;">​</a></h2><p>有时，你需要开始一个新分支，但是又不想把很长很长的历史记录带进来，例如，你想在公众区域（开源）放置你的代码，但是又不想别人知道它的历史记录。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--orphan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NEW_BRANCH_NAME_HERE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="无切换分支的从其它分支-checkout-文件" tabindex="-1">无切换分支的从其它分支 Checkout 文件 <a class="header-anchor" href="#无切换分支的从其它分支-checkout-文件" aria-label="Permalink to &quot;无切换分支的从其它分支 Checkout 文件&quot;">​</a></h2><p>不想切换分支，但是又想从其它分支中获得你需要的文件：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BRANCH_NAME_HERE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PATH_TO_FILE_IN_BRANCH_HERE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="忽略已追踪文件的变动" tabindex="-1">忽略已追踪文件的变动 <a class="header-anchor" href="#忽略已追踪文件的变动" aria-label="Permalink to &quot;忽略已追踪文件的变动&quot;">​</a></h2><p>如果您正在一个团队中工作，而且大家都在同一条 branch 上面工作，那么您很有可能会经常用到 <code>fetch</code> 和 <code>merge</code>。但是有时候这样会重置您的环境配置文件，如此的话，您就得在每次 <code>merge</code> 后修改它。使用这一命令，您就能要求 git 忽视指定文件的变动。这样，下回你再 <code>merge</code> 的话，这个文件就不会被修改了。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--assume-unchanged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PATH_TO_FILE_HERE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="检查提交的变动是否是-release-的一部分" tabindex="-1">检查提交的变动是否是 release 的一部分 <a class="header-anchor" href="#检查提交的变动是否是-release-的一部分" aria-label="Permalink to &quot;检查提交的变动是否是 release 的一部分&quot;">​</a></h2><p><code>name-rev</code> 命令能告诉您一个 <code>commit</code> 相对于最近一次 <code>release</code> 的位置。使用这条命令，您就可以检查您所做出的改动是否是 <code>release</code> 的一部分了。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name-rev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name-only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">COMMIT_HASH_HERE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用-rebase-推送而非-merge" tabindex="-1">使用 rebase 推送而非 merge <a class="header-anchor" href="#使用-rebase-推送而非-merge" aria-label="Permalink to &quot;使用 rebase 推送而非 merge&quot;">​</a></h2><p>如果您正在团队中工作并且整个团队都在同一条 <code>branch</code> 上面工作，那么您就得经常地进行 <code>fetch/merge</code> 或者 <code>pull</code>。 Git 中，分支的合并以所提交的 <code>merge</code> 来记录，以此表明一条 feature 分支何时与主分支合并。 但是在多团队成员共同工作于一条 <code>branch</code> 的情形中，常规的 merge 会导致 log 中出现多条消息，从而产生混淆。因此，您可以在 <code>pull</code> 的时候使用 <code>rebase</code>，以此来减少无用的 <code>merge</code> 消息，从而保持历史记录的清晰。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>您也可以将某条 <code>branch</code> 配置为总是使用 <code>rebase</code> 推送：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch.BRANCH_NAME_HERE.rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="导出差量更新包" tabindex="-1">导出差量更新包 <a class="header-anchor" href="#导出差量更新包" aria-label="Permalink to &quot;导出差量更新包&quot;">​</a></h2><p>通过<code>git diff</code>得到差异列表</p><p>通过<code>git archive</code>打包</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourZipName.zip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> diff copyID1 copyID2 --name-only</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="清理缓存-并更新-gitignore" tabindex="-1">清理缓存，并更新 gitignore <a class="header-anchor" href="#清理缓存-并更新-gitignore" aria-label="Permalink to &quot;清理缓存，并更新 gitignore&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update .gitignore</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,40),p=[o];function t(r,c,i,C,d,y){return a(),e("div",null,p)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
