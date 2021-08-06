<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lqc
 * @Date: 2020-05-28 15:36:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-06 09:55:25
 * @FilePath: \cesiumVueClean\src\components\CesiumViewer\index.vue
-->
<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>

import { Viewer, UrlTemplateImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

export default {
  mounted() {
    this.initViewer();
    this.addLayers();
  },
  methods: {
    initViewer() {
      const viewer = new Viewer('cesiumContainer', {
        geocoder: false,                // 地理位置搜索控件
        homeButton: false,              // 首页跳转控件
        sceneModePicker: false,         // 2D,3D和Columbus View切换控件
        baseLayerPicker: false,         // 三维地图底图切换控件
        navigationHelpButton: false,    // 帮助提示控件
        animation: false,               // 视图动画播放速度控件
        timeline: false,                // 时间轴控件
        fullscreenButton: false,        // 全屏控件
        infoBox: false,                 // 点击显示窗口控件
        selectionIndicator: false,      // 实体对象选择框控件
        scene3DOnly: true,               // 仅3D渲染，节省GPU内存
        googleMapProvider: googleMapProvider,
      })
      // 隐藏下方Cesium logo
      viewer._cesiumWidget._creditContainer.style.display = 'none'
      viewer.scene.globe.showGroundAtmosphere = false

      let googleMapProvider = new UrlTemplateImageryProvider({
        url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
      })

    },
    // 添加 `Imagery` (图层)
    addLayers() {
      // Remove default base layer
      // this.$viewer.imageryLayers.remove(this.$viewer.imageryLayers.get(0));

      // Add grid imagery
      // this.$viewer.imageryLayers.addImageryProvider(new Cesium.GridImageryProvider());
      // this.$viewer.imageryLayers.addImageryProvider(
      //   new Cesium.WebMapTileServiceImageryProvider({
      //     url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg" + "&tk=" + "19b72f6cde5c8b49cf21ea2bb4c5b21e",
      //     layer: "tdtAnnoLayer",
      //     style: "default",
      //     maximumLevel: 18, //天地图的最大缩放级别
      //     format: "image/jpeg",
      //     tileMatrixSetID: "GoogleMapsCompatible",
      //     show: false,
      //   })
      // )

    },
  }
}
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
