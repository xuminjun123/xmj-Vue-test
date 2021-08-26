/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-26 11:09:06
 */

import Layout from '@/layout/index.vue'

const timeoutRouter = [
    {
        path: '/cookie',
        component: Layout,
        redirect: 'noredirect',
        name: 'cookieDemo',
        meta: {
            title: 'cookieDemo',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "timeout",
                name: "CookieTimeOut",
                meta: {
                    title: "cookie过期",
                },
                component: () =>
                    import("@/views/TimeOut/index.vue"),
            },
        ]
    }
]

export default timeoutRouter