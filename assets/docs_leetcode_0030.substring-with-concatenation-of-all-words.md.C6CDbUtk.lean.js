import{_ as l,c as i,l as s,a as t,a4 as n,o as a}from"./chunks/framework.VzvPGsLx.js";const X=JSON.parse('{"title":"0030. 串联所有单词的子串","description":"","frontmatter":{"title":"0030. 串联所有单词的子串","date":"2024-05-04T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0030.substring-with-concatenation-of-all-words.md","filePath":"docs/leetcode/0030.substring-with-concatenation-of-all-words.md"}'),e={name:"docs/leetcode/0030.substring-with-concatenation-of-all-words.md"},h=n("",14),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.288ex",height:"2.436ex",role:"img",focusable:"false",viewBox:"0 -871.8 9851.3 1076.8","aria-hidden":"true"},r=n("",1),d=[r],E=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"s"),s("mo",null,"."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"<="),s("msup",null,[s("mn",null,"10"),s("mn",null,"4")])])],-1),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.477ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 12586.8 899","aria-hidden":"true"},o=n("",1),g=[o],y=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"w"),s("mi",null,"o"),s("mi",null,"r"),s("mi",null,"d"),s("mi",null,"s"),s("mo",null,"."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"<="),s("mn",null,"5000")])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.253ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 12487.8 1000","aria-hidden":"true"},u=n("",1),b=[u],F=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"w"),s("mi",null,"o"),s("mi",null,"r"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"<="),s("mn",null,"30")])],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.014ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3542 1000","aria-hidden":"true"},A=n("",1),f=[A],C=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"w"),s("mi",null,"o"),s("mi",null,"r"),s("mi",null,"d"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")])],-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.023ex",role:"img",focusable:"false",viewBox:"0 -442 469 452","aria-hidden":"true"},H=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D460",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",style:{"stroke-width":"3"}})])])],-1),v=[H],M=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"s")])],-1),B=n("",11),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},q=n("",1),V=[q],S=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},N=n("",1),I=[N],z=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1);function J(G,R,O,$,U,W){return a(),i("div",null,[h,s("ul",null,[s("li",null,[s("mjx-container",p,[(a(),i("svg",k,d)),E])]),s("li",null,[s("mjx-container",Q,[(a(),i("svg",T,g)),y])]),s("li",null,[s("mjx-container",c,[(a(),i("svg",m,b)),F])]),s("li",null,[s("mjx-container",w,[(a(),i("svg",D,f)),C]),t(" 和 "),s("mjx-container",_,[(a(),i("svg",x,v)),M]),t(" 由小写英文字母组成")])]),B,s("ul",null,[s("li",null,[t("时间复杂度："),s("mjx-container",L,[(a(),i("svg",Z,V)),S])]),s("li",null,[t("空间复杂度："),s("mjx-container",j,[(a(),i("svg",P,I)),z])])])])}const Y=l(e,[["render",J]]);export{X as __pageData,Y as default};
