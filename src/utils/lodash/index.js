/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-30 11:07:21
 */
import debounce from './debounce'

const install = function(Vue) {
  Vue.directive('debounce', debounce)
}

if (window.Vue) {
  window['debounce'] = debounce
  Vue.use(install); // eslint-disable-line
}

debounce.install = install
export default debounce
