<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-10 15:55:59
-->
<template>
    <div>
        <h1>县区地图</h1>
        <CountyChart></CountyChart>
    </div>
</template>

<script>
import CountyChart from '@/views/charts/components/CountyChart';

export default {
    name: 'CountyChartDemo',
    components: { 
        CountyChart
     },
    props: {},
    data() {
        return {

        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {},

    watch: {}

}

</script>
<style lang='' scoped>

</style>