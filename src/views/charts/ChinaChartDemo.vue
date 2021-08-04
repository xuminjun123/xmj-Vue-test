<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 01:02:39
-->
<template>
    <div class="chart-container">
        <ChinaChart height="100%" width="100%" />
    </div>
</template>
  
  <script>
import ChinaChart from "@/views/charts/components/ChinaChart";
export default {
    name: 'ChinaChartDemo',
    components: {
        ChinaChart
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
}
</style>
  