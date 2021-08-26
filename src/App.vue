<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 过期时间 3600000
const TIME = 1 // 1小时的时间戳
import { watchEvent } from "@/utils/expire"

import { useStore } from './store'
import { UserActionTypes } from './store/modules/user/action-types'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  //  监听路由判断 用户是否1小时未操作 
  watch: {
    '$route': {
      handler(val, oldval) {
        console.log(val);//新路由信息
        console.log(oldval);//老路由信息

        if (val) {
        
          // 清除登录信息 
          // useStore().dispatch(UserActionTypes.ACTION_LOGIN_OUT)
          // let token = useStore().state.user.token
          // console.log('token', token);

        }


      },
      // 深度观察监听
      deep: true,
      immediate: true
    },
  },
  methods: {

  },
  mounted() {
    // watchEvent(['mousemove', 'keyup'], 1000)
   
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>