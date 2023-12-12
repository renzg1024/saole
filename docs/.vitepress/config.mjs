import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/saole/',
  title: "知行合一",
  description: "我的博客",
  lastUpdated: true,
  head: [
    ['meta', {name: 'keywords', content: 'HTML, CSS, JavaScript'}],
    ['link', {rel: 'icon', href: '/saole/favicon.ico'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/public/xingzhi-logo.png',
    siteTitle: 'Hello World',
    lastUpdatedText: "最近更新时间",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: '前端笔记', link: '/guide/getting-started'},
      {
        text: '技术文档',
        items: [
          {text: 'examples', link: '/examples/'},
          {text: 'guide', link: '/guide/'}
        ]
      },
    /*  {
        text: 'examples',
        items: [
          {text: 'api', link: '/examples/getting-started'},
          {text: 'what', link: '/guide/what-is-vitepress'},
          {text: 'baidu', link: 'http://www.baidu.com'}
        ]
      },*/
      {text: '志行', link: '/home'},
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {text: 'Index', link: '/guide/'},
            {text: 'started', link: '/guide/getting-started'},
            {text: 'what', link: '/guide/what-is-vitepress'}
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            {text: 'Index', link: '/examples/'},
            {text: 'api', link: '/examples/api-examples'},
            {text: 'markdown', link: '/examples/markdown-examples'}
          ]
        }
      ]
    },
    /*  sidebar: [
        {
          text: 'Examples',
          items: [
            {text: 'Markdown Examples', link: '/examples/markdown-examples'},
            {text: 'Runtime API Examples', link: '/examples/api-examples'}
          ],
          collapsible: true,
          collapsed: true
        }
      ],*/
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],
    docFooter: {prev: '上一篇', next: '下一篇'},
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
