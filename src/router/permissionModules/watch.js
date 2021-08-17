/*
 * @Description: 监听
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:25:00
 */
import Layout from '@/layout/index.vue'

const watchRouter = [
    {
        path: '/watch',
        component: Layout,
        redirect: 'noredirect',
        name: 'watch',
        meta: {
            title: 'watch',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "watchTest",
                name: "watchTest",
                meta: {
                    title: "watch使用",
                },
                component: () =>
                    import("@/views/watch/index.vue"),
            },
        ]
    }
]

export default watchRouter