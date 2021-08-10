/*
 * @Description: 自定义loading组件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-10 17:14:32
 */
import Vue from 'vue'
// 引入 loading 组件
import myLoading from '@/components/Loading/index.vue';
// 定义 loading 指令
const loadingDirective = {
  inserted: function(el, binding) {
    // 创建 loading 组件构造函数
    const LoadingCtor = Vue.extend(myLoading)
    // new 一个 loading组件实例
    const loadingInstance = new LoadingCtor()
    // 组件挂载
    el.instance = loadingInstance.$mount()
    // 传入值为 true 时才展示
    if (binding.value) {
      // 将组件挂载到绑定指令的元素上
      append(el)
    }
  },
  update(el, binding) {
    // 值更新时进行操作
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
};
function append(el) {
  el.appendChild(el.instance.$el)
}
function remove(el) {
  el.removeChild(el.instance.$el)
}
export default loadingDirective
