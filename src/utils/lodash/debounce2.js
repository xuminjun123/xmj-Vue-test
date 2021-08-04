/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-30 11:27:36
 */
import _debounce from 'lodash/debounce'
let fn = null
const debounce = {
    install: function (Vue, options) {
        Vue.directive("debounce", {
            bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
                // console.log('el---->', el);

            },
            inserted: function (el, binding) { // 只触发一次
                const { value } = binding
                console.log('value--->', value);
                fn = _debounce(value, 2000, {
                    leading: true,
                    trailing: false
                })
                el.addEventListener('click', fn)
            },
            
            update: function () {  // 更新 触发多次

            },

            //  指令所在组件的 VNode 及其子 VNode 全部更新后调用。
            componentUpdated: function () {

            },
            // 只调用一次，指令与元素解绑时调用。
            unbind: function () {
                fn && el.removeEventListener('click', fn)
            }
        })
    }
};

module.exports = debounce;

