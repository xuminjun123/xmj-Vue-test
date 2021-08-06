/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-04 16:18:01
 */
import Layout from '@/layout/index.vue'

const cssTricksRouter = [
    {
        path: '/cssTricks',
        component: Layout,
        redirect: 'noredirect',
        name: 'cssTricks',
        meta: {
            title: 'cssTricks',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "accordion",
                name: "accordion",
                meta: {
                    title: "手风琴",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/CssTricks/accordion.vue"),
            },
            {
                path: "glass",
                name: "glass",
                meta: {
                    title: "毛玻璃",
                },
                component: () =>
                    import(/* webpackChunkName: "glass" */ "@/views/CssTricks/glass.vue"),
            },
            {
                path: "light",
                name: "light",
                meta: {
                    title: "图片闪光",
                },
                component: () =>
                    import(/* webpackChunkName: "light" */ "@/views/CssTricks/light.vue"),
            },
        ]
    }
]

export default cssTricksRouter