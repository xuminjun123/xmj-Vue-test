/*
 * @Description: es12 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 15:47:24
 */
import Layout from '@/layout/index.vue'

const esRouter = [
    {
        path: '/es',
        component: Layout,
        redirect: 'noredirect',
        name: 'es',
        meta: {
            title: 'ES12',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "esTest",
                name: "esTest",
                meta: {
                    title: "es练习",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Es12/index.vue"),
            },
        ]
    }
]

export default esRouter