<template>
  <div class="wrapper">
    <h4 @click="sendH">我是子组件  --  {{ h }}</h4>
    {{msg}} {{value}}
    <el-input @input="handleInput" :value="value" />
    <button @click="tab">点解</button>
  </div>
</template>

<script>
export default {
  name: "PageTest",
  components: {},
  props: {
    h:{
      type: String,
      default: ""
    },
    page: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    msg:{
      type: String,
      default: ""
    }
  },
  data() {
    return {

    };
  },
  watch: {
    value: {
      handler(val, oldVal) {
        console.log("value__=======>> " + val, oldVal);//但是这两个值打印出来却都是一样的
      },
      deep: true
    },
    msg:{
      handler(val, oldVal) {
        console.log("msg___--=======>> " + val, oldVal);//但是这两个值打印出来却都是一样的
      },
      deep: true
    }
  },
  computed: {
    
  },
  methods: {
    sendH(){
      this.h = "森的H"
      this.$emit("update:send", this.h);
    },
    change() {
      this.$emit("update:page", "1234page");
    },
    handleInput(e) {
      this.$emit("input", e || "");
    },
    tab() {
      this.$emit("change", "123456");
      this.msg = "zxc";
      this.$emit("update:getMsg", this.msg)
    }
  },
  created() { },
  mounted() { },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
