<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 11:14:54
-->
<template>
    <div>
      <el-button @click="show">show</el-button>
    </div>
</template>

<script>
import { mixin } from "@/components/Mixins/dia.js";    
export default {
    name: 'tableJsx',
    mixins: [mixin],
    components: { 
      
    },
    props: {},
    data() {
        return {
            d:false
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {
        show() { 
            
        }
    },

    watch: {}

}

</script>
<style lang='' scoped>

</style>
