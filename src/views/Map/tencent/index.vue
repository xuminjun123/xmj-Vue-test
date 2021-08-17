<!--
 * @Description: 腾讯地图
    - https://lbs.qq.com/dev/console/application/mine
    - key名称  tencentmap
    - key  RC5BZ-JVACJ-SG7FG-FGIJG-SDY75-JNB6V
 * @Author: xmj
 * @Date: 2021-08-13 14:56:58
-->

<template>
    <div class="map">
        <el-input
            v-model="addressKeyword"
            placeholder="请输入地址来直接查找相关位置"
            clearable
            style="margin-bottom:5px"
        >
            <el-button slot="append" icon="el-icon-search" @click="getAddressKeyword"></el-button>
        </el-input>
        <div id="container"></div>
    </div>
</template>

<script>
import maps from "qqmap"
export default {
    name: 'tencentMap',
    components: {},
    props: {},
    data() {
        return {
            map: null,
            getAddress: null,
            getAddCode: null,
            addressKeyword: ""
        };
    },


    computed: {},

    created() { },

    mounted() {
        this.init()
    },

    methods: {
        //初始化地图
        init() {
            var that = this;
            maps.init("RC5BZ-JVACJ-SG7FG-FGIJG-SDY75-JNB6V", () => {
                var myLatlng = new qq.maps.LatLng(22.547931568083015, 114.1306221485138);
                var myOptions = {
                    zoom: 16,
                    center: myLatlng,
                    mapTypeId: qq.maps.MapTypeId.ROADMAP
                };
                that.map = new qq.maps.Map(
                    document.getElementById("container"),
                    myOptions
                );
                //获取点击后的地址
                qq.maps.event.addListener(that.map, "click", function (event) {
                    // 获取点击后的地图坐标
                    that.shopInfo.lng = event.latLng.getLng();
                    that.shopInfo.lat = event.latLng.getLat();
                    that.getAddressCode();
                });

                //调用地址显示地图位置并设置地址
                that.getAddress = new qq.maps.Geocoder({
                    complete: function (result) {
                        that.map.setCenter(result.detail.location);
                        console.log(result.detail.location)
                        that.shopInfo.lng = result.detail.location.lng;
                        that.shopInfo.lat = result.detail.location.lat;
                        var marker = new qq.maps.Marker({
                            map: that.map,
                            position: result.detail.location
                        });
                    }
                });
                //通过坐标来显示地图地址
                that.getAddCode = new qq.maps.Geocoder({
                    complete: function (result) {
                        that.addressKeyword = result.detail.address;
                    }
                });
            });
        },

        //通过地址获得位置
        getAddressKeyword() {
            //通过getLocation();方法获取位置信息值
            this.getAddress.getLocation(this.addressKeyword); //调用自带的接口
        },
        // 通过坐标获得地址
        getAddressCode() {
            var lat = parseFloat(this.shopInfo.lat);
            var lng = parseFloat(this.shopInfo.lng);
            var latLng = new qq.maps.LatLng(lat, lng);
            //调用获取位置方法
            this.getAddCode.getAddress(latLng);
        },

    },

    watch: {
        showModal: function (newValue) {
            if (newValue) {
                this.init();
            }
        }
    }

}

</script>
<style lang='scss' scoped>
#container {
    width: 100%;
    margin: 0 auto;
    height: 75vh;
}
</style>
