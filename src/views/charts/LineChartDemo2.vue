<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-28 17:37:57
-->
<template>
  <div class="chart-container">
    <LineChart
    height="100%"
      width="100%"
    />
  </div>
</template>

<script>
import LineChart from './components/LineChart2.vue';

  export default {
    name:'LineChart2',
    components: {LineChart},
    props:{},
    data () {
      return {

      };
    },


    computed: {},

    created() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>