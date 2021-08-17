<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:56:07
-->
<template>
  <div class="wrapper">
      <p :style="styleObject">显示之前num</p>
  </div>
</template>

<script>
export default {
  name: 'GetData',
  components: {},
  props: {
    styleObject:{
      type: Object,
      default : ()=>{}
    }
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>
