<!--
 * @Description: keep alive 使用 。组件comA，comB，comC
                 - 只会缓存在当前路由下，切换到别的路由就会失效
                 - 当前路由下 ，组件随意切换 ，均会保存状态
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 11:58:00
-->
<template>
    <div class="wrapper">
        <button @click="state = 'A'">A</button>
        <button @click="state = 'B'">B</button>
        <button @click="state = 'C'">C</button>
        <!-- <com-a v-if="state === 'A'"></com-a>
        <com-b v-if="state === 'B'"></com-b>
        <com-c v-if="state === 'C'"></com-c>-->
        
        <keep-alive>
            <com-a v-if="state === 'A'"></com-a>
            <com-b v-if="state === 'B'"></com-b>
            <com-c v-if="state === 'C'"></com-c>
        </keep-alive>
        <!-- 组件频繁切换使用 v-show 
        <com-a v-shwo="state === 'A'"></com-a>
        <com-b v-show="state === 'B'"></com-b>
        <com-c v-show="state === 'C'"></com-c>
        -->
    </div>
</template>

<script>
import ComA from '../components/ComA.vue';
import ComB from '../components/ComB.vue';
import ComC from '../components/ComC.vue';
export default {
    name: 'vueName',
    components: { ComA, ComB, ComC },
    props: {},
    data() {
        return {
            state: 'A',
       
        };
    },
    watch: {},
    computed: {},
    methods: {
      
    },
    created() { },
    mounted() { },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
