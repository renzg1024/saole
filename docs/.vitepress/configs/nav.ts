import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '前端笔记', link: '/guide/getting-started' },
  {
    text: '技术文档',
    items: [
      { text: 'examples', link: '/examples/' },
      { text: 'guide', link: '/guide/' },
    ],
  },
  {
    text: 'examples',
    items: [
      { text: 'api', link: '/examples/getting-started' },
      { text: 'what', link: '/guide/what-is-vitepress' },
      { text: 'baidu', link: 'http://www.baidu.com' },
    ],
  },
]
