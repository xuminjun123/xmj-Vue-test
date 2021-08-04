
import Vue from 'vue'
import Vuex from 'vuex'

import { store as permission, } from '@/store/modules/permission'
import { store as user } from '@/store/modules/user'
import { createLogger } from 'vuex'
 // vuex 持久化插件
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence 插入基于会话存储的持久性
plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = new Vuex.Store({
    modules: {
        //   app,
        user,
        //   tagsView,
        permission,
        //   settings
    },
    // getters
    plugins
})


export function useStore() {
  return store 
}
