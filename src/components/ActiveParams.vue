script<!--
 * @Description: 动态指令和参数使用
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 10:29:56
-->
<template>
  <div class="wrapper">
    <p>动态指令和参数使用</p>
  </div>
</template>

<script>
export default {
  name: "vueName",
  components: {},
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() { },
  mounted() {
    console.log("someProps=>", this.someProps);
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
