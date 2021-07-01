<!--
 * @Description: app-child
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-01 11:33:57
-->
<template>
    <div>
        <h3>子组件</h3>
        <div>父组件传递过来的名称: {{ name }}</div>
        <div>父组件传递过来的年龄: {{ age }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: ['name', 'age'],
    components: {},
    created() {

    },
    mounted() {
        this.$emit('start2'); // 父组件 say2
    },
}
</script>