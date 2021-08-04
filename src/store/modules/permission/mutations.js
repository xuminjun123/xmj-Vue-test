/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-26 10:30:01
 */


import { PermissionMutationType } from './mutation-types'
import { constantRoutes } from '@/router'

export const mutations = {
  [PermissionMutationType.SET_ROUTES](state, routes) {
    state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }

}
