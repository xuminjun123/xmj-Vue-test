/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 17:04:12
 */
import Layout from '@/layout/index.vue'

const momentRouter = [
    {
        path: '/moment',
        component: Layout,
        redirect: 'noredirect',
        name: 'moment',
        meta: {
            title: 'moment',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "momentTest",
                name: "momentTest",
                meta: {
                    title: "moment日期格式",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Moment/index.vue"),
            },
        ]
    }
]

export default momentRouter