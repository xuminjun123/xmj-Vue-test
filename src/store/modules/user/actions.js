/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-30 18:40:19
 */

import { state } from './state'
import { mutations } from './mutations'
import { UserActionTypes } from './action-types'
import { UserMutationTypes } from './mutation-types'
import { PermissionActionType } from '@/store/modules/permission/action-types'
// 登录的 httpApi
// import { loginRequest, userInfoRequest } from '@/apis/user'
// import { removeToken, setToken } from '@/utils/cookies'

import router from '@/router'

// 登录
export const actions = {
    async [UserActionTypes.ACTION_LOGIN]({ commit }, userInfo) {
        // mock  accessToken: "admin-token"
        let token = 'admin-token';
        window.sessionStorage.setItem('token', token);
        window.localStorage.setItem('token', token);
        commit(UserMutationTypes.SET_TOKEN, token);

        // let { username, password } = userInfo
        // username = username.trim()
        // await loginRequest({ username, password }).then(async (res) => {
        //     if (res?.code === 0 && res.data.accessToken) {
        //         setToken(res.data.accessToken)
        //         commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)// token标识
        //     }
        // }).catch((err) => {
        //     console.log(err)
        // })
    },

    // 移除token
    [UserActionTypes.ACTION_RESET_TOKEN]({ commit }) {
        // removeToken()
        window.localStorage.removeItem('token')
        commit(UserMutationTypes.SET_TOKEN, '')
        commit(UserMutationTypes.SET_ROLES, [])
    },

    // 获取 userInfo
    async [UserActionTypes.ACTION_GET_USER_INFO]({ commit }) {
        // if (state.token === '') {
        //     throw Error('token is undefined!')
        // }

        let userInfo = {
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "email": "admin@test.com",
            "id": 0,
            "introduction": "超级管理员账号",
            "name": "Super Admin",
            "password": "any",
            "phone": "1234567890",
            "roles": ["admin"],
            "username": "admin"
        }
        commit(UserMutationTypes.SET_ROLES, userInfo.roles)
        commit(UserMutationTypes.SET_NAME, userInfo.name)
        commit(UserMutationTypes.SET_AVATAR, userInfo.avatar)
        commit(UserMutationTypes.SET_INTRODUCTION, userInfo.introduction)
        commit(UserMutationTypes.SET_EMAIL, userInfo.email)

        // commit(PermissionActionType.ACTION_SET_ROUTES, userInfo.roles)
        return userInfo
        // await userInfoRequest().then((res) => { // userInfo //roles: ["admin"]
        //     if (res?.code === 0) {
        //         commit(UserMutationTypes.SET_ROLES, res.data.roles)
        //         commit(UserMutationTypes.SET_NAME, res.data.name)
        //         commit(UserMutationTypes.SET_AVATAR, res.data.avatar)
        //         commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction)
        //         commit(UserMutationTypes.SET_EMAIL, res.data.email)
        //         return res
        //     } else {
        //         throw Error('Verification failed, please Login again.')
        //     }
        // })
    },

    // 改变 role
    // async [ACTION_CHANGE_ROLES]({ commit }, role) {
    //     const token = role + '-token'
    //     const store = useStore()
    //     commit(SET_TOKEN, token)
    //     window.sessionStorage.setItem('token', token);
    //     window.localStorage.setItem('token', token);
    //     await store.dispatch(ACTION_GET_USER_INFO, undefined)
    //     store.dispatch(ACTION_SET_ROUTES, state.roles)
    //     store.state.permission.dynamicRoutes.forEach((item) => {
    //         router.addRoute(item)
    //     })
    // },

    // 登出
    [UserActionTypes.ACTION_LOGIN_OUT]({ commit }) {
        // removeToken()
        window.localStorage.removeItem('token')
        commit(UserMutationTypes.SET_TOKEN, '')
        commit(UserMutationTypes.SET_ROLES, [])
        // resetRouter()
    }
}
