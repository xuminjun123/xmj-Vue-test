<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-07 10:35:55
-->
<template>
  <div class="wrapper">
    <p>普通</p>
    <p class="letterSpacre">letterSpacre样式</p>
    <p class="wordSpacre">wordSpacre样式</p>
    <p class="wordBreak">wordbreak样式</p>
    <p class="calc">calc样式</p>
    <p class="color">color</p>
    <p class="textFillColor">text-fill-color样式</p>
    <p class="text-stroke">text-stroke</p>
  </div>
</template>

<script>
export default {
  name: "css-test",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: white;
  .letterSpacre {
    border: 1px solid darkgreen;
    letter-spacing: 15px;
  }
  .wordSpacre {
    border: 1px solid darkgreen;
    word-spacing: 15px;
  }
  .wordBreak {
    width: 10px;
    height: auto;
    word-break: break-all; // 允许在单词内换行。
  }
  .calc {
    width: -moz-calc(100% - 600px);
    width: calc(100% - 600px);
    background: #eee;
  }

  .color {
    color: rgb(185, 183, 183);
  }
  /**
    检索或设置对象中的文字填充颜色。
    若同时设置text-fill-color和color，text-fill-color定义的颜色将覆盖color属性；
    通过text-fill-color属性，可以做出一些例如渐变文字和镂空文字的效果。Demo: 渐变文字 镂空文字 See with Webkit
    对应的脚本特性为textFillColor。
    */
  .textFillColor {
    -webkit-text-fill-color: rgb(185, 183, 183);
  }

  /** 设置 文字的描边 厚度 颜色 */
  .text-stroke {
    margin: 50px auto 200px;
    font-size: 100px;
    -webkit-text-stroke: 1px #f00;
  }
}
</style>
