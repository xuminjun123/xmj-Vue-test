/*
 * @Description: 防抖
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-30 11:06:43
 */
import _debounce from 'lodash/debounce'
let fn = null
const debounce = {
  inserted: function(el, binding) {
    fn = _debounce(binding.value, 1200, {
      leading: true,
      trailing: false
    })
    el.addEventListener('click', fn)
  },
  unbind: function(el) {
    fn && el.removeEventListener('click', fn)
  }
}
export default debounce
