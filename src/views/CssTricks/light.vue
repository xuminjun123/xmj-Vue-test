<!--
 * @Description: img 闪光
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 11:33:21
-->

<template>
    <div>
        <div class="flash-container">
            <img src="@/assets/images/CssTricks/bg5.jpeg"  alt />
        </div>
    </div>
</template>

<script>
export default {
    name: 'light',
    components: {},
    props: {},
    data() {
        return {
            name: null
        };
    },

    computed: {},
    created() { },
    mounted() { 
      
    },

    methods: {},

    watch: {}

}

</script>
<style lang='scss' scoped>
.flash-container {
    width: 400px;
    height: 600px;
    background: #333333;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
    &::after {
        content: "";
        height: 150%;
        width: 25px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        opacity: 0.6;
        filter: blur(6px);
        animation: move 3s infinite ease-out;
    }
}

@keyframes move {
    0% {
        transform: translate(-200px, -200px) rotate(45deg);
    }
    100% {
        transform: translate(200px, 200px) rotate(45deg);
    }
}
</style>