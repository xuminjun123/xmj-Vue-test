<!--
 * @Description:  强制更新
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 17:45:59
-->
<template>
    <div class="wrapper">
        <p>{{ num }}</p>
        <button @click="change">点击</button>
        <button @click="forceUpdate">强制更新</button>
    </div>
</template>

<script>
export default {
    name: 'forceUpdate',
    components: {},
    props: {},
    data() {
        return {
            num: 0
        };
    },
    watch: {},
    computed: {},
    methods: {
        change() {
            let timer = setTimeout(() => {
                this.num = 100
            }, 2000)
            this.$once('hook:beforeDestroy', () => {
                clearTimeout(timer)
                timer = null
            })
        },
        forceUpdate(){
            this.$forceUpdate();
        }
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>