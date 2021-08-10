/*
 * @Description:  main.js
 * @param :
 * @return:
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/core"; // 管理第三方库、全局变量

// import '@/utils/flexible'  // css->rem

// vxe-table 全部包
// import 'xe-utils'
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'
// Vue.use(VXETable)

// 给 vxe-table 实例挂载内部对象，例如：
// Vue.prototype.$XModal = VXETable.modal
// Vue.prototype.$XPrint = VXETable.print
// Vue.prototype.$XSaveFile = VXETable.saveFile
// Vue.prototype.$XReadFile = VXETable.readFile

import Loading from "./utils/loading";
import '@/permission'

// G2
import 'vue-g2'
import '@/views/G2/registerG2Components.js'

import '@/style/index.scss' // 


/** 大转盘/九宫格 插件 */
import LuckDraw from 'vue-luck-draw'
Vue.use(LuckDraw)
// 按需引入
// import { LuckyWheel, LuckyGrid } from 'vue-luck-draw'
// Vue.components('LuckyWheel', LuckyWheel)
// Vue.components('LuckyGrid', LuckyGrid)

// Cesium
import Cesium from 'cesium'
// Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZTMyOTYxOS1mNWM5LTQwMTQtYWIyNS02OGYzMjczZmVjNzgiLCJpZCI6NjMzMTgsImlhdCI6MTYyODA1NDM0MH0.Z1UrupVAQoHK1VhNyggncX-QXiRlPmbZhOI2JLj9lR0'
// import 'cesium/Widgets/widgets.css' 
// import 'cesium/Build/Cesium/Widgets/widgets.css'
Vue.prototype.Cesium=Cesium;

// /animate动画库
import animated from 'animate.css' 
Vue.use(animated)

// 文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//  其中 Vue.use(VueQuillEditor, /* { default global options } */)
//  第二个参数是 Quill 的配置。在这里我只改了默认的 placeholder 提示语，
//  所以最后一行应该是：
// https://quilljs.com/docs/configuration/ 详情见
Vue.use(VueQuillEditor, {
  placeholder: '请输入内容',
});


// 百度map 
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'adMRpuTBZ6DMnFkjpfs9o83xUSSLYNTG'
})

// 高德地图
import VueAMap from 'vue-amap';
VueAMap.initAMapApiLoader({
  key: 'b0297aad19e1708bab922c5b381960db',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});


Vue.use(VueAMap);

// 聊天插件
import MChat from '@maybecode/m-chat'
Vue.use(MChat)

import $del from "@/components/Modal/Del";
Vue.use($del);


import toast from "@/components/Toast/toast.js";
Vue.prototype.$toast = toast;

// import echarts from "echarts";
// Vue.component("chart", echarts);
// Vue.prototype.$echarts = echarts;

import "./assets/icons"; // icon

// 引入 loading 自定义指令
import loadingDirective from '@/utils/directive/loading.js'
Vue.directive('myloading', loadingDirective)
// 自定义指令 idel
import isDel from "@/utils/directive/index.js"
Vue.use(isDel);

// 自定义指令 防抖
import debounce from '@/utils/lodash/debounce2.js'
Vue.use(debounce)

// await-to-js 处理aysnc/await 
import awaitToJs from "await-to-js"
Vue.prototype.$awaitToJs = awaitToJs

// 滚动插件
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);

// 粒子特效
// import VueParticles from 'vue-particles'  
// Vue.use(VueParticles)  

import Tip from "./utils/tip";
Vue.prototype.$tip = Tip;
Vue.prototype.$load = Loading;
// template 中简化打印
Vue.prototype.$log = window.console.log
// 阻止启动生产消息
Vue.config.productionTip = false; 

// 只适用于开发模式和支持 performance.mark API 的浏览器上
// 场景:监听性能
Vue.config.performance = true 

import Element from "element-ui";
import Cookies from 'js-cookie'
// 设置Element  Dialog点击其他地方不关闭。
Element.Dialog.props.closeOnClickModal.default = false;
Vue.use(Element, {
  size: Cookies.get("size") || "medium" // set element-ui default size
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
