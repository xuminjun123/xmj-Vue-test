<!--
 * @Description:  switch 组件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-16 14:24:42
-->
<template>
  <div class="wrapper">
    <switches :switches="switches" @switch="switchClick" :currentIndex="currentIndex"></switches>
    <div v-if="currentIndex  === 0">
      选项1
    </div>
    <div v-if="currentIndex  === 1">
      选项2
    </div>
  </div>
</template>

<script>
import Switches from '../components/SwitchCom.vue';
export default {
  name: 'switch',
  components: { Switches },
  props: {},
  data() {
    return {
      switches: ["选项1", "选项2"],
      currentIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    switchClick(index) {
      this.currentIndex = index;
    }
  },
  created() { 
    
  },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>