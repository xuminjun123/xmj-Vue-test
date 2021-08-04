<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-26 11:45:58
-->
<template>
  <div>
    dashboard 页面
    {{ routes }}
  </div>
</template>

<script>
import { PermissionActionType } from '@/store/modules/permission/action-types'
import { useStore } from '@/store'
export default {
  name: 'dashboard',
  components: {},
  props: {},
  data() {
    return {
      store: useStore(),
      routes: []
    };
  },

  computed: {},
  created() { this.rout()},
  mounted() {
    
  },

  methods: {
    // Generate accessible routes map based on role 生成基于角色的可访问路由图
    rout() {
      this.routes = this.store.state.permission.routes
      this.store.dispatch(PermissionActionType.ACTION_SET_ROUTES, ['admin'])
    }

  },

  watch: {}

}

</script>
<style lang='' scoped>

</style>