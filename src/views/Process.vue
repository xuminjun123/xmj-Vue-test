<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-02 16:55:08
-->
<template>
  <div class="wrapper">
    <process-info-box
      color-class="bg-yellow"
      :icon-classes="['ion', 'ion-ios-pricetag-outline']"
      text="Inventory"
      number="5,200"
      :progress="50"
      description="50% increase since May"
    ></process-info-box>
  </div>
</template>

<script>
import ProcessInfoBox from '../components/ProcessInfoBox.vue';
export default {
  name: 'vueName',
  components: { ProcessInfoBox },
  props: {},
  data() {
    return {
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
}
</style>