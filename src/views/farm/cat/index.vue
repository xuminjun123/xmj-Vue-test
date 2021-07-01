<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-29 15:55:29
-->
<template>
  <div class="wrapper">cat 页面
      <button @click="navDog">navDog</button>
  </div>
</template>

<script>
export default {
  name: 'cat',
  components: {},
  props: {},
  data() {
    return {
        param:"dog"
    };
  },
  watch: {},
  computed: {},
  methods: {
    navDog(){
        // this.$router.push(`/dog/${this.param}`)
        this.$router.push("/dog/1")
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>