import type { NavLink } from './components/type'
type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_ATA: NavData[] = [
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
    ]
  },
  {
    title: '小程序相关' ,
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
        link: 'https://developers.weixin.qq.com/community/develop/mixflow'
      },
      {
        icon: 'https://res.wx.qq.com/community/dist/community/images/logo_miniprogram_013191.png',
        title: 'WeUI组件库',
        desc: '小程序-WeUI组件库',
        link: 'https://wechat-miniprogram.github.io/weui/docs/'
      }
    ]
  }
]