<!--
 * @Description: scss - test
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-22 17:57:42
-->
<template>
    <div class="wrapper">
        <p :class="multiline | m">11111111111</p>
        <!--  -->
        <p class="cl" :style="{'--bg': bg}">bggggggggg</p>
        <div class="content">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div class="text-right">4</div>
        </div>
        <div class="flex d-flex jc-center ai-center">
            <div> flex1 </div>
            <div> flex2 </div>
            <div> flex3 </div>
            <div> flex4 </div>
        </div>

        <div class="pad">
            <div class="padding-5 border"> pad1 </div>
            <div class="padding-10 border"> pad2 </div>
            <div class="padding-15 border"> pad3 </div>
        </div>

        <div class="font">
            <div class="fs-xm"> font1 </div>
            <div class="fs-sm border"> font2 </div>
            <div class="fs-md border"> font3 </div>
            <div class="fs-lg border"> font4 </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    props: {},
    data() {
        return {
            multiline:"multiline",
            bg:"red"
        };
    },
    watch: {},
    computed: {
    },
    methods: {},
    created() { },
    mounted() { },
    filters:{
        m(val) {
            console.log('val===>',val);
            return "m"
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/style/index.scss";
@import "@/style/flex.scss";
$color: red;
.wrapper {
    .m{
        color: yellow;
        font-size: 120px;
    };
    .multiline {
        color: red;
        font-size: 100px ;
    }
    .cl {
        background: var(--bg);
    }
    .border {
        border: 1px solid salmon;
    }
    width: 1000px;
    height: 1000px;
    border: 1px solid darkgreen;
    .content :nth-child(1) {
        color: $color;
    }
    .content :nth-child(2) {
        width: 100px;
        height: 100px;
        border: 1px solid saddlebrown;
        @include borderRadius(10px);
        color: $color;
    }
    .content :nth-child(3) {
        @include important-text;
    }

    .flex {
        width: 400px;
        height: 400px;
        border: 1px solid skyblue;
    }
    .flex div{
        border: 1px solid darkblue;
    }
}
</style>