import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.VzvPGsLx.js";const g=JSON.parse('{"title":"鸿蒙NEXT开发：上下文和路径问题汇总","description":"","frontmatter":{"title":"鸿蒙NEXT开发：上下文和路径问题汇总","date":"2024-02-04T00:00:00.000Z","tags":["OpenHarmony"]},"headers":[],"relativePath":"docs/frontend/ohos/003-context-and-path.md","filePath":"docs/frontend/ohos/003-context-and-path.md"}'),e={name:"docs/frontend/ohos/003-context-and-path.md"},t=n(`<h1 id="鸿蒙-next-开发-上下文和路径问题汇总" tabindex="-1">鸿蒙 NEXT 开发：上下文和路径问题汇总 <a class="header-anchor" href="#鸿蒙-next-开发-上下文和路径问题汇总" aria-label="Permalink to &quot;鸿蒙 NEXT 开发：上下文和路径问题汇总&quot;">​</a></h1><h2 id="应用文件路径" tabindex="-1">应用文件路径 <a class="header-anchor" href="#应用文件路径" aria-label="Permalink to &quot;应用文件路径&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UIAbility </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ohos.app.ability.UIAbility&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EntryAbility</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UIAbility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">want</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">launchParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cacheDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.cacheDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tempDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.tempDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filesDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.filesDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> databaseDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.databaseDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bundleCodeDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.bundleCodeDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> distributedFilesDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.distributedFilesDir;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> preferencesDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.context.preferencesDir;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="应用沙箱路径和真实物理路径的对应关系" tabindex="-1">应用沙箱路径和真实物理路径的对应关系 <a class="header-anchor" href="#应用沙箱路径和真实物理路径的对应关系" aria-label="Permalink to &quot;应用沙箱路径和真实物理路径的对应关系&quot;">​</a></h2><p>在应用沙箱路径下读写文件，经过映射转换，实际读写的是真实物理路径中的应用文件，应用沙箱路径与真实物理路径对应关系如下表所示。</p><p>其中 <code>&lt;USERID&gt;</code> 当前固定为 100。</p><table><thead><tr><th>应用沙箱路径</th><th>物理路径</th><th>说明</th></tr></thead><tbody><tr><td>/data/storage/el1/bundle</td><td>/data/app/el1/bundle/public/<code>&lt;PACKAGENAME&gt;</code></td><td>应用安装包目录</td></tr><tr><td>/data/storage/el1/base</td><td>/data/app/el1/<code>&lt;USERID&gt;</code>/base/<code>&lt;PACKAGENAME&gt;</code></td><td>应用 el1 级别加密数据目录</td></tr><tr><td>/data/storage/el2/base</td><td>/data/app/el2/<code>&lt;USERID&gt;</code>/base/<code>&lt;PACKAGENAME&gt;</code></td><td>应用 el2 级别加密数据目录</td></tr><tr><td>/data/storage/el1/database</td><td>/data/app/el1/<code>&lt;USERID&gt;</code>/database/<code>&lt;PACKAGENAME&gt;</code></td><td>应用 el1 级别加密数据库目录</td></tr><tr><td>/data/storage/el2/database</td><td>/data/app/el2/<code>&lt;USERID&gt;</code>/database/<code>&lt;PACKAGENAME&gt;</code></td><td>应用 el2 级别加密数据库目录</td></tr><tr><td>/data/storage/el2/distributedfiles</td><td>/mnt/hmdfs/<code>&lt;USERID&gt;</code>/account/merge_view/data/<code>&lt;PACKAGENAME&gt;</code></td><td>应用 el2 加密级别有帐号分布式数据融合目录</td></tr></tbody></table><ul><li><p>一级目录<code>data/</code>：代表应用文件目录。</p></li><li><p>二级目录<code>storage/</code>：代表本应用持久化文件目录。</p></li><li><p>三级目录<code>el1/</code>、<code>el2/</code>：代表不同文件加密类型。</p><ul><li><code>el1</code>，设备级加密区：设备开机后即可访问的数据区。</li><li><code>el2</code>，用户级加密区：设备开机后，需要至少一次解锁对应用户的锁屏界面（密码、指纹、人脸等方式或无密码状态）后，才能够访问的加密数据区。</li><li>应用如无特殊需要，应将数据存放在 el2 加密目录下，以尽可能保证数据安全。但是对于某些场景，一些应用文件需要在用户解锁前就可被访问，例如时钟、闹铃、壁纸等，此时应用需要将这些文件存放到设备级加密区（<code>el1</code>）。切换应用文件加密类型目录的方法请参见获取和修改加密分区。</li></ul></li><li><p><code>bundle</code> 安装文件路径</p><p>应用安装后的 App 的 HAP 资源包所在目录；随应用卸载而清理。不能拼接路径访问资源文件，请使用资源管理接口访问资源。可以用于存储应用的代码资源数据，主要包括应用安装的 HAP 资源包、可重复使用的库文件以及插件资源等。此路径下存储的代码资源数据可以被用于动态加载。</p></li><li><p><code>base</code> 本设备文件路径</p><p>应用在本设备上存放持久化数据的目录，子目录包含 files/、cache/、temp/和 haps/；随应用卸载而清理。</p></li><li><p><code>database</code> 数据库路径</p><p>应用在 el2 加密条件下存放通过分布式数据库服务操作的文件目录；随应用卸载而清理。仅用于保存应用的私有数据库数据，主要包括数据库文件等。此路径下仅适用于存储分布式数据库相关文件数据。</p></li><li><p><code>distributedfiles</code> 分布式文件路径</p><p>应用在<code>el2</code>加密条件下存放分布式文件的目录，应用将文件放入该目录可分布式跨设备直接访问；随应用卸载而清理。可以用于保存应用分布式场景下的数据，主要包括应用多设备共享文件、应用多设备备份文件、应用多设备群组协助文件。此路径下存储这些数据，使得应用更加适合多设备使用场景。</p></li><li><p><code>files</code> 应用通用文件路径</p><p>应用在本设备内部存储上通用的存放默认长期保存的文件路径；随应用卸载而清理。可以用于保存应用的任何私有数据，主要包括用户持久性文件、图片、媒体文件以及日志文件等。此路径下存储这些数据，使得数据保持私有、安全且持久有效。</p></li><li><p><code>cache</code> 应用缓存文件路径</p><p>应用在本设备内部存储上用于缓存下载的文件或可重新生成的缓存文件的路径，应用 <code>cache</code> 目录大小超过配额或者系统空间达到一定条件，自动触发清理该目录下文件；用户通过系统空间管理类应用也可能触发清理该目录。应用需判断文件是否仍存在，决策是否需重新缓存该文件。可以用于保存应用的缓存数据，主要包括离线数据、图片缓存、数据库备份以及临时文件等。此路径下存储的数据可能会被系统自动清理，因此不要存储重要数据。</p></li><li><p><code>preferences</code> 应用首选项文件路径</p><p>应用在本设备内部存储上通过数据库 API 存储配置类或首选项的目录；应用在本设备内部存储上通过数据库 API 存储配置类或首选项的目录；随应用卸载而清理。详见通过用户首选项实现数据持久化。可以用于保存应用的首选项数据，主要包括应用首选项文件以及配置文件等。此路径下仅适用于存储小量数据。</p></li><li><p><code>temp</code> 应用临时文件路径</p><p>应用在本设备内部存储上仅在应用运行期间产生和需要的文件，应用退出后即清理。可以用于保存应用的临时生成的数据，主要包括数据库缓存、图片缓存、临时日志文件、以及下载的应用安装包文件等。此路径下存储使用后即可删除的数据。</p></li></ul><h2 id="image-无法加载中文路径的图片" tabindex="-1">Image 无法加载中文路径的图片 <a class="header-anchor" href="#image-无法加载中文路径的图片" aria-label="Permalink to &quot;Image 无法加载中文路径的图片&quot;">​</a></h2><p>需要调用 <code>encodeURI(url)</code> 再给 <code>Image</code>。</p><h2 id="如何在组件中获取-uiabilitycontext" tabindex="-1">如何在组件中获取 UIAbilityContext <a class="header-anchor" href="#如何在组件中获取-uiabilitycontext" aria-label="Permalink to &quot;如何在组件中获取 UIAbilityContext&quot;">​</a></h2><div class="language-ets vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ets</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> common from </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@ohos.app.ability.common&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@Entry</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@Component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">struct </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onPageShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> common.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UIAbilityContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,12),l=[t];function p(h,d,k,r,c,o){return a(),i("div",null,l)}const b=s(e,[["render",p]]);export{g as __pageData,b as default};