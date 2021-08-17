<!--
 * @Description:  子组件需要在mounted时触发父组件的某一个函数
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:08:46
-->
<template>
  <div class="wrapper">
     
  </div>
</template>

<script>
export default {
  name: 'MountedFn',
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
    // mounted 时触发父组件的某个函数 hook写法
    console.log('子组件==》');
    
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>