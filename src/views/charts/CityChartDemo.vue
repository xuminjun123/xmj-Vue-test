<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 01:02:39
-->
<template>
    <div class="chart-container">
        <CityChart height="100%" width="100%" />
    </div>
</template>
  
  <script>
import CityChart from "@/views/charts/components/CityChart";
export default {
    name: 'CityChartDemo',
    components: {
        CityChart
    },
    data() {
        return {
            
        }
    },
    mounted() {
      

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
  