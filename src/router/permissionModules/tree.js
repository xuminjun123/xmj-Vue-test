/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 18:46:10
 */
import Layout from '@/layout/index.vue'

const treeRouter = [
    {
        path: '/tree',
        component: Layout,
        redirect: 'noredirect',
        name: 'tree',
        meta: {
            title: 'tree',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "treeTest",
                name: "treeTest",
                meta: {
                    title: "treeTest",
                },
                component: () =>
                    import("@/views/Tree/index.vue"),
            },
            {
                path: "treeTable",
                name: "treeTable",
                meta: {
                    title: "tree形表格",
                },
                component: () =>
                    import("@/views/Tree/TreeTable.vue"),
            },
            {
                path: "treeSelect",
                name: "treeSelect",
                meta: {
                    title: "tree选择框",
                },
                component: () =>
                    import("@/views/Tree/TreeSelect.vue"),
            },
            {
                path: "vxeTree",
                name: "vxeTree",
                meta: {
                    title: "vxeTree表格",
                },
                component: () =>
                    import("@/views/Tree/VxeTree.vue"),
            },
        ]
    }
]

export default treeRouter