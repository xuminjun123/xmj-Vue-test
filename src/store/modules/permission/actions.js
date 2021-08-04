/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-26 10:34:27
 */
import { PermissionActionType } from './action-types'
import { asyncRoutes } from '@/router'
import { PermissionMutationType } from './mutation-types'
const hasPermission = (roles, route) => {
    if (route.meta && route.meta.roles) {
        return roles.some(role => {
            if (route.meta?.roles !== undefined) {
                return route.meta.roles.includes(role)
            }
        })
    } else {
        return true
    }
}

export const filterAsyncRoutes = (routes, roles) => {
    const res = []
    routes.forEach(route => {
        const r = { ...route }
        if (hasPermission(roles, r)) {
            if (r.children) {
                r.children = filterAsyncRoutes(r.children, roles)
            }
            res.push(r)
        }
    })
    return res
}



// beforEach 内部调用
export const actions = {
    [PermissionActionType.ACTION_SET_ROUTES]({ commit }, roles) {
        let accessedRoutes
        if (roles.includes('admin')) {
            accessedRoutes = asyncRoutes
        } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }

        commit(PermissionMutationType.SET_ROUTES, accessedRoutes)
    }
}
