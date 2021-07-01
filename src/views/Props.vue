<!--
 * @Description: $props 、$attrs、$listerns -- Test
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-01 11:30:15
-->
<template>
  <div>
    <h1>props、属性、事件传递</h1>
    <app-parent test="123" :name="name" :age="age" v-on:start1="say1" @start2="say2"></app-parent>
  </div>
</template>

<script>
import AppParent from '../components/AppParent.vue';
export default {
  data() {
    return {
      name: '传给父组件的值',
      age: '18'
    };
  },
  components: {
    AppParent
  },
  methods: {
    say1() {
      console.log('第一个。。。。。say1');
    },
    say2() {
      console.log('第二个。。。。。say2');
    }
  }
}
</script>