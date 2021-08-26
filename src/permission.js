/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 09:57:27
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from './store'
import { useStore } from './store'
import { UserActionTypes } from './store/modules/user/action-types'
import { PermissionActionType } from './store/modules/permission/action-types'

import router from '@/router'

import { Message } from 'element-ui'
import whiteList from './config/default/whitelist'
// import settings from '@/config/default/setting.config'
NProgress.configure({ showSpinner: false })

// const getPageTitle = (key: string) => {
//   const i18n = useI18n()
//   const title = settings.title
//   const hasKey = i18n.te(`route.${key}`)
//   if (hasKey) {
//     const pageName = i18n.t(`route.${key}`)
//     return `${pageName} - ${title}`
//   }
//   return `${title}`
// }

router.beforeEach(async (to, from, next) => {
  // Start progress bar
  NProgress.start()
  const store = useStore()
  // 判断是否登录
  if (useStore().state.user.token) {

    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      // 检查用户是否已获取权限角色
      if (store.state.user.roles.length === 0) {
        // console.log('role------>', store.state.user.roles.length);

        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
          // role: ["admin"] roles
          const roles = store.state.user.roles
          // Generate accessible routes map based on role 生成基于角色的可访问路由图
          store.dispatch(PermissionActionType.ACTION_SET_ROUTES, roles)

          // Dynamically add accessible routes 动态添加可访问路由
          store.state.permission.dynamicRoutes.forEach((route) => {

            router.addRoute(route)
          })
          // Hack: ensure addRoutes is complete Hack:确保addroues已完成
          // 设置replace: true，这样导航就不会留下历史记录
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (err) {

          // Remove token and redirect to login page 删除令牌并重定向到登录页面
          store.dispatch(UserActionTypes.ACTION_RESET_TOKEN, undefined)
          // Message.error(err || 'Has Error')  // 可能会报错
          Message.error('Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      // 其他没有访问权限的页面被重定向到登录页面。  
      next(`/login?redirect=${to.path}`)
      // next('/login')
      console.log('next----------->');

      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  // document.title = getPageTitle(to.meta.title)
})
