<!--
 * @Description: 淡入淡出 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-09 20:46:30
-->
<template>
    <div>
        <button v-on:click="Show">点击动画</button>
        <transition-group name="test">
            <h1 v-if="show" :key="1">hello</h1>
            <h2 v-if="show" :key="2">hello world!</h2>
        </transition-group>
    </div>
</template>
  
  <script>


export default {
    name: 'Test',
    data() {
        return { show: true }
    },
    methods: {
        Show() {
            this.show = !this.show;
        }
    }

}
</script>
  
<style scoped>
.test-enter,
.test-leave-to {
    opacity: 0;
}
.test-enter-to,
.test-leave {
    opacity: 1;
}
.test-enter-active,
.test-leave-active {
    transition: all 2s;
}
</style>