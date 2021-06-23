<!--
 * @Description: tab-view 切换
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-17 11:39:03
-->
<template>
  <div class="wrapper">
    <router-link tag="div" class="page" to="/Page1">page1</router-link>
    <router-link tag="div" class="page" to="/Page2">page2</router-link>
    <router-link tag="div" class="page" to="/Page3">page3</router-link>
  </div>
</template>

<script>
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
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  .page {
    flex: 1;
    background-color: #333;
    color: white;
  }
}
</style>