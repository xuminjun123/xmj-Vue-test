/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-19 10:22:57
 */
import Layout from '@/layout/index.vue'

const cropperRouter = [
    {
        path: '/cropper',
        component: Layout,
        redirect: 'noredirect',
        name: 'cropper',
        meta: {
            title: 'cropper',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "cropperTest",
                name: "cropperTest",
                meta: {
                    title: "图片裁剪",
                },
                component: () =>
                    import(/* webpackChunkName: "cropper" */ "@/views/Cropper/index.vue"),
            },
        ]
    }
]

export default cropperRouter