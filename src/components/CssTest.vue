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

    <!-- 按钮涟漪效果 -->
    <div>
      <button class="btn btn-primary">
        按钮
        <span class="mask mask-1"></span>
      </button>
      <button class="btn btn-secondary">
        按钮1
        <span class="mask mask-2"></span>
      </button>
      <button class="btn btn-warning">
        按钮2
        <span class="mask mask-3"></span>
      </button>
      <button class="btn btn-success">
        按钮3
        <span class="mask mask-4"></span>
      </button>
    </div>
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
  created() { },
  mounted() { },
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

  /** 按钮涟漪效果 */
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
  .btn {
    position: relative;
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    margin: 0 10px;
  }

  .btn-primary {
    background-color: #337ab7;
    border-color: #2e6da4;
  }

  .btn-secondary {
    background-color: #5bc0de;
    border-color: #46b8da;
  }

  .btn-warning {
    background-color: #f0ad4e;
    border-color: #eea236;
  }
  .btn-success {
    background-color: #5cb85c;
    border-color: #5cb85c;
  }
  .mask {
    position: absolute;
    display: block;
    height: 100%;
    background-color: #fff;
    opacity: 1;
  }
  .mask-1 {
    top: 0;
    right: 0;
  }
  .mask-2 {
    left: 0;
    top: 0;
    border-top-right-radius: 40px;
  }
  .mask-3 {
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  .mask-4 {
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
  }

  .btn-primary:hover .mask {
    animation: btn-animation-one;
    animation-duration: 1s;
  }
  .btn-secondary:hover .mask {
    animation: btn-animation-one;
    animation-duration: 1s;
  }
  .btn-warning:hover .mask {
    animation: btn-animation-two;
    animation-duration: 1s;
  }
  .btn-success:hover .mask {
    animation: btn-animation-three;
    animation-duration: 1s;
  }

  @keyframes btn-animation-one {
    from {
      width: 0;
      opacity: 1;
    }
    to {
      width: 100%;
      opacity: 0;
    }
  }

  @keyframes btn-animation-two {
    from {
      width: 1px;
      height: 1px;
      transform: scale(0);
      opacity: 1;
    }
    to {
      width: 1px;
      height: 1px;
      transform: scale(100);
      opacity: 0;
    }
  }
  @keyframes btn-animation-two {
    from {
      width: 1px;
      height: 1px;
      transform: scale(0);
      opacity: 1;
    }
    to {
      width: 1px;
      height: 1px;
      transform: scale(100);
      opacity: 0;
    }
  }
  @keyframes btn-animation-three {
    from {
      height: 0;
      opacity: 1;
    }
    to {
      height: 100%;
      opacity: 0;
    }
  }
}
</style>
