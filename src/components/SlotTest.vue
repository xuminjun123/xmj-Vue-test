<!--
 * @Description: slot API
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 14:32:19
-->
<template>
  <div class="wrapper">
    <!-- 默认插槽 -->
    <div class="content1">
      <p>默认插槽</p>
      <slot></slot>
    </div>
    <!-- 具名插槽 -->
    <div class="content2">
      <p>具名插槽</p>
      <slot name="user"></slot>
    </div>
    <!-- 作用域插槽 -->
    <div class="content2">
      <p>作用域插槽</p>
      <!-- testProps值传递 给父组件 -->
      <slot name="footer" testProps="子组件的值">
        <h3>没传footer插槽</h3>
      </slot>
    </div>

    <!-- v-slot -->
    <div class="content2">
      <p>v-slot使用</p>
      <div>
        {{ age }}
        <div>
          <!-- 这里name的值就是这个插槽的名称。 -->
          <slot name="main" />
        </div>
      </div>
    </div>

    <!-- slot-scoped  
     - 这里需要注意的是message是所有你绑定属性的集合，
       也就是你写的：aa=“title”会当做message的属性来实现。当然这里message可以换做其它的名称。
     - v-slot的出现是为了代替原有的slot和slot-scope
    -->
    <div class="content2">
      <div>
        <div>
          <!-- 这里name的值就是这个插槽的名称。 -->
          <slot name="page" :aa="title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slotTest',
  components: {},
  props: {},
  data() {
    return {
      age: 18,
      title: 'title'
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  .content1 {
    width: 200px;
    height: 50px;
    background: darkgray;
    border: 1px solid black;
  }
  .content2 {
    width: 200px;
    height: 80px;
    margin-top: 100px;
    border: 1px solid black;
    background: darkkhaki;
  }
}
</style>