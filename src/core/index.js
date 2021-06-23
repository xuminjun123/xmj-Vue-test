import Vue from "vue";
import "./lazy_use.js"; // 引入ElementUI
import Loading from "@/utils/loading"; // 加载效果
Vue.prototype.$load = Loading;
