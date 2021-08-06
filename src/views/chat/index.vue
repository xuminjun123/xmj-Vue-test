<!--
 * @Description: 聊天插件
    - https://juejin.cn/post/6990998089783836708?from=main_page
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 10:11:53
-->
<template>
    <div>
        <m-chat
            ref="mChat"
            :messages="messages"
            @submit="submit"
            :loadMore="loadMore"
            height="80vh"
        ></m-chat>
    </div>
</template>

<script>

export default {
    name: 'chat',
    components: {},
    props: {},
    data() {
        return {
            messages:[]
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {},

    watch: {}

}

</script>
<style lang='scss' scoped>
.wrapper {
    width: 300px;
    height: 800px;
}
</style>