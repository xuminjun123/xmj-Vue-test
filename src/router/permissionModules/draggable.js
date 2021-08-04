/*
 * @Description: 拖拽
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 15:52:27
 */
import Layout from '@/layout/index.vue'

const draggableRouter = [
    {
        path: '/draggable',
        component: Layout,
        redirect: 'noredirect',
        name: 'draggable',
        meta: {
            title: '拖拽',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "EvenVueDraggableTest",
                name: "EvenVueDraggableTest",
                meta: {
                    title: "拖拽练习",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Draggable/EvenVueDraggableTest.vue"),
            },
            {
                path: "oddVueDraggableTest",
                name: "oddVueDraggableTest",
                meta: {
                    title: "拖拽练习2",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/Draggable/oddVueDraggableTest.vue"),
            },
        ]
    }
]

export default draggableRouter