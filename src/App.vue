<!--
 * @Description:  addRoutes
  {
    path: "/AddRouterTest",
    name: "AddRouterTest",
    meta: {
      title: "AddRouterTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddRouterTest.vue"),
  },
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
-->
<template>
  <div id="app">
    <!-- router-view -->
    <tab-view></tab-view>
    <!-- <router-view></router-view> -->
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <svg-icon icon-class="bug" color="blue" />

    <svg class="icon svg-icon" aria-hidden="true">
      <use xlink:href="#icon-share-code" />
    </svg>

    <!-- 路由 -->
    <div id="nav">
      <router-link to="/index-home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/dialog">el-dialog</router-link>|
      <router-link to="/Scroller">el- scrollbar</router-link>|
      <router-link to="/css">css - test</router-link>|
      <router-link to="/PublicFind">public-test</router-link>|
      <br />
      <router-link to="/Watch">Watch</router-link>|
      <router-link to="/Watch2">Watch2</router-link>|
      <router-link to="/Mounted">mounted</router-link>|
      <router-link to="/Params">params</router-link>|
      <router-link to="/Get">get</router-link>|
      <router-link to="/IsMobile">isMobile</router-link>|
      <br />
      <router-link to="/IfShort">IfShort</router-link>|
      <router-link to="/vuexActTest1">vuexActTest1</router-link>|
      <router-link to="/vuexMulTest2">vuexMulTest2</router-link>|
      <router-link to="/LoadshTest">LoadshTest</router-link>|
      <router-link to="/KeepAlive">KeepAlive</router-link>|
      <br />
      <router-link to="/CodeDemo">CodeDemo</router-link>|
      <router-link to="/ForceUpdate">ForceUpdate</router-link>|
      <router-link to="/Slot">Slot</router-link>|
      <router-link to="/Moment">Moment</router-link>|
      <router-link to="/Login">Login</router-link>|
      <router-link to="/Replace">Replace</router-link>|
      <br />
      <router-link to="/Istrue">Istrue</router-link>|
      <router-link to="/Transition">Transition</router-link>|
      <router-link to="/SwitchTest">SwitchTest</router-link>|
      <router-link to="/backTop">backTop</router-link>|
      <router-link to="/PostMessage">PostMessage</router-link>|
      <router-link to="/Select">Select</router-link>|
      <!-- <router-link to="/TabView">TabView</router-link> -->
      <router-link to="/Word">Word</router-link>|
      <br />
      <router-link to="/Echarts">Echarts</router-link>|
      <router-link to="/Exports">Exports</router-link>|
      <router-link to="/Table">Table</router-link>|
      <router-link to="/Tab">Tab 标签</router-link>|
      <router-link to="/Scroll">Scroll</router-link>|
      <router-link to="/AudioTest">AudioTest</router-link>|
      <router-link to="/ScssTest">ScssTest</router-link>|
      <br />
      <router-link to="/ComputedTest">ComputedTest</router-link>|
      <router-link to="/LookDocument">LookDocument</router-link>|
      <router-link to="/redirect">redirect</router-link>|
      <router-link to="/ESTest">ESTest</router-link>|
      <router-link to="/farm">farm</router-link>|
      <router-link to="/Props">Props</router-link>|
      <br />
      <router-link to="/Process">Process</router-link>|
      <router-link to="/AddRouterTest">AddRouterTest</router-link>|
      <router-link to="/ShowPwd">ShowPwd</router-link>|
      <router-link to="/Flex">flex</router-link>|
      <router-link to="/oddVueDraggableTest">oddVueDraggableTest</router-link>|
      <router-link to="/EvenVueDraggableTest">EvenVueDraggableTest</router-link>|
      <br />
      <router-link to="/Sort">Sort</router-link>|
      <router-link to="/Transtion">Transtion</router-link>|
      <router-link to="/Toast">Toast</router-link>|
      <router-link to="/Cesium">Cesium</router-link>|
      <router-link to="/Tree">Tree</router-link>|
      <router-link to="/Directive">Directive</router-link>|
      <router-link to="/TouchBottom">TouchBottom</router-link>|
      <br />
      <router-link to="/Screenfull">Screenfull</router-link>|
      <router-link to="/Size">Size</router-link>|     
      <router-link to="/QuillEditor">QuillEditor</router-link>|
      <router-link to="/Animate">Animate</router-link>|
    </div>
    <router-view />
  </div>
</template>
<script>
import Breadcrumb from './views/Breadcrumb.vue';
import TabView from './views/TabView.vue';
export default {
  name: "vueName",
  components: { Breadcrumb, TabView },
  props: {},
  data() {
    return {
      list: []
    };
  },
  watch: {
    // $route:{
    //   handler(val,oldval){
    //     console.log("新路由信息", val);//新路由信息
    //     console.log("老路由信息",oldval);//老路由信息
    //   },
    //   // 深度观察监听
    //   deep: true,
    //   immediate:true
    // },
  },
  computed: {},
  methods: {
  },
  created() {
   },
  mounted() {
   
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  // display: flex;
  // flex-direction: column;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
