// https://vitepress.dev/reference/site-config

import {defineConfig} from 'vitepress'
import {head, nav, sidebar} from "./configs";

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',
  lang: 'zh-CN',
  title: "知行合一",
  description: "我的博客",
  head,
  lastUpdated: true,
  cleanUrls: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  /* 主题配置 */
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/renzg1024/resource/images/apple_003.jpg',
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/renzg1024/saole'}
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present saole'
    },

    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: 'Hello World',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: "最近更新",

    docFooter: {prev: '上一篇', next: '下一篇'},
  }
})
