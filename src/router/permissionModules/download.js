/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-05 10:12:25
 */
import Layout from '@/layout/index.vue'

const downloadRouter = [
    {
        path: '/download',
        component: Layout,
        redirect: 'noredirect',
        name: 'download',
        meta: {
            title: 'download',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "downloadTest",
                name: "downloadTest",
                meta: {
                    title: "fileSaver",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Download/index.vue"),
            },
        ]
    }
]

export default downloadRouter