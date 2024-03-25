import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {text: '前端导航', link: '/nav/'},
  {
    text: '前端基础',
    items: [
      {text: 'TypeScript', link: '/frontEndBasic/typeScript/'},
      {text: 'Html', link: '/frontEndBasic/html'},
      {text: 'CSS', link: '/frontEndBasic/css/'},
      {text: 'JavaScript', link: '/frontEndBasic/javaScript'},
      {text: 'ES6', link: '/frontEndBasic/es6'},
      {text: '编程逻辑算法题', link: '/frontEndBasic/coding'},
      {text: '浏览器网络相关', link: '/frontEndBasic/network'},
    ],
    activeMatch: '^/frontEndBasic'
  },
  {
    text: '工作中实用',
    items: [
      {
        text: '前端工具库',
        items: [
          { text: 'npm功能库', link: '/workFunctional/npmLibrary/' },
          { text: '正则', link: '/workFunctional/js/regexp' },
          { text: '工具函数', link: '/workFunctional/js/function' }
        ]
      },
      {
        text: 'CSS实用集',
        items: [
          { text: '常用技巧', link: '/workFunctional/css/oftenUseStyle' },
          { text: '特效/动画', link: '/workflow/css/tricks' },
          { text: 'Sass', link: '/workflow/sass/' }
        ]
      },
      {text: 'Vue开发技巧', link: '/guide/'},
      {text: 'git', link: '/guide/'},
      {text: '命令行', link: '/workFunctional/commandLine/'}, //npm命令nvm pnpm 相关等等
      {text: '编程规范', link: '/guide/'},
      {text: 'markdown语法', link: '/workFunctional/markdown/'},
      {text: '踩坑记录 issue ', link: '/guide/issue'},
    ],
  },
  {
    text:'软件工具',
    items:[
      { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
    ]
  },
  {
    text: '专题进阶',
    items: [
      {text: 'NodeJs', link: '/examples/'},
      {text: 'TypeScript', link: '/guide/'},
      {text: '微信小程序', link: '/guide/'},
      {text: '前端工程化', link: '/guide/'},
    ],
  },
  {
    text: '心智成长',
    items: [
      {text: '思考感悟', link: '/mindGrowUp/understandNotes/'}, //数量多，日期，记录日常感悟，所思所想
      // 年分组，月为单位记录
      {text: '读书笔记', link: '/mindGrowUp/readNotes/'},
    ],
  },
  {
    text: '察哈尔国',
    items: [
      { text: '个人主页', link: 'https://fe-mm.com' },
      //个人项目
      // { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
    ]
  }
]
