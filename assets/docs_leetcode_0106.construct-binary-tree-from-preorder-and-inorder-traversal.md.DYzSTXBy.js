import{_ as t,c as n,l as s,a,a4 as i,o as e}from"./chunks/framework.VzvPGsLx.js";const A=JSON.parse('{"title":"0106. 从中序与后序遍历序列构造二叉树","description":"","frontmatter":{"title":"0106. 从中序与后序遍历序列构造二叉树","date":"2024-05-08T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0106.construct-binary-tree-from-preorder-and-inorder-traversal.md","filePath":"docs/leetcode/0106.construct-binary-tree-from-preorder-and-inorder-traversal.md"}'),l={name:"docs/leetcode/0106.construct-binary-tree-from-preorder-and-inorder-traversal.md"},r=i(`<h1 id="_0106-从中序与后序遍历序列构造二叉树" tabindex="-1">0106. 从中序与后序遍历序列构造二叉树 <a class="header-anchor" href="#_0106-从中序与后序遍历序列构造二叉树" aria-label="Permalink to &quot;0106. 从中序与后序遍历序列构造二叉树&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>根据一棵树的中序遍历与后序遍历构造二叉树。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意:</span></span>
<span class="line"><span>你可以假设树中没有重复的元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，给出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中序遍历 inorder = [9,3,15,20,7]</span></span>
<span class="line"><span>后序遍历 postorder = [9,15,7,20,3]</span></span>
<span class="line"><span>返回如下的二叉树：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  9  20</span></span>
<span class="line"><span>    /  \\</span></span>
<span class="line"><span>   15   7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p>我们以题目给出的测试用例来讲解：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/aa2671627393dfe7d05a15dc79a3c97e.png" alt="alt text"></p><p>后序遍历是左右根，因此 postorder 最后一个元素一定整个树的根。由于题目说明了没有重复元素，因此我们可以通过 val 去 inorder 找到根在 inorder 中的索引 i。 而由于中序遍历是左根右，我们容易找到 i 左边的都是左子树，i 右边都是右子树。</p><p>我使用红色表示根，蓝色表示左子树，绿色表示右子树。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/97bbebd2a880e56bdae39907f3e2d1a7.png" alt="alt text"></p><p>根据此时的信息，我们能构造的树是这样的：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/220b4e940674551cd1d9359336a364ad.png" alt="alt text"></p><p>其中右子树由于个数大于 1，我们无法确定，我们继续执行上述逻辑。我们 postorder 继续向前移动一位，这个时候我们得到了第二个根节点”20“，实际上就是右子树的根节点。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/2b21fa80c4b62434b71f8ab97893b861.png" alt="alt text"></p><p>根据此时的信息，我们能构造的树是这样的：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/6e2c0905a709cd6ee9404da8bc499fde.png" alt="alt text"></p><p>我们不断执行上述逻辑即可。简单起见，递归的时候每次我都开辟了新的数组，这个其实是没有必要的，我们可以通过四个变量来记录 inorder 和 postorder 的起始位置即可。</p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, inorder: List[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], postorder: List[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) -&gt; TreeNode:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 实际上inorder 和 postorder一定是同时为空的，因此你无论判断哪个都行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inorder:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TreeNode(postorder[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inorder.index(root.val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root.left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.buildTree(inorder[:i], postorder[:i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.buildTree(inorder[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:], postorder[i:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="复杂度分析" tabindex="-1">复杂度分析 <a class="header-anchor" href="#复杂度分析" aria-label="Permalink to &quot;复杂度分析&quot;">​</a></h2>`,19),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},h=i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2040,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),d=[h],c=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},g=i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2040,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),u=[g],Q=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),T=s("blockquote",null,[s("p",null,"空间复杂度忽略了开辟数组的内存消耗。")],-1),b=s("h2",{id:"相关",tabindex:"-1"},[a("相关 "),s("a",{class:"header-anchor",href:"#相关","aria-label":'Permalink to "相关"'},"​")],-1),y=s("ul",null,[s("li",null,[s("a",{href:"./0105.construct-binary-tree-from-inorder-and-postorder-traversal.html"},"105. 从前序与中序遍历序列构造二叉树")]),s("li",null,[s("a",{href:"./0889.construct-binary-tree-from-preorder-and-postorder-traversal.html"},"889. 根据前序和后序遍历构造二叉树")])],-1);function _(E,x,f,v,w,F){return e(),n("div",null,[r,s("ul",null,[s("li",null,[a("时间复杂度：由于每次递归我们的 inorder 和 postorder 的总数都会减 1，因此我们要递归 N 次，故时间复杂度为 "),s("mjx-container",p,[(e(),n("svg",o,d)),c]),a("，其中 N 为节点个数。")]),s("li",null,[a("空间复杂度：我们使用了递归，也就是借助了额外的栈空间来完成， 由于栈的深度为 N，因此总的空间复杂度为 "),s("mjx-container",k,[(e(),n("svg",m,u)),Q]),a("，其中 N 为节点个数。")])]),T,b,y])}const D=t(l,[["render",_]]);export{A as __pageData,D as default};
