(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{288:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("编辑历史：")]),t._v(" "),a("ul",[a("li",[t._v("2018-05-01 增加 better-scroll")]),t._v(" "),a("li",[t._v("2018-02-06 增加 iScroll")]),t._v(" "),a("li",[t._v("2016-07-20 初版")])]),t._v(" "),a("blockquote",[a("p",[t._v("前段时间，到网上找素材时，看到了一个很个性的滚动条式，打开 Chrome 的调试工具看了一下，发现不是用 JavaScript 来模拟实现的，觉得有必要折腾一下。于是在各大浏览器中对比了一下，发现只用 Chrome 适用，也就是说这个用的是 Chrome 的私有 CSS 属性。便百之谷之后，发现原来不仅仅只用\nChrome，其它的浏览器在不同程度上支持自定义滚动条样式的。下面是我不断测试的结果，若有错误或不全，请在评论里面给出，我会立马更正；若有更好的方案，你可以留言，让大家都开开眼界。")])]),t._v(" "),a("h1",{attrs:{id:"自定义-ie-浏览器滚动条样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-ie-浏览器滚动条样式"}},[t._v("#")]),t._v(" 自定义 IE 浏览器滚动条样式")]),t._v(" "),a("p",[t._v("追溯浏览器对滚动条的自定义，恐怕最早的就是 IE 浏览器了（好像最开始支持的版本是 IE5.5）。下面列出了多个版本的支持性况：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("滚动条样式")]),t._v(" "),a("th",[t._v("支持情况")]),t._v(" "),a("th",[t._v("支持浏览器版本")]),t._v(" "),a("th",[t._v("可否继承")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("scrollbar-3dlight-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动框的和滚动条箭头左上边缘的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-highlight-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动框的和滚动条箭头左上边缘的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-face-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动框和滚动条箭头的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-arrow-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动条箭头的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-shadow-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动框的和滚动条箭头右下边缘的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-dark-shadow-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动条槽的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-base-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动条主要构成部分的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("scrollbar-track-color")]),t._v(" "),a("td",[t._v("IE 特有属性")]),t._v(" "),a("td",[t._v("IE5.5+")]),t._v(" "),a("td",[t._v("y")]),t._v(" "),a("td",[t._v("设置滚动条轨迹组成部分的颜色")])])])]),t._v(" "),a("p",[t._v("为了有助于理解 IE 中滚动条样式的控制，你可以查看如下的图片：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgs-1251264059.coscd.myqcloud.com/4a1f556f-0dc1-d74b-97fc-5d505e8b9258.jpg",alt:"title"}})]),t._v(" "),a("p",[t._v("经过不断的测试发现，在 Win8 下面，有一部分样式都起着相同的作用。估计是因为在 Win8 中扁平化的界面设计而重新定议了系统中滚动条！以下是 Win 8 下面的滚动条样式，并写出了和 CSS 支持的情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgs-1251264059.coscd.myqcloud.com/b9d033ff-b50e-1044-facd-a916e7d17a06.jpg",alt:"title"}})]),t._v(" "),a("p",[t._v("以上所写的几个四个 CSS 属性，足以控制 Win 8 系统下，IE 浏览器的滚动条样式了。但经过测试，发现，其它的四个属性仍然支持（主要是在以上几个属性空缺时，就会体现其作用）。具体如下：")]),t._v(" "),a("ul",[a("li",[t._v("关于 scrollbar-track-color，scrollbar-face-color 与\nscrollbar-base-color。直接看英语单词，你就也许能明白 scroll-base-color\n是一个备用颜色，只要前两者未设置时，它就开始起作用了。但是你得注意，当 scrollbar-base-color 用来作\nscrollbar-track-color 功能来用时，你会发现，实际颜色与设定的颜色要淡一点。不信你可以这样试试：只设置一下\nscrollbar-base-color 看看滚动条的效果。")]),t._v(" "),a("li",[t._v("关于 scrollbar-dark-shadow-color 属性，通过测试发现 Win 8 下 IE10，IE11 滚动条并没有改变。可能是 win 8 的滚动条重新定义了，导致没有了隐影了吧！（仅个人猜想）")]),t._v(" "),a("li",[t._v("通过观察我们发现，Win 8 下的滚动条中，上箭头和下箭头后面的背景颜色都已经从 scroll-face-color 中脱离出来了，从属于 scroll-track-color 属性控制。")])]),t._v(" "),a("p",[t._v("感觉 IE 浏览器滚动条自定制功能并不是很强，只能控制一样显示各个部分的颜色而已，像宽度，结构等都无法控制，要靠出个性点的滚动条，很难！很难！！！")]),t._v(" "),a("h1",{attrs:{id:"自定义-firefox-浏览器滚动条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-firefox-浏览器滚动条"}},[t._v("#")]),t._v(" 自定义 FireFox 浏览器滚动条")]),t._v(" "),a("p",[t._v("在网上找了很多关于 Firfox 自定义浏览器滚动条的方法，发现 firefox 中却实是不支持的。能找到的方案都是失效的。")]),t._v(" "),a("h1",{attrs:{id:"webkit-内核的浏览器滚动条定制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webkit-内核的浏览器滚动条定制"}},[t._v("#")]),t._v(" webkit 内核的浏览器滚动条定制")]),t._v(" "),a("p",[t._v("在所有浏览器，滚动条可定制性最强的当属 webkit 内核的浏览器了。因为源代码开放的原因，市面上基于 webkit\n内核的浏览器也是很难穷举完。例如有：Google Chrome、Opera（opera 最近宣布使用 webkit 内核了）、360\n极速浏览器，猎豹浏览器等，搜狗浏览器 ······")]),t._v(" "),a("p",[t._v("下面我们来看一下 webkit 浏览器是如何强大的吧！")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("::-webkit-scrollbar              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-scrollbar-button       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-scrollbar-track        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-scrollbar-track-piece  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-scrollbar-thumb        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-scrollbar-corner       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n::-webkit-resizer                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" */ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("以上 CSS 代码所管辖的区域对就关系：以上注释中的数字与下图中数字相对应。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgs-1251264059.coscd.myqcloud.com/92f42c26-e6d1-ab03-7c56-d8b4db9c12d3.jpg",alt:"title"}})]),t._v(" "),a("p",[t._v("上图正如如下所言：")]),t._v(" "),a("ul",[a("li",[t._v("::-webkit-scrollbar 滚动条整体部分，其中的属性有 width,height,background,border（就和一个块级元素一样）等。")]),t._v(" "),a("li",[t._v("::-webkit-scrollbar-button 滚动条两端的按钮。可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。")]),t._v(" "),a("li",[t._v("::-webkit-scrollbar-track 外层轨道。可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。")]),t._v(" "),a("li",[t._v("::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）。")]),t._v(" "),a("li",[t._v("::-webkit-scrollbar-thumb 滚动条里面可以拖动的那部分")]),t._v(" "),a("li",[t._v("::-webkit-scrollbar-corner 边角")]),t._v(" "),a("li",[t._v("::-webkit-resizer 定义右下角拖动块的样式")])]),t._v(" "),a("p",[t._v("注意：对以上各个部分定义 width,height 时。有如下功能：若是水平滚动条，则 width 属性不起作用，height\n属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则 height 属性不起作用，width 属性用来控制相应部分的宽度。")]),t._v(" "),a("p",[t._v("能过上面的不断的测试。在 Chrome 中，滚动条中的各个部分和 DOM 中块级元素是一样的。通过：:-webkit-scrollbar\n等就类似于原来所说的 CSS 中的选择器。而 {} 中的属性，你就像控制一般块级元素一样简单（强大啊）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgs-1251264059.coscd.myqcloud.com/6fb002d9-f5a4-026e-41c4-be2b7ce649f5.jpg",alt:"title"}})]),t._v(" "),a("p",[t._v("对应的源代码如下：")]),t._v(" "),a("p",[t._v("CSS 部分代码：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1 div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff7677"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-track")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff66d5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-track-piece")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://www.lyblog.net/wp/wp-content/themes/mine/img/stripes_tiny_08.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-thumb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffa711"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-corner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #82afff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#scroll-1::-webkit-scrollbar-resizer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0bee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("p",[t._v("HTML 结构：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      请选择 Webkit 内核的浏览器才可以正常的看到滚动条的变化。 小天地，大世界是一个 Web 前端的技术博客。 主要是关于 HTML\n      5,CSS 3,JavaScript,JQuery 等。除此之外，还 包含一些 PHP 语言等的实用例子。\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      请选择 Webkit 内核的浏览器才可以正常的看到滚动条的变化。 小天地，大世界是一个 Web 前端的技术博客。 主要是关于 HTML\n      5,CSS 3,JavaScript,JQuery 等。除此之外，还 包含一些 PHP 语言等的实用例子。\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      请选择 Webkit 内核的浏览器才可以正常的看到滚动条的变化。 小天地，大世界是一个 Web 前端的技术博客。 主要是关于 HTML\n      5,CSS 3,JavaScript,JQuery 等。除此之外，还 包含一些 PHP 语言等的实用例子。\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      请选择 Webkit 内核的浏览器才可以正常的看到滚动条的变化。 小天地，大世界是一个 Web 前端的技术博客。 主要是关于 HTML\n      5,CSS 3,JavaScript,JQuery 等。除此之外，还 包含一些 PHP 语言等的实用例子。\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      请选择 Webkit 内核的浏览器才可以正常的看到滚动条的变化。 小天地，大世界是一个 Web 前端的技术博客。 主要是关于 HTML\n      5,CSS 3,JavaScript,JQuery 等。除此之外，还 包含一些 PHP 语言等的实用例子。\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("通过以上，我们几乎就可以来重写网站的滚动条了，但是 webkit 提供的还有更多的伪类，可以定制更丰富滚动条样式。\n本文以下内容参考："),a("a",{attrs:{href:"https://www.webkit.org/blog/363/styling-scrollbars/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.webkit.org/blog/363/styling-scrollbars/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v(":horizontal horizontal 伪类，主要应用于选择水平方向滚动条。")]),t._v(" "),a("li",[t._v(":vertical vertical 伪类主要是应用于选择竖直方向滚动条")]),t._v(" "),a("li",[t._v(":decrement decrement 伪类应用于按钮和内层轨道 (track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置 （比如，垂直滚动条的上面，水平滚动条的左边。)")]),t._v(" "),a("li",[t._v(":increment increment 伪类与和 decrement 类似，用来指示按钮或内层轨道是否会增大视窗的位置 （比如，垂直滚动条的下面和水平滚动条的右边。)")]),t._v(" "),a("li",[t._v(":start start 伪类也应用于按钮和滑块。它用来定义对象是否放到滑块的前面。")]),t._v(" "),a("li",[t._v(":end 类似于 start 伪类，标识对象是否放到滑块的后面。")]),t._v(" "),a("li",[t._v(":double-button 该伪类可以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮。")]),t._v(" "),a("li",[t._v(":single-button 类似于 double-button 伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个 single-button。")]),t._v(" "),a("li",[t._v(":no-button 用于内层轨道，表示内层轨道是否要滚动到滚动条的终端，比如，滚动条两端没有按钮的时候。")]),t._v(" "),a("li",[t._v(":corner-present 用于所有滚动条轨道，指示滚动条圆角是否显示。")]),t._v(" "),a("li",[t._v(":window-inactive 用于所有的滚动条轨道，指示应用滚动条的某个页面容器 （元素) 是否当前被激活。（在 webkit\n最近的版本中，该伪类也可以用于：:selection 伪元素。webkit 团队有计划扩展它并推动成为一个标准的伪类)")])]),t._v(" "),a("p",[t._v("另外，:enabled、:disabled、:hover、和：active 等伪类同样在滚动条中适用。")]),t._v(" "),a("p",[t._v("看了这些伪类，怎么也没有明白是什么意思，还是自已得写的试试。实践出真知嘛！你可以击接以下链接到官方演示\nDEMO（感觉可以学到很多东西的）："),a("a",{attrs:{href:"http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"三国平分-终归一统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三国平分-终归一统"}},[t._v("#")]),t._v(" 三国平分，终归一统")]),t._v(" "),a("p",[t._v("为了一致的用户体验，有时我们就不得不放弃使用部分浏览器提供的 CSS 接口来定制滚动条，转而寻求更佳的代替方案。")]),t._v(" "),a("p",[t._v("其中的一中方案是使用 jQuery\n插件，jquery-custom-content-scroller。使用插件的好处是显而易见的，但是坏处也多得去了。要是您想了解\njQuery-custom-content-scroller\n的具体使用方法，请移步到："),a("a",{attrs:{href:"http://manos.malihu.gr/jquery-custom-content-scroller/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://manos.malihu.gr/jquery-custom-content-scroller/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("下面我就 jQuery 滚动条插件的使用作一下简单介绍：")]),t._v(" "),a("p",[t._v("第一步：在内容的顶部引入滚动条相应的样式表文件和 jquery 的库文件，jquery 插件 jquery.mcustomscrollbar 文件。代码如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jquery.mCustomScrollbar.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jquery.mCustomScrollbar.concat.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v('第二步：在要显示滚动条的元素（元素内容中必须要有溢出的块，否则就不会出现滚动条）上面，加入 class="content"，然后再加入以下代码：')]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mCustomScrollbar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("关于此插件的详细介绍，你可以访问官网，里面讲的相当详细，我就不再此多赘述。")]),t._v(" "),a("h1",{attrs:{id:"iscroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iscroll"}},[t._v("#")]),t._v(" iScroll")]),t._v(" "),a("p",[t._v("iScroll 简介 iScroll 是一个高性能，资源占用少，无依赖，多平台的 javascript 滚动插件。")]),t._v(" "),a("p",[t._v("它可以在桌面，移动设备和智能电视平台上工作。它一直在大力优化性能和文件大小以便在新旧设备上提供最顺畅的体验。")]),t._v(" "),a("p",[t._v("iScroll 不仅仅是 滚动。它可以处理任何需要与用户进行移动交互的元素。在你的项目中包含仅仅 4kb 大小的 iScroll，你的项目便拥有了滚动，缩放，平移，无限滚动，视差滚动，旋转功能。给它一个扫帚它甚至能帮你打扫办公室。")]),t._v(" "),a("p",[t._v("即使平台本身提供的滚动已经很不错，iScroll 可以在此基础上提供更多不可思议的功能。具体来说：")]),t._v(" "),a("ul",[a("li",[t._v("细粒度控制滚动位置，甚至在滚动过程中。你总是可以获取和设置滚动器的 x，y 坐标。")]),t._v(" "),a("li",[t._v("动画可以使用用户自定义的擦出功能（反弹'bounce'，弹性'elastic'，回退'back'，...）。")]),t._v(" "),a("li",[t._v("你可以很容易的挂靠大量的自定义事件（onBeforeScrollStart, *")]),t._v(" "),a("li",[t._v("开箱即用的多平台支持。从很老的安卓设备到最新的 iPhone，从 Chrome 浏览器到 IE 浏览器。")])]),t._v(" "),a("p",[t._v("官方网站 "),a("a",{attrs:{href:"http://iscrolljs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://iscrolljs.com/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("iScroll-5 API 中文版 "),a("a",{attrs:{href:"http://wiki.jikexueyuan.com/project/iscroll-5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wiki.jikexueyuan.com/project/iscroll-5/"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"better-scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-scroll"}},[t._v("#")]),t._v(" better-scroll")]),t._v(" "),a("p",[t._v("新的滚动插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ustbhuangyi/better-scroll",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ustbhuangyi/better-scroll"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);