<!--
 * @Description: echarts 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-18 09:12:23
-->
<template>
  <div class="wrapper">
    <el-card class="box-card">
      <div class="chart-wrapper">
        <h1 style="text-align: center">应用统计访问</h1>
        <bar-chart
          class="applicationBar"
          :seriesData="seriesData1"
          :xAxisData="xAxisData1"
          :seriesName="seriesName1"
        />
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="chart-wrapper">
        <h1 style="text-align: center">应用统计访问 line - chart</h1>
        <line-chart
          class="applicationBar"
          :chartData="chartData"
          :seriesData="seriesData1"
          :xAxisData="xAxisData1"
          :seriesName="seriesName1"
        />
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="chart-wrapper">
        <h1 style="text-align: center">应用统计访问</h1>
        <pie-chart
          class="applicationBar"
          :seriesData="seriesData1"
          :xAxisData="xAxisData1"
          :seriesName="seriesName1"
        />
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="chart-wrapper">
        <h1 style="text-align: center">应用统计访问</h1>
        <raddar-chart
          class="applicationBar"
          :seriesData="seriesData1"
          :xAxisData="xAxisData1"
          :seriesName="seriesName1"
        />
      </div>
    </el-card>

  </div>
</template>

<script>
import BarChart from "@/views/dashboard/BarChart";
import LineChart from './dashboard/LineChart.vue';
import PieChart from './dashboard/PieChart.vue';
import RaddarChart from './dashboard/RaddarChart.vue';
export default {
  name: "echarts",
  components: {
    BarChart,
    LineChart,
    PieChart,
    RaddarChart,
  },
  props: {},
  data() {
    return {
      seriesName1: "访问数", // hover 显示的 seriesName
      seriesData1: ["100", "100", "1000"],
      xAxisData1: ["sex", "name", "age"],

      chartData:{
        expectedData:"1324321",
        actualData:"2212312"
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
