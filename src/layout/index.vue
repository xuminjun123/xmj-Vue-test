<!--
 * @Description: app 布局入口
 * @Author: ZY
 * @Date: 2020-12-17 15:32:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-30 11:04:07
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container" />
    <div class="main-container hasTagsView">
      <div class="fixed-header"></div>
      <AppMain />
    </div>
  </div>
</template>

<script>
// import { useStore } from '@/store'
import {
  AppMain,
  Sidebar
} from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
  },
  data() {
    return {
      // store: useStore()
    }

  },

  method: {
    handleClickOutside() {

    }
  },
  computed: {
    classObj() {
      return {
      }
    }
  },
  watch: {

  },
  created() {
    // addEventListenerOnResize()
  }

}
</script>

<style lang="scss" scoped>
@import "@/style/_mixins.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  // margin-left: $sideBarWidth;
  margin-left: 300px;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  // width: $sideBarWidth !important;
  width: 300px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #ffffff !important;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  // width: calc(100% - #{$sideBarWidth});
  width: calc(100% - 300px);
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px);
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform 0.28s;
    // width: $sideBarWidth !important;
    width: 300px !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      // transform: translate3d(-$sideBarWidth, 0, 0);
      transform: translate3d(-300px, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}
</style>
