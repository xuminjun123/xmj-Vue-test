/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 18:46:10
 */
import Layout from '@/layout/index.vue'

const syncRouter = [
    {
        path: '/sync',
        component: Layout,
        redirect: 'noredirect',
        name: 'sync',
        meta: {
            title: 'sync',
            icon: '#iconchart1'
        },
        children: [
            {
                path: "syncTest",
                name: "syncTest",
                meta: {
                    title: "sync修饰符",
                },
                component: () =>
                    import("@/views/Sync/index.vue"),
            },
        ]
    }
]

export default syncRouter