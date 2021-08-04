/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 16:58:58
 */
import Layout from '@/layout/index.vue'

const flexRouter = [
    {
        path: '/flex',
        component: Layout,
        redirect: 'noredirect',
        name: 'flex',
        meta: {
            title: 'flex',
            // icon: '#iconchart1'
        },
        children: [
            {
                // path: "/flexTest",
                path: "index",
                name: "flexTest",
                meta: {
                    title: "flex布局",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Flex/index.vue"),
            },
        ]
    }
]

export default flexRouter