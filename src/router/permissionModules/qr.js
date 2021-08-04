/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 16:34:29
 */
import Layout from '@/layout/index.vue'

const qrRouter = [
    {
        path: '/qr',
        component: Layout,
        redirect: 'noredirect',
        name: 'qr',
        meta: {
            title: 'vue-qr',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "qrTest",
                name: "qrTest",
                meta: {
                    title: "二维码",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/VueQr/index.vue"),
            },
        ]
    }
]

export default qrRouter