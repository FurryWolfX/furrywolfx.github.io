import{_ as l,c as a,l as s,a as t,a4 as i,o as n}from"./chunks/framework.VzvPGsLx.js";const Cs=JSON.parse('{"title":"0004. 寻找两个正序数组的中位数","description":"","frontmatter":{"title":"0004. 寻找两个正序数组的中位数","date":"2024-05-01T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/0004.median-of-two-sorted-arrays.md","filePath":"docs/leetcode/0004.median-of-two-sorted-arrays.md"}'),h={name:"docs/leetcode/0004.median-of-two-sorted-arrays.md"},e=i("",6),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.508ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 9064.6 899","aria-hidden":"true"},r=i("",1),d=[r],Q=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"s"),s("mn",null,"1."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"=="),s("mi",null,"m")])],-1),T={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.879ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 8786.6 899","aria-hidden":"true"},g=i("",1),o=[g],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"s"),s("mn",null,"2."),s("mi",null,"l"),s("mi",null,"e"),s("mi",null,"n"),s("mi",null,"g"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"=="),s("mi",null,"n")])],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.197ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 7601.1 748","aria-hidden":"true"},u=i("",1),F=[u],b=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"0"),s("mo",null,"<="),s("mi",null,"m"),s("mo",null,"<="),s("mn",null,"1000")])],-1),A={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.568ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 7323.1 748","aria-hidden":"true"},w=i("",1),f=[w],L=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"0"),s("mo",null,"<="),s("mi",null,"n"),s("mo",null,"<="),s("mn",null,"1000")])],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.32ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 9423.6 748","aria-hidden":"true"},C=i("",1),H=[C],M=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"1"),s("mo",null,"<="),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",null,"<="),s("mn",null,"2000")])],-1),B={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.656ex",height:"2.52ex",role:"img",focusable:"false",viewBox:"0 -864 8246.1 1114","aria-hidden":"true"},Z=i("",1),V=[Z],j=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",null,"−"),s("msup",null,[s("mn",null,"10"),s("mn",null,"6")]),s("mo",null,"<="),s("mi",null,"n"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"s"),s("mn",null,"1"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")])],-1),S={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.896ex",height:"2.52ex",role:"img",focusable:"false",viewBox:"0 -864 7468.1 1114","aria-hidden":"true"},P=i("",1),N=[P],R=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n"),s("mi",null,"u"),s("mi",null,"m"),s("mi",null,"s"),s("mn",null,"2"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,"<="),s("msup",null,[s("mn",null,"10"),s("mn",null,"6")])])],-1),q=i("",14),J={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.596ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4241.4 1000","aria-hidden":"true"},G=i("",1),O=[G],U=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),X={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},$={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.207ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6279.4 1000","aria-hidden":"true"},K=i("",1),W=[K],Y=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),ss=i("",3),is={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},as={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.074ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6220.7 1000","aria-hidden":"true"},ns=i("",1),ts=[ns],ls=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),hs={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},es={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.596ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4241.4 1000","aria-hidden":"true"},ps=i("",1),ks=[ps],rs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),ds=i("",26),Qs={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Ts={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.332ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8102.7 1000","aria-hidden":"true"},Es=i("",1),gs=[Es],os=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),ms={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},ys={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.332ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8102.7 1000","aria-hidden":"true"},cs=i("",1),us=[cs],Fs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,","),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1);function bs(As,Ds,ws,fs,Ls,xs){return n(),a("div",null,[e,s("ul",null,[s("li",null,[s("mjx-container",p,[(n(),a("svg",k,d)),Q])]),s("li",null,[s("mjx-container",T,[(n(),a("svg",E,o)),m])]),s("li",null,[s("mjx-container",y,[(n(),a("svg",c,F)),b])]),s("li",null,[s("mjx-container",A,[(n(),a("svg",D,f)),L])]),s("li",null,[s("mjx-container",x,[(n(),a("svg",_,H)),M])]),s("li",null,[s("mjx-container",B,[(n(),a("svg",v,V)),j]),t(", "),s("mjx-container",S,[(n(),a("svg",I,N)),R])])]),q,s("p",null,[t("时间复杂度和空间复杂度都是"),s("mjx-container",J,[(n(),a("svg",z,O)),U]),t(", 不符合题中给出"),s("mjx-container",X,[(n(),a("svg",$,W)),Y]),t("时间复杂度的要求。")]),ss,s("ul",null,[s("li",null,[t("时间复杂度："),s("mjx-container",is,[(n(),a("svg",as,ts)),ls])]),s("li",null,[t("空间复杂度："),s("mjx-container",hs,[(n(),a("svg",es,ks)),rs])])]),ds,s("ul",null,[s("li",null,[t("时间复杂度："),s("mjx-container",Qs,[(n(),a("svg",Ts,gs)),os])]),s("li",null,[t("空间复杂度："),s("mjx-container",ms,[(n(),a("svg",ys,us)),Fs])])])])}const Hs=l(h,[["render",bs]]);export{Cs as __pageData,Hs as default};