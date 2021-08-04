<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:55:46
-->
<template>
    <div class="wrapper">
        <get-data :styleObject="styleObject"></get-data>
        <button @click="change">点击</button>
    </div>
</template>
  
  <script>
import GetData from '@/components/GetData.vue';
export default {
    name: 'vueName',
    components: { GetData },
    props: {},
    data() {
        return {
            num: 10,
            styleObject: {
                color: "red",
                fontSize: "100px"
            }

        };
    },
    watch: {},
    computed: {},
    methods: {
        change() {
            console.log('num之前的值===>', this.$options.data().num);
            console.log('num改变的值===>', this.num);
        }
    },
    created() {
        let arr = [1, 23, 4, 5]
        let _arr = arr.slice()
        console.log('arr===>', _arr);
        console.log('is----->', arr === _arr);


    },
    mounted() {
        this.num = 1000
    }
};
</script>
  <style lang="scss" scoped>
.wrapper {
}
</style>
  