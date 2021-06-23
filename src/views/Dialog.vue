<!--
 * @Description: Test - dialog 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-04 13:47:30
-->
<template>
  <div class="wrapper">
    <p>dialog</p>
    <base-modal
      :title="modalTitle"
      :visible.sync="visible"
      @click="handleSubmit({ subSysName: 'ruleForm' })"
      @cancel="handleCancel"
      btn-txt="保存"
      width="30%"
    >
      <p>eldialog</p>
    </base-modal>
    <button @click="tab">点击 -- dialog</button>
    <button @click="Tip"> 点击 $tip</button>
  </div>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";

export default {
  name: "Dialog",
  components: { BaseModal },
  props: {},
  data() {
    return {
      modalTitle: "dialog-test",
      formLabelWidth: "120px",
      visible: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
      tab(){
          this.visible = true;
      },
      Tip(){
        this.$load.open();
        setTimeout(()=>{
            this.$load.close();
        },2000)
      },
      handleCancel(){
        this.visible = false;
      }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
