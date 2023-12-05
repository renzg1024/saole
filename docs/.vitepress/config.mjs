import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/saole/',
  title: "My Awesome Project",
  description: "我的个人博客",
  lastUpdated: true,
  head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript' }]],
  themeConfig: {
    lastUpdatedText: "最近更新时间",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'guide', link: '/guide/getting-started' },
      {
        text: 'guide',
        items: [
          { text: 'getting-started', link: '/guide/getting-started' },
          { text: 'what', link: '/guide/what-is-vitepress' },
          { text: 'baidu', link: 'http://www.baidu.com' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' },
          { text: 'sshkey.md', link: '/examples/sshkey' },
        ],
        collapsible: true,
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
