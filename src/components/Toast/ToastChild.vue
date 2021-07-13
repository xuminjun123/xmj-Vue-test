<!--
 * @Description: toast 组件 动态组件创建
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-13 15:27:51
-->
<template>
    <div class="container" v-if="show">
        <div>{{text}}</div>
    </div>
</template>

<script>

export default {
    name: 'ToastChild',
    components: {},
    props: {
        show:{
            type: Boolean,
            default: true
        },
        text:{
            type: String,
            default : 'toast'
        }
    },
    data() {
        return {
        };
    },
    computed: {},
    created() { },
    mounted() { },
    methods: {
        
    },
    watch: {}
}

</script>
<style lang='scss' scoped>
.container {
    position:fixed;
    top:calc(50% -20px);
    left: calc(50% - 50px);
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color:rgba(0,0,0,0.8);
    border-radius: 10px;
    box-sizing: border-box;
}
</style>
