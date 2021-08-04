<!--
 * @Description: animate -study
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-20 12:31:37
-->
<template>
    <div>
        <animate-flash animateName="bounce" @start="start" @end="end">
            <p>动画</p>
        </animate-flash>
    </div>
</template>

<script>
import AnimateFlash from '@/components/AnimateFlash/AnimateFlash.vue';

export default {
    name: '',
    components: { AnimateFlash },
    props: {},
    data() {
        return {

        };
    },
    computed: {},

    created() { },

    mounted() { },

    methods: {
        start() {
            console.log('start')
        },
        end() {
            console.log('end');
            this.$tip.success("动画结束")
        }
    },

    watch: {}

}

</script>
<style lang='' scoped>

</style>
