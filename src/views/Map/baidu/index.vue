<!--
  这 使用的 百度mapv2.0版本 (目前已经有点落后了)
 * @Description: vue Baidu Map 
    - https://dafrok.github.io/vue-baidu-map/#/zh/start/installation

    - 没有设置 center 和 zoom 属性的地图组件是不进行地图渲染的。
 * @param :  
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 10:57:04
-->
<template>
  <div class="wrapper">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
      <!-- 地图/混合 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>

      <!-- 比例尺 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 控件 -->
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>   -->
      <!-- 缩放 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-marker
        :position="{ lng: 116.404, lat: 39.915 }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label
          content="我爱北京天安门"
          :labelStyle="{ color: 'red', fontSize: '24px' }"
          :offset="{ width: -35, height: 30 }"
        />
      </bm-marker>

      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // center: { lng: 0, lat: 0 },
      center: { lng: 116.404, lat: 39.915 },
      zoom: 5
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 5
    },

  }
}
</script>
  
<style>
.wrapper {
  width: 100%;
  height: 800px;
  border: 1px solid #fff;
}
.bm-view {
  width: 100%;
  height: 100%;
}
</style>