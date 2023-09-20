import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.a1e87edc.js";const q=JSON.parse(`{"title":"mysqldump 导出提示 Couldn't execute SELECT COLUMN_NAME...","description":"","frontmatter":{"title":"mysqldump 导出提示 Couldn't execute SELECT COLUMN_NAME...","catalog":true,"date":"2020-08-13T23:32:00.000Z","subtitle":null,"header-img":null,"tags":["MySQL"]},"headers":[],"relativePath":"docs/database/mysql-export.md","filePath":"docs/database/mysql-export.md"}`),s={name:"docs/database/mysql-export.md"},d=o('<h1 id="mysqldump-导出提示-couldn-t-execute-select-column-name" tabindex="-1">mysqldump 导出提示 Couldn&#39;t execute SELECT COLUMN_NAME... <a class="header-anchor" href="#mysqldump-导出提示-couldn-t-execute-select-column-name" aria-label="Permalink to &quot;mysqldump 导出提示 Couldn&#39;t execute SELECT COLUMN_NAME...&quot;">​</a></h1><h2 id="mysqldump-命令" tabindex="-1">mysqldump 命令 <a class="header-anchor" href="#mysqldump-命令" aria-label="Permalink to &quot;mysqldump 命令&quot;">​</a></h2><p>导出数据库：<code>mysqldump -h ip -u root -p dbname &gt; db.sql;</code></p><p>导出数据库中的某个表：<code>mysqldump -h ip -u root -p dbname tablename &gt; tablename.sql;</code></p><div class="danger custom-block"><p class="custom-block-title">错误提示</p><p>mysqldump: Couldn&#39;t execute &#39;SELECT COLUMN_NAME, JSON_EXTRACT(HISTOGRAM, &#39;$.&quot;number-of-buckets-specified&quot;&#39;) FROM information_schema.COLUMN_STATISTICS</p></div><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><p>因为新版的 <code>mysqldump</code> 默认启用了一个新标志，通过 <code>--column-statistics=0</code> 来禁用</p><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><p><code>mysqldump --column-statistics=0 -h ip -u root -p dbname &gt; db.sql;</code></p>',9),l=[d];function c(m,u,n,r,p,i){return t(),a("div",null,l)}const h=e(s,[["render",c]]);export{q as __pageData,h as default};