<!--
 * @Description: 跨域通信
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-17 09:14:04
-->
<template>
  <div class="wrapper">
    <h2>我是父级页面</h2>
    <button id="btn">父页面的按钮</button>
    <div id="default">div内容</div>
    <iframe
      src="http://localhost:8080/child.html"
      frameborder="0"
      name="myframe"
      id="myframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "postmessage",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    window.addEventListener("message", function (e) {
      console.log(e.data);
      if (e.data.msg === "hideselfService") {
        document.getElementById("default").style.display = "none";
      }
    });
    document.getElementById("btn").onclick = function () {
      var myframe = document.getElementById("myframe");
      myframe.contentWindow.postMessage(
        { data: "parent" },
        "http://localhost:8800"
      );
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
    #myframe {
        width: 300px;
        height: 400px;
        border: 1px solid #333;
    }
}
</style>
