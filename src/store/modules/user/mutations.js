/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-26 09:34:30
 */
import { UserMutationTypes } from './mutation-types'
export const mutations = {
    [UserMutationTypes.SET_TOKEN](state, token) {
        state.token = token
    },

    [UserMutationTypes.SET_NAME](state, name) {
        state.name = name
    },

    [UserMutationTypes.SET_AVATAR](state, avatar) {
        state.avatar = avatar
    },

    [UserMutationTypes.SET_INTRODUCTION](state, introduction) {
        state.introduction = introduction
    },

    [UserMutationTypes.SET_ROLES](state, roles) {
        state.roles = roles
    },

    [UserMutationTypes.SET_EMAIL](state, email) {
        state.email = email
    }

}