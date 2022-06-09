import router from '@/router'// 引入路由实例
import store from '@/store'// 引入vuex
import NProgress from 'nprogress'// 引入进度条插件
import 'nprogress/nprogress.css' // 引入进度条插件

// 定义白名单
const whiteList = ['/login', '/404']
// 路由导航前置守卫
router.beforeEach(async(to, from, next) => {
  NProgress.start()// 开启进度条
  if (store.getters.token) {
    // 如果token存在
    // 如果 去登录页，则跳到主页
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果userId不存在代表用户资料为空 则获取用户资料
      if (!store.getters.userId) {
        // console.log('111')
        await store.dispatch('user/getUserInfo')
      }
      // 如果不去登录页则放行
      next()
    }
  } else {
    //  如果没有token,判断去的网页是否在白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()// 在白名单则放过通行
    } else {
      next('/login') // 不在  白名单则跳到登录页
    }
  }
  NProgress.done() // 解决手动输入地址进度条不关闭问题
})

// 路由导航后置守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
