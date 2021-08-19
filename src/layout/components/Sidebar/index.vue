<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-03-09 15:44:19
-->
<template>
  <div class="sideWrap">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :unique-opened="false" mode="vertical">
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
        <!-- :base-path="route.path" -->
          <!-- :is-collapse="isCollapse" -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { useStore } from '@/store'
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'sideBar',
  components: {
    SidebarItem
  },
  props: {},
  data() {
    return {
      store:useStore()
    };
  },


  computed: {
    routes(){
      console.log('routes-->', this.store);
      return this.store.state.permission.routes 
      // return this.store.state.permission.routes
    }
  },

  created() { },

  mounted() { },

  methods: {},

  watch: {}

}

</script>
<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100vh - 100px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
