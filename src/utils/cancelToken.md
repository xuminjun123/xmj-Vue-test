<!--
 * @Description: 取消请求
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-04 15:51:16
-->
~~~ javascript
    /**
     * 如果请求带有repetitiveRequestLimit参数
     * 则会进行防止重复提交的操作
     * 利用axios的CancelToken
     */
  // 1. 初试化一个pending，用存放每一次请求
    const pending = {};
    // 2. 判断时候带有repetitiveRequestLimit参数，带有本参数才会开启。
    if (config.data.hasOwnProperty("repetitiveRequestLimit")) {
      // 3. 生成唯一一个key区分每一次请求
      const key = `${config.url}&${config.method}&${JSON.stringify(
        config.data
      )}`;
      // 4. 调用CancelToken方法
      config.cancelToken = new CancelToken((c) => {
        // 5. 判断是否是重复请求
        if (pending[key]) {
          if (Date.now() - pending[key] > 500) {
            // 超过0.5s，删除对应的请求记录，可以重新发起请求
            delete pending[key];
          } else {
            // 0.5s以内的重复请求，取消掉
            c("repeated");
          }
        }
      });
      // 6. 记录下发起请求的时间
      pending[key] = Date.now();
    }
~~~