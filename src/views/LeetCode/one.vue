<!--
 * @Description: 给定两个数组，编写一个函数来计算它们的交集。
 * @Date: 2021-08-09 16:45:40
-->
<!-- 输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2] -->

<template>
    <div>
        <el-button @click="fn">计算</el-button>
    </div>
</template>

<script>

export default {
    name: 'oneDay',
    components: {},
    props: {},
    data() {
        return {
            num: null
        };
    },


    computed: {},

    created() { },

    mounted() {
    },

    methods: {
        fn() {
            let nums1 = [1, 2, 2, 1];
            let nums2 = [2, 3]

            let num = nums1.filter(function (val) {
                return nums2.indexOf(val) > -1
            })
            console.log('num', num);
        }
    },

    watch: {}

}

</script>
