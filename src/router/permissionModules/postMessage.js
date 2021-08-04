/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:40:19
 */
import Layout from '@/layout/index.vue'

const postMessageRouter = [
    {
        path: '/postMessage',
        component: Layout,
        redirect: 'noredirect',
        name: 'postMessage',
        meta: {
            title: 'postMessage',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "postMessageTest",
                name: "postMessageTest",
                meta: {
                    title: "跨域通信",
                },
                component: () =>
                    import("@/views/PostMessage/index.vue"),
            },
        ]
    }
]

export default postMessageRouter