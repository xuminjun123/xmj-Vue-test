/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-09 16:50:21
 */

import Layout from '@/layout/index.vue'

const leetCodeRouter = [
    {
        path: '/leetcode',
        component: Layout,
        redirect: 'noredirect',
        name: 'leetcode',
        meta: {
            title: 'leetcode',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "leetcodeTest",
                name: "leetcodeTest",
                meta: {
                    title: "力扣题目",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/LeetCode/one.vue"),
            },
        ]
    }
]

export default leetCodeRouter