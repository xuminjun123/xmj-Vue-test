<!--
 * @Description: websocket 使用
 * @param :  兼容性 https://juejin.cn/post/6844903602528469005  
     - 判断浏览器是否支持 WebSocket;
     - 组件加载的时候 连接websocket，在组件销毁的时候 断开websocket；
     - 后端接口需要引入 socket 模块，否则不能实现连接；

        websocket重连
      -   https://juejin.cn/post/6996945401655853069

 * @Author: xmj
 * @Date: 2021-08-13 16:47:24
-->
<template>
    <div class="test"></div>
</template>
  
  <script>
export default {
    data() {
        return {
            websock: null,
        }
    },
    methods: {
        // 初始化weosocket
        initWebSocket() {
            if (typeof (WebSocket) === "undefined") {
               this.$tip.error("您的浏览器不支持WebSocket")
            } else {
                const wsurl = "ws://127.0.0.1:8080";    // 后端地址
                // 实例化 WebSocket
                this.websock = new WebSocket(wsurl);
                // 监听 WebSocket 连接
                this.websock.onopen = this.websocketonopen;
                // 监听 WebSocket 错误信息
                this.websock.onerror = this.websocketonerror;
                // 监听 WebSocket 消息
                this.websock.onmessage = this.websocketonmessage;

                this.websock.onclose = this.websocketclose;
            }
        },
        // 连接建立之后执行send方法发送数据
        websocketonopen() {
            console.log("socket连接成功")
            let actions = { "test": "12345" };
            this.websocketsend(JSON.stringify(actions));  
        },
        // 连接建立失败重连
        websocketonerror() {
            console.log("连接错误");
            this.initWebSocket();
        },
        // 数据接收
        websocketonmessage(e) {
            const resdata = JSON.parse(e.data);
            console.log(resdata);
        },
        // 数据发送
        websocketsend(Data) {
            this.websock.send(Data);
        },
        // 关闭
        websocketclose(e) {
            console.log('WebSocket 断开连接', e);
            this.$tip.error("WebSocket 断开连接")
        },
    },
    beforeMount() {
        this.initWebSocket();
    },
    destroyed() {
        //离开路由之后断开 websocket 连接
        this.websock.close();
    },
}
</script>
  