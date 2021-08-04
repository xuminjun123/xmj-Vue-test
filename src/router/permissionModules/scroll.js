/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 18:34:52
 */
import Layout from '@/layout/index.vue'

const scrollRouter = [
    {
        path: '/scroll',
        component: Layout,
        redirect: 'noredirect',
        name: 'scroll',
        meta: {
            title: 'scroll',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "scrollTest",
                name: "scrollTest",
                meta: {
                    title: "滚动条",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Scroll/index.vue"),
            },
        ]
    }
]

export default scrollRouter