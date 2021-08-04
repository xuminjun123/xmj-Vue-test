/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 10:14:24
 */
import Layout from '@/layout/index.vue'

const chatRouter = [
    {
        path: '/chat',
        component: Layout,
        redirect: 'noredirect',
        name: 'chat',
        meta: {
            title: 'chat',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "chatTest",
                name: "chatTest",
                meta: {
                    title: "聊天",
                },
                component: () =>
                    import(/* webpackChunkName: "chat" */ "@/views/chat/index.vue"),
            },
        ]
    }
]

export default chatRouter