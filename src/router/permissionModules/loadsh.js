/*
 * @Description: loadsh router
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 14:14:18
 */

import Layout from '@/layout/index.vue'

const loadshRouter = [
    {
        path: '/loadsh',
        component: Layout,
        redirect: 'noredirect',
        name: 'loadsh',
        meta: {
            title: 'loadsh库',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "loadshTest",
                name: "loadshTest",
                meta: {
                    title: "loadsh库使用",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Loadsh/index.vue"),
            },
        ]
    }
]

export default loadshRouter