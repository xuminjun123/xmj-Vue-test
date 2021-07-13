/*
 * @Description: toast.js
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-13 15:41:48
 */
import Vue from "vue";
import { duration } from 'moment';
import Toast from './ToastChild.vue'
const ToastConstructor = Vue.extend(Toast);
function showToast(text) {
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
    });

    document.body.appendChild(toastDom.$el);
    toastDom.show = true;
    toastDom.text = text; // 此处可以修改 值
    
    // 2秒关闭 toast
    setTimeout(()=>{
        toastDom.show = false
    },2000)
};
export default  showToast;