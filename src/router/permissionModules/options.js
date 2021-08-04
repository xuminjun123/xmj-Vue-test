/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 16:23:26
 */
import Layout from '@/layout/index.vue'

const optionsRouter = [
    {
        path: '/options',
        component: Layout,
        redirect: 'noredirect',
        name: 'options',
        meta: {
            title: 'options',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "optionsApi",
                name: "optionsApi",
                meta: {
                    title: "VueoptionsApi",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/VueOptions/index.vue"),
            },
        ]
    }
]

export default optionsRouter