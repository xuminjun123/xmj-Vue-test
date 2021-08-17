/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 18:40:05
 */
import Layout from '@/layout/index.vue'

const quillEditorRouter = [
    {
        path: '/quillEditor',
        component: Layout,
        redirect: 'noredirect',
        name: 'quillEditor',
        meta: {
            title: 'quillEditor',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "quillEditorTest",
                name: "quillEditorTest",
                meta: {
                    title: "富文本",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/QuillEditor/index.vue"),
            },
        ]
    }
]

export default quillEditorRouter