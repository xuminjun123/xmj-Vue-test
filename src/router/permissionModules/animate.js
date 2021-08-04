/*
 * @Description: 动画 router
 * @Author: xmj
 * @Date: 2021-07-25 13:37:07
 */
import Layout from '@/layout/index.vue'

const animateRouter = [
    {
        path: '/animate',
        component: Layout,
        redirect: 'noredirect',
        name: 'animate',
        meta: {
            title: '动画',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "bounce",
                name: "bounce",
                meta: {
                    title: "动画-bounce",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Animate/index.vue"),
            },
        ]
    }
]

export default animateRouter