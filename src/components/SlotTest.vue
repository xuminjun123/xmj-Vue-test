<!--
 * @Description: slot API
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 14:32:19
-->
<template>
  <div class="wrapper">
      <div class="content1">
          <slot></slot>
      </div>
      <div class="content2">
          <slot name="user"></slot>
      </div>
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
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{
    .content1 {
        width: 200px;
        height: 10px;
        background: darkgray;
    }
    .content2 {
        width: 200px;
        height: 10px;
        background: darkkhaki;
    }
}
</style>