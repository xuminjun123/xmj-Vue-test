<!--
 * @Description:  工作台
  - 免费API 接口 
    https://juejin.cn/post/6844903982276542478
 * @Author: xmj
 * @Date: 2021-07-26 11:45:58
-->
<template>
  <div class="wrapper">
    <el-card>
      <h4 class="content">{{ content }}</h4>
    </el-card>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <h4>工作台</h4>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>WorkBench</span>
            </div>
            <svg-icon iconClass="illustration" :styleObject="styleObject"></svg-icon>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <h4>今日天气</h4>
          <el-card class="box-card">
            <iframe
              width="232"
              height="80"
              frameborder="0"
              scrolling="no"
              hspace="0"
              src="https://i.tianqi.com/?c=code&a=getcode&id=8&icon=1"
            ></iframe>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <!-- 语言翻译 -->
    <!-- <el-card>
      <h4>语言翻译</h4>
      <el-input v-model="value"></el-input>
       {{tst}}
      <el-button @click="translation">翻译</el-button>
    </el-card> -->
  </div>
</template>

<script>
const jinrishici = require('jinrishici');
import axios from 'axios';
import { PermissionActionType } from '@/store/modules/permission/action-types'
import { useStore } from '@/store'
export default {
  name: 'dashboard',
  components: {},
  props: {},
  data() {
    return {
      content: null, // 美句
      store: useStore(),
      routes: [],
      styleObject: {},
      // 时间轴数组
      timelines: [
        { timestamp: '', title: '', time: '' }
      ],
      value:null,
      tst: null

    };
  },

  computed: {},
  created() { this.rout() },
  mounted() {
    this.getContent()
  },

  methods: {
    // Generate accessible routes map based on role 生成基于角色的可访问路由图
    rout() {
      this.routes = this.store.state.permission.routes
      this.store.dispatch(PermissionActionType.ACTION_SET_ROUTES, ['admin'])
    },

    // 今日美句
    async getContent() {
      await jinrishici.load(result => {
        this.content = result.data.content

      }, errData => {
        console.log(errData);
      });

    },
    // 翻译
    translation (){
 
    }

  },

  watch: {}

}

</script>
<style lang='scss' scoped>
.content {
  text-align: center;
}
</style>