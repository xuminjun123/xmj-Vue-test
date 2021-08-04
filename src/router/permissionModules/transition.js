/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 21:02:06
 */
import Layout from '@/layout/index.vue'

const transitionRouter = [
    {
        path: '/transition',
        component: Layout,
        redirect: 'noredirect',
        name: 'transition',
        meta: {
            title: '动画',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "addTransition",
                name: "addTransition",
                meta: {
                    title: "addTransition",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Transition/addTransition.vue"),
            },
            {
                path: "fadeInOut",
                name: "fadeInOut",
                meta: {
                    title: "淡入淡出",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Transition/fadeInOut.vue"),
            },
        ]
    }
]

export default transitionRouter