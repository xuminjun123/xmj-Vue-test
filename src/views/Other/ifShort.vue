<!--
 * @Description:  if 简写
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 16:08:14
-->
<template>
    <div class="wrapper">
        {{param}}
        <if-short-child @getProp="getProp"></if-short-child>
    </div>
</template>

<script>
import IfShortChild from '@/components/IfShortChild.vue';
export default {
    name: 'vueName',
    components: {IfShortChild},
    props: {},
    data() {
        return {
           // 接收的参数
           param: ""
        };
    },
    watch: {},
    computed: {},
    methods: {
        getProp(e){
            console.log('接收的数据',e);
            this.param = e
        }
    },
    created() { },
    mounted() {

     }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
