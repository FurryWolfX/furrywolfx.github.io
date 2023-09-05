import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5795de3.js";const u=JSON.parse('{"title":"脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题","description":"","frontmatter":{"title":"脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题","catalog":true,"date":"2014-07-21T11:40:24.000Z","subtitle":null,"header-img":null,"tags":["PowerDesigner"]},"headers":[],"relativePath":"docs/backend/ch-bugs-in-pd-reverse-project.md","filePath":"docs/backend/ch-bugs-in-pd-reverse-project.md"}'),p={name:"docs/backend/ch-bugs-in-pd-reverse-project.md"},e=l(`<h1 id="脚本解决-powerdesigner-逆向工程生成-pdm-时中文注释问题" tabindex="-1">脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题 <a class="header-anchor" href="#脚本解决-powerdesigner-逆向工程生成-pdm-时中文注释问题" aria-label="Permalink to &quot;脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题&quot;">​</a></h1><p>执行 <code>Tools -- Execute Commands -- Run Script</code></p><p>以下是脚本：</p><div class="language-vb vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vb</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">Option Explicit</span></span>
<span class="line"><span style="color:#E1E4E8;">ValidationMode  </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> True</span></span>
<span class="line"><span style="color:#E1E4E8;">InteractiveMode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> im_Batch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">Dim</span><span style="color:#E1E4E8;"> mdl </span><span style="color:#6A737D;">&#39;the current model</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&#39;get the current active model</span></span>
<span class="line"><span style="color:#F97583;">Set </span><span style="color:#E1E4E8;">mdl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ActiveModel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">If</span><span style="color:#E1E4E8;"> (mdl Is</span><span style="color:#79B8FF;"> Nothing</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">Then</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">MsgBox</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;There is no current Model&quot;</span></span>
<span class="line"><span style="color:#F97583;">ElseIf</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Not</span><span style="color:#E1E4E8;"> mdl.</span><span style="color:#B392F0;">IsKindOf</span><span style="color:#E1E4E8;">(PdPDM.cls_Model) </span><span style="color:#F97583;">Then</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">MsgBox</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;The current model is not an Physical Data model.&quot;</span></span>
<span class="line"><span style="color:#F97583;">Else</span></span>
<span class="line"><span style="color:#E1E4E8;">	ProcessFolder mdl</span></span>
<span class="line"><span style="color:#F97583;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&#39;This routine copy name into code for each table, each column and each view</span></span>
<span class="line"><span style="color:#6A737D;">&#39;of the current folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">Private Sub </span><span style="color:#B392F0;">ProcessFolder</span><span style="color:#E1E4E8;">(folder)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">Dim</span><span style="color:#E1E4E8;"> Tab </span><span style="color:#6A737D;">&#39;running table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">For</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Each</span><span style="color:#E1E4E8;"> Tab </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> folder.tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">If</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Not</span><span style="color:#E1E4E8;"> tab.isShortcut </span><span style="color:#F97583;">Then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">If</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Len</span><span style="color:#E1E4E8;">(tab.comment) </span><span style="color:#F97583;">&lt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Then</span></span>
<span class="line"><span style="color:#E1E4E8;">				tab.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tab.comment</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">On Error Resume Next</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">Dim</span><span style="color:#E1E4E8;"> col </span><span style="color:#6A737D;">&#39;running column</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">For</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Each</span><span style="color:#E1E4E8;"> col </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> tab.columns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">If</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Len</span><span style="color:#E1E4E8;">(col.comment) </span><span style="color:#F97583;">&lt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">Then</span></span>
<span class="line"><span style="color:#E1E4E8;">					col.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> col.comment</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">On Error Resume Next</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">Next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">Next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">End Sub</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">Option Explicit</span></span>
<span class="line"><span style="color:#24292E;">ValidationMode  </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> True</span></span>
<span class="line"><span style="color:#24292E;">InteractiveMode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> im_Batch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">Dim</span><span style="color:#24292E;"> mdl </span><span style="color:#6A737D;">&#39;the current model</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&#39;get the current active model</span></span>
<span class="line"><span style="color:#D73A49;">Set </span><span style="color:#24292E;">mdl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ActiveModel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">If</span><span style="color:#24292E;"> (mdl Is</span><span style="color:#005CC5;"> Nothing</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">Then</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">MsgBox</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;There is no current Model&quot;</span></span>
<span class="line"><span style="color:#D73A49;">ElseIf</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Not</span><span style="color:#24292E;"> mdl.</span><span style="color:#6F42C1;">IsKindOf</span><span style="color:#24292E;">(PdPDM.cls_Model) </span><span style="color:#D73A49;">Then</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">MsgBox</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;The current model is not an Physical Data model.&quot;</span></span>
<span class="line"><span style="color:#D73A49;">Else</span></span>
<span class="line"><span style="color:#24292E;">	ProcessFolder mdl</span></span>
<span class="line"><span style="color:#D73A49;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&#39;This routine copy name into code for each table, each column and each view</span></span>
<span class="line"><span style="color:#6A737D;">&#39;of the current folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">Private Sub </span><span style="color:#6F42C1;">ProcessFolder</span><span style="color:#24292E;">(folder)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">Dim</span><span style="color:#24292E;"> Tab </span><span style="color:#6A737D;">&#39;running table</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">For</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Each</span><span style="color:#24292E;"> Tab </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> folder.tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">If</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Not</span><span style="color:#24292E;"> tab.isShortcut </span><span style="color:#D73A49;">Then</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">If</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Len</span><span style="color:#24292E;">(tab.comment) </span><span style="color:#D73A49;">&lt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Then</span></span>
<span class="line"><span style="color:#24292E;">				tab.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tab.comment</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">On Error Resume Next</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">Dim</span><span style="color:#24292E;"> col </span><span style="color:#6A737D;">&#39;running column</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">For</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Each</span><span style="color:#24292E;"> col </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> tab.columns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">If</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Len</span><span style="color:#24292E;">(col.comment) </span><span style="color:#D73A49;">&lt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">Then</span></span>
<span class="line"><span style="color:#24292E;">					col.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> col.comment</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">On Error Resume Next</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">Next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">End If</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">Next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">End Sub</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,4),o=[e];function c(t,r,i,E,y,b){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
