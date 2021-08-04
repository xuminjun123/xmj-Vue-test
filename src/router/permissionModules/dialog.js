/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 17:18:27
 */
import Layout from '@/layout/index.vue'

const dialogRouter = [
    {
        path: '/dialog',
        component: Layout,
        redirect: 'noredirect',
        name: 'dialog',
        meta: {
            title: 'dialog',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "dialogTest",
                name: "dialogTest",
                meta: {
                    title: "dialog弹窗",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Dialog/dialog.vue"),
            },
            {
                path: 'toast',
                component: () =>
                    import(
                        '@/views/Dialog/toast.vue'
                    ),
                name: 'toast',
                meta: {
                    title: 'toast',
                    noCache: true
                }
            },
        ]
    }
]

export default dialogRouter