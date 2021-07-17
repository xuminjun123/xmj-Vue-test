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
import Loading from "./utils/loading";

// Cesium
// import Cesium from 'cesium/Cesium'
// import 'cesium/Widgets/widgets.css' 
// Vue.prototype.Cesium=Cesium;

import $del from "@/components/Modal/Del";
Vue.use($del);


import toast from "@/components/Toast/toast.js";
Vue.prototype.$toast = toast;

// import echarts from "echarts";
// Vue.component("chart", echarts);
// Vue.prototype.$echarts = echarts;

import "./assets/icons"; // icon
// import "./permission"; // 权限管理

// 自定义指令
import isDel from "@/utils/directive/index.js"
Vue.use(isDel);

// 滚动插件
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);

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
