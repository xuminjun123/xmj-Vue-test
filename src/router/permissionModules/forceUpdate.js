/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 20:36:43
 */
import Layout from '@/layout/index.vue'

const forceUpdateRouter = [
    {
        path: '/forceUpdate',
        component: Layout,
        redirect: 'noredirect',
        name: 'forceUpdate',
        meta: {
            title: 'forceUpdate',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "forceUpdateTest",
                name: "forceUpdateTest",
                meta: {
                    title: "强制更新",
                },
                component: () =>
                    import( "@/views/ForceUpdate/index.vue"),
            },
        ]
    }
]

export default forceUpdateRouter