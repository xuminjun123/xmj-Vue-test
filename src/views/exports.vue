<!--
 * @Description: exports - test
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-18 10:54:40
-->

<template>
  <div class="wrapper">

  </div>
</template>

<script>
const  get = require('@/utils/exportTest/index.js') 
export default {
  name: 'vueName',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log('get',get());
    
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>