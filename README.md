
一、基于VUE-CLI搭建项目
（适用于WEB APP）

  1. 确保机器安装好node环境，npm （保证是较新的版本，https://nodejs.org/en/）
  
  1.  进入控制台
  
  1. 执行 `npm install -g vue-cli` (如已有项目模板可直接跳过4,5)
  
  1. ```
      vue init webpack <你的项目名称> 一路回车
      推荐 intall vue-router(yes)  use Eslint(视情况建议安装)
      Unit tests(建议否)  e2e tests(建议否)
     ```
  1. `cd  <你的项目名称>`
  1. 如果你直接选择下载项目模板，请直接跳过 2--5 步骤
  1. 执行命令 `npm install` 下载项目依赖库
  1. 运行 `npm run dev` 可以看到搭建的初始页面
  1. 运行 `npm run build` 可以打包成 单独文件夹直接部署到服务器

二、VUE项目目录结构说明及扩展

  1. build,config文件夹 为webpack配置目录及项目编译所需的目录，
     不太需要关心 更改端口为(config/index.js)
  1. common为公用的一些JS,CSS,图片及字体库文件
     其中 js中可以是封装的一些方法，类方便组件调用
     Css为基础的reset.css和 iconfont.css 这俩css都会引入到index.css里
     index.css会直接引入到main.js,组件的其他css要写在组件内部
  1. components文件夹是一些项目常用的组件，这些组件是可以复用的，
     比如一些列表页，轮播图，loading之类
     Pages文件夹里是基础的一些页面，不具有复用性
  1. router里是路由配置文件
  1. 如果要用到vuex 应该在src下新建立store文件夹
     下面建立state,action,mutations,getters....

三、开发工具使用
  1. IDE工具
     移动端开发，IDE工具要求必须使用WebStorm，请下载安装
  1. WebStorm配置
     a，点击下载安装TortoiseSvn
     b，点击下载安装SlikSvn
     记好SlikSvn安装路径，如：D:\Program Files\SlikSvn\bin\svn.exe
     打开安装好的webstorm，选择：文件/设置/版本控制/Subversion
     找到Use command line client，把SlikSvn配置进去
     如：D:\Program Files\SlikSvn\bin\svn.exe, 点击“应用
  1. webStrom vue配置
     选择：文件/设置/编辑器/文件类型
     HTML文件，点击“+”添加“*.vue”, 点击 ok
  1. JavaScript设置
     选择：文件/设置/语言与框架/JavaScript
     下来框选择ECMAScript 6, 点击 ok

四、常见问答
  1. WebStorm常用快捷键
     Ctrl + 点击 ：快速定位链接文件与js函数
     Ctrl + Shift + N  :   输入文件名快速查找进入文件
     Ctrl + Shift + R  :   全项目文件查找或者替换
     Ctrl + D  :   复制当前行
     Ctrl + G  :   跳转到当前文件指定行
     Ctrl + F  :   查找当前文件指定内容
  1. 什么时候用VUE？
     以公司目前的项目情况为准，如果不需要兼容IE低版本（IE8），
     并且是前后端分离的项目建议使用。

  1. 我应该怎么学习？
     建议还是先看官方文档，文档是中文的，简洁友好，
     了解了基本语法后再去看一些vue周边的生态圈，比如脚手架，vue-router, axios,   vuex等等。
     这些文档大家可以从 github上直接搜索

  1. VUE的页面JS,CSS.HTML都写在一起？
     是的，这是VUE推荐的写法，因为VUE是组件化开发，这样确保组件的高内聚，方便复用，
     包括组件用到的图片都应道和.vue文件一起

  1. 必须会webpack,ES6语法吗？
     脚手架其实已经帮我们配置好了绝大多数功能，你甚至可以一点都不改就运行好项目，
     需要的话再去更改配置，ES6其实不是必须的，大部分语法也可以用ES5实现，
     但是VUE是我们学习ES6的好途径，建议大家从中学习

  1. 可以和jquery结合使用吗？
     可以是可以，但不建议使用jquery（特别是webApp），jquery操作的DOM，VUE操作的是数据

  1. vuex是什么？什么时候使用
     vuex是一套状态管理模式，简单说就是管理各组件共有状态的，
     如果你的项目涉及到多个组件共享一个数据，
     这个数据的变化会影响到各个组件的状态时就该使用了
     官方建议是小型项目可以使用，
     如果你要构建一个中大型的项目vuex很可能是你一个好的选择。

  1. main.js ， app.vue ，index.html这三个到底是干什么的，我搞不懂他们之间的关系？
     main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件
     App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
       其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件。
     Index.html 是文件入口，项目在构建的时候会引用App.vue

  1. 为什么用WebStorm，对WebStorm配置干什么？
     使用WebStorm进行移动端开发，除了可以提供代码提示，还能提供各种工具插件。
     集成SlikSvn免除了使用TortoiseSvn客户端提交代码时在工具与代码文件夹之间的切换。
     直接鼠标右键“Subversion”进行代码commit，update和Revert。

