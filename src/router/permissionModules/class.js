/*
 * @Description: ES 类
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-09 10:04:34
 */

import Layout from '@/layout/index.vue'

const classRouter = [
    {
        path: '/class',
        component: Layout,
        redirect: 'noredirect',
        name: 'class',
        meta: {
            title: 'Class',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "classTest",
                name: "classTest",
                meta: {
                    title: "类",
                },
                component: () =>
                    import(/* webpackChunkName: "chat" */ "@/views/Class/index.vue"),
            },
        ]
    }
]

export default classRouter