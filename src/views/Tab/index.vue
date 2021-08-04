<!--
 * @Description: tab 标签页
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-22 10:27:40
-->
<template>
    <div class="wrapper">
        <component :is="com"></component>    
        <button
            @click="tab(index)"
            :class="[{ active: currentIndex == index }, 'btn']"
            v-for="(item,index) in btnNames"
            :key="index"
        >{{ item }}</button>
    </div>
</template>

<script>
import ComA from '@/components/ComA.vue';
import ComB from '@/components/ComB.vue';
export default {
    name: 'tab',
    components: {ComA, ComB},
    props: {},
    data() {
        return {
            com:'ComA',
            currentIndex: 0,
            btnNames: ["标签页1", "标签页2"]
        };
    },
    watch: {
        currentIndex:{
            handler(newValue){
                newValue == 0 ?   this.com ='ComA' : this.com ='ComB'
            }
        }
    },
    computed: {},
    methods: {
        tab(index) {
            console.log('index', index);
            this.currentIndex = index
        },
    },
    created() { },
    mounted() {
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
    .active {
        background: red;
    }
}
</style>