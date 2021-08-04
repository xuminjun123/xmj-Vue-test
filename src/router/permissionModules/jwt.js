/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 16:30:37
 */
import Layout from '@/layout/index.vue'

const jwtRouter = [
    {
        path: '/jwt',
        component: Layout,
        redirect: 'noredirect',
        name: 'jwt',
        meta: {
            title: 'jwt',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "jwtTest",
                name: "jwtTest",
                meta: {
                    title: "jwtTest",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Jwt/index.vue"),
            },
        ]
    }
]

export default jwtRouter