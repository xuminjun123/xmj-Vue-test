/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:33:14
 */
import Layout from '@/layout/index.vue'

const backTopRouter = [
    {
        path: '/backTop',
        component: Layout,
        redirect: 'noredirect',
        name: 'backTop',
        meta: {
            title: 'backTop',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "backTopTest",
                name: "backTopTest",
                meta: {
                    title: "返回顶部",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/BackTop/index.vue"),
            },
        ]
    }
]

export default backTopRouter