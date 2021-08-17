<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-07 15:18:21
-->
<template>
  <div class="wrapper"></div>
</template>

<script>
export default {
  name: 'watchRouter',
  components: {},
  props: {
      msg:{
          type:String,
          default:""
      }
  },
  data() {
    return {
    };
  },
  watch: {
    $route:{
      handler(val,oldval){
        console.log(val);//新路由信息
        console.log(oldval);//老路由信息
      },
      // 深度观察监听
      deep: true,
      immediate:true
    },
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
      console.log('进入了watch页面');
      console.log('msg=======>',this.msg);
  }
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>