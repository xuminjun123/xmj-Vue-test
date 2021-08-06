<!--
 * @Description: echarts - world
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 10:20:19
-->
<template>
    <div id="main" style="width: 90%; height: 600px;"></div>
</template>

<script>
// import * as echarts from 'echarts';
const echarts = require("echarts");
import 'echarts-gl';
export default {
    name: 'echartsGl',
    components: {},
    props: {},
    data() {
        return {
            chart: null
        };
    },


    computed: {},

    created() { },

    mounted() {
        this.initChart()
    },

    methods: {
        initChart() {
            this.chart = echarts.init(document.getElementById('main'));

            this.chart.setOption({
                globe: {

                    baseTexture: '@/asset/echartsGlImages/world.jpg',
                    heightTexture: '@/asset/echartsGlImages/elev_bump_4k.jpg',
                    displacementScale: 0.1,
                    displacementQuality: 'high',
                    silent: true,

                    shading: 'realistic',
                    realisticMaterial: {
                        // detailTexture: 'asset/iron-rusted4/iron-rusted4-basecolor.jpg',
                        metalness: '@/asset/echartsGlImages/iron-rusted4-metalness.jpg',
                        roughness: '@/asset/echartsGlImages/iron-rusted4-roughness.jpg',
                        textureTiling: [8, 4]
                    },

                    postEffect: {
                        enable: true
                    },
                    temporalSuperSampling: {
                        enable: true
                    },
                    light: {
                        ambient: {
                            intensity: 0
                        },
                        main: {
                            intensity: 0,
                            shadow: true
                        },
                        ambientCubemap: {
                            texture: './pisa.hdr',
                            exposure: 2,
                            diffuseIntensity: 1,
                            specularIntensity: 2
                        }
                    },
                    viewControl: {
                        // autoRotate: false
                    }
                },
                series: []
            });
        },
    }
}
</script>