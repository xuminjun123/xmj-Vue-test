<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
-->
<template>
  <div id="FatherCom">
    <h4>我是父组件</h4>
   <p>{{msg}}</p> {{show}}
     ==={{a}}
    <div v-show="show">能看得见我吗？</div>
    <hr />
    ---------{{s}}
    <!-- <page-about :show="show" @update:show="update_show" /> -->
    <page-about :show2.sync="s" :show.sync="show"  :msg.sync="msg" @msg1="msg1"/>
  </div>
</template>

<script>
import PageAbout from '../components/PageAbout.vue'


export default {
  name: 'FatherCom',
  components: {
    PageAbout
  },
  data() {
    return {
      show: true,
      msg:true,
      a:null,
      s:''
    }
  },
  methods: {
    msg1(val) {
      this.a = val;
      setTimeout(()=>{
        this.s = '2222222',
        this.show = true
      },2000)
    }
  },
  created(){
    console.log('参数',this.$route.query.p);
    
  }
}
</script>