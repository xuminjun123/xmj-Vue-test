<!--
 * @Description: JS 判断元素是否进入可视区域
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-23 11:52:29
-->
<template>
    <div class="wrapper">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <div class="content" ref="content">
            <img src="@/assets/logo.png" />
        </div>
    </div>
</template>

<script>
import img from "@/assets/logo.png";
export default {
    name: 'lookDOc',
    components: {},
    props: {},
    data() {
        return {
            img,
        };
    },
    watch: {},
    computed: {},
    methods: {
        handleScroll() {
            // 获取的是浏览器可见区域高度（网页的可视区域的高度）（不滚动的情况下）
            let documentClientHeight = document.documentElement.clientHeight || window.innerHeight;
            // 元素顶端到可见区域（网页）顶端的距离
            let htmlElementClientTop = this.$refs.content?.getBoundingClientRect().top;
            // 网页指定元素进入可视区域
            if (documentClientHeight >= (htmlElementClientTop + 200)) {
                // TODO 执行你要做的操作
                console.log('是否进入可视区域');
                this.$tip.success("logo进入可视区域")
            }
        },
    },
    created() {

    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>
<style lang="scss" scoped>
.wrapper {
    .content {
        border: 1px solid darkblue;
    }
}
</style>