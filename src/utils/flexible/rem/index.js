/*
 * @Description:  上面的代码与安装的flexible.js不同 修改了
 * @param :       用不到的文件  
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 09:28:31
 */


function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width / dpr > 540) {
        width = width * dpr
    }
    var rem = width / 10
    docEl.style.fontSize = rem + 'px'
    flexible.rem = win.rem = rem
}
