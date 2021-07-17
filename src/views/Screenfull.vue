<!--
 * @Description: 全屏
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-16 13:03:44
-->
<template>
    <div>
        <p :class="show ? 'red' : 'yellow' " @click="toggle">切换</p>
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
            show:false
        };
    },
    computed: {},
    created() { },
    mounted() { },
    methods: {
        toggle(){
            this.show = !this.show
        },
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
    p{
        border: 1px solid slateblue;
        background: slateblue; 
    }
    .red {
        color: red;
    }
    .yellow {
        color: yellow;
    }
</style>