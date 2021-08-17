<!--
 * @Description: 显示密码子组件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-06 10:23:45
-->
<template>
    <div class="wrapper">
        {{value}}
        {{$log(value)}}
        {{show}}
        <el-input type="text" @input="handler" :value="value" v-if="show"/>
        <el-input type="password" @input="handler" :value="value" v-else/>
        <!-- <input type="text"  @input="handler" :value="value"/> -->
    </div>
</template>

<script>
export default {
    name: 'ShowPwdTest',
    components: {},
    props: {
        show:{
            type:Boolean,
            default:true
        },
        value:{
            type:String,
            default:""
        }
    },
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {
        handler(e){
            this.$emit("input", e || "")
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

