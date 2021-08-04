<!--
 * @Description: 折线图案例
 * @Author: ZY
 * @Date: 2021-01-08 19:27:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-28 17:18:16
-->
<template>
  <div class="chart-container">
    <LineChart
      height="100%"
      width="100%"
      :chartData="chartData"
      :seriesData="seriesData1"
      :xAxisData="xAxisData1"
      :seriesName="seriesName1"
    />
  </div>
</template>

<script>
import LineChart from '@/views/charts/components/LineChart'
export default {
  name: 'LineCartDemo',
  components: {
    LineChart
  },
  data() {
    return {
      seriesName1: "访问数", // hover 显示的 seriesName
      seriesData1: ["100", "200", "300"],
      xAxisData1: ["sex", "name", "age"],

      chartData: {
        expectedData: "123122",
        actualData: "2212312"
      },

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
