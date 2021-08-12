/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-12 11:20:20
 */
import Layout from '@/layout/index.vue'

const keyboardRouter = [
    {
        path: '/keyboard',
        component: Layout,
        redirect: 'noredirect',
        name: 'keyboard',
        meta: {
            title: 'keyboard',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "keyboardTest",
                name: "keyboardTest",
                meta: {
                    title: "键盘事件",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/KeyBoard/index.vue"),
            },
        ]
    }
]

export default keyboardRouter