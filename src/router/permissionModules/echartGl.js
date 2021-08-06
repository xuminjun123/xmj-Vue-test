/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 10:23:04
 */
import Layout from '@/layout/index.vue'

const echartGlRouter = [
    {
        path: '/echatsGl',
        component: Layout,
        redirect: 'echatsGl',
        name: 'echatsGl',
        meta: {
            title: 'echatsGl',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "world",
                name: "world",
                meta: {
                    title: "echartGL-地球",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/EchartGl/world.vue"),
            },
        ]
    }
]

export default echartGlRouter