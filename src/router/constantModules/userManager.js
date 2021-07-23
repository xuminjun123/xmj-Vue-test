/*
 * @Description: 公共路由
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-23 09:56:26
 */

const UserManagerRouter = [
    {
        path: "/index-home",
        name: "index-home",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
        meta: {
            title: "首页",
        },
    },
    {
        path: "/about",
        name: "About",
        meta: {
            title: "About",
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
]
export default UserManagerRouter
