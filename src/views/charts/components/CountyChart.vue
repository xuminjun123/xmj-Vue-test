<!--
 * @Description: 县级 chart
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-10 14:57:55
-->
<template>
    <div>
        <h1>县级 chart</h1>
        <div>
            <el-button @click="back">返回省市地图</el-button>
            <div ref="mapbox" style="width:800px;height:600px;margin:0 auto"></div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import CountyMap from "@/utils/echarts/json/citys/china-main-city-map";
const echarts = require("echarts");
// import json from "@/utils/echarts/json/citys/110100.json"
// const cityModules = require.context('@/utils/echarts/json/citys', true, /\.json$/)
// let cityNames = [];
// cityModules.keys().forEach((key) => {
//     console.log('key', key);
//     cityNames = cityNames.concat(cityModules(key).default)
// })

const option = {
    title: {
        // 标题内容
        text: '县级疫情图',
        link: 'https://baidu.com',
        subtext: '123456',
        sublink: 'https://baidu.com'
    },
    series: [{
        name: '确诊人数',
        type: 'map',
        // 告诉echarts渲染一个地图
        // map: "110100",
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
};

export default {
    name: 'countyCharts',
    components: {},
    props: {},
    data() {
        return {
            mycharts: null
        };
    },


    computed: {},

    created() { },

    mounted() {
        this.mycharts = echarts.init(this.$refs.mapbox)
        // echarts.registerMap("110100", json);
        // option.series[0].mapType = "110100";

        // this.mycharts.setOption(option);
        this.handler()
    },

    methods: {
        back() {
            this.$router.push({
                name: 'cityChartDemo'
            })
        },

        async handler() {
            let name = this.$route.query.name;
            let code = CountyMap[name];
            console.log('code', name, code);

            let mapJson = await Axios.get(
                `https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/citys/${code}.json`
            );
            console.log('--->', mapJson.data);

            echarts.registerMap(code, mapJson.data);
            option.series[0].mapType = code;
            this.mycharts.setOption(option);
            // chart.off("mapselectchanged", this.onCityClick);
            // this.chart.hideLoading();
        }
    },

    watch: {}

}

</script>
<style lang='' scoped>

</style>