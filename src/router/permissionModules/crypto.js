/*
 * @Description: rsa加密 路由
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 13:37:40
 */
import Layout from '@/layout/index.vue'

const rsaRouter = [
    {
        path: '/crypto',
        component: Layout,
        redirect: 'noredirect',
        name: 'crypto',
        meta: {
            title: '前端加密',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "rsa",
                name: "rsa",
                meta: {
                    title: "rsa加密",
                },
                component: () =>
                    import(/* webpackChunkName: "RSA" */ "@/views/Crypto/RSA.vue"),
            },
            {
                path: "aes",
                name: "aes",
                meta: {
                    title: "aes加密",
                },
                component: () =>
                    import(/* webpackChunkName: "AES" */ "@/views/Crypto/AES.vue"),
            },
        ]
    }
]

export default rsaRouter