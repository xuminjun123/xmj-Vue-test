<!--
 * @Description: Cesium
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-14 12:37:01
-->
<template>
    <div id="app">
        <div id="cesiumContainer"></div>
    </div>
</template>
  
<script>
// import * as Cesium from 'cesium'
// let Cesium = require("cesium/Cesium");
// import 'cesium/Source/Widgets/widgets.css'
// import 'cesium/Widgets/widgets.css'
// let Cesium = require('cesium/Source/Cesium');
// import "cesium/Source/Widgets/widgets.css";

export default {
    name: 'App',
    mounted() {
        this.$nextTick(() => {
            const viewer = new Cesium.Viewer('cesiumContainer')
            console.log('viewer: ', viewer)
        })
    }
}
</script>
<style lang="scss" scoped>
#cesiumContainer {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
  