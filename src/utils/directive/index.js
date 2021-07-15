/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-15 09:57:45
 */
// el、binding、vnode 和 oldVnode
const isDel = {
    install: function (Vue, options) {
        Vue.directive("isdel", {
            bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
                // console.log('el---->', el);

            },
            inserted: function (el) { // 只触发一次
                // el.focus()
                //  console.log('el---->', el);
                 console.log('text--->', );
                let text = el.innerText;
                if(!text) {
                    el.remove()
                }
            },
            update: function () {  // 更新 触发多次

            },

            //  指令所在组件的 VNode 及其子 VNode 全部更新后调用。
            componentUpdated: function () {

            },
            // 只调用一次，指令与元素解绑时调用。
            unbind: function(){

            }
        })
    }
};

module.exports = isDel;

