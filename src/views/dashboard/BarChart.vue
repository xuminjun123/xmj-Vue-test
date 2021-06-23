<template>
  <div :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
// import echarts from 'echarts'
const echarts = require("echarts");
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 5000;

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "250px",
    },

    seriesData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    xAxisData: {
      type: Array,
      default: () => {
        return [];
      },
    },

    seriesName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      chart: null,
      str: "",
    };
  },

  watch: {
    seriesData: {
      handler(n, o) {
        this.$nextTick(() => {
          if (this.xAxisData && this.seriesData) {
            this.initChart();
          }
        });
      },
      deep: true,
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    // initChart () {
    //   this.chart = echarts.init(this.$el)
    //   this.chart.setOption({
    //     tooltip: {  // 提示框组件
    //       trigger: 'axis', // 触发类型 可选 'item' | 'axis' | 'none'
    //       axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //       },
    //       formatter: function (params) {  // 提示条显示的数据格式 params对应下面的series
    //         let item = params && params[0].data
    //         return `日期: ${item.label} <br/> 金额: ${item.value} 元`
    //       }
    //     },
    //     legend: { // 图例组件
    //       // data: ['工资'],
    //       // itemGap: 5  // 间隔
    //     },
    //     grid: {  // 直角坐标系内绘图网格
    //       top: '12%',
    //       left: '1%',
    //       right: '42px',
    //       bottom: '15%',
    //       containLabel: true
    //     },
    //     dataZoom: [ // 滑块
    //       {
    //         type: 'slider', // 滑动条型数据区域缩放组件
    //         show: true,
    //         startValue: this.xAxisData && (this.xAxisData.length - 1) > 6 ? (this.xAxisData.length - 1) - 6 : 0,
    //         endValue: this.xAxisData && this.xAxisData.length - 1,
    //         minValueSpan: 5,
    //         maxValueSpan: 11,
    //         // zoomLock: true, // 是否锁定选择区域（或叫做数据窗口）的大小
    //         handleSize: 24, // 滑块尺寸
    //         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',  // 滑块的图标
    //         dataBackground: {
    //           lineStyle: {
    //             color: '#ff7e45',
    //             opacity: '0.8'
    //           },
    //           areaStyle: {
    //             color: '#ff7e45'
    //           }
    //         },
    //         handleStyle: {  // 滑块样式
    //           color: {
    //             type: 'linear',
    //             x: 0,
    //             y: 0,
    //             x2: 0,
    //             y2: 1,
    //             colorStops: [{
    //               offset: 0, color: '#ff7e45' // 0% 处的颜色
    //             }, {
    //               offset: 1, color: '#ffba67' // 100% 处的颜色
    //             }],
    //             global: false // 缺省为 false
    //           }
    //         }
    //       },
    //       {
    //         type: 'inside', // 内置型数据区域缩放组件
    //         minValueSpan: 1,
    //         maxValueSpan: 11,
    //         zoomLock: true
    //       }
    //     ],
    //     xAxis: [{ // 直角坐标系 grid 中的 x 轴
    //       name: '月份',
    //       nameLocation: 'end',
    //       type: 'category',
    //       xAxisIndex: this.xAxisData && [(this.xAxisData.length - 1)],
    //       data: this.xAxisData || [], // 类目数据，在类目轴（type: 'category'）中有效。
    //       axisTick: { // 是否显示坐标轴刻度。
    //         alignWithLabel: true  // 刻度线和标签对齐
    //       }
    //     }],
    //     yAxis: [{
    //       name: '金额',
    //       type: 'value',
    //       axisTick: {
    //         show: false
    //       }
    //     }],
    //     series: [{  // 系列列表。每个系列通过 type 决定自己的图表类型
    //       color: ['#ff7e45'],
    //       barCategoryGap: '20px',
    //       name: '工资',
    //       type: 'bar',  // 柱状/条形图
    //       stack: 'vistors',
    //       barWidth: '60%',        // 柱条宽度可固定 可百分比
    //       data: this.seriesData || [], // 数据传进来
    //       animationDuration,
    //       itemStyle: {
    //         normal: {
    //           shadowColor: 'rgba(0, 0, 0, 0.3)',  // 阴影
    //           shadowBlur: 10,
    //           shadowOffsetX: '8',
    //           // barBorderRadius: [10, 10, 0, 0],   // 圆角
    //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //             offset: 0,
    //             color: '#ff7e45'
    //           },
    //           {
    //             offset: 1,
    //             color: '#ffba67'
    //           }
    //           ])
    //         }
    //       }
    //     }]
    //   })
    // }

    initChart() {
      this.chart = echarts.init(this.$el);

      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },

          //   formatter: (params) => {  // 提示条显示的数据格式 params对应下面的series
          //     console.log(params)
          //     params.forEach((item) => {
          //       this.str = `应用: ${item.axisValue} <br/> 访问数: ${item.data} 次`
          //     })
          //     return this.str
          //   }
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            //   data: ['应用1', '应用2', '应用3', '应用4'],
            data: this.xAxisData, // 类目数据，在类目轴（type: 'category'）中有效。
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: true,
            },
          },
        ],
        series: [
          {
            //   name: '访问数',
            name: this.seriesName,
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            //   data: [79, 52, 200, 334],
            data: this.seriesData, // 数据传进来
            animationDuration,
          },
        ],
      });
    },
  },
};
</script>
