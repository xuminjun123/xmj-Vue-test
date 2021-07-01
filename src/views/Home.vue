<!--
 * @Description: 测试sync
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
-->
<template>
  <div class="wrapper">
    {{ msg }} -- {{get_msg}} -- {{a}}
    <page-test :send.sync = "send" :getMsg.sync="get_msg" v-model="get.value" @change="change"></page-test>
  </div>
</template>

<script>
import PageTest from '../components/PageTest.vue';
export default {
  name: "",
  components: { PageTest },
  props: {},
  data() {
    return {
      page: '',
      get: {
        value: ''
      },
      msg: '',
      a:"",
      send:'1',
      get_msg: ""
    };
  },
  watch: {},
  computed: {
    // get_msg: {
    //   get() {
    //     return this.a
    //   },
    //   set(val) {
    //     console.log('val',val);
    //     this.a =  val
    //   }
    // },
  },
  methods: {
    change(e) {
      this.msg = e;
      console.log('e------->>', e);
      setTimeout(() => {
        this.msg = "hijdal12";
        this.get_msg = "qwer"
      }, 2000)
    },
   
  },
  created() { 
    console.log('参数=》',this.$router.query);
    
  },
  mounted() { },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
