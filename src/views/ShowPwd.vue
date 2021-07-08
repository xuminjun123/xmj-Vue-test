<!--
 * @Description: 显示密码
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-06 10:23:01
-->
<template>
  <div class="wrapper">
    <show-pwd-test v-model="pdw" :show="showPwd"></show-pwd-test>
    <el-button @click="show">{{ title }}</el-button>
  </div>
</template>

<script>
import ShowPwdTest from '../components/ShowPwdTest.vue';
export default {
  name: 'ShowPwd',
  components: { ShowPwdTest },
  props: {},
  data() {
    return {
      showPwd: true,
      pdw: "",
      title: "显示"
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      this.showPwd = !this.showPwd;
      this.title = this.showPwd ? '隐藏' : "显示"
    }
  },
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>