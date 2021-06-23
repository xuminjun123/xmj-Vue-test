<!--
 * @Description: 找出public文件下的js文件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-07 14:24:58
-->
<template>
  <div class="wrapper">
      <public-test></public-test>
  </div>
</template>

<script>
import PublicTest from '../components/PublicTest.vue';
export default {
  name: 'vueName',
  components: {PublicTest},
  props: {},
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