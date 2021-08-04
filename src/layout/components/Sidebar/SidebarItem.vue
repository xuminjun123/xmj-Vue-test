<!--
 * @Description: 侧边栏item
 * scy😊
-->
<template>
  <div
    v-if="!item.hidden"
    :class="[
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel }
    ]"
  >
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <SidebarItemLink v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(theOnlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isFirstLevel }"
        >
          <!-- <svg v-if="theOnlyOneChild.meta.icon" class="icon" aria-hidden="true" font-size="17px">
            <use :xlink:href="theOnlyOneChild.meta.icon" />
          </svg>-->

          <span v-if="theOnlyOneChild.meta.title">{{ theOnlyOneChild.meta.title }}</span>
        </el-menu-item>
      </SidebarItemLink>
    </template>

    <!-- popper-append-to-body -->
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <!-- <svg v-if="item.meta && item.meta.icon" class="icon" aria-hidden="true" font-size="16px">
          <use :xlink:href="item.meta.icon" />
        </svg>-->
        <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'

export default {
  name: 'SidebarItem',
  components: { SidebarItemLink },

  props: {
    // route 对象
    item: {
      type: Object,
      required: true
    },
    isCollapse: {
      type: Boolean,
      required: false
    },
    isFirstLevel: {
      type: Boolean,
      default: false
      // required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data() {
    // this.onlyOneChild = null
    return {}
  },
  created() {
    // console.log('item------->', this.item.meta.title );

  },
  computed: {
    // 是否显示跟路由
    alwaysShowRootMenu() {
      if (this.item.meta && this.item.meta.alwaysShow) {
        return true
      } else {
        return false
      }
    },

    showingChildNumber() {
      if (this.item.children) {
        const showingChildren = this.item.children.filter((item) => {
          if (item.meta && item.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showingChildren.length
      }
      return 0
    },

    theOnlyOneChild() {
      // if (showingChildNumber.value > 1) {
      //   return null
      // }
      // console.log('showingChildNumber,', showingChildNumber);

      if (this.showingChildNumber > 1) {
        return null
      }
      if (this.item.children) {
        for (const child of this.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child
          }
        }
      }
      // console.log('this.item', this.item);

      // 如果没有子节点，返回本身并删除路径，
      // 因为这个。 basePath已经包含项目的路径信息  
      // If there is no children, return itself with path removed,
      // because this.basePath already conatins item's path information
      return { ...this.item, path: '' }
    }
  },
  // resolvePath 
  methods: {
    resolvePath(routePath) {

      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-submenu.is-active > .el-submenu__title {
  // color: $subMenuActiveText !important;
  color: #f4f4f5;
}

.full-mode {
  .nest-menu .el-submenu > .el-submenu__title,
  .el-submenu .el-menu-item {
    // min-width: $sideBarWidth !important;
    // #background-color: $subMenuBg !important;
    min-width: 300px !important;
    // background-color: #1f2d3d !important;

    &:hover {
      background-color: #001528 !important;
    }
  }
  .el-menu-item {
    & > span {
      display: inline-block;
      padding-left: 5px;
    }
  }
  .el-submenu {
    overflow: hidden;

    & > .el-submenu__title {
      .el-submenu__icon-arrow {
        display: none;
      }

      & > span {
        padding-left: 5px;
      }
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0px !important;

        .el-submenu__icon-arrow {
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
svg {
  margin-right: 16px;
}

.simple-mode {
  svg {
    margin-left: 20px;
  }
}
</style>
