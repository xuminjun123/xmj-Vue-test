<!--
 * @Description: computed test
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-23 11:06:37
-->
<template>
    <div class="wrapper">
       -- {{list}}
       ---
        <div v-for="item in title" :key="item">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    props: {},
    data() {
        return {
           
        };
    },
    watch: {},
    computed: {
        list(){
            return "listas"
        },
        title(){
            return  ["item1","item2"]
        }
    },
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>