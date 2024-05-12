import{_ as p,c as n,l as s,a as i,a4 as a,o as l}from"./chunks/framework.CWaimgAe.js";const ss=JSON.parse('{"title":"0020. 有效的括号","description":"","frontmatter":{"title":"0020. 有效的括号","date":"2024-05-12T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0020.valid-parentheses.md","filePath":"docs/leetcode/0020.valid-parentheses.md"}'),t={name:"docs/leetcode/0020.valid-parentheses.md"},h=a("",14),e={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},r=a("",1),E=[r],d=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),g=s("code",null,'"([)]"',-1),c=a("",6),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},u=a("",1),F=[u],b=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),m={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},Q=a("",1),C=[Q],_=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),A=s("h2",{id:"o-1-空间",tabindex:"-1"},[i("O(1) 空间 "),s("a",{class:"header-anchor",href:"#o-1-空间","aria-label":'Permalink to "O(1) 空间"'},"​")],-1),D=s("h3",{id:"思路-1",tabindex:"-1"},[i("思路 "),s("a",{class:"header-anchor",href:"#思路-1","aria-label":'Permalink to "思路"'},"​")],-1),x=s("p",null,"基本思路是修改参数，将参数作为我们的栈。 随着我们不断遍历， s 慢慢变成了一个栈。",-1),B=s("strong",null,"字符串不可变",-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},w=a("",1),q=[w],H=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),M=a("",4),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},S=a("",1),P=[S],Z=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},I=a("",1),O=[I],J=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),R=a("",11);function z(G,$,X,K,W,U){return l(),n("div",null,[h,s("p",null,[i("值得注意的是，如果题目要求只有一种括号，那么我们其实可以使用更简洁，更省内存的方式 - 计数器来进行求解，而不必要使用栈。 而之所以多种括号不可以使用计数器在 "),s("mjx-container",e,[(l(),n("svg",k,E)),d]),i(" 空间做到是因为类似这种用例会无法处理 "),g,i("。")]),c,s("ul",null,[s("li",null,[i("时间复杂度："),s("mjx-container",o,[(l(),n("svg",y,F)),b])]),s("li",null,[i("空间复杂度："),s("mjx-container",m,[(l(),n("svg",T,C)),_])])]),A,D,x,s("p",null,[i("因此 Python，Java，JS 等"),B,i("的语言无法使用此方法达到 "),s("mjx-container",f,[(l(),n("svg",v,q)),H]),i("。")]),M,s("ul",null,[s("li",null,[i("时间复杂度："),s("mjx-container",L,[(l(),n("svg",V,P)),Z])]),s("li",null,[i("空间复杂度："),s("mjx-container",j,[(l(),n("svg",N,O)),J])])]),R])}const is=p(t,[["render",z]]);export{ss as __pageData,is as default};
