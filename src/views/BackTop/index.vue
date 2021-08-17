<!--
 * @Description: 返回顶部
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-16 18:01:27
-->
<template>
    <div class="wrapper">
        <div class="svgStyle">
            <svg-icon iconClass="zip"  :styleObject="styleObject"></svg-icon>
        </div>

        <div class="svgStyle">
            <svg-icon iconClass="ticket"  :styleObject="styleObject"></svg-icon>
        </div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>32</li>
            <li>3213</li>
        </ul>
        <button @click="tab">点击</button>
    </div>
</template>
  
  <script>
export default {
    name: "backTop",
    components: {},
    props: {},
    data() {
        return {
            styleObject:{
                width :"50px",
                height: "50px",
                color: "#f40"
            }
        };
    },
    watch: {},
    computed: {},
    methods: {
        tab() {
            // document.body.scrollTop = document.documentElement.scrollTop = 0
            // this.isShowTop = false
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
    created() { },
    mounted() {

    },
};
</script>
<style lang="scss" scoped>
.wrapper{
    .svgStyle {
        width: 50px;
        height: 50px;
        border: 1px solid black;
    }
}
</style>  