
<template>
    <div class="hello">
        <el-button @click="back">返回中国地图</el-button>
        <div ref="mapbox" style="width:800px;height:600px;margin:0 auto"></div>
        <!-- 初始化echarts需要有个宽高的盒子 -->
    </div>
</template>
  
<script>

const cityModules = require.context('@/utils/echarts/js', true, /\.js$/)
let cityNames = [];
cityModules.keys().forEach((key) => {
    console.log('key', key);
    cityNames = cityNames.concat(cityModules(key).default)
})

const echarts = require("echarts");

const option = {
    title: {
        // 标题内容
        text: '省市疫情图',
        link: 'https://baidu.com',
        subtext: '123456',
        sublink: 'https://baidu.com'
    },
    series: [{
        name: '确诊人数',
        type: 'map',
        // 告诉echarts渲染一个地图
        map: "安徽",
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
        roam: true,
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
        data: [
            { name: "四川", value: "100" },
            { name: "青海", value: "1000" },
            { name: "江西", value: "300" }
        ]
        // 展示后台给的数据，必须格式（name:xxx;value:xxx）
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
    name: 'HelloWorld',
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            let name = decodeURIComponent(this.$route.query.name);  // url 解码
            // let name = this.$route.query.name;
            option.series[0].map = name
            console.log('name--->>>', option.series[0].map);
        })

        this.mycharts = echarts.init(this.$refs.mapbox)
        // 初始化echarts
        this.mycharts.setOption(option)
    },
    watch: {
        areaName: {
            handler(oldVal, newVal) {
                // if(newVal) {
                //     option.series[0].map = newVal
                // }else {
                //     option.series[0].map = '北京'
                // } 
                // console.log('oldVal', oldVal);
                // console.log('newVal', newVal);
            },
            immediate: true
        }
    },
    methods: {
        back(){
            this.$router.push({
                name:'chinaChartDemo'
            })
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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