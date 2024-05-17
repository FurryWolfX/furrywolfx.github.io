import{_ as e,c as t,l as s,a,a4 as i,o as n}from"./chunks/framework.VzvPGsLx.js";const N1=JSON.parse('{"title":"算法专题：堆（上）","description":"","frontmatter":{"title":"算法专题：堆（上）","date":"2024-05-17T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/thinkings/heap.md","filePath":"docs/leetcode/thinkings/heap.md"}'),l={name:"docs/leetcode/thinkings/heap.md"},p=i("",36),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},o=i("",1),d=[o],k=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),T={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},c=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),g=[c],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"N")])],-1),E=s("strong",null,"有序列表",-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},_=i("",1),b=[_],x=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},F=i("",1),A=[F],v=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),D=s("strong",null,"优先队列",-1),C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},L=i("",1),H=[L],Z=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.346ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3689 1000","aria-hidden":"true"},q=i("",1),B=[q],j=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),P=s("p",null,[s("img",{src:"https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v3/0d4d9bf2f98d06f39010812c173630a6.jpg",alt:""})],-1),I={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.106ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4467 1000","aria-hidden":"true"},z=i("",1),R=[z],J=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{stretchy:"false"},"("),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])],-1),G={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.346ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3689 1000","aria-hidden":"true"},$=i("",1),U=[$],K=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),W=i("",12),X=s("li",null,"如果永远都维护一个有序数组的方式取极值很容易，但是插队麻烦。",-1),Y=s("li",null,[a("如果永远都维护一个有序链表的方式取极值也容易。 不过要想查找足够快，而不是线性扫描，就需要借助索引，这种实现对应的就是优先级队列的"),s("strong",null,"跳表实现"),a("。")],-1),ss={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},as={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},is=i("",1),ts=[is],ns=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),es={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},ls={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.346ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3689 1000","aria-hidden":"true"},ps=i("",1),hs=[ps],rs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),os=s("strong",null,"二叉堆实现",-1),ds=i("",11),ks={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Ts={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},Qs=i("",1),cs=[Qs],gs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),ms={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Es={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.346ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3689 1000","aria-hidden":"true"},us=i("",1),ys=[us],_s=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),bs=i("",25),xs={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},ws={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},fs=i("",1),Fs=[fs],As=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),vs=s("p",null,[s("img",{src:"https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/picgo-v3/ac766720817667360e8f166067d11724.jpg",alt:""})],-1),Ds=s("p",null,"（单链表）",-1),Cs=s("strong",null,"建立哈希表，将所有节点都放到哈希表中，以空间换时间的方式减少时间复杂度",-1),Ms={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Ls={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},Hs=i("",1),Zs=[Hs],Vs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),Ss={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},qs={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},Bs=i("",1),js=[Bs],Ps=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),Is=i("",15),Ns={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},zs={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.208ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 1860 899","aria-hidden":"true"},Rs=i("",1),Js=[Rs],Gs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n")])],-1),Os={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},$s={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.208ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 1860 899","aria-hidden":"true"},Us=i("",1),Ks=[Us],Ws=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n")])],-1),Xs={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Ys={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},s1=i("",1),a1=[s1],i1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),t1=i("",30),n1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.79ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2117 1000","aria-hidden":"true"},l1=i("",1),p1=[l1],h1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",{stretchy:"false"},")")])],-1),r1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.86ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2148 899","aria-hidden":"true"},d1=i("",1),k1=[d1],T1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"N")])],-1),Q1=s("h5",{id:"入堆",tabindex:"-1"},[a("入堆 "),s("a",{class:"header-anchor",href:"#入堆","aria-label":'Permalink to "入堆"'},"​")],-1),c1=s("p",null,"入堆和出堆类似。我们可以直接往树的最后插入一个节点。和上面类似，这样的操作同样可能会破坏堆的性质。",-1),g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000","aria-hidden":"true"},E1=i("",1),u1=[E1],y1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])],-1),_1=i("",10),b1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.677ex",height:"1.532ex",role:"img",focusable:"false",viewBox:"0 -666 2067.4 677","aria-hidden":"true"},w1=i("",1),f1=[w1],F1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"2"),s("mo",null,"×"),s("mi",null,"i")])],-1),A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.677ex",height:"1.532ex",role:"img",focusable:"false",viewBox:"0 -666 2067.4 677","aria-hidden":"true"},D1=i("",1),C1=[D1],M1=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mn",null,"2"),s("mo",null,"×"),s("mi",null,"i")])],-1),L1=s("li",null,"如果节点在数组中的下标为 i，那么父节点下标为 i//2（地板除）。",-1),H1=i("",15);function Z1(V1,S1,q1,B1,j1,P1){return n(),t("div",null,[p,s("p",null,[a("如果队列使用数组实现， 上面插队过程的时间复杂度为 "),s("mjx-container",h,[(n(),t("svg",r,d)),k]),a("，其中 "),s("mjx-container",T,[(n(),t("svg",Q,g)),m]),a(" 为被插队的队伍长度。如果队伍很长，那么调整的次数明显增加。")]),s("p",null,[a("不过我们发现，本质上我们就是在维护一个"),E,a("，而使用数组方式去维护有序列表的好处是可以随机访问，但是很明显这个需求并不需要这个特性。如果使用链表去实现，那么时间复杂度理论上是 "),s("mjx-container",u,[(n(),t("svg",y,b)),x]),a("，但是如何定位到需要插入的位置呢？朴素的思维是遍历查找，但是这样的时间复杂度又退化到了 "),s("mjx-container",w,[(n(),t("svg",f,A)),v]),a("。有没有时间复杂度更好的做法呢？答案就是本文的主角"),D,a("。")]),s("p",null,[a("上面说了链表的实现核心在于查找也需要 "),s("mjx-container",C,[(n(),t("svg",M,H)),Z]),a("，我们可以优化这个过程吗？实际上这就是优先级队列的链表实现，由于是有序的，我们可以用跳表加速查找，时间复杂度可以优化到 "),s("mjx-container",V,[(n(),t("svg",S,B)),j]),a("。")]),P,s("p",null,[a("其实算法界有很多类似的问题。比如建立数据库索引的算法，如果给某一个有序的列添加索引，不能每次插入一条数据都去调整所有的数据吧（上面的数组实现）？因此我们可以用平衡树来实现，这样每次插入可以最多调整 "),s("mjx-container",I,[(n(),t("svg",N,R)),J]),a("。优先队列的另外一种实现 - 二叉堆就是这个思想，时间复杂度也可以优化到 "),s("mjx-container",G,[(n(),t("svg",O,U)),K])]),W,s("ul",null,[X,Y,s("li",null,[a("如果永远都维护一个树的方式取极值也可以实现，比如根节点就是极值，这样 "),s("mjx-container",ss,[(n(),t("svg",as,ts)),ns]),a(" 也可以取到极值，但是调整过程需要 "),s("mjx-container",es,[(n(),t("svg",ls,hs)),rs]),a("。这种实现对应的就是优先级队列的"),os,a("。")])]),ds,s("p",null,[a("比如上面的例子，本来入队和出队都可是很容易地在 "),s("mjx-container",ks,[(n(),t("svg",Ts,cs)),gs]),a(" 的时间完成。而现在呢？入队和出队的复杂度都是 "),s("mjx-container",ms,[(n(),t("svg",Es,ys)),_s]),a("，其中 N 为当前队列的大小。因此在没有必要的地方使用堆，会大大提高算法的时间复杂度，这当然不合适。说的粗俗一点就是脱了裤子放屁。")]),bs,s("p",null,[a("我们知道，不借助额外空间的情况下，在链表中查找一个值，需要按照顺序一个个查找，时间复杂度为 "),s("mjx-container",xs,[(n(),t("svg",ws,Fs)),As]),a("，其中 N 为链表长度。")]),vs,Ds,s("p",null,[a("当链表长度很大的时候， 这种时间是很难接受的。 一种常见的的优化方式是"),Cs,a("，这种做法时间复杂度为 "),s("mjx-container",Ms,[(n(),t("svg",Ls,Zs)),Vs]),a("，但是空间复杂度为 "),s("mjx-container",Ss,[(n(),t("svg",qs,js)),Ps]),a("。")]),Is,s("p",null,[a("跳表的时间复杂度和空间复杂度不是很好分析。由于时间复杂度 = 索引的高度 * 平均每层索引遍历元素的个数，而高度大概为 "),s("mjx-container",Ns,[(n(),t("svg",zs,Js)),Gs]),a("，并且每层遍历的元素是常数，因此时间复杂度为 "),s("mjx-container",Os,[(n(),t("svg",$s,Ks)),Ws]),a("，和二分查找的空间复杂度是一样的。")]),s("p",null,[a("空间复杂度就等同于索引节点的个数，以每两个节点建立一个索引为例，大概是 n/2 + n/4 + n/8 + … + 8 + 4 + 2 ，因此空间复杂度是 "),s("mjx-container",Xs,[(n(),t("svg",Ys,a1)),i1]),a("。当然你如果每三个建立一个索引节点的话，空间会更省，但是复杂度不变。")]),t1,s("p",null,[a("时间复杂度方面可以证明，下沉和树的高度成正相关，因此时间复杂度为 "),s("mjx-container",n1,[(n(),t("svg",e1,p1)),h1]),a("，其中 h 为树高。而由于二叉堆是一颗完全二叉树，因此树高大约是 "),s("mjx-container",r1,[(n(),t("svg",o1,k1)),T1]),a("，其中 N 为树中的节点个数。")]),Q1,c1,s("blockquote",null,[s("p",null,[a("之所以这么做的其中一个原因是时间复杂度更低，因为我们是用数组进行模拟的，而在数组尾部添加元素的时间复杂度为 "),s("mjx-container",g1,[(n(),t("svg",m1,u1)),y1]),a("。")])]),_1,s("ul",null,[s("li",null,[a("如果节点在数组中的下标为 i，那么其左子节点下标为 "),s("mjx-container",b1,[(n(),t("svg",x1,f1)),F1]),a("，右节点为 "),s("mjx-container",A1,[(n(),t("svg",v1,C1)),M1]),a("+1。")]),L1]),H1])}const z1=e(l,[["render",Z1]]);export{N1 as __pageData,z1 as default};
