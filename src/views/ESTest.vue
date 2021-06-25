<!--
 * @Description:  ES12 新特性
                - replaceAll: 是返回一个全新的字符串，
                  所有符合匹配规则的字符都将被替换掉，
                  替换规则可以是字符串或者正则表达式。
                -  
 * @Author: xmj
 * @Date: 2021-06-25 14:03:00
-->
<template>
    <div class="wrapper">
        <div>ES12 新特性</div>
    </div>
</template>

<script>
export default {
    name: 'ES12',
    components: {},
    props: {},
    data() {
        return {
            str: "王某人叫我本比，-- 本"
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
        // 表达式  ||=   
        let a = 1;
        let b = 2;
        /**
         *  a ||= b;  //等价于 a = a || (a = b)
         *  - 当LHS值不存在时，将RHS变量赋值给LHS
         */
        console.log('a ||= b', a ||= b); // a 
        console.log('================================================');

        // 表达式   &&=  
        /**
        *  a  &&= b;  // 等价于 a = a && (a = b)
        *  - 当LHS值存在时，将RHS变量赋值给LHS
        */
        console.log('a &&= b', a &&= b); // b
        console.log('================================================');

        // 表达式   ??=  
        /**
        *  a  ??= b;  // 等价于 a = a ?? (a = b)
        *  - 当LHS值为null或者undefined时，将RHS变量赋值给LHS
        */
        let c;
        let d = 3;
        console.log('c &&= d', c ??= d); // d

    },
    mounted() {
        let replaceStr = this.str.replace('本', '笨')
        console.log('replaceStr', replaceStr);   // 王某人叫我笨比，-- 本

        //replace使用正则匹配所有
        console.log(this.str.replace(/本/g, '笨')) // 王某人叫我笨比，-- 本

        //使用replaceAll
        let replaceAllStr = this.str.replaceAll('本', '笨')
        console.log(replaceAllStr)                //  王某人叫我笨比，-- 笨

    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
