<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 10:17:28
-->
<template>
  <div class="wrapper">
    <p>Action : {{ count }}</p>
    <p>登录 ： {{isLogin}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vueName',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["count","isLogin"])
  },
  methods: {},
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>