/*
 * @Description: Intro 用户引导
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-18 16:48:08
 */
import Layout from '@/layout/index.vue'

const introRouter = [
    {
        path: '/intro',
        component: Layout,
        redirect: 'noredirect',
        name: 'intro',
        meta: {
            title: 'intro',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "introTest",
                name: "introTest",
                meta: {
                    title: "用户引导",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Intro/index.vue"),
            },
        ]
    }
]

export default introRouter