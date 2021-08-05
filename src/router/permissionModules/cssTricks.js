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
        ]
    }
]

export default cssTricksRouter