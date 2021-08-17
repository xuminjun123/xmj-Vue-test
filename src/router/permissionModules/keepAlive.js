/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 17:25:49
 */
import Layout from '@/layout/index.vue'

const keepAliveRouter = [
    {
        path: '/keepAlive',
        component: Layout,
        redirect: 'noredirect',
        name: 'keepAlive',
        meta: {
            title: 'keepAlive',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "keepAliveTest",
                name: "keepAliveTest",
                meta: {
                    title: "keepAlive使用",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/KeepAlive/index.vue"),
            },
        ]
    }
]

export default keepAliveRouter