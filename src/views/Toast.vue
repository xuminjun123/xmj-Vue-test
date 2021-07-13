<!--
 * @Description: Toast 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-13 15:33:52
-->
<template>
    <div>
        <button @click="show">showToast</button>
        <!-- <toast-child></toast-child> -->
    </div>
</template>

<script>
// import ToastChild from '../components/Toast/ToastChild.vue';

export default {
    name: '',
    components: {
        // ToastChild
    },
    props: {},
    data() {
        return {

        };
    },

    computed: {},
    created() { },
    mounted() { },
    methods: {
        show(){
           this.$toast("toast")
        }
    },
    watch: {}
}

</script>
<style lang='' scoped>

</style>