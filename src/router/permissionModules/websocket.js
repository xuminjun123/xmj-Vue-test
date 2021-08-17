import Layout from '@/layout/index.vue'

const websocketRouter = [
    {
        path: '/websocket',
        component: Layout,
        redirect: 'noredirect',
        name: 'websocket',
        meta: {
            title: 'websocket',
        },
        children: [
            {
                path: "socket",
                name: "socket",
                meta: {
                    title: "WebSocket使用",
                },
                component: () =>
                    import(/* webpackChunkName: "socket" */ "@/views/WebSocket/index.vue"),
            },
        ]
    }
]

export default websocketRouter