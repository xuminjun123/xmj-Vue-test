<!--
 * @Description:  keep alive 组件Ａ
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 12:02:05
-->
<template>
    <div class="wrapper">组件Ａ {{ num }} -- {{number}}</div>
</template>

<script>
export default {
    name: 'comA',
    components: {},
    props: {
        number :{
            type:Number,
            default: 1
        }
    },
    data() {
        return {
            num:10
        };
    },
    watch: {
        number: {
            handler(newVal){
                console.log('new',newVal);
                
            },
            deep:true,
            immediate:true
        }
    },
    computed: {},
    methods: {
        changeNum(){
            setTimeout(()=>{
                this.num = 100
            },600)
        }
    },
    created() { },
    mounted() {
        this.changeNum();
        console.log('组件Ａ渲染');
    },
    destroyed() {
        console.log('组件A销毁');
    },

    activated(){
        console.log('组件Ａ- actived'); 
    },
    deactivated(){
        console.log('组件Ａ- deactivated');
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>