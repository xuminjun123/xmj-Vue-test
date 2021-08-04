/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:52:42
 */
import Layout from '@/layout/index.vue'

const tabRouter = [
    {
        path: '/tab',
        component: Layout,
        redirect: 'noredirect',
        name: 'tab',
        meta: {
            title: 'tab',
            icon: '#iconchart1'
        },
        children: [
            {
                path: "tabTest",
                name: "tabTest",
                meta: {
                    title: "切换组件",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Tab/index.vue"),
            },
        ]
    }
]

export default tabRouter