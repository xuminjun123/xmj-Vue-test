/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-17 11:29:23
 */

import Layout from '@/layout/index.vue'

const uploadRouter = [
    {
        path: '/upload',
        component: Layout,
        redirect: 'noredirect',
        name: 'upload',
        meta: {
            title: 'upload',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "uploadTest",
                name: "uploadTest",
                meta: {
                    title: "多文件上传使用",
                },
                component: () =>
                    import("@/views/Upload/index.vue"),
            },
        ]
    }
]

export default uploadRouter