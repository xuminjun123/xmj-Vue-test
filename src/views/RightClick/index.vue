<!--
 * @Description: 右键事件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 15:41:04
-->
<template>
    <div class="wrapper">
        <el-button @click="leftTab" @contextmenu.prevent.native="rightTab">点击</el-button>
        <!-- <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">刷新页面</li>
            <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭当前</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags(selectedTag)">关闭所有</li>
        </ul>-->
        <ul class="contextmenu" v-show="visible">
            <li>刷新页面</li>
            <li>关闭当前</li>
            <li>关闭其他</li>
            <li>关闭所有</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "RightClick",
    components: {},
    props: {},
    data() {
        return {
            visible: false
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {
        leftTab() {
            this.$tip.error("请右键单机");
        },
        rightTab() {
            this.visible = true
        }
    },
    watch: {}
}

</script>
<style lang='scss' scoped>
.wrapper {
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}
</style>