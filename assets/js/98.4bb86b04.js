(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{350:function(o,e,a){"use strict";a.r(e);var c=a(5),l=Object(c.a)({},(function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"location-reload-与-location-replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-reload-与-location-replace"}},[o._v("#")]),o._v(" location.reload 与 location.replace")]),o._v(" "),a("p",[o._v("在实际应用的时候，重新刷新页面的时候，我们通常使用： "),a("code",[o._v("location.reload()")]),o._v(" 或者是 "),a("code",[o._v("history.go(0)")]),o._v(" 来做。下面有一些相关的内容，大家看完了就会有更多的收获。")]),o._v(" "),a("p",[o._v("首先介绍两个方法的语法：")]),o._v(" "),a("p",[a("code",[o._v("reload")]),o._v(" 方法，该方法强迫浏览器刷新当前页面。")]),o._v(" "),a("p",[o._v("语法： "),a("code",[o._v("location.reload([bForceGet])")])]),o._v(" "),a("p",[o._v('参数： bForceGet， 可选参数， 默认为 false，从客户端缓存里取当前页。true, 则以 GET 方式，从服务端取最新的页面，相当于客户端点击 F5("刷新")')]),o._v(" "),a("p",[o._v("replace 方法，该方法通过指定 URL 替换当前缓存在历史里（客户端）的项目，因此当使用 replace 方法之后，你不能通过 “前进” 和“后退”来访问已经被替换的 URL。")]),o._v(" "),a("p",[o._v("语法： "),a("code",[o._v("location.replace(URL)")])]),o._v(" "),a("p",[o._v("在 实际应用的时候，重新刷新页面的时候，我们通常使用： "),a("code",[o._v("location.reload()")]),o._v(" 或者是 "),a("code",[o._v("history.go(0)")]),o._v(" 来做。因为这种做法就像是客户端点 F5 刷新页面，所以页面的 "),a("code",[o._v('method="post"')]),o._v(" 的时候，会出现 “网页过期” 的提示。")]),o._v(" "),a("p",[o._v("那是因为 Session 的安全 保护机制。")]),o._v(" "),a("p",[o._v("可以想到： 当调用 "),a("code",[o._v("location.reload()")]),o._v(" 方法的时候， "),a("code",[o._v("aspx")]),o._v(" 页面此时在服务端内存里已经存在， 因此必定是 IsPostback 的。")]),o._v(" "),a("p",[o._v("如果有这种应用：")]),o._v(" "),a("p",[o._v("我们需要重新加载该页面，也就是说我们期望页面能够在服务端重新被创建， 我们期望是 Not IsPostback 的。")]),o._v(" "),a("p",[o._v("这里，"),a("code",[o._v("location.replace()")]),o._v(" 就可以完成此任务。被 replace 的页面每次都在服务端重新生成。")]),o._v(" "),a("p",[o._v("你可以这么写： "),a("code",[o._v("location.replace(location.href)")])]),o._v(" "),a("h1",{attrs:{id:"location-replace-与-location-href"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-replace-与-location-href"}},[o._v("#")]),o._v(" location.replace 与 location.href")]),o._v(" "),a("ol",[a("li",[a("code",[o._v('window.location.href="url"')]),o._v("：改变 url 地址；")]),o._v(" "),a("li",[a("code",[o._v('window.location.replace("url")')]),o._v("：将地址替换成新 url，该方法通过指定 URL 替换当前缓存在历史里（客户端）的项目，因此当使用 replace 方法之后，你不能通过 “前进” 和“后 退”来访问已经被替换的 URL，这个特点对于做一些过渡页面非常有用！")])])])}),[],!1,null,null,null);e.default=l.exports}}]);