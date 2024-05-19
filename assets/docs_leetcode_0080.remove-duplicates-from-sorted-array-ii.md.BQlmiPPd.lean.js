import{_ as l,c as n,l as s,a,a4 as i,o as e}from"./chunks/framework.VzvPGsLx.js";const S=JSON.parse('{"title":"0080.删除排序数组中的重复项 II","description":"","frontmatter":{"title":"0080.删除排序数组中的重复项 II","date":"2024-05-07T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0080.remove-duplicates-from-sorted-array-ii.md","filePath":"docs/leetcode/0080.remove-duplicates-from-sorted-array-ii.md"}'),t={name:"docs/leetcode/0080.remove-duplicates-from-sorted-array-ii.md"},p=i("",4),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},k=i("",1),d=[k],o=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),c=i("",24),m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},E=i("",1),u=[E],T=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},Q=i("",1),_=[Q],v=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),f=s("p",null,"基于这套代码，你可以轻易地实现 k 为任意正整数的算法。",-1),x=s("h2",{id:"相关题目",tabindex:"-1"},[a("相关题目 "),s("a",{class:"header-anchor",href:"#相关题目","aria-label":'Permalink to "相关题目"'},"​")],-1),w=s("p",null,"正如上面所说，相关题目一共有三道（排除自己）。其中一道我们仓库已经讲到了。 剩下两道原理类似，但是实际代码和细节有很大不同，原因就在于数组可以随机访问，而链表不行。 感兴趣的可以做一下剩下的两道链表题。",-1),F=s("ul",null,[s("li",null,"82.删除排序链表中的重复元素 II"),s("li",null,"83.删除排序链表中的重复元素")],-1);function A(D,C,H,B,M,V){return e(),n("div",null,[p,s("p",null,[a("不要使用额外的数组空间，你必须在原地修改输入数组并在使用 "),s("mjx-container",h,[(e(),n("svg",r,d)),o]),a(" 额外空间的条件下完成。")]),c,s("ul",null,[s("li",null,[a("时间复杂度："),s("mjx-container",m,[(e(),n("svg",g,u)),T])]),s("li",null,[a("空间复杂度："),s("mjx-container",y,[(e(),n("svg",b,_)),v])])]),f,x,w,F])}const P=l(t,[["render",A]]);export{S as __pageData,P as default};