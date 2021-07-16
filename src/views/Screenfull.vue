<!--
 * @Description: 全屏
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-16 13:03:44
-->
<template>
    <div>
        <el-button type="primary" class="button" @click="click">按钮</el-button>
    </div>
</template>

<script>
import screenfull from "screenfull";
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {

        };
    },
    computed: {},
    created() { },
    mounted() { },
    methods: {
        click() {
            // 判断是否支持
            if (screenfull.isEnabled) {
                screenfull.toggle()
                // store.dispatch('setting/setFullScreen', !screenfull.isFullscreen)
            } else {
                $message({
                    message: `Your browser doesn't support full screen`,
                    type: 'warning'
                })
            }
        }
    },
    watch: {}
}

</script>
<style lang="scss" scoped>
</style>