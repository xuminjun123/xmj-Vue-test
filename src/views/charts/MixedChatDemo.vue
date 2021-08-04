<!--
 * @Description: 混合图表
 * @Author: ZY
 * @Date: 2021-01-08 19:27:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-25 14:44:02
-->
<template>
  <div class="chart-container">
    <MixedChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script>
  import BarChart from "@/views/charts/components/BarChart";
import MixedChart from '@/views/charts/components/MixedChart'
export default {
  name:'MixedChartDemo',
  components: {
    MixedChart
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
