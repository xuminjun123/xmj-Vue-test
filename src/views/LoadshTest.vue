<!--
 * @Description:  loadsh练习使用

（1）对于键盘事件，当用户键入非常频繁，但我们又必须要在一定时间（阀值）内执行处理函数的时候。
    例如：一些网页游戏的键盘事件。
（2）对于鼠标移动和窗口滚动，鼠标的移动和窗口的滚动会带来大量的事件，但是在一段时间内又必须看到页面的效果。
    例如：对于可以拖动的div，如果使用debounce，那么div会在拖动停止后突然跳到目标位置；这时就需要使用throttle。


 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 12:50:07
-->
<template>
  <div class="wrapper">
    <p v-if="!(obj1 === obj2)">深克隆:</p>
    <input type="text" name id v-model="value" />
    <button @click="debounceTab">debounce点击</button>
    <button @click="tab">throttle点击</button>
  </div>
</template>

<script>
import { cloneDeep, debounce ,throttle} from 'lodash';
export default {
  name: 'vueName',
  components: {},
  props: {},
  data() {
    return {
      obj1: { name: 'xx' },
      obj2: {},
      value: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 节流 1.2秒内只打印一次
    tab: throttle(()=> {
      console.log("throttle");
    }, 1200, {
      leading: true,
      trailing: false
    }),

    // 防抖 等待1.2秒才会打印debounce，即延迟之前不执行函数，而是在延迟之后执行。
    debounceTab: debounce(()=> {
      console.log("debounce");
    }, 1200, {
      leading: true,
      trailing: false
    })
  },
  created() { },
  mounted() {
    // this.obj2 = this.obj1;
    // console.log("是否引入相同内存 1 ",  this.obj2 === this.obj1 );  // true
    this.obj2 = cloneDeep(this.obj1)
    console.log("是否引入相同内存 2 ", this.obj2 === this.obj1);  // false 深拷贝
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
