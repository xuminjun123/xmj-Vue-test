<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-29 15:55:34
-->
<template>
  <div class="wrapper">
      dog 页面 -- {{id}}
      <button @click="navCat">navCat</button>
  </div>
</template>

<script>
export default {
  name: 'dog',
  components: {},
  props: {
    id: '',
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    navCat(){
        this.$router.push({
            name:'cat',
        })
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>