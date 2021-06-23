<!--
 * @Description: 动态指令和参数使用过
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:30:30
-->
<template>
    <div class="wrapper">
        <active-params @[someEvent]="handleSomeEvent" :[someProps]="xx"></active-params>
    </div>
</template>

<script>
import ActiveParams from '../components/ActiveParams.vue';
const active = true;
export default {
    name: 'vueName',
    components: { ActiveParams },
    props: {},
    data() {
        return {
            xx:"name",
            active: true,
            someEvent: active ? "click" : "dbclick",
            // someProps: active ? "name" : "age"
            someProps: "name" 
        };
    },
    watch: {},
    computed: {},
    methods: {
        handleSomeEvent(){
            console.log('someCondition',);
            if(someEvent == "click"){
                console.log('qqqqq');
                
            }
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
