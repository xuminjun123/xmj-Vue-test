/*
 * @Description: loadsh router
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 14:14:18
 */

import Layout from '@/layout/index.vue'

const sortRouter = [
    {
        path: '/sort',
        component: Layout,
        redirect: 'noredirect',
        name: 'sort',
        meta: {
            title: '未完成的sort',
            icon: '#iconchart1'
        },
        children: [
            {
                path: "sortTest",
                name: "sortTest",
                meta: {
                    title: "sortTest",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Sort/index.vue"),
            },
        ]
    }
]

export default sortRouter