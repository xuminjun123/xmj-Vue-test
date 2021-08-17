import Layout from '@/layout/index.vue'

const blockRouter = [
    {
        path: '/block',
        component: Layout,
        redirect: 'noredirect',
        name: 'block',
        meta: {
            title: 'block',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "blockTest",
                name: "blockTest",
                meta: {
                    title: "滑块校验",
                },
                component: () =>
                    import(/* webpackChunkName: "blockTest" */ "@/views/Block/index.vue"),
            },
        ]
    }
]

export default blockRouter