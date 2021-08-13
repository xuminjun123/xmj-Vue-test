/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 21:17:13
 */
import Layout from '@/layout/index.vue'

const chartsRouter = [
    {
        path: '/other',
        component: Layout,
        redirect: 'noredirect',
        name: 'other',
        meta: {
            title: '其他',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: 'elScrollBar',
                component: () =>
                    import(
                        '@/views/Other/elScrollBar.vue'
                    ),
                name: 'elScrollBar',
                meta: {
                    title: 'elScrollBar',
                    //   noCache: true
                }
            },
            {
                path: 'ifShort',
                component: () =>
                    import(
                        '@/views/Other/ifShort.vue'
                    ),
                name: 'ifShort',
                meta: {
                    title: 'ifShort',
                    noCache: true
                }
            },
            {
                path: 'isMobile',
                component: () =>
                    import(
                        '@/views/Other/isMobile.vue'
                    ),
                name: 'isMobile',
                meta: {
                    title: 'isMobile',
                    noCache: true
                }
            },

            {
                path: 'mountedFn',
                component: () =>
                    import(
                        '@/views/Other/mounted.vue'
                    ),
                name: 'mountedFn',
                meta: {
                    title: 'mounted',
                    noCache: true
                }
            },

            {
                path: 'scssTest',
                component: () =>
                    import(
                        '@/views/Other/scssTest.vue'
                    ),
                name: 'scssTest',
                meta: {
                    title: 'scssTest',
                    noCache: true
                }
            },

            // {
            //     path: 'toast',
            //     component: () =>
            //         import(
            //             '@/views/Other/toast.vue'
            //         ),
            //     name: 'toast',
            //     meta: {
            //         title: 'toast',
            //         noCache: true
            //     }
            // },
            {
                path: 'word',
                component: () =>
                    import(
                        '@/views/Other/word.vue'
                    ),
                name: 'word',
                meta: {
                    title: 'word',
                    noCache: true
                }
            },
            { 
                path: 'cssTest',
                component: () =>
                    import(
                        '@/views/Other/cssTest.vue'
                    ),
                name: 'cssTest',
                meta: {
                    title: 'cssTest',
                    noCache: true
                }
            },

            { 
                path: 'publicFind',
                component: () =>
                    import(
                        '@/views/Other/publicFind.vue'
                    ),
                name: 'publicFind',
                meta: {
                    title: 'publicFind',
                    noCache: true
                }
            }
        ]
    }
]

export default chartsRouter
