import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '熊猫在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '程序员工具箱',
        desc: '一些常用好用的工具集合',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/icon-yuque.png',
        title: '语雀',
        desc: '个人知识文档仓库',
        link: 'https://www.yuque.com/dashboard/books',
      },
    ],
  },
  {
    title: '前端学习资料',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '',
        link: 'https://www.runoob.com',
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com',
      },
    ],
  },
  {
    title: 'JavaScript 框架类库',
    items: [
      {
        title: '腾讯IM- SDK',
        icon: 'https://web.sdk.qcloud.com/favicon.ico',
        desc: '腾讯云即时通信IM SDK',
        link: 'https://web.sdk.qcloud.com/im/doc/zh-cn/index.html',
      },
      {
        title: 'SortableJs',
        desc: 'Sortable is a JavaScript library for reorderable drag-and-drop lists.',
        link: 'https://www.itxst.com/sortablejs/neuinffi.html',
        // link: 'https://github.com/SortableJS/Sortable',
      },
    ],
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/wechat_search_common_assets/res/developers/3x/developers-8630de9303.png',
        title: '小程序交流专区',
        desc: '小程序交流专区 | 微信开放社区',
        link: 'https://developers.weixin.qq.com/community/develop/mixflow',
      },
      {
        icon: 'https://res.wx.qq.com/community/dist/community/images/logo_miniprogram_013191.png',
        title: 'WeUI组件库',
        desc: '小程序-WeUI组件库',
        link: 'https://wechat-miniprogram.github.io/weui/docs/',
      },
    ],
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://vuejs.org/images/logo.png',
        title: 'Vue官方文档',
        desc: '渐进式JavaScript 框架',
        link: 'https://cn.vuejs.org/',
      },
      {
        icon: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
        title: 'Vue3 生态导航',
        desc: 'Vue爱好者共同搭建',
        link: 'https://vue3js.cn/',
      },
    ],
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://react.docschina.org/favicon.ico',
        title: 'React',
        desc: '用于构建 Web 和原生交互界面的库',
        link: 'https://react.docschina.org',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      /*   {
          icon: 'https://valtio.pmnd.rs/favicon.ico',
          title: 'Valtio',
          desc: 'makes proxy-state simple for React and Vanilla',
          link: 'https://valtio.pmnd.rs',
        },*/
      /*   {
          icon: 'https://jotai.org/favicon.svg',
          title: 'Jotai',
          desc: 'primitive and flexible state management for React',
          link: 'https://jotai.org',
        },*/
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'TypeScript相关',
    items: [
      {
        icon: '/icons/icon-ts.png',
        title: 'TS官方文档',
        desc: 'TypeScript 官方文档',
        link: 'https://typescript.p2hp.com/',
      },
      {
        title: '拉钩课程-TS入门实战',
        desc: 'TypeScript 入门实战笔记',
        link: 'https://kaiwu.lagou.com/course/courseInfo.htm?courseId=885#/detail/pc?id=7442',
      },
    ],
  },
  {
    title: 'Node 生态',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
      },
      {
        icon: 'https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'Npm 官网',
        desc: 'Npm包管理工具',
        link: 'https://www.npmjs.com',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs',
      },
    ],
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        icon: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png',
        title: 'Github',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: 'V2EX = way to explore',
        link: 'https://www.v2ex.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '知乎内容平台',
        link: 'https://www.zhihu.com/signin?next=%2F',
      },
    ],
  },
  {
    title: '图标库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: '',
      },
    ],
  },
]
