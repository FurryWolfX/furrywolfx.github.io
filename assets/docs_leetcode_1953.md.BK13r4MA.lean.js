import{_ as e,c as t,l as s,a,a4 as n,o as i}from"./chunks/framework.VzvPGsLx.js";const C2=JSON.parse('{"title":"1953. 你可以工作的最大周数","description":"","frontmatter":{"title":"1953. 你可以工作的最大周数","date":"2024-05-13T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/1953.md","filePath":"docs/leetcode/1953.md"}'),l={name:"docs/leetcode/1953.md"},T=n("",11),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"24.369ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 10771.2 899","aria-hidden":"true"},p=n("",1),r=[p],d=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n"),s("mo",null,"=="),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"e"),s("mi",null,"s"),s("mo",null,"."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h")])],-1),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.293ex",height:"2.14ex",role:"img",focusable:"false",viewBox:"0 -864 6759.7 946","aria-hidden":"true"},m=n("",1),g=[m],c=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"n"),s("mo",null,"<="),s("msup",null,[s("mn",null,"10"),s("mn",null,"5")])])],-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.918ex",height:"2.52ex",role:"img",focusable:"false",viewBox:"0 -864 11897.7 1114","aria-hidden":"true"},E=n("",1),w=[E],b=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"e"),s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"<="),s("msup",null,[s("mn",null,"10"),s("mn",null,"9")])])],-1),_=s("h2",{id:"提示-1-贪心",tabindex:"-1"},[a("提示 1：贪心 "),s("a",{class:"header-anchor",href:"#提示-1-贪心","aria-label":'Permalink to "提示 1：贪心"'},"​")],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.14ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3156 899","aria-hidden":"true"},D=n("",1),f=[D],M=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.952ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 1747 637","aria-hidden":"true"},A=n("",1),v=[A],Z=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),V=s("strong",null,"充要条件",-1),C={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.007ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 7959 899","aria-hidden":"true"},S=n("",1),j=[S],P=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"≤"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),I=s("strong",null,"必要性",-1),N={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.007ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 7959 899","aria-hidden":"true"},z=n("",1),J=[z],G=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,">"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.037ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 4878.4 899","aria-hidden":"true"},U=n("",1),W=[U],K=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"−"),s("mn",null,"1")])],-1),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.952ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 1747 637","aria-hidden":"true"},X=n("",1),s1=[X],a1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),t1=s("strong",null,"充分性",-1),i1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},n1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.254ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 7626.1 1000","aria-hidden":"true"},e1=n("",1),l1=[e1],T1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",null,","),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",{stretchy:"false"},"]")])],-1),Q1=s("strong",null,"奇数",-1),h1=s("strong",null,"偶数",-1),p1=s("strong",null,"耗时从高到低",-1),r1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.007ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 7959 899","aria-hidden":"true"},o1=n("",1),k1=[o1],m1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"≤"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),g1=s("h2",{id:"思路与算法",tabindex:"-1"},[a("思路与算法 "),s("a",{class:"header-anchor",href:"#思路与算法","aria-label":'Permalink to "思路与算法"'},"​")],-1),c1=s("strong",null,"提示 1",-1),u1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.14ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3156 899","aria-hidden":"true"},E1=n("",1),w1=[E1],b1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),_1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.952ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 1747 637","aria-hidden":"true"},H1=n("",1),D1=[H1],f1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),M1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.007ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 7959 899","aria-hidden":"true"},F1=n("",1),A1=[F1],v1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"≤"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),Z1=s("strong",null,"提示 1",-1),V1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.858ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 6125.4 899","aria-hidden":"true"},B1=n("",1),S1=[B1],j1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),P1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.007ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 7959 899","aria-hidden":"true"},N1=n("",1),R1=[N1],z1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,">"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),J1=s("strong",null,"提示 1",-1),G1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.849ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 3469.4 748","aria-hidden":"true"},O1=n("",1),U1=[O1],W1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),K1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},$1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.741ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 4747.4 748","aria-hidden":"true"},Y1=n("",1),X1=[Y1],s2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"2"),s("mi",null,"×"),s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mo",null,"+"),s("mn",null,"1")])],-1),a2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},t2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.952ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 1747 637","aria-hidden":"true"},i2=n("",1),n2=[i2],e2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t")])],-1),l2=n("",3),T2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},h2=n("",1),p2=[h2],r2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),d2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},k2=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),m2=[k2],g2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n")])],-1),c2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.943ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 4837 705","aria-hidden":"true"},y2=n("",1),E2=[y2],w2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"s"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"n"),s("mi",null,"e"),s("mi",null,"s")])],-1),b2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},x2=n("",1),H2=[x2],D2=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1);function f2(M2,L2,F2,A2,v2,Z2){return i(),t("div",null,[T,s("ul",null,[s("li",null,[s("mjx-container",Q,[(i(),t("svg",h,r)),d])]),s("li",null,[s("mjx-container",o,[(i(),t("svg",k,g)),c])]),s("li",null,[s("mjx-container",u,[(i(),t("svg",y,w)),b])])]),_,s("p",null,[a("考虑耗时最长的工作。假设我们需要 "),s("mjx-container",x,[(i(),t("svg",H,f)),M]),a(" 周完成该工作，其余工作共计需要 "),s("mjx-container",L,[(i(),t("svg",F,v)),Z]),a(" 周完成。那么可以完成所有工作的"),V,a("是：")]),s("mjx-container",C,[(i(),t("svg",B,j)),P]),s("p",null,[a("首先考虑"),I,a("。必要性可以通过证明逆否命题，即「如果 "),s("mjx-container",N,[(i(),t("svg",R,J)),G]),a(" ，那么无法完成所有的工作」，来证明。")]),s("p",null,[a("我们可以利用反证法，如果可以完成所有工作，那么耗时最长的工作一定可以完成，这意味着至少需要有 "),s("mjx-container",q,[(i(),t("svg",O,W)),K]),a(" 周剩余工作可以被分配在间隔内，但剩余工作的工时 "),s("mjx-container",$,[(i(),t("svg",Y,s1)),a1]),a(" 并不满足这一要求，因此充分性得证。")]),s("p",null,[a("随后考虑"),t1,a("。充分性可以通过构造分配方案来证明。我们可以将分配工作时间的过程转化为在 "),s("mjx-container",i1,[(i(),t("svg",n1,l1)),T1]),a("闭区间内分配整数的过程，其中每个整数代表对应的一周时间。在分配整数的过程中，我们首先按照从小到大的顺序分配所有的"),Q1,a("，然后按照从小到大的顺序分配所有的"),h1,a("。")]),s("p",null,[a("我们将所有工作按照"),p1,a("来排序，按照前文的顺序分配对应的时间。此时由于 "),s("mjx-container",r1,[(i(),t("svg",d1,k1)),m1]),a("，因此耗时最长的工作不会出现任意两周相邻这种违反规定的情况。类似地可以证明，其他工作由于耗时小于最长的工作，也不会出现相邻的情况。因此必要性得证。")]),g1,s("p",null,[a("根据 "),c1,a("，我们首先计算出耗时最长的工作所需周数 "),s("mjx-container",u1,[(i(),t("svg",y1,w1)),b1]),a(" 与剩余工作所需周数 "),s("mjx-container",_1,[(i(),t("svg",x1,D1)),f1]),a("，并比较两者大小。根据比较的结果不同会有两种情况：")]),s("ul",null,[s("li",null,[s("mjx-container",M1,[(i(),t("svg",L1,A1)),v1]),a("，此时根据 "),Z1,a("，所有工作都可以完成，我们返回所有工作的总耗时 "),s("mjx-container",V1,[(i(),t("svg",C1,S1)),j1]),a(" 作为答案。")]),s("li",null,[s("mjx-container",P1,[(i(),t("svg",I1,R1)),z1]),a("，此时我们无法完成耗时最长的工作。根据 "),J1,a(" 的证明过程，耗时最长的工作最多可以完成 "),s("mjx-container",G1,[(i(),t("svg",q1,U1)),W1]),a(" 周，因此最大的工作周数即为 "),s("mjx-container",K1,[(i(),t("svg",$1,X1)),s2]),a("，我们返回该数作为答案。")])]),s("p",null,[a("最后，由于 "),s("mjx-container",a2,[(i(),t("svg",t2,n2)),e2]),a(" 可能超过 32 位整数的范围，我们需要使用 64 位整数进行相应的计算与比较。")]),l2,s("ul",null,[s("li",null,[a("时间复杂度："),s("mjx-container",T2,[(i(),t("svg",Q2,p2)),r2]),a("，其中 "),s("mjx-container",d2,[(i(),t("svg",o2,m2)),g2]),a(" 为 "),s("mjx-container",c2,[(i(),t("svg",u2,E2)),w2]),a(" 的长度。即为遍历数组计算耗时总和与最大值的时间复杂度。")]),s("li",null,[a("空间复杂度："),s("mjx-container",b2,[(i(),t("svg",_2,H2)),D2]),a("。")])])])}const B2=e(l,[["render",f2]]);export{C2 as __pageData,B2 as default};