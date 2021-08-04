/*
 * @Description: 音频
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 13:43:35
 */
import Layout from '@/layout/index.vue'

const audioRouter = [
    {
        path: '/audio',
        component: Layout,
        redirect: 'noredirect',
        name: 'audio',
        meta: {
            title: '音频',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "audioTest",
                name: "audioTest",
                meta: {
                    title: "audio音频",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Audio/index.vue"),
            },
        ]
    }
]

export default audioRouter