<!--
 * @Description: 用户引导
  - https://introjs.com/docs/intro/api/

    - v-intro：提示信息，
    - v-intro-step步骤（第几个显示），序号重复则会显示序号重复的最后一个信息
    - v-intro-position显示在哪个位置（right，left，bottom，top）

 * @Author: xmj
 * @Date: 2021-08-18 16:47:04
-->
<template>
    <div>
        <div>
            <el-card v-intro="'内容1'" v-intro-position="'top'" class="step_3">用户引导的使用</el-card>
            <el-button v-intro="'内容2'" v-intro-position="'top'" class="step_2">按钮</el-button>
            <el-button v-intro="content" v-intro-position="'top'" class="step_1">下一步按钮</el-button>
        </div>
    </div>
</template>

<script>
const introJS = require('intro.js')
export default {
    name: 'introPage',
    components: {},
    props: {},
    data() {
        return {
            content: '用户引导弹窗'
        };
    },


    computed: {},

    created() { },

    mounted() {

        this.$nextTick(() => {
            this.setGuide();
            // introJS().start() // 退出引导调用 exit() 即可
            // this.intro().start(); // start the guide
            // this.intro().showHints(); // show hints
        })
    },

    methods: {

        setGuide() {
            // 通过id或者class绑定步骤，也可以直接定死在div上面
            let steps = [
                {
                    element: '.step_1',
                    intro: '步骤1：对应class为.step_1的元素进行选择提示! 👋',
                    position: 'right',
                },
                {
                    element: '.step_2',
                    intro: '步骤2：对应class为#step_3的元素进行选择提示! 👋',
                    position: 'left',
                },
                {
                    element: '.step_3',
                    intro: '步骤2：对应class为step_3的元素!完成引导 👋',
                    position: 'left',
                },
            ]
            introJS()
                .setOptions({
                    // 我给看的效果图是英文的（默认英文），这里是更换成中文
                    prevLabel: '上一步',
                    nextLabel: '下一步',
                    skipLabel: '跳过',
                    doneLabel: '完成',
                    // steps步骤，可以写个工具类保存起来
                    steps: steps,
                })
                .oncomplete(() => {
                    // 需要注意的是，这里用了箭头函数
                    // 点击结束按钮后执行的事件
                })
                .onexit(() => {
                    // 点击跳过按钮后执行的事件
                })
                .onbeforeexit(() => {
                    // 确认完毕之后执行的事件
                    // return confirm('Are you sure?')
                }).start()
        }

    },

    watch: {}

}

</script>
<style lang='scss' scoped>
</style>