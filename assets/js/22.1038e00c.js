(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{274:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"简单描述表结构-字段类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单描述表结构-字段类型"}},[s._v("#")]),s._v(" 简单描述表结构，字段类型")]),s._v(" "),a("p",[s._v("显示表结构，字段类型，主键，是否为空等属性，但不显示外键。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" tabl_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询数据库的外键关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询数据库的外键关系"}},[s._v("#")]),s._v(" 查询数据库的外键关系")]),s._v(" "),a("p",[s._v("你可以通过 INFORMATION_SCHEMA.KEY_COLUMN_USAGE 表来查看。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" INFORMATION_SCHEMA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("KEY_COLUMN_USAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" REFERENCED_TABLE_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t_stu'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询表中列的注释信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询表中列的注释信息"}},[s._v("#")]),s._v(" 查询表中列的注释信息")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表所在数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tablename'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 你要查的表")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"只查询列名和注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只查询列名和注释"}},[s._v("#")]),s._v(" 只查询列名和注释")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column_comment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tablename'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查看表的注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看表的注释"}},[s._v("#")]),s._v(" 查看表的注释")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("table_comment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tablename'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查看表生成的-ddl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看表生成的-ddl"}},[s._v("#")]),s._v(" 查看表生成的 DDL")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"复制数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制数据"}},[s._v("#")]),s._v(" 复制数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"机器授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器授权"}},[s._v("#")]),s._v(" 机器授权")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reader'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),s._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"查询当前这周的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询当前这周的数据"}},[s._v("#")]),s._v(" 查询当前这周的数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("submittime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" enterprise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" YEARWEEK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("submittime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" YEARWEEK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询上周的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询上周的数据"}},[s._v("#")]),s._v(" 查询上周的数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("submittime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" enterprise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" YEARWEEK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("submittime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" YEARWEEK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询当前月份的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询当前月份的数据"}},[s._v("#")]),s._v(" 查询当前月份的数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("submittime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" enterprise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("submittime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询距离当前现在-6-个月的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询距离当前现在-6-个月的数据"}},[s._v("#")]),s._v(" 查询距离当前现在 6 个月的数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("submittime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" enterprise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" submittime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"查询上个月的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询上个月的数据"}},[s._v("#")]),s._v(" 查询上个月的数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("submittime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" enterprise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("submittime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("date_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DATE_SUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pudate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" WEEKOFYEAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FROM_UNIXTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pudate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" WEEKOFYEAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FROM_UNIXTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pudate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FROM_UNIXTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pudate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FROM_UNIXTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pudate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MONTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" pudate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" 上月最后一天\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" 下月第一天\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h1",{attrs:{id:"获取前一天时间的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取前一天时间的方法"}},[s._v("#")]),s._v(" 获取前一天时间的方法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" DATE_SUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("current_date")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" DATE_SUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",interval "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",interval "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2006")]),s._v("-06-19                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2006-06-04'")]),s._v(",interval "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+---------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" date_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2006-06-04'")]),s._v(",interval "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2006")]),s._v("-06-03                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h1",{attrs:{id:"替换部分字段内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换部分字段内容"}},[s._v("#")]),s._v(" 替换部分字段内容")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" imicro_messages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ms_content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms_content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'</span>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);