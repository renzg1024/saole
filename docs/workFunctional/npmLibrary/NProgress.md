# NProgress浏览器加载条

### 介绍

轻量级的页面或者接口加载进度条

官网 https://rstacruz.github.io/nprogress/

github https://github.com/rstacruz/nprogress

### 安装

```
 $ npm install --save nprogress

```

### API
```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

NProgress.start();
NProgress.done();
```

### 示例

```js
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect', '/401', '/404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  
  NProgress.start()

  const hasToken = getToken()

  if (hasToken) {

    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } 
    else {
      const hasRoles = store.getters.roles
      if (hasRoles) { //是否有权限
        next()
      } else {
        try {
          const roles = await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
```
