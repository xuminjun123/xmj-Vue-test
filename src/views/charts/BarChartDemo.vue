<!--
 * @Description:  柱形图
 * @Author: xmj
 * @Date: 2021-07-25 00:49:07
-->
<template>
  <div class="chart-container">
    <h1 style="text-align: center">BarChart</h1>
      <BarChart
        height="90%"
        width="80%"
        :seriesData="seriesData1"
        :xAxisData="xAxisData1"
        :seriesName="seriesName1"
      />
    
  </div>
</template>

<script>
import BarChart from "@/views/charts/components/BarChart";
export default {
  name: 'BarChartDemo',
  components: {
    BarChart
  },
  data() {
    return {
      seriesName1: "访问数", // hover 显示的 seriesName
      seriesData1: ["100", "200", "300"],
      xAxisData1: ["sex", "name", "age"]
    }
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
