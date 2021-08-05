<!--
 * @Description: 手风琴效果
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-04 16:11:34
-->

<template>
  <div>
    <ul class="accordion-container">
      <li class="accordion-item" 
          v-for="(img,index) in imgs" 
          :key="index"
          :style="{backgroundImage: `url(${img})`}"
        >
        <p class="accordion-title">{{index +　1}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accordionComp',
  components: {},
  props: {
    // 图片地址
    imgs:{
      type: Array,
      default: ()=>{ 
        return []
      }
    }
  },
 
  data() {
    return {
   
    };
  },

  computed:{
  
  },
  created() { },

  mounted() { },

  methods: {},

  watch: {}

}

</script>
<style lang='scss' scoped>
.accordion-container {
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .accordion-item {
    list-style: none;
    height: 500px;
    transition: width 0.5s;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:hover) {
      width: 20%;
    }
    &:hover {
      width: 800px;
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1;
      opacity: 0;
      transition: opacity 0.5s;
    }
    .accordion-title {
      color: #fff;
      font-size: 18px;
      z-index: 2;
    }
  }
}
</style>
