/*
 * @Description: 大转盘抽奖
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-05 15:02:27
 */

import Layout from '@/layout/index.vue'

const luckyCanvasRouter = [
    {
        path: '/luckyCanvas',
        component: Layout,
        redirect: 'noredirect',
        name: 'luckyCanvas',
        meta: {
            title: 'luckyCanvas',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "luckyCanvasTest",
                name: "luckyCanvasTest",
                meta: {
                    title: "大转盘",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/LuckWheel/index.vue"),
            },
        ]
    }
]

export default luckyCanvasRouter