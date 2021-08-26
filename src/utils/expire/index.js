/*
 * @Description: 过期时间 判断
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-20 13:37:07
 */
export function watchEvent(eventName, time) {
    let latest_operate = Date.now();
    if (eventName instanceof Array) {
        new Promise((resolve, reject) => {
            eventName.forEach((name) => {
                window.addEventListener(name,  function () {
                    console.log('过期 时间', name, Date.now() - latest_operate);
                    if (Date.now() - latest_operate > time) {
                        console.log('距离上次操作超时');
                        console.log('跳转登录');
                        resolve();
                        // window.removeEventListener(name, fn)

                    } else {
                        latest_operate = Date.now()
                    }

                })
            })
        })

    }
}