<!--
 * @Description: https://elemefe.github.io/vue-amap/#/zh-cn/base/amap 不好用
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 13:26:50
-->
<template>
    <div class="map">
        <div class="amap-wrapper">
            <el-amap
                class="amap-box"
                :vid="'北京'"
                :zoom="zoom"
                :center="center"
                fill-opacity="0.2"
                strokeColor="#38f"
                strokeOpacity="0.8"
                strokeWeight="1"
                fillColor="#38f"
            ></el-amap>
        </div>
    </div>
</template>
  <script>
export default {
    name: '',
    data() {
        return {
            zoom: 10,
            center: [121.406051, 31.179695],
            label: {
                content: '钦汇园',
                offset: [10, 12]
            },

        }

    }
}
</script>
  <style>
.amap-wrapper {
    width: 100%;
    margin: 0 auto;
    height: 90vh;
}
</style>
  
