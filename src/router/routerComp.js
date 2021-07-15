/*
 * @Description: 这是 路由 表
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-14 11:09:10
 */
export const routerComponents = [
    { path: "/about", name: "About", meta: { title: "About" }, component: () => import("../views/About.vue") }
]