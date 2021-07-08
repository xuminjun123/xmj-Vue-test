<template>
  <base-modal
    :title="title"
    :visible.sync="visible"
    @cancel="cancel"
    centered
    width="400px"
    btnTxt="确定"
    @click="handleSubmit"
  >
    <div class="confirm-content">{{ content }}</div>
  </base-modal>
</template>
<script>
import BaseModal from "./BaseModal";
export default {
  name: "DelModal",
  components: {
    BaseModal
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      id: null,
      visible: false,
      content: "",
      title: ""
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    cancel() {
      this.visible = false;
    },
    async handleSubmit() {
      this.$emit("ok");
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.confir-content {
  width: 100%;
  text-align: center;
}
</style>
