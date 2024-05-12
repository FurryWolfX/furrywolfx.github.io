import{_ as t,c as e,l as s,a,a4 as i,o as n}from"./chunks/framework.CWaimgAe.js";const B=JSON.parse('{"title":"算法专题：二叉树的遍历算法","description":"","frontmatter":{"title":"算法专题：二叉树的遍历算法","date":"2024-05-12T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/thinkings/binary-tree-traversal.md","filePath":"docs/leetcode/thinkings/binary-tree-traversal.md"}'),l={name:"docs/leetcode/thinkings/binary-tree-traversal.md"},r=i(`<h1 id="二叉树的遍历算法" tabindex="-1">二叉树的遍历算法 <a class="header-anchor" href="#二叉树的遍历算法" aria-label="Permalink to &quot;二叉树的遍历算法&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>二叉树作为一个基础的数据结构，遍历算法作为一个基础的算法，两者结合当然是经典的组合了。很多题目都会有 ta 的身影，有直接问二叉树的遍历的，有间接问的。比如要你找到树中满足条件的节点，就是间接考察树的遍历，因为你要找到树中满足条件的点，就需要进行遍历。</p><blockquote><p>你如果掌握了二叉树的遍历，那么也许其他复杂的树对于你来说也并不遥远了</p></blockquote><p>二叉数的遍历主要有前中后遍历和层次遍历。 前中后属于 DFS，层次遍历则可以使用 BFS 或者 DFS 来实现。只不过使用 BFS 来实现层次遍历会容易些，因为层次遍历就是 BFS 的副产物啊，你可以将层次遍历看成没有提前终止的 BFS</p><p>DFS 和 BFS 都有着自己的应用，比如 leetcode 301 号问题和 609 号问题。</p><p>DFS 都可以使用栈来简化操作，并且其实树本身是一种递归的数据结构，因此递归和栈对于 DFS 来说是两个关键点。</p><p>DFS 图解：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/09504f2e9f2bd76cc3420ea2a56c9e65.gif" alt="binary-tree-traversal-dfs"></p><p>(图片来自 <a href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search" target="_blank" rel="noreferrer">https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search</a>)</p><p>BFS 的关键点在于如何记录每一层次是否遍历完成， 我们可以用一个标识位来表式当前层的结束。</p><p>对于前中后序遍历来说。首先不管是前中还是后序遍历，变的只是根节点的位置， 左右节点的顺序永远是先左后右。 比如前序遍历就是根在前面，即根左右。中序就是根在中间，即左根右。后序就是根在后面，即左右根。</p><p>下面我们依次讲解：</p><h2 id="前序遍历" tabindex="-1">前序遍历 <a class="header-anchor" href="#前序遍历" aria-label="Permalink to &quot;前序遍历&quot;">​</a></h2><p>相关问题<a href="./../0144.binary-tree-preorder-traversal.html">144.binary-tree-preorder-traversal</a></p><p>前序遍历的顺序是<code>根-左-右</code></p><p>思路是：</p><ol><li><p>先将根结点入栈</p></li><li><p>出栈一个元素，将右节点和左节点依次入栈</p></li><li><p>重复 2 的步骤</p></li></ol><p>总结： 典型的递归数据结构，典型的用栈来简化操作的算法。</p><p>其实从宏观上表现为：<code>自顶向下依次访问左侧链，然后自底向上依次访问右侧链</code>，如果从这个角度出发去写的话，算法就不一样了。从上向下我们可以直接递归访问即可，从下向上我们只需要借助栈也可以轻易做到。</p><p>整个过程大概是这样：</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/c712128c6fda9c070cda0a7886423b65.jpg" alt="binary-tree-traversal-preorder"></p><p>这种思路有一个好处就是可以<code>统一三种遍历的思路</code>. 这个很重要，如果不了解的朋友，希望能够记住这一点。</p><h2 id="中序遍历" tabindex="-1">中序遍历 <a class="header-anchor" href="#中序遍历" aria-label="Permalink to &quot;中序遍历&quot;">​</a></h2><p>相关问题<a href="./../0094.binary-tree-inorder-traversal.html">94.binary-tree-inorder-traversal</a></p><p>中序遍历的顺序是 <code>左-根-右</code>，根节点不是先输出，这就有一点点复杂了。</p><ol><li><p>根节点入栈</p></li><li><p>判断有没有左节点，如果有，则入栈，直到叶子节点</p></li></ol><blockquote><p>此时栈中保存的就是所有的左节点和根节点。</p></blockquote><ol start="3"><li>出栈，判断有没有右节点，有则入栈，继续执行 2</li></ol><p>值得注意的是，中序遍历一个二叉查找树（BST）的结果是一个有序数组，利用这个性质有些题目可以得到简化， 比如<a href="./../0230.kth-smallest-element-in-a-bst.html">230.kth-smallest-element-in-a-bst</a>， 以及<a href="./../0098.validate-binary-search-tree.html">98.validate-binary-search-tree</a></p><h2 id="后序遍历" tabindex="-1">后序遍历 <a class="header-anchor" href="#后序遍历" aria-label="Permalink to &quot;后序遍历&quot;">​</a></h2><p>相关问题<a href="./../0145.binary-tree-postorder-traversal.html">145.binary-tree-postorder-traversal</a></p><p>后序遍历的顺序是 <code>左-右-根</code></p><p>这个就有点难度了，要不也不会是 leetcode 困难的 难度啊。</p><p>其实这个也是属于根节点先不输出，并且根节点是最后输出。 这里可以采用一种讨巧的做法， 就是记录当前节点状态，如果：</p><ol><li><p>当前节点是叶子节点或者</p></li><li><p>当前节点的左右子树都已经遍历过了，那么就可以出栈了。</p></li></ol><p>对于 <code>1. 当前节点是叶子节点</code>，这个比较好判断，只要判断 left 和 rigt 是否同时为 null 就好。</p><p>对于 <code>2. 当前节点的左右子树都已经遍历过了</code>， 只需要用一个变量记录即可。最坏的情况，我们记录每一个节点的访问状况就好了，空间复杂度 O(n) 但是仔细想一下，我们使用了栈的结构，从叶子节点开始输出，我们记录一个当前出栈的元素就好了，空间复杂度 O(1)， 具体请查看上方链接。</p><h2 id="层次遍历" tabindex="-1">层次遍历 <a class="header-anchor" href="#层次遍历" aria-label="Permalink to &quot;层次遍历&quot;">​</a></h2><p>层次遍历的关键点在于如何记录每一层次是否遍历完成， 我们可以用一个标识位来表式当前层的结束。</p><p><img src="https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v2/3027f46835a6c8dddb4d906639f976e1.gif" alt="binary-tree-traversal-bfs"></p><p>(图片来自 <a href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search" target="_blank" rel="noreferrer">https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search</a>)</p><p>具体做法：</p><ol><li><p>根节点入队列， 并入队列一个特殊的标识位，此处是 null</p></li><li><p>出队列</p></li><li><p>判断是不是 null， 如果是则代表本层已经结束。我们再次判断是否当前队列为空，如果不为空继续入队一个 null，否则说明遍历已经完成，我们什么都不不用做</p></li><li><p>如果不为 null，说明这一层还没完，则将其左右子树依次入队列。</p></li></ol><p>相关问题：</p><ul><li><a href="./../0102.binary-tree-level-order-traversal.html">102.binary-tree-level-order-traversal</a></li><li><a href="https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/" target="_blank" rel="noreferrer">117. 填充每个节点的下一个右侧节点指针 II</a></li></ul><h2 id="双色标记法" tabindex="-1">双色标记法 <a class="header-anchor" href="#双色标记法" aria-label="Permalink to &quot;双色标记法&quot;">​</a></h2><p>我们知道垃圾回收算法中，有一种算法叫三色标记法。 即：</p><ul><li>用白色表示尚未访问</li><li>灰色表示尚未完全访问子节点</li><li>黑色表示子节点全部访问</li></ul><p>那么我们可以模仿其思想，使用双色标记法来统一三种遍历。</p><p>其核心思想如下：</p><ul><li>使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。</li><li>如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。</li><li>如果遇到的节点为灰色，则将节点的值输出。</li></ul><p>使用这种方法实现的中序遍历如下：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inorderTraversal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, root: TreeNode) -&gt; List[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stack </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, root)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stack:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            color, node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stack.pop()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">continue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                stack.append((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, node.right))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                stack.append((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, node))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                stack.append((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, node.left))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                res.append(node.val)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>可以看出，实现上 WHITE 就表示的是递归中的第一次进入过程，Gray 则表示递归中的从叶子节点返回的过程。 因此这种迭代的写法更接近递归写法的本质。</p><p>如要实现前序、后序遍历，只需要调整左右子节点的入栈顺序即可。可以看出使用三色标记法， 其写法类似递归的形式，因此便于记忆和书写，缺点是使用了额外的内存空间。不过这个额外的空间是线性的，影响倒是不大。</p><blockquote><p>虽然递归也是额外的线性时间，但是递归的栈开销还是比一个 0，1 变量开销大的。换句话说就是空间复杂度的常数项是不同的，这在一些情况下的差异还是蛮明显的。</p></blockquote><p><strong>划重点：双色迭代法是一种可以用迭代模拟递归的写法，其写法和递归非常相似，要比普通迭代简单地多。</strong></p><h2 id="morris-遍历" tabindex="-1">Morris 遍历 <a class="header-anchor" href="#morris-遍历" aria-label="Permalink to &quot;Morris 遍历&quot;">​</a></h2>`,59),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},o=i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1152,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1652,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),k=[o],d=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},m=i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1152,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1652,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),b=[m],E=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),u=i(`<p>这个算法考察相对少，作为了解即可。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MorrisTraversal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(root):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # If left child is null, print the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # current node data. And, update</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # the current pointer to right child.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(curr.data, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # Find the inorder predecessor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.left</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev.right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # If the right child of inorder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # predecessor already points to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # the current node, update the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # current with it&#39;s right child</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                prev.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # else If right child doesn&#39;t point</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # to the current node, then print this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # node&#39;s data and update the right child</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # pointer with the current node and update</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # the current with it&#39;s left child</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (curr.data, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                prev.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.left</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>参考： <a href="https://www.educative.io/edpresso/what-is-morris-traversal" target="_blank" rel="noreferrer">what-is-morris-traversal</a></p>`,3),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},_=i('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1152,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1652,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),f=[_],Q=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),F=i('<h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文详细讲解了二叉树的层次遍历和深度优先遍历。</p><p>对于深度优先遍历，我们又细分为前中后序三种遍历方式。</p><p>最后我们讲解了双色遍历和 Morris 遍历。这两种方式可以作为了解，不掌握也没关系。</p><p>另外，如果题目要求你实现迭代器（就是调用一次输出一个二叉树的值），那么前面讲的迭代的方式就非常适用了。比如这道题 <a href="https://binarysearch.com/problems/Binary-Search-Tree-Iterator" target="_blank" rel="noreferrer">Binary Search Tree Iterator</a></p><h2 id="相关专题" tabindex="-1">相关专题 <a class="header-anchor" href="#相关专题" aria-label="Permalink to &quot;相关专题&quot;">​</a></h2><ul><li><a href="https://lucifer.ren/blog/2020/11/23/tree/" target="_blank" rel="noreferrer">几乎刷完了力扣所有的树题，我发现了这些东西。。。</a></li></ul><h2 id="相关题目" tabindex="-1">相关题目 <a class="header-anchor" href="#相关题目" aria-label="Permalink to &quot;相关题目&quot;">​</a></h2><ul><li><a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/" target="_blank" rel="noreferrer">lowest-common-ancestor-of-a-binary-tree</a></li><li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noreferrer">binary-tree-level-order-traversal</a></li><li><a href="https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank" rel="noreferrer">binary-tree-zigzag-level-order-traversal</a></li><li><a href="https://leetcode-cn.com/problems/validate-binary-search-tree/" target="_blank" rel="noreferrer">validate-binary-search-tree</a></li><li><a href="https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noreferrer">maximum-depth-of-binary-tree</a></li><li><a href="https://leetcode-cn.com/problems/balanced-binary-tree/" target="_blank" rel="noreferrer">balanced-binary-tree</a></li><li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/" target="_blank" rel="noreferrer">binary-tree-level-order-traversal-ii</a></li><li><a href="https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/" target="_blank" rel="noreferrer">binary-tree-maximum-path-sum</a></li><li><a href="https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/" target="_blank" rel="noreferrer">insert-into-a-binary-search-tree</a></li></ul>',9);function v(x,A,D,w,C,H){return n(),e("div",null,[r,s("p",null,[a("我们可以使用一种叫做 Morris 遍历的方法，既不使用递归也不借助于栈。从而在 "),s("mjx-container",p,[(n(),e("svg",h,k)),d]),a(" 空间完成这个过程。")]),s("p",null,[s("strong",null,[a("如果你需要使用 "),s("mjx-container",c,[(n(),e("svg",g,b)),E]),a(" 空间遍历一棵二叉树，那么就要使用 Morris 遍历。")])]),u,s("p",null,[s("strong",null,[a("划重点：Morris 是一种可以在 "),s("mjx-container",y,[(n(),e("svg",T,f)),Q]),a(" 空间遍历二叉树的算法。")])]),F])}const q=t(l,[["render",v]]);export{B as __pageData,q as default};
