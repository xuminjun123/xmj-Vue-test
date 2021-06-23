<!--
 * @Description: 判断手机还是PC
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 11:24:26
-->

<template>
  <div class="wrapper">
    <p>{{device}}</p>
    <div :class="[device=='PC'?'sidebar':'a']" >1</div>
  </div>
</template>

<script>
const WIDTH = 992;
const { body } = document;
export default {
  name: 'vueName',
  components: {},
  props: {},
  data() {
    return {
      device:"",
      // 屏幕尺寸
      screenSize: 0,
      screenWidth: body.clientWidth,
      screenHeight: body.clientHeight,
    };
  },
  watch: {
    screenWidth: {
      handler() {
        const rect = body.getBoundingClientRect()
        console.log('is',this.isMobile());
        
        if(rect.width - 1 < WIDTH){
          console.log('这是mobile');
          this.device = 'mobile'
        }else{
          console.log('这是PC');
          this.device = 'PC'
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      // localStorage.setItem('isiphone',flag)
      console.log("flag========>>>", flag)
      return flag;
    },
  },
  created() { },
  mounted() {
    //判断手机还是PC
    // this.isMobile();

    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = body.clientWidth;
        that.screenWidth = window.screenWidth
        console.log(' that.screenWidth =====》》', that.screenWidth );
      })()
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .sidebar{
    width: 200px;
    height: 80vh;
    background: darkcyan;
  }
  .a{
    width: 100px;
    height: 80vh;
    background: red;
  }
}
</style>