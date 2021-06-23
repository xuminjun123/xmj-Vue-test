<!--
 * @Description: 列表动画
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-15 12:04:04
-->
<template>
  <div class="wrapper">
      <transition-group>
          <li 
            class="item"
            @click="deleteItem(item)"
            v-for="item in list"
            :key="item.id"
          >
          {{item.id}}
          </li>
      </transition-group>

      <button @click="addItem">add一项</button>
  </div>
</template>

<script>
export default {
  name: 'vueName',
  components: {},
  props: {},
  data() {
    return {
        list:[{id:1,title:"xx"},{id:2,title:"yy"},{id:3,title:"zz"}]
    };
  },
  watch: {},
  computed: {},
  methods: {
      // 删除
      deleteItem(item){
        const index = this.list.findIndex((item)=>{
            return item.id === item.id
        })
        this.list.splice(index,1)
      },

      // 添加
      addItem(){
          const index = Math.random();
          const item = {
              id:index,
              title:`项目${index}`
          };
          this.list.push(item);
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .item {
        height: 40px;
        border: 1px solid #000;
    }
    .list-enter-active ,
    .list-leave-active
    {
        transition: height 2s linear;
    }

    /**
        进场:height 0 -> 40
        离场: height -> 0
    */
    .list-enter,
    .list-leave-to {
        height: 0;
    }
}
</style>
