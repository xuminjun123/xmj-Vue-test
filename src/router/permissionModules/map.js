/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 10:59:19
 */
/*
 * @Description: 动画 router
 * @Author: xmj
 * @Date: 2021-07-25 13:37:07
 */
import Layout from '@/layout/index.vue'

const mapRouter = [
    {
        path: '/map',
        component: Layout,
        redirect: 'noredirect',
        name: 'map',
        meta: {
            title: '地图',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "baidu",
                name: "baidu",
                meta: {
                    title: "baidu地图",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Map/baidu/index.vue"),
            },
            {
                path: "mapvgl",
                name: "mapvgl",
                meta: {
                    title: "百度三维地图",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Map/MapVGL/index.vue"),
            },
            {
                path: "gaode",
                name: "gaode",
                meta: {
                    title: "高德地图",
                },
                component: () =>
                    import(/* webpackChunkName: "Gaode" */ "@/views/Map/gaode/index.vue"),
            },
            {
                path: "tencent",
                name: "tencent",
                meta: {
                    title: "腾讯地图",
                },
                component: () =>
                    import(/* webpackChunkName: "Gaode" */ "@/views/Map/tencent/index.vue"),
            },
            {
                path: "maptalks",
                name: "maptalks",
                meta: {
                    title: "maptalks地图",
                },
                component: () =>
                    import(/* webpackChunkName: "maptalks" */ "@/views/Map/maptalks/index.vue"),
            },
        ]
    }
]

export default mapRouter