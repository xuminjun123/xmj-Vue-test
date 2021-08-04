<!--
 * @Description: 自定义指令学习
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-15 09:56:37
-->
<template>
    <div>
        <!-- <el-input type="text" placeholder="我是全局自定义指令"  v-focus> 自定义指令 -study</el-input> -->
        <!-- <div v-isdel>{{text}}</div> -->
        <div>
            {{text}}
        </div>
        <div v-isdel v-for="(item,index) in list" :key="index" class="list">
            <p>{{item.id}}</p>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            text:'',
            list:[
                {id:1,title:'标题1'},
                {id:2,title:'标题2'},
                {id:3,title:'标题3'},
                {id:'',title:''}
            ]
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
.list {
    border: 1px solid darkblue;
}
</style>