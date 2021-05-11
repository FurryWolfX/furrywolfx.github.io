(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{309:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cordova build android –release\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("生成以下三个文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("XXXX-release.apk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("signed, aligned"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nXXXX-release-unaligned.apk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("signed, unaligned"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nXXXX-release-unsigned.apk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unsigned, unaligned"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("获得第一个（XXXX-release.apk） APK 文件需要进行签名。签名方法参考如下：")]),s._v(" "),t("ol",[t("li",[s._v("使用 JDK 的 keytool 工具生成 keystore 文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("keytool -genkey -v -keystore lzwme-release-key.keystore -alias lzwme -keyalg RSA -validity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("365")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("按照提示输入操作。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用签名打包")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cordova build android --release -- --keystore"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./XXX.jks --storePassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XXX --alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XXX --password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XXX\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但每次输入命令行参数是很重复的，Cordova 允许我们建立一个 "),t("code",[s._v("build.json")]),s._v(" 配置文件来简化操作。文件内容如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"android"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"release"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keystore"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"release-key.keystore"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alias"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cordova-demo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"storePassword"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing2"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("下次就可以直接用 "),t("code",[s._v("cordova build --release")]),s._v(" 了。")]),s._v(" "),t("p",[s._v("为了安全性考虑，建议不要把密码放在在配置文件或者命令行中，而是手动输入。你可以把密码相关的配置去掉，下次 build 过程中会弹出一个 Java 小窗口，提示你输入密码。")])])}),[],!1,null,null,null);a.default=n.exports}}]);