/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 21:42:38
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout/index.vue'


// 重复路由跳转报错解决
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const constantFiles = require.context('./constantModules', true, /\.js$/)
let constantModules = []
constantFiles.keys().forEach((key) => {
  // if (key === './index.js') return
  constantModules = constantModules.concat(constantFiles(key).default)
})


const asyncFiles = require.context('./permissionModules', true, /\.js$/)
let permissionModules = []
asyncFiles.keys().forEach((key) => {
  // if (key === './index.js') return
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})

 
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/Index.vue')
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          // icon: '#icondashboard',
          affix: true
        },
      },
    ]
  },
  ...constantModules,
  ...permissionModules
]

export const asyncRoutes = [
  // ...permissionModules
]

const router = new VueRouter({
  mode: "history",
  // mode:"hash",
  // base: process.env.BASE_URL,
  routes: constantRoutes,
});


// export function resetRouter() {
//   const newRouter = router;
//   (router as any).matcher = (newRouter as any).matcher // reset router
// }

export default router
