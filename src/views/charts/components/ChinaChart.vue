
<!--
 * @Description: 中国地图点
 * @Author: ZY
 * @Date: 2021-01-08 19:27:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-10 15:04:01
-->
<template>
  <div class="hello">
    <el-alert
      title="双击跳到省市"
      type="success"
      effect="dark"
      :closable="false"
      style="margin-bottom:20px"
    ></el-alert>

    <div ref="mapbox" style="width:800px;height:600px;margin:0 auto"></div>
    <!-- 初始化echarts需要有个宽高的盒子 -->
  </div>
</template>
 
<script>
// import echarts from 'echarts'
// import 'echarts/map/js/china.js'
import "@/utils/china/china.js"
const echarts = require("echarts");
// import jsonp from 'jsonp'
const option = {
  title: {
    // 标题内容
    text: '中国疫情图',
    link: 'https://baidu.com',
    subtext: '123456',
    sublink: 'https://baidu.com'
  },
  series: [{
    name: '确诊人数',
    type: 'map',
    // 告诉echarts渲染一个地图
    map: 'china',
    // 告诉echarts渲染中国地图
    label: {
      // 设置地区汉字
      show: true,
      color: '#333',
      fontSize: 10
    },
    itemStyle: {
      // 地图区域样式
      areaColor: '#eee'
    },
    roam: false,  // 禁止 鼠标滚动
    // 鼠标滚轮效果
    zoom: 1.2,
    // 地图放大缩小
    emphasis: {
      // 鼠标经过地图和字体样式
      label: {
        color: '#fff',
        fontSize: 12
      },
      itemStyle: {
        areaColor: '#ccc'
      }
    },
    // 展示后台给的数据，必须格式（name:xxx;value:xxx）
    data: [
      { name: "四川", value: "100" },
      { name: "青海", value: "1000" },
      { name: "江西", value: "300" }
    ]
  }],
  visualMap: [{
    // 区域显示颜色
    type: 'piecewise',
    show: true,
    // splitNumber: 4
    pieces: [
      { min: 10000 },
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 9 },
      { max: 0 }
    ],
    inRange: {
      // 区域图标样式
      symbol: 'rect',
      color: ['#FFFFFF', '#FFAA85', '#FF7B69', '#CC2929', '#8C0D0D', '#660208']
    }
  }],
  tooltip: {
    // 鼠标放上去显示内容
    trigger: 'item'
  },
  toolbox: {
    // 下载
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: { readyOnly: false },
      restore: {},
      saveAsImage: {}
    }
  }
}

export default {
  name: 'chinaChart',
  data() {
    return {
      mycharts: null
    }
  },
  mounted() {
    // this.getData()
    this.mycharts = echarts.init(this.$refs.mapbox)
    // 初始化echarts
    this.mycharts.setOption(option);

    this.handler()
  },
  methods: {
    handler() {
      // 中文省市名 ，这么需要解决浏览器中文乱码问题
      // encodeURIComponent() 函数编码的 URI 进行解码。
      this.mycharts.on("click", (params) => {
        let name = encodeURIComponent(params.name)
        this.$router.push({
          name: "cityChartDemo",
          query: {
            name: name
          }
        })
      }, false)
    },
  }
}
</script>

<style lang='scss' scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>