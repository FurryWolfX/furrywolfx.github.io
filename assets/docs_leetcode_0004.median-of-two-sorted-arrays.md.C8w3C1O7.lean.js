import{_ as h,c as a,l as s,a as l,a4 as i,o as n}from"./chunks/framework.CWaimgAe.js";const S=JSON.parse('{"title":"0004. 寻找两个正序数组的中位数","description":"","frontmatter":{"title":"0004. 寻找两个正序数组的中位数","date":"2024-05-11T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0004.median-of-two-sorted-arrays.md","filePath":"docs/leetcode/0004.median-of-two-sorted-arrays.md"}'),p={name:"docs/leetcode/0004.median-of-two-sorted-arrays.md"},t=i("",21),k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.074ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6220.7 1000","aria-hidden":"true"},r=i("",1),E=[r],d=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),g={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.596ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4241.4 1000","aria-hidden":"true"},c=i("",1),T=[c],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),o=i("",26),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.332ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8102.7 1000","aria-hidden":"true"},b=i("",1),u=[b],A=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.332ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8102.7 1000","aria-hidden":"true"},f=i("",1),B=[f],L=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1);function w(x,v,_,M,H,j){return n(),a("div",null,[t,s("ul",null,[s("li",null,[l("时间复杂度："),s("mjx-container",k,[(n(),a("svg",e,E)),d])]),s("li",null,[l("空间复杂度："),s("mjx-container",g,[(n(),a("svg",y,T)),m])])]),o,s("ul",null,[s("li",null,[l("时间复杂度："),s("mjx-container",Q,[(n(),a("svg",F,u)),A])]),s("li",null,[l("空间复杂度："),s("mjx-container",D,[(n(),a("svg",C,B)),L])])])])}const q=h(p,[["render",w]]);export{S as __pageData,q as default};
