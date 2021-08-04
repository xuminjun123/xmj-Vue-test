/*
 * @Description: 自定义指令 router
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 13:43:35
 */
import Layout from '@/layout/index.vue'

const directiveRouter = [
    {
        path: '/directive',
        component: Layout,
        redirect: 'noredirect',
        name: 'directive',
        meta: {
            title: '自定义指令',
            icon: '#iconchart1'
        },
        children: [
            {
                path: "isdel",
                name: "isdel",
                meta: {
                    title: "删除节点",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Directive/index.vue"),
            },
        ]
    }
]

export default directiveRouter