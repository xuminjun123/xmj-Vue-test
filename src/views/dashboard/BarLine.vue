<!--
 * @Description: 柱状图和折线图组合使用
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-12 11:54:55
-->
<template>
    <div id="main" style="width: 80%; height: 400px;"></div>
</template>

<script>
const echarts = require("echarts");
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            data: [480, 550, 590, 700, 810, 850, 840]
        };
    },


    computed: {},

    created() { },

    mounted() {
        this.init()
    },

    methods: {
        init() {
            let myChart = echarts.init(document.getElementById('main'));

            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'   
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false }, // 数据视图
                        magicType: { show: true, type: ['line', 'bar'] }, // line-bar 切换
                        restore: { show: true }, //  还原
                        saveAsImage: { show: true }   // 下载
                    }
                },
                legend: {
                    data: ['军费支出', '军费占支出比']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        name: '年',
                        data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            //这个是倾斜角度，也是考虑到文字过多的时候，方式覆盖采用倾斜
                            //  rotate: 30,
                            //这里是考虑到x轴文件过多的时候设置的，如果文字太多，默认是间隔显示，设置为0，标示全部显示，当然，如果x轴都不显示，那也就没有意义了
                            interval: 0
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '亿美元',

                        //下面是显示格式化，一般来说还是用的上的
                        axisLabel: {
                            formatter: '{value} 包'
                        }
                    }
                ],
                series: [
                    {
                        name: '军费支出',
                        type: 'bar',
                        barWidth: '20%',
                        itemStyle: {
                            normal: {
                                color: (params) => {
                                    let maxNum = Math.max(...this.data) ; // 最大值
                                    let minNum = Math.min(...this.data) ; // 最小值
                                    return params.data === maxNum ? 'red' :   params.data === minNum ? 'yellow' :'#9BCA63'
                                },
                                
                                label: {
                                    show: true,
                                    position: 'top',
                                    //   formatter: '{c}'
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        data: this.data
                    },
                    {
                        name: '军费占支出比',
                        type: 'line',
                        symbol: 'star',/*拐点样式*/
                        symbolSize: 8, //拐点大小
                        itemStyle: {
                            normal: {
                                color: '#D2691E'    //拐点颜色                            
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: '#D2691E'  //折线颜色
                            }
                        },
                        data: [480, 750, 610, 588, 620, 650, 760]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    watch: {}
}

</script>
<style lang='' scoped>

</style>
