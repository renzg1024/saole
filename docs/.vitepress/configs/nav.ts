import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {text: '前端导航', link: '/nav/'},
  {
    text: '前端基础', //front end basic
    items: [
      {text: 'TypeScript', link: '/FrontEndBasic/TypeScript/'},
      {text: 'Html', link: '/guide/'},
      {text: 'CSS', link: '/guide/'},
      {text: 'JavaScript', link: '/guide/'},
      {text: 'ES6', link: '/guide/'},
      {text: '编程逻辑算法题', link: '/guide/'},
      {text: '浏览器网络相关', link: '/guide/'},
      {text: 'git', link: '/guide/'},
    ],
  },
  {
    text: '常用技巧', //front end basic
    items: [
      {text: '工具库', link: '/FrontEndasic/TypeScript/'},
      {text: '正则', link: '/guide/'},
      {text: 'JS常用功能', link: '/guide/'},
      {text: 'Vue开发技巧', link: '/guide/'},
      {text: 'npm命令', link: '/guide/'},//nvm pnpm 相关等等
      {text: 'git', link: '/guide/'},
      {text: '命令行', link: '/guide/'},
      {text: '编程规范', link: '/guide/'},
      {text: '踩坑记录', link: '/guide/'},
    ],
  },
  /**
   * 开发提效工具
   * 更新日志
   * */
  {
    text: '专题进阶',
    items: [
      {text: 'examples', link: '/examples/'},
      {text: 'guide', link: '/guide/'},
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
    text: 'examples',
    items: [
      {text: 'api', link: '/examples/getting-started'},
      {text: 'what', link: '/guide/what-is-vitepress'},
      {text: 'baidu', link: 'http://www.baidu.com'},
    ],
  },
]
