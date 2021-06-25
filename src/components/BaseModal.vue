<template>
  <el-dialog
    :visible.sync="myVisible"
    :width="width"
    destroy-on-close
    :close-on-click-modal="false"
    v-bind="$attrs"
    show-close
    @close="cancel"
  >
    <div slot="title" class="modal-title">
      <span>{{ title }}</span>
    </div>
    <div class="modal-button" slot="footer">
      <div v-if="!hidden">
        <el-button class="margin-left-8" @click="cancel" v-if="!hideCancel">{{
          cancelTxt
        }}</el-button>
        <slot name="button"></slot>
        <el-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          v-if="showSubmit"
          :disabled="disabled"
          >{{ btnTxt }}
        </el-button>
      </div>
    </div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    maskClosable: {
      type: Boolean,
      default: true
    },
    cancelTxt: {
      type: String,
      default: "取消"
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 宽度
    width: {
      type: [Number, String],
      default: 400
    },
    // 按钮的文字
    btnTxt: {
      type: String,
      default: "保存"
    },
    // 显示状态
    visible: {
      type: Boolean,
      default: false
    },
    // 隐藏页脚
    hidden: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    showSubmit: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    myVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      }
    }
  },

  data() {
    return {
      input: ''
      // myVisible: this.visible
    };
  },
  methods: {
    cancel() {
      this.myVisible = false;
      this.$emit("cancel", false);
    },
    handleSubmit() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-dialog__headerbtn {
  top: 9px;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  color: #fff;
  font-size: 25px;
}
.button {
  width: 80px;
  height: 28px;
  opacity: 1;
  border-radius: 6px;
  font-size: 14px;
}
/deep/.el-dialog__header {
  background-color: #5692d4;
  text-align: left;
  padding: 10px 20px 10px;
  .modal-title {
    color: #fff !important;
    font-size: 16px;
  }
}
.modal-content {
  text-align: left;
}
</style>
