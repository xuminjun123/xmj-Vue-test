<!--
 * @Description: animate_flash 插件， css库来自于 animate.css
 * @param : 
            1、-webkit-animation动画其实有三个事件： 
            开始事件 webkitAnimationStart 
            结束事件 webkitAnimationEnd 
            重复运动事件 webkitAnimationIteration 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-20 12:19:09
-->
<template>
    <div
        ref="animateRef"
        class="animate__animated"
        :class="isAnimate ? `animate__${animateName}` : ''"
        :style="[styleObject]"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AnimateFlash",
    components: {},

    props: {
        // 是否开启动画
        isAnimate: {
            type: Boolean,
            default: true,
        },
        // 动画名称 
        animateName: {
            type: String,
            default: "fadeInDown",
            // required:""
        },
        // 延时时间
        duration: {
            type: String,
            default: "1s",
        },
        // 是否一直执行
        infinite: {
            type: Boolean,
            default: false,
        },

        // 表示规定动画的速度（speed）
        // linear、ease、ease-in、ease-out、ease-in-out、cubic-bezier(n,n,n,n)；;
        speed: {
            type: String,
            default: "linear",
        },

        // animation-delay: time; 表示动画即将开始。
        delay: {
            type: String,
            default: "",
        },

        // animation-iteration-count:n|infinite(无限循环);  表示播放动画次数;
        count: {
            type: [Number, String],
            default: 1,
        },

        // animation-direction: normal|alternate; 表示重复一次动画，也可以来回的运动并重复。
        direction: {
            type: String,
            default: "normal",
        }


    },
    data() {
        return {

        };
    },
    computed: {
        styleObject() {
            // animation: name duration timing-function delay iteration-count direction;
            const { duration, speed, delay, count, direction } = this;
            return {
                animationDuration: duration, // 延时时间
                animationTimingFunction: speed,
                animationDelay: delay,
                animationIterationCount: count,
                animationDirection: direction,
            }
        }
    },
    created() { },

    mounted() {
        this.animate()
    },

    methods: {
        animate() {
            // 动画执行完成之后
            this.$nextTick(() => {
                let animateRef = this.$refs.animateRef;
                //  动画开始事件
                animateRef.addEventListener("webkitAnimationStart", ()=>{
                    this.$emit('start')
                }, false);
                // 动画过渡事件
                animateRef.addEventListener("webkitAnimationIteration",  ()=> { 
                    this.$emit('iteration') 
                }, false);

                // 动画结束事件
                animateRef.addEventListener("webkitAnimationEnd",  ()=> { 
                    this.$emit('end')
                }, false);
            })
        }
    },

    watch: {}

}

</script>
<style lang='scss' scoped>
</style>
