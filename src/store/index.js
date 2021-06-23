/*
 * @Description: sidebar - Size
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
 */
import Vue from "vue";
import Vuex from "vuex";
// vuex 日志插件
import { createLogger } from "vuex"   

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: { 
    collapse: false, 
    count:0,
    isLogin:false,
    id:1,
  },
  getters: {
    collapsed: state => state.collapse,
    count: state => state.count,
    isLogin:  state => state.isLogin,
    id:  state => state.id,
  },
  mutations: {
    SET_COLLAPSE: (state, isCollapse) => {
      state.collapse = isCollapse;
    },
    setCount:(state, count)=>{
      state.count = count;
    },
    setIsLogin:(state, isLogin)=>{
      state.isLogin = isLogin;
    },
    // payload
    setId:(state, payload )=>{
      state.id = payload.id;
    }
  },
  actions: {
    commitCollapse({ commit }, collapse) {
      commit("SET_COLLAPSE", collapse);
    },
    commitCount({ commit }, count) {
      commit("setCount", count);
    },
    commitIsLogin({ commit }) {
      return new Promise((resolve, reject) => {
       setTimeout(()=>{
         // 2秒之后登录
        commit("setIsLogin", true);
       },2000)
        resolve("登录成功")
      })
    },
    commitId({ commit },id) {
      commit("setId", id);
    },
  },
  modules: {},

  strict: debug, // 使用严格模式 ，只能在multation下修改state
  plugins: debug ? [ createLogger() ] : []
});
