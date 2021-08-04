<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:09:34
-->
<template>
    <div class="wrapper">
        <mounted-fn @hook:mounted="tab"></mounted-fn>
    </div>
</template>

<script>
import MountedFn from '@/components/MountedFn.vue';
export default {
    name: 'mountedFn',
    components: { MountedFn },
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {
        tab() {
            // 子组件需要用到父组件的tab函数
            console.log('tab====>事件', );
        }
    },
    created() { },
    mounted() { }
};
</script>

