<!--
 * @Description: 字符串 true 和 布尔 true 判断
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-15 11:11:52
-->
<template>
  <div class="wrapper">
    <div class="content">
          <vue-qr
            :callback="handleQrCallback"
            :logoMargin="2"
            :logoScale="0.2"
            :logoSrc="logoSrc"
            :size="200"
            :text="url"
          />
        </div>
  </div>
</template>

<script>

import vueQr from 'vue-qr'
export default {
  name: 'vueName',
  components: {
    vueQr
  },
  props: {},
  data() {
    return {
        isS:"true",
        isB:true,
        logoSrc:require("@/assets/logo.png"),
    };
  },
  watch: {},
  computed: {
    url(){
        let url = "https://www.baidu.com"
        return url
    }
  },
  methods: {
    handleQrCallback(dataUrl) {
      this.dataUrl = dataUrl;
    },
  },
  created() {},
  mounted() {
      // 字符串格式的 true 带“”
      if(this.isS === "true"){
          console.log('isS==============>');
          
      }
      // boolean 格式的 true 不带 “”
      if(this.isB === true){
          console.log('isB==============>');
          
      }
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>