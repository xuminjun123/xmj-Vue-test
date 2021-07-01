<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-07 15:18:47
-->
<template>
  <div class="wrapper">
    <watch-router :msg="msg"></watch-router>
  </div>
</template>

<script>
import WatchRouter from "../components/WatchRouter.vue";
export default {
  name: "vueName",
  components: { WatchRouter },
  props: {},
  data() {
    return {
      msg: "message1"
    };
  },
  watch: {},
  computed: {

  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
