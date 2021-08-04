/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-28 15:31:02
 */
import Layout from '@/layout/index.vue'

const esRouter = [
    {
        path: '/antV',
        component: Layout,
        redirect: 'noredirect',
        name: 'antV',
        meta: {
            title: 'antv',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "g2",
                name: "g2Test",
                meta: {
                    title: "g2",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/G2/index.vue"),
            },
        ]
    }
]

export default esRouter