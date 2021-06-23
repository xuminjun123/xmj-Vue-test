<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:55:46
-->
<template>
  <div class="wrapper">
   <get-data></get-data>
    <button @click="change">点击</button>
  </div>
</template>

<script>
import GetData from '../components/GetData.vue';
export default {
  name: 'vueName',
  components: {GetData},
  props: {},
  data() {
    return {
      num:10 
    };
  },
  watch: {},
  computed: {},
  methods: {
    change(){
      console.log('num之前的值===>',this.$options.data().num);    
      console.log('num改变的值===>',this.num);     
    }
  },
  created() {},
  mounted() {
    this.num = 1000
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>
