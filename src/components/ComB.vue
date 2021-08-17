<!--
 * @Description:  keep alive 组件　Ｂ
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 12:02:21
-->
<template>
    <div class="wrapper">组件B</div>
</template>

<script>
export default {
    name: 'comB',
    components: {},
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {
        
    },
    methods: {},
    created() { },
    mounted() {
        console.log('组件Ｂ渲染');
    },
    destroyed() {
        console.log('组件Ｂ销毁');
    },
    activated(){
        console.log('组件B- actived');
    },
    deactivated(){
        console.log('组件B- deactivated');
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>