<!--
 * @Description: switchTest 子组件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-16 14:31:04
-->
<template>
  <div class="wrapper">
    <ul>
      <li
        class="switch-item"
        :class="{ active: index === currentIndex }"
        @click="selectItem(index)"
        v-for="(item , index) in switches"
        :key="index"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vueName",
  components: {},
  props: {
      switches:{
          type:Array,
          default:[]
      },
      currentIndex:{
          type:Number,
          default:0
      }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    selectItem(index){
        this.$emit('switch',index);
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        width: 200px;
        border: 3px solid #333;
    }

    .switch-item {
        flex:1;
        padding: 10px;
        text-align: center;
    }
    .active {
        color: white;
        background-color: #333;
    }
}
</style>
