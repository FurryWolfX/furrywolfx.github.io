import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.VzvPGsLx.js";const u=JSON.parse('{"title":"算法专题：平衡二叉树","description":"","frontmatter":{"title":"算法专题：平衡二叉树","date":"2024-05-09T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/thinkings/balanced-tree.md","filePath":"docs/leetcode/thinkings/balanced-tree.md"}'),r={name:"docs/leetcode/thinkings/balanced-tree.md"},c=o('<h1 id="平衡二叉树" tabindex="-1">平衡二叉树 <a class="header-anchor" href="#平衡二叉树" aria-label="Permalink to &quot;平衡二叉树&quot;">​</a></h1><p>力扣关于平衡二叉树的题目还是有一些的，并且都非常经典，推荐大家练习。今天给大家精选了 4 道题，如果你彻底搞明白了这几道题，碰到其他的平衡二叉树的题目应该不至于没有思路。当你领会了我的思路之后， 建议再找几个题目练手，巩固一下学习成果。</p><h2 id="_110-平衡二叉树-简单" tabindex="-1">110. 平衡二叉树（简单） <a class="header-anchor" href="#_110-平衡二叉树-简单" aria-label="Permalink to &quot;110. 平衡二叉树（简单）&quot;">​</a></h2><p>最简单的莫过于判断一个树是否为平衡二叉树了，我们来看下。</p><p><a href="./../0110.html">110. 平衡二叉树</a></p><h2 id="_108-将有序数组转换为二叉搜索树-简单" tabindex="-1">108. 将有序数组转换为二叉搜索树（简单） <a class="header-anchor" href="#_108-将有序数组转换为二叉搜索树-简单" aria-label="Permalink to &quot;108. 将有序数组转换为二叉搜索树（简单）&quot;">​</a></h2><p>108 和 109 基本是一样的，只不过数据结构不一样，109 变成了链表了而已。由于链表操作比数组需要考虑更多的因素，因此 109 是 中等难度。</p><p><a href="./../0108.convert-sorted-array-to-binary-search-tree.html">108. 将有序数组转换为二叉搜索树</a></p><h2 id="_109-有序链表转换二叉搜索树-中等" tabindex="-1">109. 有序链表转换二叉搜索树（中等） <a class="header-anchor" href="#_109-有序链表转换二叉搜索树-中等" aria-label="Permalink to &quot;109. 有序链表转换二叉搜索树（中等）&quot;">​</a></h2><p><a href="./../0109.Convert-Sorted-List-to-Binary-Search-Tree.html">109. 有序链表转换二叉搜索树</a></p><h2 id="_1382-将二叉搜索树变平衡-中等" tabindex="-1">1382. 将二叉搜索树变平衡（中等） <a class="header-anchor" href="#_1382-将二叉搜索树变平衡-中等" aria-label="Permalink to &quot;1382. 将二叉搜索树变平衡（中等）&quot;">​</a></h2><p><a href="./../1382.html">1382. 将二叉搜索树变平衡</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文通过四道关于二叉平衡树的题帮助大家识别此类型题目背后的思维逻辑，我们来总结一下学到的知识。</p><p>平衡二叉树指的是：<code>一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。</code></p><p>如果需要让你判断一个树是否是平衡二叉树，只需要死扣定义，然后用递归即可轻松解决。</p><p>如果需要你将一个数组或者链表（逻辑上都是线性的数据结构）转化为平衡二叉树，只需要随便选一个节点，并分配一半到左子树，另一半到右子树即可。</p><p>同时，如果要求你转化为平衡二叉搜索树，则可以选择排序数组(或链表)的中点，左边的元素为左子树， 右边的元素为右子树即可。</p><blockquote><p>小提示 1： 如果不需要是二叉搜索树则不需要排序，否则需要排序。</p></blockquote><blockquote><p>小提示 2： 你也可以不选择中点， 算法需要相应调整，感兴趣的同学可以试试。</p></blockquote><blockquote><p>小提示 3： 链表的操作需要特别注意环的存在。</p></blockquote>',21),l=[c];function n(h,d,i,s,p,_){return t(),a("div",null,l)}const m=e(r,[["render",n]]);export{u as __pageData,m as default};
