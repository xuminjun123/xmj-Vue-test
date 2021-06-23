<!--
 * @Description: 验证码小Demo
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-10 15:38:50
-->
<template>
  <div class="wrapper">
    <div class="login-code">
      <img :src="codeUrl" @click="getCode" class="login-code-img" />
    </div>
  </div>
</template>

<script>
import { getCodeImg } from "@/api/login";
export default {
  name: "vueName",
  components: {},
  props: {},
  data() {
    return {
      codeUrl: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    getCode() {
      getCodeImg().then((res) => {
        this.codeUrl = "data:image/gif;base64," + res.img;
      });
    },
  },
  created() {
    this.getCode();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
