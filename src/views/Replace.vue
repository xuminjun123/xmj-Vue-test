<!--
 * @Description: $router.replace
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-15 10:47:33
-->

<template>
  <div class="wrapper">
    <button @click="navRepalceHome">navRepalceHome</button>
    <button @click="navPushHome">navPushHome</button>
  </div>
</template>

<script>
export default {
  name: "replace",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    /** 导航后不会留下 history 记录。
     * 即使点击返回按钮也不会回到这个页面。 
     * */
    navRepalceHome() {
        this.$router.replace({
            name:"About",
            query:{
              p :"name"
            }
        })
    },

       /** 导航后 会留下 history 记录。
     * 点击返回按钮 会回到这个页面。 
     * */
    navPushHome() {
      this.$router.push({
            name:"About",
            query:{
              p :"name"
            }
        })
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
