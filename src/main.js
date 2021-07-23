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

// await-to-js 处理aysnc/await 
import awaitToJs from "await-to-js"
Vue.prototype.$awaitToJs = awaitToJs

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
