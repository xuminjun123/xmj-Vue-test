/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 17:12:10
 */

import Layout from '@/layout/index.vue'

const slotRouter = [
    {
        path: '/slot',
        component: Layout,
        redirect: 'noredirect',
        name: 'slot',
        meta: {
            title: 'slot',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "slotTest",
                name: "slotTest",
                meta: {
                    title: "slotTest",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Slot/index.vue"),
            },
        ]
    }
]

export default slotRouter