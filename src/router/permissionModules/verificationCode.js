/*
 * @Description: VerificationCode 验证码 router
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 14:09:13
 */
import Layout from '@/layout/index.vue'

const codeRouter = [
    {
        path: '/verificationCode',
        component: Layout,
        redirect: 'noredirect',
        name: 'verificationCode',
        meta: {
            title: '验证码',
            // icon: '#iconchart1'
        },
        children: [
            {
                path: "code",
                name: "code",
                meta: {
                    title: "验证码",
                },
                component: () =>
                    import(/* webpackChunkName: "Transtion" */ "@/views/VerificationCode/index.vue"),
            },
        ]
    }
]

export default codeRouter