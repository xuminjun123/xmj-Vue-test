/*
 * @Description: 右键 路由
 * @Author: xmj
 * @Date: 2021-07-25 14:02:41
 */
import Layout from '@/layout/index.vue'

const rightClickRouter = [
    {
        path: '/rightClick',
        component: Layout,
        redirect: 'noredirect',
        name: 'rightClick',
        meta: {
            title: '右键',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "right",
                name: "right",
                meta: {
                    title: "右键事件",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/RightClick/index.vue"),
            },
        ]
    }
]

export default rightClickRouter