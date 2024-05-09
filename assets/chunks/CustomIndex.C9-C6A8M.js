import{d as g}from"./theme.CbmaHVuh.js";import{d as u,o as r,c as t,E as i,m as l,F as c,l as e,t as a,e as v,p as h,q as x,_ as f}from"./framework.CWaimgAe.js";const k={"/docs/":[{text:"鸿蒙NEXT开发：鸿蒙Flutter插件开发",link:"/docs/frontend/ohos/007-flutter-plugin",date:17140896e5,recommend:"ohos",content:`\r
\r
# 鸿蒙NEXT开发：鸿蒙Flutter插件开发\r
\r
鸿蒙适配版flutter：https://gitee.com/openharmony-sig/flutter_flutter  \r
\r
文档：https://gitee.com/openharmony-sig/flutter_samples/tree/master/ohos/docs\r
\r
插件模板：https://gitee.com...`,tags:["鸿蒙"]},{text:"Rust 中字符串的 to_owned 和 String::from 的区别",link:"/docs/other/rust-000",date:17114976e5,recommend:"",content:"\r\n\r\n# `Rust` 中字符串的 `to_owned` 和 `String::from` 的区别\r\n\r\n在 `Rust` 中，`to_owned()` 和 `String::from()` 都是用于将 `&str` 类型转换为 `String` 类型的方法，但它们在实现细节和使用场景上有所不同。\r\n\r\n这意味着 `to_owned()` 方法不仅适用于字符串切片（`&str`），还适用于任何实...",tags:["Rust"]},{text:"鸿蒙NEXT开发：通过 N-API 调用 Rust",link:"/docs/frontend/ohos/006-napi",date:17114112e5,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：通过 N-API 调用 Rust\r
\r
https://blog.csdn.net/zrufo747/article/details/132309037\r
\r
## 创建模板工程\r
\r
1. 使用 \`File-&gt;New-&gt;Create Project\` 创建 \`Native C++\` 模板工程。\r
2. 删除 \`entry/src/main/cpp\`。\r
3. 编...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：服务卡片开发汇总",link:"/docs/frontend/ohos/005-atom-service",date:1708992e6,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：服务卡片开发汇总\r
\r
## 如何在 onAddForm 获取卡片标识(formId)\r
\r
\`\`\`ts\r
import formInfo from "@ohos.app.form.formInfo";\r
\r
export default class EntryFormAbility extends FormExtensionAbility {\r
  // ......`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：媒体操作汇总",link:"/docs/frontend/ohos/004-media",date:1708992e6,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：媒体操作汇总\r
\r
## 选择图片并上传\r
\r
\`\`\`ets\r
import fs from '@ohos.file.fs';\r
// utils 中的方法见《鸿蒙NEXT开发2：一些工具的包装》\r
import { requestPermissions } from '../../utils/premissions';\r
import { selectPictu...`,tags:["鸿蒙"]},{text:"封装笔记：JS 导出 Excel 文件",link:"/docs/frontend/javascript/js-excel-export",date:17082144e5,recommend:"",content:`\r
\r
# 封装笔记：JS 导出 Excel 文件\r
\r
:::tip\r
基于 xlsx 做了封装，更易于使用。\r
:::\r
\r
## typing.ts\r
\r
\`\`\`ts\r
import type { WritingOptions } from "xlsx";\r
\r
export interface ExcelData&lt;T = any&gt; {\r
  header: string[];\r
  res...`,tags:["JavaScript"]},{text:"鸿蒙NEXT开发：上下文和路径问题汇总",link:"/docs/frontend/ohos/003-context-and-path",date:17070048e5,recommend:"ohos",content:`\r
\r
# 鸿蒙NEXT开发：上下文和路径问题汇总\r
\r
## 应用文件路径\r
\r
\`\`\`ts\r
import UIAbility from "@ohos.app.ability.UIAbility";\r
\r
export default class EntryAbility extends UIAbility {\r
  onCreate(want, launchParam) {\r
    let...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：一些工具的包装",link:"/docs/frontend/ohos/002-utils",date:17070048e5,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：一些工具的包装\r
\r
## ObservedArray 可观察的数组类\r
\r
\`\`\`ts\r
@Observed\r
class ObservedArray&lt;T&gt; extends Array&lt;T&gt; {\r
  constructor(args: T[]) {\r
    if (args instanceof Array) {\r
      super(...args);...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：常用三方库与包管理",link:"/docs/frontend/ohos/001-pkg",date:17070048e5,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：常用三方库与包管理\r
\r
## 推荐列表\r
\r
| 名称                     | 简介                                                                                                                                  ...`,tags:["鸿蒙"]},{text:"鸿蒙NEXT开发：一些基础笔记",link:"/docs/frontend/ohos/000-base",date:17070048e5,recommend:"ohos",content:`\r
\r
# 鸿蒙 NEXT 开发：一些基础笔记\r
\r
## 一个不错的案例仓库\r
\r
&lt;https://gitee.com/harmonyos-cases/cases/tree/master&gt;\r
\r
## 路由的基本使用\r
\r
\`\`\`ts\r
import router from "@ohos.router";\r
\`\`\`\r
\r
- \`router.pushUrl()\`  跳转到指定页面。\r
- \`r...`,tags:["鸿蒙"]},{text:"通过注册表修改 edge 浏览器的缓存位置",link:"/docs/other/change-edge-cache",date:16994016e5,recommend:"",content:`

# 通过注册表修改 edge 浏览器的缓存位置

:::tip
环境为 Windows 11，其他版本未验证。
:::

在开始菜单或运行中输入 \`regedit\` 打开注册表编辑器，展开 \`HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\`。

右键点击 \`Microsoft\`，选择新建项，命名为 \`Edge\`。如果存在则无需创建。

右键点击 \`...`,tags:[]},{text:"数学公式渲染测试与速查",link:"/docs/other/math",date:16952211e5,recommend:"",content:`

# 数学公式渲染测试与速查

:::info
博客现已支持渲染数学公式啦
:::

## 例子

行级模式：\`$\\sum_{i=0}^N\\int_{a}^{b}g(t, i)\\text{d}t$\`

$\\sum_{i=0}^N\\int_{a}^{b}g(t, i)\\text{d}t$

块级模式：\`$$\\sum_{i=0}^N\\int_{a}^{b}g(t, i)\\text{d}t$$\`

$...`,tags:[]},{text:"Git Guide",link:"/docs/other/git-guide",date:1694969424e3,recommend:"",content:`

# Git Guide

## git 常用指令的用法

### 源

- \`git remote -v\` ：指查看远程关联的仓库，包括源文件和上一层源文件。
- \`git remote add origin\` + 网址：指添加一个源文件。
- \`git remote add upstream\` + 网址：指添加一个上一层源文件，即 \`fork\` 项目的源文件。
- \`git remote r...`,tags:["Git"]},{text:"笔记：如何从 Windows 中删除旧设备驱动程序",link:"/docs/os/win-remove-old-driver",date:1694191824e3,recommend:"",content:`

# 笔记：如何从 Windows 中删除旧设备驱动程序

Windows 更换硬件后并不会删除原来硬件的驱动，需要手动删除。

官方解决方案：&lt;https://support.microsoft.com/en-gb/topic/device-manager-does-not-display-devices-that-are-not-connected-e7148232-40ae-bb07-00...`,tags:["Windows"]},{text:"Tauri 如何启动时创建一个子窗口",link:"/docs/frontend/hybird/tauri-subwindow",date:169391352e4,recommend:"",content:`\r
\r
\`\`\`rs\r
fn main() {\r
    tauri::Builder::default()\r
        .setup(|app| {\r
            let handle = app.handle();\r
            std::thread::spawn(move || {\r
                tauri::WindowBuilder::n...`,tags:["tauri"]},{text:"代替 Electron 的几种方案",link:"/docs/frontend/hybird/replace-electron",date:169391352e4,recommend:"",content:`

# 代替 Electron 的几种方案

## electron 的劣势

1. 安装包体积大，每装一个 app 等同于装一个 chrome
2. electron 的窗口是自绘的，因此无法自适应系统主题、控制按钮扩展以及透明效果
3. electron 的主进程也是 js 写的，涉及到 CPU 较为密集的场景性能烂

## 代替方案一: tauri

### 相对于 electron 的优势...`,tags:["tauri","electron"]},{text:"使用 YOLOX 进行目标检测训练",link:"/docs/backend/py-yolox",date:16901136e5,recommend:"",content:`

# 使用 YOLOX 进行目标检测训练

## 开始

&lt;div align="center"&gt;
  &lt;img src="https://github.com/Megvii-BaseDetection/YOLOX/raw/main/assets/logo.png" width="350"&gt;
&lt;/div&gt;
&lt;img src="https://github.com/Megvii-BaseDetec...`,tags:["Python"]},{text:"使用 Python 构建UI自动化脚本",link:"/docs/backend/py-pyautogui",date:16901136e5,recommend:"",content:`

# 使用 Python 构建UI自动化脚本

## 颜色处理篇

\`\`\`py
import pyautogui


def compare_color(color1: tuple[int, int, int], color2: tuple[int, int, int], sim: float) -&gt; bool:
    """
    对比两个BGR颜色
    """
    ar = co...`,tags:["Python"]},{text:"Vue2 升级 Vue3 注意点",link:"/docs/frontend/mvvm/vue2-to-vue3-tips",date:1682959824e3,recommend:"",content:`

# Vue2 升级 Vue3 注意点

:::tip 官方迁移指南传送门
&lt;https://v3-migration.vuejs.org/zh/breaking-changes/&gt;
:::

## 挂载全局对象和方法

\`Vue3\` 已经不支持直接 \`Vue.prototype.$xxx = xxx\` 这种方式来挂载全局对象，这是由于 \`globalVue\` 不再是构造函数，因此不再支持该构造...`,tags:["Vue"]},{text:"Fabric.js 补充笔记",link:"/docs/frontend/canvas/fabric",date:16692822e5,recommend:"canvas",content:"\n\n# Fabric.js 补充笔记\n\n## 选中状态元素置顶问题\n\n:::tip\n老版本无需设置该属性\n:::\n\n`fabric canvas` 的 `preserveObjectStacking`，当设置为 `true` 的时候是在当前层,设置为 `false` 时是置顶选中元素,默认的是 `false`。\n\n## 思路：图层排序问题\n\n`fabric` 中没有 `CSS` 中 `z-inde...",tags:["Fabric","Canvas"]},{text:"修复UWP应用在启动页闪退的问题",link:"/docs/os/fix-uwp",date:1667753424e3,recommend:"",content:`

# 修复 UWP 应用在启动页闪退的问题

这种问题一般是内置的应用程序文件损坏导致的，解决步骤如下：

使用快捷键 \`Win+X\` 打开功能菜单，选择 \`Windows Powershell(管理员)\`

运行命令：

\`\`\`powershell
Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentM...`,tags:["Windows"]},{text:"Canvas 事件系统的思考",link:"/docs/frontend/canvas/canvas-note2",date:1658335824e3,recommend:"canvas",content:`

# Canvas 事件系统的思考

## 基于投影的事件系统（投影法）

这是目前我项目中使用的方式，因为公司**保密协议**的问题，这里只说一下思路：

1. 首先我们需要创建两个画布，一个是给用户看的主画布，另一个是用户不可见的影子画布。
2. 当主画布渲染图形的时候，在影子画布上生成主画布形状的投影，投影的颜色和图形 ID 使用特定的算法形成映射。
3. 当主画布被点击时，获取点击的坐标...`,tags:["Canvas"]},{text:"魔改 Laya 编译脚本实现兼容常规 NPM 包",link:"/docs/frontend/canvas/laya-compile",date:161666856e4,recommend:"",content:`\r
\r
# 魔改 Laya 编译脚本实现兼容常规 NPM 包\r
\r
## 方式 1:魔改 laya 编译器\r
\r
### 修改 tsconfig\r
\r
\`\`\`json\r
{\r
  "compilerOptions": {\r
    "module": "es6",\r
    "target": "es6",\r
    "noEmitHelpers": true,\r
    "sourceMap":...`,tags:["Canvas","GameEngine","Laya","JavaScript","TypeScript"]},{text:"记录两种内网linux上网的方式",link:"/docs/os/iptables-proxy",date:161530572e4,recommend:"",content:`

# 记录两种内网 linux 上网的方式

## 环境

网络环境如下：

机器 1（可上外网）：

\`enp0s3: 192.168.100.55/24\`（可上网的网卡）

\`enp0s8: 192.168.56.103/24\`（内网）

机器 2（内网）：

\`enp0s3: 192.168.56.101/24\`

想达到的效果：机器 2 通过机器 1 访问外网

## NAT 上网

#...`,tags:["Linux"]},{text:"Rust 环境搭建笔记",link:"/docs/backend/rust-env-note",date:1609761024e3,recommend:"",content:"\r\n\r\n# Rust 环境搭建笔记\r\n\r\n在 `Mac` 下，`Rust` 的环境有两种方式，一种是通过官网的命令安装 `rustup`，就会安装好 `rustc` 和 `cargo` 等工具。还有一种方式是通过 `brew` 安装。\r\n\r\n如果通过 `brew` 安装，执行如下命令：\r\n\r\n```bash\r\nbrew install rust\r\n```\r\n\r\n上面的方式安装后不能使用 `rust...",tags:["Rust"]},{text:"iOS App 证书申请流程",link:"/docs/frontend/hybird/ios-cert",date:1605891e6,recommend:"",content:`\r
\r
# iOS App 证书申请流程\r
\r
参考链接 &lt;https://ask.dcloud.net.cn/article/152&gt;\r
\r
打开 &lt;https://developer.apple.com/account/resources/certificates/list&gt;\r
\r
![image-20201117102800146](https://imgs-1251264059.cos.a...`,tags:["GitLab"]},{text:"Blender 笔记03: 建模篇",link:"/docs/frontend/3d/blender-03-modeling",date:1603731e6,recommend:"blender",content:`

# Blender 笔记 03: 建模篇

## 平面挖孔建模案例 01

### 镜像

对一个平面做镜像

![image-20201024230007692](https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-03-modeling/image-20201024230007692.png)

![image-20201...`,tags:["3D","Blender"]},{text:"Blender 笔记02: 修改器",link:"/docs/frontend/3d/blender-02-modify",date:16031262e5,recommend:"blender",content:`

# Blender 笔记 02: 修改器

:::info
修改器对物体没有破坏性
:::

## 阵列修改器

![image-20201018212637769](https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/blender-02-modify/image-20201018212637769.png)

![image-202010...`,tags:["3D","Blender"]},{text:"Blender 笔记01: 基本操作和编辑模式",link:"/docs/frontend/3d/blender-01-basic",date:16025214e5,recommend:"blender",content:`

# Blender 笔记 01: 基本操作和编辑模式

## 参考教程

https://www.bilibili.com/video/BV1WD4y1o7TT

## 快捷键

### 视图切换（~）

通过波浪键可以快速切换视图

### 切换编辑模式（TAB）

### 约束轴向（CTRL）

### 着色模式切换（Z）

![image-20201018210815141](https...`,tags:["3D","Blender"]},{text:"解决GitLab删除或迁移项目报500",link:"/docs/backend/gitlab-500",date:16025214e5,recommend:"",content:`

# 解决 GitLab 删除或迁移项目报 500

执行下面的脚本即可

\`\`\`bash
gitlab-rails dbconsole
\`\`\`

\`\`\`bash
gitlabhq_production=&gt; UPDATE projects SET runners_token = null, runners_token_encrypted = null;
UPDATE 88
gitlabhq_pr...`,tags:["GitLab"]},{text:"Linux 按时间批量删除文件（删除30天前文件）",link:"/docs/os/linux-del-file-by-date",date:1598979024e3,recommend:"",content:`\r
\r
# Linux 按时间批量删除文件（删除 30 天前文件）\r
\r
需要根据时间删除这个目录下的文件，\`/home/demo\`，清理掉 30 天之前的无效数据。\r
\r
可以使用下面一条命令去完成：\r
\r
\`\`\`bash\r
find /home/demo -mtime +30 -name "*.*" -exec rm -rf {} \\;\r
\`\`\`\r
\r
这个是根据时间删除。\r
\r
下面简要解释...`,tags:["Linux"]},{text:"nuxt 构建相关笔记",link:"/docs/frontend/mvvm/nuxt-build-note",date:159736152e4,recommend:"",content:`\r
\r
# nuxt 构建相关笔记\r
\r
## 支持最新的 babel env\r
\r
修改 \`nuxt.config.js\`\r
\r
\`\`\`javascript\r
/*\r
  ** Build configuration\r
  */\r
build: {\r
  /* 如果node_modules中使用了ES6导致浏览器报错，使用transpile告知babel需要编译 */\r
  transpile:...`,tags:["JavaScript","Vue","Nuxt","Babel"]},{text:"生产环境全局移除console",link:"/docs/frontend/javascript/remove-console",date:159736152e4,recommend:"",content:`\r
\r
# 生产环境全局移除 console\r
\r
## 利用正则替换\r
\r
\`(//)*( )*console.log\\(.*\\);+\`\r
\r
利用 VSCode 或 WebStorm 这类编辑器的正则替换功能可以很轻松的替换。\r
\r
## 利用 babel 插件\r
\r
在 nuxt 中配置如下：\r
\r
\`\`\`javascript\r
export default {\r
  build: {\r
 ...`,tags:["JavaScript","Babel","Nuxt"]},{text:"MySQL 问题笔记",link:"/docs/database/mysql-export",date:159736152e4,recommend:"",content:`

# MySQL 问题笔记

## mysqldump 导出提示 Couldn't execute SELECT COLUMN_NAME...

### mysqldump 命令

导出数据库：\`mysqldump -h ip -u root -p dbname &gt; db.sql;\`

导出数据库中的某个表：\`mysqldump -h ip -u root -p dbname tablename...`,tags:["MySQL"]},{text:"Elasticsearch 笔记",link:"/docs/database/es-note-01",date:159736152e4,recommend:"",content:`

# Elasticsearch 笔记

## IK 分词器

&lt;https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.16.3/elasticsearch-analysis-ik-7.16.3.zip&gt;

## 跨域配置

\`\`\`yaml
# 跨域配置
http.cors.enabled: true
ht...`,tags:["Elasticsearch"]},{text:"Flutter 学习笔记",link:"/docs/frontend/hybird/flutter-note",date:159706794e4,recommend:"",content:`\r
\r
# Flutter 学习笔记\r
\r
## 安装开发环境\r
\r
### 用 git 下载 SDK\r
\r
国内镜像 \`https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git\`\r
\r
### 配置环境变量\r
\r
**（Linux 下开发 Android 为例）**\r
\r
在 \`~/.profile\` 加入下面代码\r
\r
\`\`\`bash\r
...`,tags:["Dart","Flutter"]},{text:"NodeJS 处理二进制",link:"/docs/nodejs/bin-in-nodejs",date:1594227024e3,recommend:"",content:`\r
\r
# NodeJS 处理二进制\r
\r
\`\`\`javascript\r
// 将base64编码的二进制报文解析成buffer\r
const b = new Buffer.from("KA==", "base64");\r
// 将buffer解析成hex字符串\r
const s = b.toString("hex");\r
// 将hex字符串解析成10进制整数\r
console.log(pars...`,tags:["NodeJS","JavaScript"]},{text:"用 frp 暴露内网服务",link:"/docs/backend/frp-guide",date:1593622224e3,recommend:"",content:`\r
\r
# 用 frp 暴露内网服务\r
\r
## 服务端配置\r
\r
\`frps.ini\`\r
\r
\`\`\`ini\r
[common]\r
bind_port = 7000\r
vhost_http_port = 9000\r
\`\`\`\r
\r
\`\`\`bash\r
./frps -c ./frps.ini\r
\`\`\`\r
\r
## 客户端配置\r
\r
\`frpc.ini\`\r
\r
\`\`\`ini\r
[common]\r
ser...`,tags:["frp"]},{text:"CentOS 8 FAQ",link:"/docs/os/centos-8-faq",date:15926874e5,recommend:"CentOS",content:`

# CentOS 8 FAQ

## CentOS 8 关闭防火墙

\`\`\`bash
sudo systemctl stop firewalld.service       ## 停止firewall
sudo systemctl disable firewalld.service    ## 禁止firewall开机启动
\`\`\`

## CentOS 8 安装 docker

\`\`\`bash...`,tags:["Linux"]},{text:"Egret 游戏引擎学习笔记",link:"/docs/frontend/canvas/egret-note",date:15926454e5,recommend:"",content:`\r
\r
# Egret 游戏引擎学习笔记\r
\r
:::info\r
Egret 游戏引擎学习，以下是对用到的知识点和常用代码片段进行归纳。\r
:::\r
\r
## Main 最简结构\r
\r
最简结构：包含资源加载和展示过渡动画\r
\r
\`\`\`typescript\r
class Main extends egret.DisplayObjectContainer {\r
  private logo: egr...`,tags:["Canvas","Egret"]},{text:"Spark 学习日记（初探）",link:"/docs/backend/spark-note",date:1592326224e3,recommend:"",content:`

# Spark 学习日记（初探）

## 历史

### hadoop 1.x

\`HDFS\`：用 \`NameNode\` 管理 \`DataNode\`。
\`Map-Reduce\`：用 \`JobTracker\` 管理（调度） \`TaskTracker\`

### hadoop 1.x Map-Reduce 的缺点

\`Map-Reduce\` 是基于数据集的计算，是面向数据的。

1. 基本的运算规...`,tags:["Spark"]},{text:"hadoop 学习日记（初探）",link:"/docs/backend/hadoop-note",date:1592326224e3,recommend:"",content:`

# hadoop 学习日记（初探）

## Java 环境

\`\`\`bash
yum install java java-devel
vim ~/.bashrc ## 配置JAVA_HOME和hadoop中的bin环境变量
source ~/.bashrc
\`\`\`

## SSH 无密码登陆

可参考我另一篇博文。保证个节点机器是可以免密互通的。

## 配置 hadoop

这里仅设置了正常...`,tags:["hadoop"]},{text:"NodeJS 一行命令搭建静态文件服务器",link:"/docs/nodejs/node-static-file-server",date:1589734224e3,recommend:"",content:"\r\n\r\n# NodeJS 一行命令搭建静态文件服务器\r\n\r\n`ecstatic` 是个简单易用的 `HTTP` 静态文件服务器，如果不想单独安装 `nginx` 之类的软件，可以使用 `ecstatic`。\r\n\r\n```bash\r\nnpm i -g ecstatic\r\necstatic ./ --port 3000\r\n```\r\n",tags:["NodeJS"]},{text:"Docker 笔记(常用模板)",link:"/docs/backend/docker-note-4",date:1589734224e3,recommend:"docker-note",content:`

# Docker 笔记(常用模板)

## docker-mongodb

\`\`\`bash
## 下载镜像
docker pull mongo:4.2.6-bionic
## 运行容器，设置映射
docker run --name mongo-4.2.6 -p 27017:27017 -v /data/mongodb/configdb:/data/configdb -v /data/mongo...`,tags:["Docker"]},{text:"Docker开启Remote API 访问 2375端口",link:"/docs/backend/docker-note-3",date:1589734224e3,recommend:"docker-note",content:`

# Docker 开启 Remote API 访问 2375 端口

## Docker 常见端口

2375：未加密的 docker socket,远程 root 无密码访问主机

2376：tls 加密套接字,很可能这是您的 CI 服务器 4243 端口作为 https 443 端口的修改

2377：群集模式套接字,适用于群集管理器,不适用于 docker 客户端

5000：docke...`,tags:["Docker"]},{text:"Docker 笔记(构建)",link:"/docs/backend/docker-note-2",date:1589734224e3,recommend:"docker-note",content:`

# Docker 笔记(构建)

## 编写 dockerfle

### Vue SPA 模板

\`\`\`bash
FROM node:lts-slim
MAINTAINER wolfx
RUN mkdir -p /app
WORKDIR /app
COPY dist/ /app
RUN npm config set registry https://registry.npm.taobao.o...`,tags:["Docker"]},{text:"React Native 开发笔记（长期更新）",link:"/docs/frontend/hybird/react-native-tips",date:15897267e5,recommend:"React-Native",content:`

# React Native 开发笔记（长期更新）

## RN 技巧

### 单独启动 android studio 模拟器(Linux)

\`\`\`bash
./emulator -netdelay none -netspeed full -avd Nexus_5X_API_25
\`\`\`

### 文字过长隐藏的问题

CSS3 中大家可能都会用到 text-oveflow，然而 RN 的...`,tags:["React-Native","JavaScript"]},{text:"记一个路径遍历算法（JS）",link:"/docs/frontend/javascript/js-route-algorithm",date:1587401424e3,recommend:"",content:`\r
\r
# 记一个路径遍历算法（JS）\r
\r
\`\`\`javascript\r
/**\r
 * 输入\r
 * ["A", "B"],\r
   ["C", "D"],\r
   ["E", "F"],\r
   输出\r
  ["A", "C", "E"],\r
  ["A", "C", "F"],\r
  ["A", "D", "E"],\r
  ["A", "D", "F"],\r
  ["B", "C", "E...`,tags:["JavaScript"]},{text:"记一个 Table 跨行转换算法",link:"/docs/frontend/javascript/table-colspan-convert",date:1587142224e3,recommend:"",content:`\r
\r
# 记一个 Table 跨行转换算法\r
\r
## 源数据格式\r
\r
\`\`\`javascript\r
[\r
  [{ value: "一级" }, { value: "二级1" }, { value: "三级1" }],\r
  [{ value: "一级" }, { value: "二级1" }, { value: "三级2" }],\r
  [{ value: "一级" }, { value:...`,tags:["JavaScript"]},{text:"CentOS 磁盘扩容",link:"/docs/os/centos-disk-extend",date:1586553e6,recommend:"CentOS",content:`

# CentOS 磁盘扩容

\`\`\`bash
fdisk -l
\`\`\`

可以看到现在的分区情况如下

\`\`\`bash
Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          64      512000   83  Linux
/dev/sda2       ...`,tags:["Linux"]},{text:"Jenkins 问题汇总",link:"/docs/backend/jenkins-guide",date:15865518e5,recommend:"",content:`\r
\r
# Jenkins 问题汇总\r
\r
## 系统时间不正常\r
\r
打开 【系统管理】-&gt;【脚本命令行】运行下面的命令\r
\r
\`\`\`java\r
System.setProperty('org.apache.commons.jelly.tags.fmt.timeZone', 'Asia/Shanghai')\r
\`\`\`\r
\r
## 部署 NodeJS 的构建脚本\r
\r
以 nuxt 项目为例\r
\r...`,tags:["Jenkins"]},{text:"公司内 vscode 统一配置规范",link:"/docs/frontend/tool/vscode-config-template",date:1583427024e3,recommend:"",content:`\r
\r
# 公司内 vscode 统一配置规范\r
\r
## vscode 前端开发插件整理\r
\r
### 功能增强\r
\r
- Auto Close Tag\r
  自动闭合 HTML 标签\r
- Auto Rename Tag (存在匹配混乱的问题，修复前不推荐安装)\r
  自动修改 HTML 结束标签的名称\r
- Live Server\r
  在当前文件夹启动一个轻量 HTTP 服务\r
- Pat...`,tags:[]},{text:"Linux VPN Server 异地组网",link:"/docs/os/linux-vpn",date:15782586e5,recommend:"",content:`\r
\r
# Linux VPN Server 异地组网\r
\r
:::info\r
虚拟专用网（VPN），是一种常用于连接中、大型企业或团体与团体间的私人网络的通讯方法。虚拟私人网络的讯息透过公用的网络架构来传送内联网的网络讯息。它利用已加密的通道协议来达到保密、发送端认证、消息准确性等私人消息安全效果。这种技术可以用不安全的网络来发送可靠、安全的消息。\r
:::\r
\r
## docker 版安装\r
...`,tags:["Linux"]},{text:"用 d3.js 做一个地图迁徙图",link:"/docs/frontend/canvas/d3-map",date:1575651024e3,recommend:"",content:`\r
\r
# 用 d3.js 做一个地图迁徙图\r
\r
这次使用的是 Vue + d3v5。\r
\r
\`\`\`html\r
&lt;div ref="test-svg"&gt;&lt;/div&gt;\r
\`\`\`\r
\r
\`\`\`javascript\r
import * as d3 from "d3";\r
import geoJson from "~/assets/map.json";\r
export default {\r
  name...`,tags:["D3","JavaScript","SVG"]},{text:"坐标系转换算法与投影算法",link:"/docs/frontend/javascript/gps-coordinate-transofrm",date:1574873424e3,recommend:"",content:`\r
\r
# 坐标系转换算法与投影算法\r
\r
## 火星坐标\r
\r
火星坐标是国家测绘局为了国家安全在原始坐标的基础上进行偏移得到的坐标，基本国内的电子地图、导航设备都是采用的这一坐标系或在这一坐标的基础上进行二次加密得到的。\r
火星坐标的真实名称应该是 GCJ-02 坐标。基本上所有的国内的电子地图采用的都是火星坐标系甚至 Google 地图中国部分都特意为中国政府做了偏移。\r
\r
## 百度坐标...`,tags:["GIS","JavaScript"]},{text:"Docker 打包 NuxtJS",link:"/docs/backend/docker-nuxt",date:1573059024e3,recommend:"docker-note",content:`

# Docker 打包 NuxtJS

## Docker 镜像加速（Linux 为例）

创建 \`/etc/docker/daemon.json\` 的配置文件

\`\`\`json
{
  "registry-mirrors": ["https://registry.docker-cn.com", "https://9zh8kwqg.mirror.aliyuncs.com"]
}
\`\`\`

\`\`...`,tags:["Docker"]},{text:"GitLab 配置邮件通知",link:"/docs/backend/gitlab-mail",date:1572540624e3,recommend:"",content:`\r
\r
# GitLab 配置邮件通知\r
\r
添加如下相应邮箱服务商的配置到 \`/etc/gitlab/gitlab.rb\`, 然后运行 \`gitlab-ctl reconfigure\` 使修改生效。\r
\r
\`\`\`ruby\r
gitlab_rails['smtp_enable'] = true\r
gitlab_rails['smtp_address'] = "smtp.server"\r
gitla...`,tags:["Git"]},{text:"JavaScript UMD 插件编写规范(修订)",link:"/docs/nodejs/webpack-umd-pkg",date:157087122e4,recommend:"",content:`\r
\r
# JavaScript UMD 插件编写规范(修订)\r
\r
&gt; UMD 的实现很简单，先判断是否支持 Node.js 模块格式（exports 是否存在），存在则使用 Node.js 模块格式。\r
&gt; 再判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。前两个都不存在，则将模块公开到全局（window 或 global）。\r
&gt; 编写 UMD 时有一些注意...`,tags:["JavaScript","NodeJS","Webpack"]},{text:"deepin linux 使用与运维日记（长期更新）",link:"/docs/os/deepin-linux-note",date:1569603024e3,recommend:"",content:`\r
\r
# deepin linux 使用与运维日记（长期更新）\r
\r
## 软件推荐\r
\r
注：大型或知名软件就不在这里推荐了\r
\r
### 桌面级\r
\r
1. albert 效率工具，快速检索\r
2. genymotion 模拟器，安卓开发必备\r
3. goldendict 开源词典，支持多种格式\r
4. [redict](https://github.com/rekols/redict/re...`,tags:["Linux"]},{text:"HTML5 播放 RTSP/RTMP 方案",link:"/docs/nodejs/html5-live-video",date:1567356624e3,recommend:"",content:`\r
\r
# HTML5 播放 RTSP/RTMP 方案\r
\r
## RTSP\r
\r
RTSP(Real-Time Stream Protocol)协议是一个基于文本的多媒体播放控制协议，属于应用层。RTSP 以客户端方式工作，对流媒体提供播放、暂停、后退、前进等操作。该标准由 IETF 指定，对应的协议是 RFC2326。\r
\r
RTSP 传输的一般是 TS、MP4 格式的流，其传输一般需要 2~...`,tags:["JavaScript","NodeJS","RTSP","HLS"]},{text:"WebStorm 针对 log4js 日志格式的高亮配置",link:"/docs/other/webstorm-conf-log4js",date:1566406224e3,recommend:"",content:`\r
\r
# WebStorm 针对 log4js 日志格式的高亮配置\r
\r
定制正则，用于解析 nodejs 产生的日志。\r
\r
## message pattern\r
\r
\`^\\[([^\\s]+)\\]\\s\\[(\\w+)\\]\\s([\\w\\.]+)\\s-\\s(.*)$\`\r
\r
## message start pattern\r
\r
\`^\\[\`\r
\r
## time format\r
\r
\`yyyy-M...`,tags:["IDE"]},{text:"优雅地统计代码行数",link:"/docs/other/cloc",date:1566387624e3,recommend:"",content:`

# 优雅地统计代码行数

## bash 脚本法

\`\`\`bash
find . "(" -name "*.m" -or -name "*.mm" -or -name "*.cpp" -or -name "*.h" -or -name "*.rss" ")" -print | xargs wc -l
\`\`\`

缺点：

- 不同的编程语言，有不同的文件后缀名，需要自行配置
- 不能过滤掉注释
...`,tags:[]},{text:"Phaser-CE 游戏引擎学习笔记",link:"/docs/frontend/canvas/phaser-ce-note",date:1563183e6,recommend:"",content:`\r
\r
# Phaser-CE 游戏引擎学习笔记\r
\r
最近做了个小游戏，以下是对用到的知识点和常用代码片段进行归纳。\r
\r
官方文档：&lt;https://www.phaser-china.com/docs/Index.html&gt;\r
\r
## 以场景（state）的方式初始化游戏\r
\r
官方给出的例子中没有使用 state 来初始化游戏，state 方式如下：\r
\r
\`\`\`javascript\r
i...`,tags:["Canvas","GameEngine","Phaser"]},{text:"JavaScript 前端图片压缩方案，支持方向识别和修正",link:"/docs/frontend/javascript/fe-js-image-compress",date:1559667e6,recommend:"",content:`\r
\r
# JavaScript 前端图片压缩方案，支持方向识别和修正\r
\r
&gt; 可以用于浏览器的图片压缩方案\r
\r
\`\`\`javascript\r
import Exif from "exif-js"; // 图片信息识别库，用于识别方向信息\r
\r
const compress = (file, result) =&gt; {\r
  // 压缩图片\r
  const orientation = Exif...`,tags:["JavaScript"]},{text:"macOS 常用笔记",link:"/docs/os/macos-faq",date:1559321424e3,recommend:"",content:`

# macOS 常用笔记

&gt; 偏爱 Linux 的我居然还是投向了 macOS

## MacBook Pro 双显卡切换命令

\`\`\`bash
sudo pmset -a GPUSwitch 0

## 0 - 强制使用核显
## 1 - 强制使用独显（相当于在偏好设置-效能 里去掉自动切换显卡这个选项）
## 2 - 自动切换显卡
\`\`\`

## 设置允许所有来源安装

\`\`\`bash
...`,tags:["mac"]},{text:"针对 WebPack 多核利用率低的现状的优化",link:"/docs/frontend/tool/webpack-multi-cores-optmise",date:155921598e4,recommend:"",content:`\r
\r
# 针对 WebPack 多核利用率低的现状的优化\r
\r
## HappyPack\r
\r
happypack 的处理思路是将原有的 webpack 对 loader 的执行过程从单一进程的形式扩展多进程模式，\r
原本的流程保持不变，这样可以在不修改原有配置的基础上来完成对编译过程的优化，具体配置如下（以 Vue 项目为例）：\r
\r
\`\`\`javascript\r
// webpack.bas...`,tags:["WebPack"]},{text:"Cordova 开发日记 08：与原生 Android 交互",link:"/docs/frontend/hybird/cordova-dev-note-08",date:15590592e5,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 08：与原生 Android 交互

&gt; 以下是记录 JS 调用 Native 的全过程

## 定义 Java Class

\`\`\`java
package com.junl.cordova;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org....`,tags:["JavaScript","Cordova"]},{text:"Android 问题笔记【持续更新】",link:"/docs/frontend/hybird/android-q-note",date:155869752e4,recommend:"",content:`\r
\r
# Android 问题笔记【持续更新】\r
\r
## /dev/kvm 设备权限被拒绝的问题\r
\r
在使用 AndroidStudio 时出现 \`/dev/kvm\` 设备权限被拒绝的问题，解决方案如下：\r
\r
\`\`\`bash\r
sudo chown wolfx /dev/kvm\r
\`\`\`\r
\r
wolfx 是我当前的登录名\r
\r
## Android Studio 报错显示 mips64e...`,tags:["Linux","Android","Cordova"]},{text:"踩坑：iOS 微信浏览器关闭键盘时页面不回弹",link:"/docs/frontend/css/ios-keyboard-scroll-bug",date:1558111824e3,recommend:"",content:`\r
\r
# 踩坑：iOS 微信浏览器关闭键盘时页面不回弹\r
\r
:::info\r
疑似 iOS 微信浏览器的 bug\r
:::\r
\r
## 监听 iOS 键盘事件\r
\r
\`\`\`javascript\r
document.body.addEventListener("focusin", () =&gt; {\r
  console.log("键盘弹起");\r
});\r
document.body.addEve...`,tags:["CSS","JavaScript"]},{text:"2 种 NodeJS 包管理工具的仓库和缓存配置笔记",link:"/docs/frontend/tool/node-pkg-manager-note",date:155782626e4,recommend:"",content:`\r
\r
# 2 种 NodeJS 包管理工具的仓库和缓存配置笔记\r
\r
## 2 种 NodeJS 包管理工具\r
\r
### NPM\r
\r
NPM 是 JavaScript 世界的包管理工具，并且是 Node.js 平台的默认包管理工具。\r
通过 npm 可以安装、共享、分发代码,管理项目依赖关系。\r
\r
### Yarn\r
\r
Yarn 是 Facebook 发布的，代替 NPM 的方案。目前最...`,tags:["NPM","Yarn"]},{text:"浏览器中那些容易混淆的宽高属性（MDN）",link:"/docs/frontend/html/the-width-in-browser",date:15577869e5,recommend:"",content:`

# 浏览器中那些容易混淆的宽高属性（MDN）

## Element.clientWidth

**MDN 定义如下：**

:::info
The \`Element.clientWidth\` property is zero for inline elements and elements with no CSS;
otherwise, it's the inner width of an ...`,tags:["JavaScript","HTML","CSS"]},{text:"用 javascript 统计字数，计数问题",link:"/docs/frontend/javascript/js-word-counter",date:155776926e4,recommend:"",content:`\r
\r
# 用 javascript 统计字数，计数问题\r
\r
&gt; 用 javascript 计算 length 时不管是中文还是英文，都记为 1, 但是有时候我们希望中文计算成 2.\r
\r
## 计数方式 1：通过判断 escape 后的长度来计算\r
\r
\`\`\`javascript\r
var str = "string";\r
var str_length = 0;\r
for (var i = 0...`,tags:["JavaScript"]},{text:"Linux traceroute 命令排查网络状况",link:"/docs/os/linux-traceroute",date:1542819024e3,recommend:"linux-cmd",content:"\n\n# Linux traceroute 命令排查网络状况\n\n通过 `traceroute` 我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。\n\n当然每次数据包由某一同样的出发点（`source`）到达某一同样的目的地(`destination`)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。\n\n`linux` 系统中，我们称之为 `traceroute`,在 `...",tags:["Linux"]},{text:"Linux CheckInstall 命令使用指南",link:"/docs/os/checkinstall-note",date:15409107e5,recommend:"",content:`\r
\r
# Linux CheckInstall 命令使用指南\r
\r
&gt; &lt;http://asic-linux.com.mx/~izto/checkinstall/&gt;\r
\r
CheckInstall 能跟踪由 \`make install\` 或类似命令安装的所有文件，并为这些文件创建 Slackware、RPM 或者 Debian 安装包，然后把它添加到已安装软件包数据库中，以便能简便的卸载或发布安...`,tags:["Linux"]},{text:"aria2 常用命令",link:"/docs/other/aria2-cmds",date:15408243e5,recommend:"",content:`

# aria2 常用命令

\`aria2\` 最强大之处在于可以伪造 \`cookie\` 校验，下载带有验证的文件。这里记录一些常用的命令：

\`-s, --split=N\` 下载分割数量

\`--referer=REFERER\` 引用页面

\`-i, --input-file=FILE\` 通过文件导入下载

\`-j, --max-concurrent-downloads=N\` 同时下载线程数量
...`,tags:[]},{text:"QT（C++）自学日记（长期更新）",link:"/docs/backend/qt-cpp-note",date:1538412624e3,recommend:"",content:`

# QT（C++）自学日记（长期更新）

&gt; 起点是为了补充 Linux 下的一些轮子，而且公司有个简单的服务器 GUI 管理系统要做，所以就自学了下，反正多学点总是好的。

## QStringList 类常用方法总结

从 \`QList&lt;QString&gt;\` 继承而来，它提供快速索引为基础的接入以及快速插入和清除
其成员函数用于操作这个字符串列表如

- \`append()\`
- \`inse...`,tags:["QT","CPP"]},{text:"CSS nth-child 详解",link:"/docs/frontend/css/css-nth-child",date:1537030224e3,recommend:"",content:"\r\n\r\n# CSS nth-child 详解\r\n\r\n举个例子：\r\n\r\n```css\r\nul li:nth-child(3n + 3) {\r\n  color: #ccc;\r\n}\r\n```\r\n\r\n总的来说 `nth-child()` 圆括号里面支持两个关键词：`even` 与 `odd`。他们应该很明显的，`even` 选择偶数标签，如第 2、第 4、第 6 等等。`odd` 选择奇数标签，如第 1，...",tags:["CSS"]},{text:"JS 用巧妙的方式实现复制内容到剪贴板",link:"/docs/frontend/javascript/js-copy-to-clipboard",date:1536180624e3,recommend:"",content:`\r
\r
# JS 用巧妙的方式实现复制内容到剪贴板\r
\r
## 利用隐藏的 textarea 实现\r
\r
\`\`\`javascript\r
export function copyToClipboard(text) {\r
  let textArea = document.createElement("textarea");\r
  textArea.style.position = "fixed";\r...`,tags:["JavaScript"]},{text:"react 和 vue 全局组件的实现方式",link:"/docs/frontend/mvvm/global-component-of-react-and-vue",date:1536166224e3,recommend:"",content:`\r
\r
# react 和 vue 全局组件的实现方式\r
\r
&gt; 有时候，我们需要将组件定义为全局组件，即组件在 HTML 根上，在任何地方都可以调用，比如 Alert 组件。\r
\r
## react 版\r
\r
\`\`\`jsx\r
import React from "react";\r
import ReactDOM from "react-dom";\r
import Alert from "./Al...`,tags:["Vue","React"]},{text:"使用 vue2-editor 遇到的问题",link:"/docs/frontend/mvvm/vue2-editor-note",date:1535907024e3,recommend:"",content:`\r
\r
# 使用 vue2-editor 遇到的问题\r
\r
## 自定义图片上传\r
\r
\`vue2-editor\` 是个不错的富文本编辑器，但是美中不足的是他把图片全部作为 BASE64 上传了，但我们一般是存 URL，这有利于数据库优化和异步加载，所以才自己包装了一下。\r
\r
关于文件异步上传，可以看我另一篇文章：&lt;https://wolfx.cn/html5-file-api/&gt;\r
\r
包装如...`,tags:["Vue"]},{text:"mongodb 使用笔记",link:"/docs/database/mongodb-note",date:1535215824e3,recommend:"",content:`

# mongodb 使用笔记

## linux 下安装 mongodb

下载二进制文件后，终端输入：

\`\`\`bash
## 不使用配制文件启动
./bin/mongod -auth --dbpath=/data/mongodb/data --logpath=/data/mongodb/logs --logappend --port=27017 --fork
\`\`\`

### 补充

官方...`,tags:["JavaScript","NodeJS"]},{text:"移动端 CSS 适配笔记",link:"/docs/frontend/css/mobile-css-compatible",date:1533228624e3,recommend:"",content:`\r
\r
# 移动端 CSS 适配笔记\r
\r
## 红米手机 1 - 圆角外背景色溢出\r
\r
当我们在做手机 app 开发的时候常常会用到 Webview 模式，ui 部分全部用 html 和 css 来实现。\r
\r
遇到一个问题，对一个 dom 元素设置了圆角 \`border-radius:10px;background:#fff\`。\r
在红米下，四个圆角外面会溢出白色的背景。蛋疼。\r
\r
解决方...`,tags:["CSS"]},{text:"用 nodejs 爬虫获取一个 gb2312 编码的网站的 2 个坑",link:"/docs/nodejs/nodejs-spider-for-gb2312",date:1532969424e3,recommend:"",content:'\r\n\r\n# 用 nodejs 爬虫获取一个 gb2312 编码的网站的 2 个坑\r\n\r\n第一，获取的 `html` 解析问题，由于 `nodejs` 内部使用 `utf-8`，需要将获取的 `html` 转码，使用 `iconv.decode(body, "gb2312")` 完成。\r\n\r\n第二，由于站点使用的是 `gb2312`，`post` 提交也需要用 `gb2312` 进行 `urlenc...',tags:["JavaScript","NodeJS","Spider"]},{text:"常用正则校验整理",link:"/docs/frontend/javascript/regexps-for-you",date:1531155024e3,recommend:"",content:`\r
\r
# 常用正则校验整理\r
\r
\`\`\`javascript\r
var RegExps = {\r
  Email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/, // 电子邮箱\r
  Mobile: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9...`,tags:["JavaScript"]},{text:"CSS 的结界 BFC",link:"/docs/frontend/css/css-bfc",date:15262458e5,recommend:"",content:`\r
\r
# CSS 的结界 BFC\r
\r
## BFC 的定义\r
\r
BFC 全称 \`block formatting context\`，中文为"块级格式化上下文"。BFC 的表现原则为：如果一个元素具有 BFC，那么它的内部子元素再怎么翻江倒海，都不会影响外部的元素。因此，BFC 元素是不可能发生 margin 重叠的，另外，BFC 元素也可以用来清除浮动的影响。\r
\r
那么满足什么条件才会有 ...`,tags:["CSS"]},{text:"CentOS 7 FAQ",link:"/docs/os/centos-7-faq",date:15261594e5,recommend:"CentOS",content:`

# CentOS 7 FAQ

&gt; 本来一直用的 ArchLinux，不过 Arch 其实不适合作为服务器使用，因为其滚动更新的特性使得服务器不稳定。

## CentOS 如何安装最新版本的 GCC 编译器

默认没做任何设置的情况下，yum 安装的 GCC 版本比较陈旧。如果想安装较新的版本，需要如下操作：

### GCC 4.9 安装

\`\`\`bash
yum install cent...`,tags:["Linux"]},{text:"记一个 CentOS 6 升 7",link:"/docs/os/centos-6-to-7",date:15261594e5,recommend:"CentOS",content:`

# 记一个 CentOS 6 升 7

## 1. 查看下当前的系统版本

\`\`\`bash
cat /etc/redhat-release
\`\`\`

## 2. 配置更新源

\`\`\`bash
vi /etc/yum.repos.d/upgrade.repo
\`\`\`

\`\`\`ini
[upgrade]name=upgrade
baseurl=https://buildlogs.centos.or...`,tags:["Linux"]},{text:"27 行 nodejs 实现请求转发",link:"/docs/nodejs/nodejs-http-proxy",date:15259866e5,recommend:"",content:`\r
\r
# 27 行 nodejs 实现请求转发\r
\r
&gt; 作为转发请求用的中间件，简单实用。比如做前后端分离开发的时候不需要后端实现 CORS 了。\r
\r
\`\`\`javascript\r
const http = require("http");\r
const url = require("url");\r
http\r
  .createServer((request, response) =&gt; {...`,tags:["JavaScript","NodeJS"]},{text:"区块链学习：nodejs 实现一个基本区块链",link:"/docs/nodejs/nodejs-blockchain",date:15257274e5,recommend:"",content:`\r
\r
# 区块链学习：nodejs 实现一个基本区块链\r
\r
区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。所谓共识机制是区块链系统中实现不同节点之间建立信任、获取权益的数学算法 。\r
\r
区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中...`,tags:["JavaScript","NodeJS","Blockchain"]},{text:"nodejs 递归读取目录下所有文件的路径",link:"/docs/nodejs/nodejs-read-file-list",date:15253818e5,recommend:"",content:`

# nodejs 递归读取目录下所有文件的路径

## 方式一：递归

用了递归，没有目录级数限制，文件操作会经常用到这样的函数，记录以便复用。

\`\`\`javascript
function readFileList(path, filesList = []) {
  const files = fs.readdirSync(path);
  files.forEach((itm, inde...`,tags:["JavaScript","NodeJS"]},{text:"用 NodeJS 写 CLI",link:"/docs/nodejs/node-cli-framework",date:1525366224e3,recommend:"",content:`

# 用 NodeJS 写 CLI

&gt; 关于执行脚本，肯定会想到 shell 脚本，借助于存量庞大的资源储备，生产力很不错。
&gt; 但上手难度大，语法略显逆天，也是不争的事实。如果可以使用 javascript 来写脚本，对于前端工程师来说可谓减轻不少工作量。

## 开发 CLI

CLI 的开发最开始过程与普通的前端项目相同，需要一个入口文件 command.js 和配置文件 package...`,tags:["JavaScript","NodeJS"]},{text:"自定义浏览器滚动条的样式",link:"/docs/frontend/css/custom-scrollbar",date:1525199412e3,recommend:"",content:`

# 自定义浏览器滚动条的样式

:::info
前段时间，到网上找素材时，看到了一个很个性的滚动条式，打开 Chrome 的调试工具看了一下，发现不是用 JavaScript 来模拟实现的，觉得有必要折腾一下。于是在各大浏览器中对比了一下，发现只用 Chrome 适用，也就是说这个用的是 Chrome 的私有 CSS 属性。便百之谷之后，发现原来不仅仅只用 Chrome，其它的浏览器在不同程度...`,tags:["CSS"]},{text:"修改火狐默认的 DNS 缓存时间",link:"/docs/backend/set-ff-dns-cache",date:1522842024e3,recommend:"",content:`\r
\r
# 修改火狐默认的 DNS 缓存时间\r
\r
Firefox 有 DNS 缓存功能，但是默认缓存时间只有 1 分钟，可以通过修改该默认值加快 DNS 解析速度。\r
\r
输入：\`about:config\`\r
\r
修改如下的值\r
\r
![alt](https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/set-ff-dns-cache/6efc39...`,tags:["Browser"]},{text:"MySQL 的一些常用 SQL 集合",link:"/docs/database/mysql-sql-adv-guide",date:1521805224e3,recommend:"",content:`

# MySQL 的一些常用 SQL 集合

## 简单描述表结构，字段类型

显示表结构，字段类型，主键，是否为空等属性，但不显示外键。

\`\`\`sql
desc tabl_name;
\`\`\`

## 查询数据库的外键关系

你可以通过 \`INFORMATION_SCHEMA.KEY_COLUMN_USAGE\` 表来查看。

\`\`\`sql
select * from INFORMATION_S...`,tags:["MySQL"]},{text:"使用 react 脚手架 create-react-app 创建项目后的几个优化",link:"/docs/frontend/mvvm/some-optimize-after-create-react-app",date:15208529e5,recommend:"",content:`\r
\r
# 使用 react 脚手架 create-react-app 创建项目后的几个优化\r
\r
## 安装\r
\r
\`\`\`bash\r
npm install -g create-react-app\r
\`\`\`\r
\r
## 创建项目\r
\r
\`\`\`bash\r
create-react-app demo\r
\`\`\`\r
\r
## 开启自主配置\r
\r
执行 \`yarn eject\` 转换到可自主配置的模式\r
...`,tags:["JavaScript","React","Redux"]},{text:"JS 监听微信、支付宝等移动 app 及浏览器的返回、后退、上一页按钮的事件方法",link:"/docs/frontend/javascript/js-event-popstate",date:1520700624e3,recommend:"",content:`\r
\r
# JS 监听微信、支付宝等移动 app 及浏览器的返回、后退、上一页按钮的事件方法\r
\r
返回、后退、上一页按钮点击监听实现代码：\r
\r
\`\`\`javascript\r
window.addEventListener(\r
  "popstate",\r
  function (e) {\r
    alert("我监听到了浏览器的返回按钮事件啦"); // 根据自己的需求实现自己的功能\r
  ...`,tags:["JavaScript"]},{text:"Google Puppeteer 入门",link:"/docs/nodejs/puppeteer-start-guide",date:1520355024e3,recommend:"",content:`\r
\r
# Google Puppeteer 入门\r
\r
&gt; puppeteer 翻译是操纵木偶的人，利用这个工具，我们能做一个操纵页面的人。\r
&gt; puppeteer 是一个 nodejs 的库，支持调用 Chrome 的 API 来操纵 Web，相比较 Selenium 或是 PhantomJs,\r
&gt; 它最大的特点就是它的操作 Dom 可以完全在内存中进行模拟既在 V8 引擎中处理而不打开浏...`,tags:["Puppeteer","NodeJS","JavaScript"]},{text:"简单实现异步加载 JavaScript",link:"/docs/frontend/javascript/load-js-async",date:1520355024e3,recommend:"",content:`\r
\r
# 简单实现异步加载 JavaScript\r
\r
&gt; 仅作为实用代码片段记录\r
\r
\`\`\`javascript\r
/**\r
 * 异步加载 JS 函数\r
 * 实现思想：动态创建 script 标签，插入到文档中，然后执行 callback 函数\r
 * url 为请求的 JS 文件的地址，callback 为请求成功时的回调函数\r
 */\r
function loadScript(url...`,tags:["JavaScript"]},{text:"NodeJS NVM 使用笔记",link:"/docs/nodejs/nodejs-nvm",date:1518022224e3,recommend:"",content:`\r
\r
# NodeJS NVM 使用笔记\r
\r
源码地址：&lt;https://github.com/nvm-sh/nvm&gt;\r
\r
## 安装\r
\r
\`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\`\r
\r
## 刷新环境变量\r
\r
\`source /root/.bashrc\`\r
\r
##...`,tags:["JavaScript","NodeJS"]},{text:"__proto__/prototype的区别，typeof/instanceof的区别",link:"/docs/frontend/javascript/the-diff-of-similar-objects-in-js",date:1517503824e3,recommend:"",content:`

# __proto__/prototype的区别，typeof/instanceof的区别

&gt; 合并旧文《js 中\`__proto__\`和 prototype 的区别和关系？》、《JS 中 typeof 与 instanceof 的区别》

## \`__proto__\` 和 prototype 的区别和关系

初学 javascript 的时候也跟题主一样搞不清楚，自己好好总结了一下：

#...`,tags:["JavaScript"]},{text:"JavaScript 中的二进制",link:"/docs/frontend/javascript/es6-arraybuffer",date:1517503824e3,recommend:"",content:`\r
\r
# JavaScript 中的二进制\r
\r
## JavaScript 中的 TypedArray 与 Buffer\r
\r
### TypedArray\r
\r
这是 ES2015(又称 ES6) 中新出的一个接口，不能直接被实例化。\r
\r
因为这个接口就是一个抽象接口，就像 Java 中的抽象接口一样，是不能被实例化的，只能实例化实现该接口的子类。 Uint8Array  就是实现 Typ...`,tags:["JavaScript"]},{text:"利用 JS 实现的根据经纬度计算地球上两点之间的距离",link:"/docs/frontend/javascript/js-geo-distance",date:1517331024e3,recommend:"",content:`\r
\r
# 利用 JS 实现的根据经纬度计算地球上两点之间的距离\r
\r
计算地球表面两点间的距离大概有两种办法。\r
\r
第一种是默认地球是一个光滑的球面，然后计算任意两点间的距离，这个距离叫做大圆距离(The Great Circle Distance)。\r
\r
\`\`\`javascript\r
var EARTH_RADIUS = 6378137.0; // 单位M\r
var PI = Math.P...`,tags:["JavaScript"]},{text:"Redis 开启远程访问",link:"/docs/backend/redis-remote-access",date:1516812624e3,recommend:"",content:"\r\n\r\n# Redis 开启远程访问\r\n\r\n`Redis` 默认只允许本地访问，要使 `Redis` 可以远程访问可以修改 `/etc/redis/redis.conf`\r\n\r\n打开 `redis.conf` 文件在 `NETWORK` 部分有说明\r\n\r\n```bash\r\n################################### NETWORK ###################...",tags:["Redis"]},{text:"JS 全角半角转换",link:"/docs/frontend/javascript/js-chgcase",date:1516726224e3,recommend:"",content:`\r
\r
# JS 全角半角转换\r
\r
\`\`\`javascript\r
// iCase: 0 全到半，1 半到全，其他不转化\r
function chgCase(sStr, iCase) {\r
  if (typeof sStr != "string" || sStr.length &lt;= 0 || !(iCase === 0 || iCase == 1)) {\r
    return sStr;\r
...`,tags:["JavaScript"]},{text:"JS 金额大写转换",link:"/docs/frontend/javascript/js-chinese-num-upper-case",date:1516639824e3,recommend:"",content:`\r
\r
# JS 金额大写转换\r
\r
国内常用大写中文数字来表示金额，所以做了一个转换算法。\r
\r
\`\`\`javascript\r
function transform(tranvalue) {\r
  var dw2 = ["", "万", "亿"]; // 大单位\r
  var dw1 = ["拾", "佰", "仟"]; // 小单位\r
  var dw = ["零", "壹", "贰", "叁...`,tags:["JavaScript"]},{text:"CSS3 text-overflow 字符串截取",link:"/docs/frontend/css/css-text-overflow",date:1516639824e3,recommend:"",content:`\r
\r
# CSS3 text-overflow 字符串截取\r
\r
## WebKit 浏览器\r
\r
### 截取 1 行\r
\r
\`\`\`css\r
.text-cut {\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
  white-space: nowrap;\r
}\r
\`\`\`\r
\r
### 截取 2 行\r
\r
\`\`\`css\r
.text-cut...`,tags:["CSS"]},{text:"Docker 笔记(部署)",link:"/docs/backend/docker-note",date:1516553424e3,recommend:"docker-note",content:`

# Docker 笔记(部署)

## 镜像加速

编辑 \`/etc/default/docker\` 文件

CentOS 系统的配置文件是 \`/etc/docker/daemon.json\`
Ubuntu 系统的配置文件是 \`/etc/default/docker\`

\`\`\`json
{
  "debug": true,
  "experimental": true,
  "registry...`,tags:["Docker"]},{text:"让页面的字体变得更清晰（css 实现）",link:"/docs/frontend/css/webkit-font-smoothing",date:1516380624e3,recommend:"",content:`\r
\r
# 让页面的字体变得更清晰（css 实现）\r
\r
## css3 属性 -webkit-font-smoothing\r
\r
对字体进行抗锯齿渲染可以使字体看起来会更清晰舒服。在图标字体成为一种趋势的今天，抗锯齿渲染使用也越来越多。\`font-smoothing\` 是非标准的 CSS 定义。它被列入标准规范的草案中，后由于某些原因从 web 标准中被移除了。但是，我们可以用以下两种定义进行抗...`,tags:["CSS"]},{text:"图解 JavaScript 的参数传递",link:"/docs/frontend/javascript/js-params",date:1516121424e3,recommend:"",content:`\r
\r
# 图解 JavaScript 的参数传递\r
\r
&gt; &lt;https://segmentfault.com/a/1190000012672374&gt;\r
\r
## 参数到底如何传递？\r
\r
借用红宝书的一句话：\r
\r
&gt; ECMAScript 中所有函数的参数都是按值传递的\r
\r
这个值如果是简单类型，那么就是其本身。如果是引用类型也就是对象传递的就是指向这个对象的地址。故我们可以认为参数传递全...`,tags:["JavaScript"]},{text:"用 d3.js 做一个简单的柱状",link:"/docs/frontend/canvas/d3-simple-custom-bar",date:1515775824e3,recommend:"",content:`\r
\r
# 用 d3.js 做一个简单的柱状\r
\r
公司需要做一个和设计稿相同的图表，但是现有的 \`echarts\` 等图标库没有类似的东西，所以自己做了一个。\r
\r
由于上次用 \`oCanvas\` 做的有性能问题，这次用 d3.js（svg）又重做了一遍。上次的文章可以看**自定义 oCanvas 图形 - 自制柱状图**。\r
\r
## 引用 d3.js 框架\r
\r
\`\`\`html\r
&lt;scri...`,tags:["D3","JavaScript","SVG"]},{text:"Canvas 笔记",link:"/docs/frontend/canvas/canvas-note",date:1515603024e3,recommend:"canvas",content:`

# Canvas 笔记

## HTML5 画布(Canvas)元素

\`\`\`html
&lt;canvas id="myCanvas" width="500" height="300"&gt;&lt;/canvas&gt;
\`\`\`

### 浏览器不支持画布(canvas)时的备案

\`\`\`html
&lt;canvas id="myCanvas" width="500" height="300"&gt; your brows...`,tags:["Canvas"]},{text:"JS 生成 UUID/GUID",link:"/docs/frontend/javascript/gen-uuid-by-js",date:1514566224e3,recommend:"",content:`\r
\r
# JS 生成 UUID/GUID\r
\r
全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 。\r
\r
GUID 是一种由算法生成的二进制长度为 128 位的数字标识符。GUID 的格式为 \`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\`，其中的 x 是 ...`,tags:["JavaScript"]},{text:"通俗的方式理解 RxJS",link:"/docs/frontend/javascript/js-rxjs-note",date:1513183824e3,recommend:"",content:`\r
\r
# 通俗的方式理解 RxJS\r
\r
&gt; 源：&lt;https://segmentfault.com/a/1190000008464065&gt;\r
\r
## 序言\r
\r
今早看民工叔的文章的时候， 发现对 Rxjs 所知甚少， 于是去官方看了下教程， 整理出一些东西， 写成此文。\r
Rxjs 据说会在 2017 年流行起来， 因为其处理异步逻辑，数据流， 事件非常擅长。\r
但是其学习曲线相比 Pro...`,tags:["JavaScript"]},{text:"Manjaro 安装后的一些优化（待添加）",link:"/docs/os/manjaro-optimize",date:1511196624e3,recommend:"",content:`\r
\r
# Manjaro 安装后的一些优化（待添加）\r
\r
## 添加 archlinuxCN 源\r
\r
\`\`\`bash\r
sudo nano /etc/pacman.conf\r
\`\`\`\r
\r
在文件底部加入如下几行\r
\r
\`\`\`bash\r
[archlinuxcn]\r
SigLevel = Optional TrustAll\r
Server = http://repo.archlinuxcn....`,tags:["Manjaro","Linux"]},{text:"如何在微信小程序中使用 ES7 特性 async/await",link:"/docs/frontend/hybird/use-async-await-in-weapps",date:1510678224e3,recommend:"",content:"\r\n\r\n# 如何在微信小程序中使用 ES7 特性 async/await\r\n\r\n## 引入 generator 支撑库\r\n\r\n经过 Babel 转译后的代码，会把 `aysnc/await` 的功能通过类似 `co` 库的方式来实现，即要使用到 generator，所以，和我们使用 `co` 的时候一样，需要依赖一个 `regeneratorRuntime`，才能支持 `generator` 特性...",tags:["Wechat"]},{text:"利用 PXE 远程启动 ISO",link:"/docs/os/pxe-guide",date:1508950224e3,recommend:"",content:`\r
\r
# 利用 PXE 远程启动 ISO\r
\r
## PXE\r
\r
PXE(preboot execute environment，预启动执行环境) 是由 Intel 公司开发的最新技术，工作于 Client/Server 的网络模式，支持工作站通过网络从远端服务器下载映像，并由此支持通过网络启动操作系统，在启动过程中，终端要求服务器分配 IP 地址，再用 TFTP（trivial file t...`,tags:["PXE"]},{text:"React-Navigation 使用笔记",link:"/docs/frontend/hybird/react-navigation-note",date:1508950224e3,recommend:"React-Native",content:"\n\n# React-Navigation 使用笔记\n\n## React-Navigation 之自定义 Header\n\n`React-Native` 的新版本取消了 `navigator`，使用了新的 `React-Navigation` 组件。这个组件非常强大。\n\n但是有的时候我们需要自定义 `Header`，又不想在每个 `View` 上附带 `Header`，而是想要实现原生的效果（即 `H...",tags:["React-Native","React"]},{text:"SSH 免密登录",link:"/docs/os/ssh-login-without-password",date:1508518224e3,recommend:"",content:`\r
\r
# SSH 免密登录\r
\r
\`\`\`bash\r
ssh-keygen -t rsa\r
ssh-copy-id &lt;user@IP&gt;\r
\`\`\`\r
`,tags:["Linux"]},{text:"Windows 远程桌面报错：“由于没有远程桌面授权服务器可以提供许可证”",link:"/docs/os/remote-desktop-error-on-win",date:1508518224e3,recommend:"",content:`\r
\r
# Windows 远程桌面报错：“由于没有远程桌面授权服务器可以提供许可证”\r
\r
## 问题现象\r
\r
远程桌面客户端连接 Windows Server 服务器，输入正确的用户名和密码提交后，出现如下错误信息，无法正常远程连接：\r
\r
![title](https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/remote-desktop-...`,tags:["Windows"]},{text:"React-Native 搭建开发环境",link:"/docs/frontend/hybird/build-rn-dev-env",date:1507827024e3,recommend:"",content:`\r
\r
# React-Native 搭建开发环境\r
\r
## 安装 RN 脚手架和 yarn：\`npm i react-native-cli yarn -g\`\r
\r
## 创建项目：\`react-native init demo\`\r
\r
如果 init 太慢，可以使用淘宝的镜像\r
\r
\`\`\`bash\r
// 查看下载源\r
yarn config get registry\r
// 更换为淘宝源\r
...`,tags:["React","React-Native","Redux"]},{text:"H5Plus/MUI FAQ",link:"/docs/frontend/hybird/h5plus-and-mui-faq",date:150764064e4,recommend:"",content:`\r
\r
# H5Plus/MUI FAQ\r
\r
## 指定应用可运行的 Android 最低版本\r
\r
&lt;http://ask.dcloud.net.cn/article/193&gt;\r
\r
## 获取本地图片的 BASE64 编码\r
\r
这里的 zoomImage() 是我自己写的压缩图片的方法，忽略就好\r
\r
\`\`\`javascript\r
plus.gallery.pick(\r
  functio...`,tags:["H5Plus","MUI"]},{text:"如何隐藏 Tomcat 命令窗口",link:"/docs/backend/how-to-hide-tomcat-window",date:1505731884e3,recommend:"",content:`\r
\r
# 如何隐藏 Tomcat 命令窗口\r
\r
## 修改 Tomcat 中的文件参数，达到隐藏目的：\r
\r
\`TOMCAT_HOME\\bin\\setclasspath.bat\`\r
在文件的底部找到以下内容：\r
\r
\`\`\`bash\r
set _RUNJAVA="%JRE_HOME%\\bin\\java"\r
\`\`\`\r
\r
并修改为：\r
\r
\`\`\`bash\r
set _RUNJAVA="%JRE_H...`,tags:["Tomcat"]},{text:"Linux 使用自带的 tar 实现增量备份",link:"/docs/os/linux-tar-backup",date:1505062224e3,recommend:"",content:`\r
\r
# Linux 使用自带的 tar 实现增量备份\r
\r
## 增量备份的方式\r
\r
利用 \`tar -g\` 参数，在第一次备份时候生成时间戳文件，里面包含指定备份目录下的所有文件的一个时间戳，下次增量备份，tar 会利用时间戳文件去比较，只有那些内容在这段时间有修改的文件，才会被打包。\r
\r
\`\`\`bash\r
## 先执行完整备份\r
cd /backup\r
tar -g snapshot ...`,tags:["Linux"]},{text:"Linux 常用（通用）命令整理",link:"/docs/os/linux-cmds",date:1505062224e3,recommend:"linux-cmd",content:`

# Linux 常用（通用）命令整理

## 系统信息

\`\`\`bash
arch ## 显示机器的处理器架构 (1)
uname -m ## 显示机器的处理器架构 (2)
uname -r ## 显示正在使用的内核版本
dmidecode -q ## 显示硬件系统部件 - (SMBIOS / DMI)
hdparm -i /dev/hda ## 罗列一个磁盘的架构特性
hdparm -tT ...`,tags:["Linux"]},{text:"node.js pm2 的使用",link:"/docs/nodejs/node-pm2",date:15024846e5,recommend:"",content:`\r
\r
# node.js pm2 的使用\r
\r
下面是项目的 package.json 文件部分代码：\r
\r
## 查看进程列表\r
\r
\`\`\`bash\r
pm2 ls\r
\`\`\`\r
\r
## 重启进程\r
\r
\`\`\`bash\r
pm2 restart &lt;name或id&gt;\r
\`\`\`\r
\r
## 停止进程\r
\r
\`\`\`bash\r
pm2 stop &lt;name或id&gt;\r
\`\`\`\r
\r
## 删除进程\r
\r...`,tags:["JavaScript","NodeJS"]},{text:"使用 Redirector 插件解决 googleapis 公共库加载的问题",link:"/docs/other/use-redirector-plugin",date:1502362284e3,recommend:"",content:`

# 使用 Redirector 插件解决 googleapis 公共库加载的问题

\`Chrome\` 或者 \`Firefox\`，下载 \`Redirector\` 插件，导入下面的配置。

\`\`\`json
{
  "createdBy": "Redirector v3.1.0",
  "createdAt": "2017-08-10T05:57:44.058Z",
  "redirects": [...`,tags:["Browser"]},{text:"Nginx 笔记",link:"/docs/backend/nginx-note",date:1500807084e3,recommend:"",content:`\r
\r
# Nginx 笔记\r
\r
## 指令\r
\r
Nginx 重新读取配置的命令 \`nginx -s reload\`\r
\r
## gzip 压缩\r
\r
\`\`\`nginx\r
http {\r
  gzip  on;\r
  gzip_types application/javascript application/json text/css text/xml font/woff;\r
  gzip_d...`,tags:["HTTP","HTTPS","Proxy","Nginx"]},{text:"修改 Tomcat 应用日志默认编码格式",link:"/docs/backend/how-to-change-tomcat-log-default-encode",date:1500634284e3,recommend:"",content:`

# 修改 Tomcat 应用日志默认编码格式

## 前言

今天开发跟我说 \`tomcat\` 日志中的中文不能正常显示，根据以往的经验，我觉得可能跟服务器的编码有关，于是尝试各种方法，但还是没能解决问题。

后来我突然想到会不会跟 \`tomcat\` 的设置有关呢，于是在网上搜索了一遍，最后看到这篇文章并解决了问题。

感谢：&lt;http://www.linuxidc.com/Linux/201...`,tags:["Tomcat"]},{text:"NodeJS 利用 tail 命令，动态读取日志",link:"/docs/nodejs/nodejs-exec-with-tail-exe",date:1500288684e3,recommend:"",content:`\r
\r
# NodeJS 利用 tail 命令，动态读取日志\r
\r
利用 exec 命令执行当前系统命令。\r
Windows 下需要下载 tail.exe，Linux 和 mac 下也有 tail 命令。\r
\r
注：本脚本是 electron 环境，用到了 react。\r
如果是纯 node.js，无视我回调中的脚本吧。\r
\r
\`\`\`javascript\r
const { exec } = req...`,tags:["JavaScript","NodeJS"]},{text:"NodeJS 判断端口是否被占用",link:"/docs/nodejs/watch-port-by-nodejs",date:1499856684e3,recommend:"",content:`\r
\r
# NodeJS 判断端口是否被占用\r
\r
\`\`\`javascript\r
const portIsOccupied = (port) =&gt; {\r
  // 创建服务并监听该端口\r
  const server = net.createServer().listen(port);\r
  server.on("listening", () =&gt; {\r
    // 执行这块代码说明端口未被占用...`,tags:["JavaScript","NodeJS"]},{text:"加速 build.gradle 的下载速度",link:"/docs/backend/accelerate-build-gradle-net-speed-in-china",date:1499273424e3,recommend:"",content:`\r
\r
# 加速 build.gradle 的下载速度\r
\r
找到 \`build.gradle\` 文件，修改成如下\r
\r
\`\`\`bash\r
// Top-level build file where you can add configuration options common to all sub-projects/modules.\r
\r
buildscript {\r
    reposito...`,tags:["Gradle"]},{text:"ArchLinux 实用 wiki 汇总",link:"/docs/os/arch-linux-faq-wiki",date:1498841424e3,recommend:"",content:`

# ArchLinux 实用 wiki 汇总

[实用中文软件源](http://mirrors.163.com/.help/archlinux-cn.html)

[Installation guide](https://wiki.archlinux.org/index.php/Installation_guide)

[General recommendations](https://wi...`,tags:["Linux"]},{text:"Ubuntu（基于 elementary）问题汇总",link:"/docs/os/ubuntu-faq",date:1498755024e3,recommend:"",content:`\r
\r
# Ubuntu（基于 elementary）问题汇总\r
\r
## Ubuntu 无法找到 add-apt-repository 问题的解决方法\r
\r
需要 2 个包（elementary 默认不装）：\r
\r
\`\`\`bash\r
apt-get install python-software-properties software-properties-common\r
\`\`\`\r
\r
## 开...`,tags:["Linux"]},{text:"很有用的 Git 命令",link:"/docs/other/useful-git-cmds",date:1498582224e3,recommend:"",content:`

# 很有用的 Git 命令

::: info
迄今，我已经使用 \`Git\` 很长一段时间了，考虑分享一些不管你是团队开发还是个人项目，都受用的高级 \`git\` 命令。
:::

## 输出最后一次提交的改变

这个命令，我经常使用它 来发送其他没有使用 git 的人来检查或者集成所修改的。它会输出最近提交的修改内容到一个 zip 文件中。

\`\`\`bash
git archive -o .....`,tags:["Git"]},{text:"React 图片获取失败时能显示指定的默认图片",link:"/docs/frontend/mvvm/react-custom-img",date:1478019024e3,recommend:"",content:`\r
\r
# React 图片获取失败时能显示指定的默认图片\r
\r
\`\`\`jsx\r
import React from "react";\r
import ReactDOM from "react-dom";\r
/**\r
 * 图片加载失败就显示默认图片\r
 */\r
class Img extends React.Component {\r
  constructor(props) {\r
    sup...`,tags:["React"]},{text:"如何让 video 标签支持 hls/m3u8 视频流直播",link:"/docs/frontend/html/html5-m3u8",date:1476809424e3,recommend:"",content:"\r\n\r\n# 如何让 video 标签支持 hls/m3u8 视频流直播\r\n\r\n苹果的 `safari` 直接支持 `hls`。但是其他的浏览器却没有提供相应的支持。根据我的测试，`android` 手机的 `webview` 可以支持 `hls`，`PC` 上的 `chrome` 却不行，很令人费解。\r\n\r\n下面是 `videojs` 给出的一套 `hls` 解决方案：\r\n\r\n```html\r\n&lt;...",tags:["HTML"]},{text:"Gulp 常用插件及其使用",link:"/docs/frontend/tool/gulp-frequently-plugins",date:1476723024e3,recommend:"",content:`\r
\r
# Gulp 常用插件及其使用\r
\r
&gt; gulp 的插件数量虽然没有 grunt 那么多，但也可以说是应有尽有了，下面列举一些常用的插件。\r
\r
## 重命名\r
\r
使用 gulp-rename\r
安装：\`npm install --save-dev gulp-rename\`\r
用来重命名文件流中的文件。用 gulp.dest() 方法写入文件时，文件名使用的是文件流中的文件名，如果要想...`,tags:["Gulp"]},{text:"Linux 查看进程“打开”的文件或文件对应的进程及网络状态",link:"/docs/os/how-to-watch-the-file-running-state-on-linux",date:1476463824e3,recommend:"",content:`\r
\r
# Linux 查看进程“打开”的文件或文件对应的进程及网络状态\r
\r
## 查看进程“打开”的文件：\r
\r
\`pidof programe-name\`（获得想了解的进程 (programe-name) 的 PID) 或\`ps -aux|grep programe-name\`（获得想了解的进程 (programe-name) 的 PID) 找出进程的 PID\r
\r
\`cd /proc/$P...`,tags:["Linux"]},{text:"Windows 上如何查看端口占用情况",link:"/docs/os/how-to-watch-port-on-win",date:1476377424e3,recommend:"",content:`\r
\r
# Windows 上如何查看端口占用情况\r
\r
我们在启动应用的时候发现系统需要的端口被别的程序占用，如何知道谁占有了我们需要的端口，很多人都比较头疼，下面就介绍一种非常简单的方法，希望对大家有用\r
\r
假如我们需要确定谁占用了我们的 9050 端口\r
\r
在 windows 命令行窗口下执行：\r
\r
## 查看所有的端口占用情况\r
\r
\`\`\`bash\r
C:\\&gt;netstat -ano...`,tags:["Windows"]},{text:"pip3 怎样修改默认源",link:"/docs/backend/change-pip3-default-source",date:1476291024e3,recommend:"",content:`

# pip3 怎样修改默认源

修改源可以极大提升下载速度。

官方文档：
&lt;https://pip.pypa.io/en/latest/user_guide.html#configuration&gt;

\`windows\` 下 \`%HOME%\\pip\\pip.ini\`， 没有就自己创建一个。

::: info
You can set a custom path location for thi...`,tags:["Python"]},{text:"PHP 如何关闭 notice 级别的错误提示",link:"/docs/backend/close-notice-in-php",date:1475599824e3,recommend:"",content:`\r
\r
# PHP 如何关闭 notice 级别的错误提示\r
\r
## 方法 1\r
\r
在 \`php.ini\` 文件中改动 \`error_reporting\`\r
\r
改为：\r
\r
\`\`\`bash\r
error_reporting=E_ALL & ~E_NOTICE\r
\`\`\`\r
\r
## 方法 2\r
\r
如果你不能操作\`php.ini\`文件，你可以使用如下方法\r
\r
在你想禁止 \`notice\` 错...`,tags:["PHP"]},{text:"CreateJS 笔记",link:"/docs/frontend/javascript/createjs-note",date:1475513424e3,recommend:"",content:`\r
\r
# CreateJS 笔记\r
\r
&gt; A suite of Javascript libraries & tools for building rich, interactive experiences with HTML5.\r
\r
## EaselJS\r
\r
&lt;http://www.createjs.cc/src/docs/easeljs/classes/EaselJS.html&gt;\r
\r...`,tags:["JavaScript","CreateJS"]},{text:"JavaScript 合并区间的算法",link:"/docs/frontend/javascript/js-merge-region",date:1475340624e3,recommend:"",content:`\r
\r
# JavaScript 合并区间的算法\r
\r
举个例子：\r
有如下三个区间：\r
\r
\`\`\`json\r
[\r
    [1,100],\r
    [50,200],\r
    [300,400],\r
    ...  // 可以更多\r
]\r
\`\`\`\r
\r
现在需要一个算法来合并区间，合并之后是：\r
\r
\`\`\`json\r
[\r
    [1,200],\r
    [300,400],\r
  ...`,tags:["JavaScript"]},{text:"一些关于 Viewport 与 device-width 的东西",link:"/docs/frontend/html/html-viewport",date:1475167824e3,recommend:"",content:`\r
\r
# 一些关于 Viewport 与 device-width 的东西\r
\r
## CSS pixel 与 device pixels (css px 与 device px)\r
\r
首先了解下什么是 \`CSS pixels\`，什么是 \`device pixels\`；\r
\r
1.  \`CSS pixels\` 可以理解为 css 像素，是浏览器使用的抽象单位，主要用来在网页上绘制内容。也可以说...`,tags:["HTML"]},{text:"如何优雅地比较版本号",link:"/docs/frontend/javascript/js-compare-ver",date:1475081424e3,recommend:"",content:`\r
\r
# 如何优雅地比较版本号\r
\r
版本格式: \`xx.xx.xx\`, 位数不定\r
\r
\`\`\`javascript\r
/**\r
 * 比较版本号，如果v1&gt;v2则返回true，否则false\r
 * @param {Object} v1 服务端版本\r
 * @param {Object} v2 客户端实际版本\r
 */\r
function compareVer(v1, v2) {\r
  v1 ...`,tags:["JavaScript"]},{text:"Linux 中 Kill 进程的 N 种方法",link:"/docs/os/you-have-n-methods-to-kill-process-on-linux",date:1474995024e3,recommend:"",content:`

# Linux 中 Kill 进程的 N 种方法

## 常规篇：

首先，用 ps 查看进程，方法如下：

\`\`\`bash
$ ps -ef
……
smx       1822     1  0 11:38 ?        00:00:49 gnome-terminal
smx       1823  1822  0 11:38 ?        00:00:00 gnome-pty-he...`,tags:["Linux"]},{text:"解决 jquery.qrcode 中文识别问题",link:"/docs/frontend/javascript/jquery-qrcode-chinese-problem",date:1474908624e3,recommend:"",content:`

# 解决 jquery.qrcode 中文识别问题

## 用法

\`\`\`html
&lt;script src="//cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js"&gt;&lt;/script&gt;
\`\`\`

\`\`\`javascript
$("#容器ID").qrcode("文字"); //任意字符串
\`\`\`

## 识别中文

我们试验的时候发现...`,tags:["JavaScript"]},{text:"Linux 中 pip 安装步骤与使用详解",link:"/docs/os/install-pip-on-linux",date:1474822224e3,recommend:"",content:`\r
\r
# Linux 中 pip 安装步骤与使用详解\r
\r
## pip 下载安装\r
\r
### pip 下载\r
\r
代码如下\r
\r
\`\`\`bash\r
## wget "https://pypi.python.org/packages/source/p/pip/pip-1.5.4.tar.gz#md5=834b2904f92d46aaa333267fb1c922bb" --no-check-ce...`,tags:["Linux","Python"]},{text:"location.reload 与 location.replace 与 location.href",link:"/docs/frontend/javascript/reload-replace-and-href",date:1474649424e3,recommend:"",content:`\r
\r
# location.reload 与 location.replace 与 location.href\r
\r
## location.reload 与 location.replace\r
\r
在实际应用的时候，重新刷新页面的时候，我们通常使用： \`location.reload()\` 或者是 \`history.go(0)\` 来做。下面有一些相关的内容，大家看完了就会有更多的收获。\r
\r
...`,tags:["JavaScript"]},{text:"禁止别人以 iframe 加载你的页面",link:"/docs/frontend/html/disable-iframe-reference-your-website",date:1474476624e3,recommend:"",content:`\r
\r
# 禁止别人以 iframe 加载你的页面\r
\r
:::tip\r
如果页面不再 \`iframe\` 中，\`window.parent.location\` 的值是当前的 \`window.location\`\r
:::\r
\r
\`\`\`javascript\r
if (window.location !== window.parent.location) {\r
  window.parent.locat...`,tags:["HTML"]},{text:"JS 获取图片的 BASE64",link:"/docs/frontend/javascript/js-get-img-base64",date:1474390224e3,recommend:"",content:`\r
\r
# JS 获取图片的 BASE64\r
\r
&gt; source 参数是 \`&lt;input type="file" /&gt;\` 获取的文件。\r
\r
\`\`\`javascript\r
function getBase64(source, callback) {\r
  var file = source.files[0];\r
  if (window.FileReader) {\r
    var fr = n...`,tags:["JavaScript"]},{text:"JS 随机算法合集",link:"/docs/frontend/javascript/js-random-funcs",date:1474131024e3,recommend:"",content:`\r
\r
# JS 随机算法合集\r
\r
## JS 打乱数组算法\r
\r
\`\`\`javascript\r
function randArray(data) {\r
  // 获取数组长度\r
  var arrlen = data.length;\r
  // 创建数组 存放下标数\r
  var try1 = new Array();\r
  for (var i = 0; i &lt; arrlen; i++) {...`,tags:["JavaScript"]},{text:"javascript 深入理解 js 闭包",link:"/docs/frontend/javascript/js-closure",date:1473958224e3,recommend:"",content:`\r
\r
# javascript 深入理解 js 闭包\r
\r
## 一、变量的作用域\r
\r
要理解闭包，首先必须理解 Javascript 特殊的变量作用域。\r
\r
变量的作用域无非就是两种：全局变量和局部变量。\r
\r
Javascript 语言的特殊之处，就在于函数内部可以直接读取全局变量。\r
\r
\`\`\`javascript\r
var n = 999;\r
function f1() {\r
  a...`,tags:["JavaScript","HTML"]},{text:"利用 document.activeElement 获取焦点元素",link:"/docs/frontend/javascript/document-activeelement",date:1473871824e3,recommend:"",content:`\r
\r
# 利用 document.activeElement 获取焦点元素\r
\r
## document.activeElement\r
\r
\`document.activeElement\` 三大浏览器 (ie、firefox、chrome) 都支持，但，针对的对象不同，返回的值也不同。\r
\r
## IE：\r
\r
\`document.activeElement\` 可获得所有聚焦的元素，包括 inp...`,tags:["JavaScript","HTML"]},{text:"HTML5 Web Worker 的使用",link:"/docs/frontend/javascript/web-worker",date:1473612624e3,recommend:"",content:`\r
\r
# HTML5 Web Worker 的使用\r
\r
&gt; Web Workers 是 HTML5 提供的一个 javascript 多线程解决方案，我们可以将一些大计算量的代码交由 web Worker 运行而不冻结用户界面。\r
\r
## 一：如何使用 Worker\r
\r
Web Worker 的基本原理就是在当前 javascript 的主线程中，使用 Worker 类加载一个 javas...`,tags:["JavaScript"]},{text:"JS 另类方法高效实现 htmlencode() 与 htmldecode() 函数",link:"/docs/frontend/html/htmlencode-and-htmldecode",date:1473526224e3,recommend:"",content:`\r
\r
# JS 另类方法高效实现 htmlencode() 与 htmldecode() 函数\r
\r
\`\`\`javascript\r
function htmlEncode(str) {\r
  var div = document.createElement("div");\r
  var text = document.createTextNode(str);\r
  div.appendChild...`,tags:["HTML","JavaScript"]},{text:"HTML5 File API 实现带有进度提示的文件上传",link:"/docs/frontend/html/html5-file-api",date:1473180624e3,recommend:"",content:`\r
\r
# HTML5 File API 实现带有进度提示的文件上传\r
\r
:::info\r
Html5 终于解决了上传文件的同时显示文件上传进度的老问题。现在大部分的网站用 Flash 去实现这一功能，还有一些网站继续采用 Html \`&lt;form&gt; with enctype=multipart/form-data\`，但是需要修改服务器端可用才能显示给用户文件上传的进度。本质上你需要做的工作是在服...`,tags:["HTML"]},{text:"link 标签中 rel=* 的作用",link:"/docs/frontend/html/html-link-rel",date:1473094224e3,recommend:"",content:`\r
\r
# link 标签中 rel=\\* 的作用\r
\r
## rel 的作用\r
\r
Link 标签有两个作用：1. 定义文档与外部资源的关系；2. 是链接样式表。\r
\r
最常用的写法，即外链 CSS\r
\r
\`\`\`html\r
&lt;link rel="stylesheet" type="text/css" href="theme.css" /&gt;\r
\`\`\`\r
\r
rel 该属性规定当前文档与被链接文档之...`,tags:["HTML"]},{text:"用 linux 下常用命令 wget 进行整站下载（递归下载至本地）",link:"/docs/os/download-full-website-by-using-wget",date:1472921424e3,recommend:"",content:`\r
\r
# 用 linux 下常用命令 wget 进行整站下载（递归下载至本地）\r
\r
这个命令可以以递归的方式下载整站，并可以将下载的页面中的链接转换为本地链接。\r
\r
\`wget\` 加上参数之后，即可成为相当强大的下载工具。\r
\r
\`\`\`bash\r
wget -r -p -np -k http://xxx.com/abc/\r
\`\`\`\r
\r
\`\`\`bash\r
-r,  --recursive #...`,tags:["Linux"]},{text:"让您的 Chrome 浏览器允许本地环境支持 Ajax",link:"/docs/frontend/tool/support-ajax-on-fs-in-chrome",date:1472835024e3,recommend:"",content:`

# 让您的 Chrome 浏览器允许本地环境支持 Ajax

增加启动参数

\`--allow-file-access-from-files\`

或者

\`--disable-web-security\`

![](https://imgs-1251264059.cos.ap-chengdu.myqcloud.com/support-ajax-on-fs-in-chrome/c207956c-3...`,tags:["Browser"]},{text:"如何禁止 (表单) 用户名、密码自动填充",link:"/docs/frontend/html/disable-chrome-autocomplete",date:1472835024e3,recommend:"",content:`\r
\r
# 如何禁止 (表单) 用户名、密码自动填充\r
\r
HTML 登录表单经常被自动填充，有的甚至用户从来没有登录过的网站也会有自动填充，甚是让人讨厌。\r
\r
Mozilla developer documentation 建议使用表单设置属性 \`tautocomplete="off"\` 来阻止浏览器从 cache 获取数据填充登录表单。\r
\r
\`\`\`html\r
&lt;input type="te...`,tags:["HTML"]},{text:"如何禁止 iPhone Safari video 标签视频自动全屏？",link:"/docs/frontend/html/disable-video-full-screen-on-ios",date:1472748624e3,recommend:"",content:`\r
\r
# 如何禁止 iPhone Safari video 标签视频自动全屏？\r
\r
最近做一个移动端微信页面项目，在微信页面中有视频播放，但是需要禁止 IOS 的自动全屏播放（前提必须使用 video 标签）。\r
\r
\`\`\`html\r
&lt;video id="post" autoplay loop preload="auto"&gt;\r
  &lt;source src="http://segmentfau...`,tags:["HTML"]},{text:"WAP/HTML5 手机拨号链接 & 发送短信",link:"/docs/frontend/html/html5-tel",date:1472489424e3,recommend:"",content:`\r
\r
# WAP/HTML5 手机拨号链接 & 发送短信\r
\r
## 方法一：\r
\r
\`\`\`html\r
&lt;input name="phone_no" format="*m" value="13" /&gt;\r
&lt;do type="option" label="”呼出号”"&gt;\r
  &lt;go href="wtai://wp/mc;$(phone_no)" mce_href="wtai://wp/mc;$(...`,tags:["HTML"]},{text:"Linux zip 解压文件名乱码解决方法",link:"/docs/os/zip-unreadable-code-on-linux",date:1471884624e3,recommend:"",content:`\r
\r
# Linux zip 解压文件名乱码解决方法\r
\r
## 控制输出编码\r
\r
\`\`\`bash\r
unzip -O CP936 xxx.zip  ## 用 GBK, GB18030 也可以\r
\`\`\`\r
\r
## 安装 unar 解压\r
\r
\`\`\`bash\r
unar xxx.zip\r
\`\`\`\r
`,tags:["Linux"]},{text:"Linux 常用服务端环境配置攻略",link:"/docs/os/install-services-on-linux",date:1471711824e3,recommend:"",content:`\r
\r
# Linux 常用服务端环境配置攻略\r
\r
## FTP\r
\r
虽然 Linux 自带的 SFTP 很好用，但是有些特殊情况下依旧需要 FTP。\r
\r
### CentOS 安装 FTP\r
\r
\`rpm -qa |grep vsftpd\` 可以检测出是否安装了 vsftpd 软件\r
\r
如果没装 \`yum install vsftpd\` 来安装软件\r
\r
启动 ftp 命令 \`servi...`,tags:["Linux"]},{text:"Node.js md5 中文支持",link:"/docs/nodejs/nodejs-md5-support-chinese",date:1471107024e3,recommend:"",content:`\r
\r
# Node.js md5 中文支持\r
\r
遇到中文需要特殊处理\r
\r
\`\`\`javascript\r
var Buffer = require("buffer").Buffer;\r
var crypto = require("crypto");\r
\r
function md5(data) {\r
  var buf = new Buffer(data);\r
  var str = buf.t...`,tags:["JavaScript","NodeJS"]},{text:"node.js 定时任务：node-schedule 的使用",link:"/docs/nodejs/node-schedule",date:1470934224e3,recommend:"",content:`\r
\r
# node.js 定时任务：node-schedule 的使用\r
\r
## 安装\r
\r
\`\`\`bash\r
npm install node-schedule\r
\`\`\`\r
\r
## 使用方法\r
\r
### 确定时间\r
\r
\`\`\`javascript\r
// 例如：2014 年 2 月 14 日，15:40 执行\r
\r
var schedule = require("node-schedul...`,tags:["JavaScript","NodeJS"]},{text:"Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题",link:"/docs/frontend/hybird/cordova-dev-note-07",date:1470070224e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 07：cordova-plugin-baidu-geolocation 定位偏差问题

使用这个 SDK 定位出的经纬度，在百度地图中显示的位置有很大偏差。

经过研究，其实定位的地址是对的，只是百度使用的是自己的坐标系 (bd09ll), 而 SDK 默认是 gcj02.

\`\`\`javascript
var options = {
  enableHighAc...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 06：处理网络缓慢被墙的问题",link:"/docs/frontend/hybird/cordova-dev-note-06",date:1469379024e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 06：处理网络缓慢被墙的问题

## cordova: download gradle 超时解决办法

直接用迅雷下载：

&lt;http://services.gradle.org/distributions/gradle-2.2.1-all.zip&gt;

下完后放入 cordova 生成的默认下载目录：

Windows10 下在用户主文件夹下的 .gradle 中...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 05：白名单的配置和说明 Whitelist",link:"/docs/frontend/hybird/cordova-dev-note-05",date:1469292624e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 05：白名单的配置和说明 Whitelist

&gt; Whitelist 是 cordova 为了解决同源策略的方案，配置方法如下：

官网地址：

&lt;http://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/index.html&gt;

&lt;http://cordova.apache.org/docs...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 04：常用插件与使用",link:"/docs/frontend/hybird/cordova-dev-note-04",date:1469206224e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 04：常用插件与使用

## 常用插件推荐

### 1.cordova-plugin-camera 相机拍照

安装：

\`\`\`bash
cordova plugin add cordova-plugin-camera
\`\`\`

获取照片：

\`\`\`javascript
camera.getPicture(successCallback, errorCallba...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 03：如何生成安卓 apk-release 版",link:"/docs/frontend/hybird/cordova-dev-note-03",date:1469119824e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 03：如何生成安卓 apk-release 版

\`\`\`bash
cordova build android –release
\`\`\`

生成以下三个文件：

\`\`\`bash
XXXX-release.apk (signed, aligned)
XXXX-release-unaligned.apk (signed, unaligned)
XXXX-release-...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 02：navigation.app 和 event",link:"/docs/frontend/hybird/cordova-dev-note-02",date:1469033424e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 02：navigation.app 和 event

## navigator.app 对象

这是内置的一个对象，不需要插件

\`\`\`javascript
navigator.app.loadUrl(); // 加载 web 页面的应用程序中或者系统默认的浏览器中
navigator.app.cancelLoadUrl(); // 在 web 页面成功加载之前取...`,tags:["JavaScript","Cordova"]},{text:"Cordova 开发日记 01：环境部署",link:"/docs/frontend/hybird/cordova-dev-note-01",date:1468947024e3,recommend:"cordova-dev-note",content:`

# Cordova 开发日记 01：环境部署

## 安装部署

\`\`\`bash
npm install -g cordova
cordova create MyApp
cd MyApp
cordova platform add browser
cordova run browser
\`\`\`

&gt; 上面的 browser 可以是其他平台 (android/ios 等)

我目前使用的是 and...`,tags:["JavaScript","Cordova"]},{text:"通过 CSS 让 html 网页中的内容不可选",link:"/docs/frontend/css/disable-copy-using-css",date:1467478224e3,recommend:"",content:`\r
\r
# 通过 CSS 让 html 网页中的内容不可选\r
\r
\`\`\`css\r
* {\r
  moz-user-select: -moz-none;\r
  -moz-user-select: none;\r
  -o-user-select: none;\r
  -khtml-user-select: none;\r
  -webkit-user-select: none;\r
  -ms-user-s...`,tags:["CSS"]},{text:"JS 判断图片是否存在 兼容多浏览器",link:"/docs/frontend/javascript/js-check-is-img-exists",date:1437411024e3,recommend:"",content:`\r
\r
# JS 判断图片是否存在 兼容多浏览器\r
\r
## 检查图片是否存在\r
\r
\`\`\`javascript\r
function CheckImgExists(imgurl) {\r
  var imgObj = new Image(); // 判断图片是否存在\r
  imgObj.src = imgurl;\r
  // 没有图片，则返回 - 1\r
  if (imgObj.fileSize &gt;...`,tags:["JavaScript"]},{text:"HTML head 头标签笔记",link:"/docs/frontend/html/html-head",date:1437411024e3,recommend:"",content:`\r
\r
# HTML head 头标签笔记\r
\r
:::info\r
HTML head 头部分的标签、元素有很多，涉及到浏览器对网页的渲染，SEO 等等，而各个浏览器内核以及各个国内浏览器厂商都有些自己的标签元素,这就造成了很多差异性。移动互联网时代，head 头部结构，移动端的 meta 元素，显得更为重要。了解每个标签的意义，写出满足自己需求的 head 头标签，是本文的目的。本篇以一丝的文章...`,tags:["HTML"]},{text:"win7 打印机共享出现 0x000006d9 错误的解决方法",link:"/docs/os/win7-0x000006d9-error",date:1436547024e3,recommend:"",content:`\r
\r
# win7 打印机共享出现 0x000006d9 错误的解决方法\r
\r
win7 在防火墙服务禁用时无法使用打印机共享，开启 Firewall 服务即可。\r
`,tags:["Windows"]},{text:"seajs 最常用 7 个方法",link:"/docs/frontend/javascript/7-useful-funs-in-seajs",date:1424364624e3,recommend:"",content:`\r
\r
# seajs 最常用 7 个方法\r
\r
\`SeaJS\` 是一个模块加载器，模块加载器需要实现两个基本功能：\r
\r
- 实现模块定义规范，这是模块系统的基础。\r
- 模块系统的启动与运行。\r
\r
## seajs.config\r
\r
\`\`\`javascript\r
seajs.config({\r
  // 设置路径，方便跨项目调用\r
  paths: {\r
    path1: "...."...`,tags:["JavaScript"]},{text:"PowerShell 笔记",link:"/docs/os/powershell-note",date:142107198e4,recommend:"",content:`

# PowerShell 笔记

## 递归拷贝

其中\`recurse\`表示递归，\`-Force\`代表强制。

\`\`\`powershell
Copy-Item ./public/* ./.deploy_git -recurse -Force
\`\`\`

## 递归删除

\`\`\`powershell
Remove-Item ./.deploy_git/* -recurse -Force
\`\`\`
...`,tags:["PowerShell"]},{text:"对 frameset、iframe、frame 的操作",link:"/docs/frontend/html/operations-of-frames",date:1420371624e3,recommend:"",content:`\r
\r
# 对 frameset、iframe、frame 的操作\r
\r
## 框架编程概述\r
\r
一个 HTML 页面可以有一个或多个子框架，这些子框架以 \`&lt;iframe&gt;\` 来标记，用来显示一个独立的 HTML 页面。这里所讲的框架编程包括框架的自我控制以及框架之间的互相访问，例如从一个框架中引用另一个框架中的 JavaScript 变量、调用其他框架内的函数、控制另一个框架中表单的行为等。...`,tags:["HTML"]},{text:"脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题",link:"/docs/backend/ch-bugs-in-pd-reverse-project",date:1405942824e3,recommend:"",content:`\r
\r
# 脚本解决 PowerDesigner 逆向工程生成 PDM 时中文注释问题\r
\r
执行 \`Tools -- Execute Commands -- Run Script\`\r
\r
以下是脚本：\r
\r
\`\`\`vb\r
Option Explicit\r
ValidationMode  = True\r
InteractiveMode = im_Batch\r
\r
Dim mdl 'the curr...`,tags:["PowerDesigner"]}]},b=o=>(h("data-v-6822861f"),o=o(),x(),o),S=["href"],j={class:"icon"},w={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{"user-select":"none","flex-shrink":"0"}},y=b(()=>e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7 3.25A2.75 2.75 0 0 0 4.25 6v12A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18V6A2.75 2.75 0 0 0 17 3.25H7ZM5.75 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V6ZM9 7.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5H9Zm-.75 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 14.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H9Z","clip-rule":"evenodd"},null,-1)),C=[y],J={class:"text"},L={class:"title"},N={class:"desc"},T={class:"tags"},E={class:"tag"},M={class:"time"},P=u({__name:"CustomIndex",props:{recommend:{}},setup(o){const s=o;function m(d){return s.recommend?d===s.recommend:!0}return(d,A)=>(r(!0),t(c,null,i(l(k)["/docs/"],n=>(r(),t(c,{key:n.link},[m(n.recommend)?(r(),t("a",{key:0,class:"c-list-item",href:n.link},[e("div",j,[(r(),t("svg",w,C))]),e("div",J,[e("div",L,a(n.text),1),e("div",N,a(n.content),1)]),e("div",T,[(r(!0),t(c,null,i(n.tags,p=>(r(),t("div",E,a(p),1))),256))]),e("div",M,a(l(g)(n.date).format("YYYY-MM-DD")),1)],8,S)):v("",!0)],64))),128))}}),I=f(P,[["__scopeId","data-v-6822861f"]]);export{I as C};
