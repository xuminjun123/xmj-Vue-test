<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-09 10:17:21
-->
<template>
  <div class="wrapper">
    {{ count }}
    ---
    {{ isLogin }}
    -----
    {{ id }}
    <button @click="change">改变count</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    ...mapGetters(["count", "isLogin", "id"]),
  },
  methods: {
    ...mapActions(["commitCount", "commitIsLogin"]),
    change() {
      this.commitCount(100);
      this.commitIsLogin().then((res) => {
        console.log('res=====>', res);
      });
      this.$store.dispatch({
        type: "commitId",
        id: 2
      })
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