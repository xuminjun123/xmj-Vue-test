<!--
 * @Description: 触底加载
    v-infinite-scroll="load"

    - scrollbar 属性
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
        :view-class="viewClass"
        :view-style="viewStyle"
        :native="native"
        :tag="tag"
        :noresize="noresize"

 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-15 17:27:30
-->
<template>
    <div id="test" style="height:500px;">
      <el-scrollbar
        style="height:100%"
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
        :view-class="viewClass"
        :view-style="viewStyle"
        :native="native"
        :tag="tag"
        :noresize="noresize"
      >
        <ul>
          <li v-for="item in 100" :key="item">{{item}}</li>
        </ul>
      </el-scrollbar>
      <p class="red">注意:出现横向滚动条时,可在css中直接添加样式 
        .el-scrollbar__wrap{ overflow-x:hidden; }   
        或者在wrapClass设置 overflow-x:hidden   
        </p>
      <p class="red">注意: 1,滚动窗口高度必须固定,el-scrollbar设置height:100%</p>
      <p class="red">注意: 2,样式,style全局的,不能有scoped,否则不起作用</p>

    </div>
</template>

<script>
  export default {
    data(){
      return {
        //滚动区域层class
        wrapClass:{
          wrapClass:true
        },
        wrapStyle:{
          fontWeight:800
        },

        //滚动整体区域的class
        viewClass:{
          viewClass:true
        },
        viewStyle:{
          border:'1px solid #000000',
          boxSizing:'border-box'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true

      }
    }

  }
</script>

<style lang="scss" scoped>
  #test {
    /deep/ .el-scrollbar__wrap{ overflow-x:hidden; } 
    ul li{
     text-align: center;
     margin:20px 0;
   }
   .wrapClass{
     color:red;
     overflow-x: hidden;
   }
   .viewClass{
     background:#f5dab1;
   }
   .red{
     color:red;
   }
  }
  
</style>

