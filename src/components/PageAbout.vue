<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-03 17:48:37
-->
<template>
  <div class="wrapper">
    <div id="ChildCom">
      <h4>我是子组件</h4>
      show2: {{show2}}
      show: --------  {{show}} ---------
      msg1:{{msg1}}
      <button @click="handle">显示/隐藏</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueName",
  components: {},
  props: {
    msg1: {
      type: Boolean,
      default: true
    },
    msg: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true,
    },
    show2: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    handle() {
      let msg = String(new Date().getTime());  
      this.$emit("update:show2",msg);  
      this.$emit("update:show", !this.show);
      this.$emit("update:msg", !this.msg);
      this.$emit("msg1", !this.msg1);
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
