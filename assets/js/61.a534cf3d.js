(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{313:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("使用这个 SDK 定位出的经纬度，在百度地图中显示的位置有很大偏差。")]),s._v(" "),a("p",[s._v("经过研究，其实定位的地址是对的，只是百度使用的是自己的坐标系 (bd09ll), 而 SDK 默认是 gcj02.")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  enableHighAccuracy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否使用 GPS")]),s._v("\n  maximumAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 缓存时间")]),s._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 超时时间")]),s._v("\n  coorType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bd09ll"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是 gcj02，可填 bd09ll 以获取百度经纬度用于访问百度 API")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("修改 coorType 即可。")]),s._v(" "),a("h1",{attrs:{id:"关于坐标系的补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于坐标系的补充"}},[s._v("#")]),s._v(" 关于坐标系的补充")]),s._v(" "),a("p",[a("strong",[s._v("wgs84")]),s._v(" --GPS 系统直接通过卫星定位获得的坐标。（最基础的坐标。)")]),s._v(" "),a("p",[a("strong",[s._v("gcj02")]),s._v(" -- 兲朝已安全原因为由，要求在中国使用的地图产品使用的都必须是加密后的坐标。这套加密后的坐标就是 gcj02 google 的中国地图。高德地图。他们为中国市场的产品都是用这套坐标。")]),s._v(" "),a("p",[a("strong",[s._v("bd09ll")]),s._v(" -- 百度又在 gcj02 的技术上将坐标加密就成了 bd09ll 坐标。")])])}),[],!1,null,null,null);t.default=e.exports}}]);