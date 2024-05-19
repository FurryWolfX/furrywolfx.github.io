import{_ as l,c as n,l as s,a as i,a4 as a,o as e}from"./chunks/framework.VzvPGsLx.js";const M=JSON.parse('{"title":"1032. 字符流","description":"","frontmatter":{"title":"1032. 字符流","date":"2024-05-05T00:00:00.000Z","tags":["LeetCode"]},"headers":[],"relativePath":"docs/leetcode/1032.stream-of-characters.md","filePath":"docs/leetcode/1032.stream-of-characters.md"}'),t={name:"docs/leetcode/1032.stream-of-characters.md"},h=a("",15),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.145ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 5367.9 1000","aria-hidden":"true"},k=a("",1),d=[k],E=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"m"),s("mo",null,"∗"),s("mi",null,"n"),s("mo",null,"∗"),s("mi",null,"q"),s("mo",{stretchy:"false"},")")])],-1),c=a("",8),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.495ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2429 1000","aria-hidden":"true"},y=a("",1),u=[y],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("mo",{stretchy:"false"},")")])],-1),F={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},b=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),T=[b],C=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"N")])],-1),_=s("li",null,[i("由于不必 query 形成的查询全部命中。比如 stream 为 cba 的时候，找到单词 c， bc， abc 都是可以的。如果是找到 c，cb，cba 比较好吧，现在是反的。其实我们可以反序插入是，类似的技巧在"),s("a",{href:"./0211.add-and-search-word-data-structure-design.html"},"211.add-and-search-word-data-structure-design"),i(" 也有用到。")],-1),f=a("",7);function w(B,A,D,q,x,v){return e(),n("div",null,[h,s("p",null,[i("之后我们用拼接的单词在 words 中查询即可， 最简单的方式当然是每次 query 都去扫描一次，这种方式时间复杂度为 "),s("mjx-container",p,[(e(),n("svg",r,d)),E]),i("，其中 m 和 n 分别为 words 的长度和， words[i] 的平均长度，m 和 n 最大为 2000，q 是待查项，最大为 40000， 毫无疑问会超时。")]),c,s("ol",null,[s("li",null,[i("如果用数组来存储， 由于每次都往数组头部插入一个元素，因此每次 query 操作的时间复杂度为 "),s("mjx-container",o,[(e(),n("svg",g,u)),m]),i("，其中 "),s("mjx-container",F,[(e(),n("svg",Q,T)),C]),i(" 为截止当前执行 query 的次数，我们可以使用双端队列进行优化。")]),_]),f])}const S=l(t,[["render",w]]);export{M as __pageData,S as default};