<!--
 * @Description:  keep alive 组件　Ｃ
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 12:02:26
-->
<template>
    <div class="wrapper">组件Ｃ</div>
</template>

<script>
export default {
    name: 'comC',
    components: {},
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() {
        console.log('组件Ｃ渲染');
    },
    destroyed() {
        console.log('组件Ｃ销毁');
    },
    activated(){
        console.log('组件C- actived');
        
    },
    deactivated(){
        console.log('组件C- deactivated');
        
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>