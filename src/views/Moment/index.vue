<!--
 * @Description: moment 练习 
                 https://blog.csdn.net/qq_38933412/article/details/82879127
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 15:37:04
-->
<template>
    <div class="wrapper">
        <p>昨天: {{ yesterday }} 
            星期 ：{{week}}
        </p>

        <p>当前时间: {{ time }}</p>

        <p>明天: {{ tomorrow }}</p>

        <p>
            七天前 ：{{ sevenDay }}
        </p>

        七天后 : {{sevenDayAgo}}
    </div>
</template>

<script>
import moment from "moment"
export default {
    name: 'moment',
    components: {},
    props: {},
    data() {
        return {
            time: null,
            yesterday: null,
            tomorrow: null,

            week:null,

            sevenDay: null,
            sevenWeek:null,
            sevenDayAgo:null
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() {
        let yesterday = Date.now() - 24 * 60 * 60 * 1000;
        this.yesterday = moment(yesterday).format("YYYY-MM-DD HH:MM:SS") // 昨天

        let time = new Date().getTime(); // 获取时间戳
        this.time = moment(time).format("YYYY-MM-DD HH:MM:SS"); // 今天
        this.week  =  moment().format('d'); //星期

        let tomorrow = Date.now() + 24 * 60 * 60 * 1000;
        this.tomorrow = moment(tomorrow).format("YYYY-MM-DD HH:MM:SS") // 昨天

        this.sevenDay = moment(time).subtract('days', 7).format('YYYY年MM月DD日');  // 7天前

        this.sevenDayAgo = moment(time).add('days',7).format('YYYY年MM月DD日'); // 7 天后 add() 第一个参数 days/hours/
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>