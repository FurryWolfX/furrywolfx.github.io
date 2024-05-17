import{_ as l,c as n,l as s,a as i,a4 as a,o as p}from"./chunks/framework.VzvPGsLx.js";const B=JSON.parse('{"title":"算法专题：堆（下）","description":"","frontmatter":{"title":"算法专题：堆（下）","date":"2024-05-17T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/thinkings/heap-2.md","filePath":"docs/leetcode/thinkings/heap-2.md"}'),h={name:"docs/leetcode/thinkings/heap-2.md"},t=a("",79),e={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.86ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2148 899","aria-hidden":"true"},r=a("",1),d=[r],E=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N")])],-1),g=a("",52),c=s("strong",null,"原位算法",-1),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},b=a("",1),u=[b],F=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),m=a("",12);function C(A,D,f,v,Q,T){return p(),n("div",null,[t,s("p",null,[i("算法的基本思想是贪心，每次都遍历所有邻居，并从中找到距离最小的，本质上是一种广度优先遍历。这里我们借助堆这种数据结构，使得可以在 "),s("mjx-container",e,[(p(),n("svg",k,d)),E]),i(" 的时间内找到 cost 最小的点，其中 N 为 堆的大小。")]),g,s("p",null,[i("这个方法足够简单，如果你明白了前面堆的原理，让你手撸一个堆排序也不难。可是这种方法有个弊端，它不是"),c,i("，也就是说你必须使用额外的空间承接结果，空间复杂度为 "),s("mjx-container",o,[(p(),n("svg",y,u)),F]),i("。但是其实调用完堆排序的方法后，原有的数组内存可以被释放了，因此理论上来说空间也没浪费，只不过我们计算空间复杂度的时候取的是使用内存最多的时刻，因此使用原地算法毫无疑问更优秀。如果你实在觉得不爽这个实现，也可以采用原地的修改的方式。这倒也不难，只不过稍微改造一下前面的堆的实现即可，由于篇幅的限制，这里不多讲了。")]),m])}const q=l(h,[["render",C]]);export{B as __pageData,q as default};
