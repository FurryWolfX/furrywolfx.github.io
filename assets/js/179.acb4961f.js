(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{432:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("执行 "),n("code",[s._v("Tools -- Execute Commands -- Run Script")])]),s._v(" "),n("p",[s._v("以下是脚本：")]),s._v(" "),n("div",{staticClass:"language-basic line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-basic"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Option")]),s._v(" Explicit\nValidationMode  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" True\nInteractiveMode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" im_Batch\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" mdl 'the current model\n\n'"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" the current active model\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Set")]),s._v(" mdl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ActiveModel\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mdl "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Is")]),s._v(" Nothing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n\tMsgBox "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"There is no current Model"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ElseIf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("Not")]),s._v(" mdl.IsKindOf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PdPDM.cls_Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n\tMsgBox "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The current model is not an Physical Data model."')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Else")]),s._v("\n\tProcessFolder mdl\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v("\n\n'This routine copy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("name")]),s._v(" into code "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" each column "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" each view\n'"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),s._v(" the current folder\n\nPrivate "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v(" ProcessFolder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("folder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Tab")]),s._v(" 'running table\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" Each "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Tab")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("in")]),s._v(" folder.tables\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("Not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tab")]),s._v(".isShortcut "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tab")]),s._v(".comment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tab")]),s._v("."),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tab")]),s._v(".comment\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v("\n\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("On Error")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Resume")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Dim")]),s._v(" col 'running column\n\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("For")]),s._v(" Each col "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tab")]),s._v(".columns\n\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col.comment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Then")]),s._v("\n\t\t\t\t\tcol."),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" col.comment\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v("\n\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("On Error")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Resume")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Next")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Sub")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);