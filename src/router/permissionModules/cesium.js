/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 15:18:05
 */
import Layout from '@/layout/index.vue'

const cesiumRouter = [
    {
        path: '/cesium',
        component: Layout,
        redirect: 'noredirect',
        name: 'cesium',
        meta: {
            title: 'cesium',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "cesiumTest",
                name: "cesiumTest",
                meta: {
                    title: "三维地球",
                },
                component: () =>
                    import(/* webpackChunkName: "cesium" */ "@/views/Cesium/index.vue"),
            },
        ]
    }
]

export default cesiumRouter