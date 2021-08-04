/*
 * @Description: 公共路由
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-23 09:56:26
 */

// 登录
const UserManagerRouter = [
    {
        path: '/login',
        name: 'login',
        component: () =>
             import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
    },
]
export default UserManagerRouter
