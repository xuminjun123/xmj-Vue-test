<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-04 16:44:12
-->
<template>
  <div style="height: 600px">
    <el-scrollbar ref="myScrollbar" class="scroll-container">
      <slot></slot>
    </el-scrollbar>

    <button @click="sendLy">发送</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendLy() {
      let div = this.$refs.myScrollbar;
      this.$nextTick(() => {
        if ((div.scrollTop = div.scrollHeight)) {
          console.log("lllllllll");
        }
      });
    },
    handleScroll(e) {},

    // handleScroll(e) {
    // //   console.log("e==>", e);
    // //   let _self = this;
    // //   let scrollbarEl = this.$refs.myScrollbar.wrap;
    // //   scrollbarEl.onscroll = function () {
    // //     if (scrollbarEl.scrollTop > 200) {
    // //     console.log('滚动到 》 200');

    // //       _self.visible = true;
    // //     } else {
    // //         console.log('滚动到 《 200');
    // //       _self.visible = false;
    // //     }
    // //   };

    // },

    /** 监听到底部 */
    // handleScroll(e) {
    //   //变量scrollTop是滚动条滚动时，距离顶部的距离
    //   var scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   //变量windowHeight是可视区的高度
    //   var windowHeight =
    //     document.documentElement.clientHeight || document.body.clientHeight;
    //   //变量scrollHeight是滚动条的总高度
    //   var scrollHeight =
    //     document.documentElement.scrollHeight || document.body.scrollHeight;
    //   //滚动条到底部的条件
    //   if (scrollTop + windowHeight == scrollHeight) {
    //     //写后台加载数据的函数
    //     console.log(
    //       "距顶部" +
    //         scrollTop +
    //         "可视区高度" +
    //         windowHeight +
    //         "滚动条总高度" +
    //         scrollHeight
    //     );
    //   }
    // },
  },
};
</script>
<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 300px;
    }
    /deep/ .el-scrollbar__thumb {
      background-color: red;
    }
  }
}
</style>
