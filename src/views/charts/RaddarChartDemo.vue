<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 01:04:37
-->
<template>
    <div class="chart-container">
        <RaddarChart height="100%" width="100%" />
    </div>
</template>
  
  <script>
import RaddarChart from "@/views/charts/components/RaddarChart";
export default {
    name: 'RaddarChartDemo',
    components: {
        RaddarChart
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
  