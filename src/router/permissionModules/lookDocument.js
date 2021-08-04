/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:28:36
 */
import Layout from '@/layout/index.vue'

const lookDocumentRouter = [
    {
        path: '/lookDocument',
        component: Layout,
        redirect: 'noredirect',
        name: 'lookDocument',
        meta: {
            title: 'lookDocument',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "lookDocumentTest",
                name: "lookDocumentTest",
                meta: {
                    title: "lookDocumentTest",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/LookDocument/index.vue"),
            },
        ]
    }
]

export default lookDocumentRouter