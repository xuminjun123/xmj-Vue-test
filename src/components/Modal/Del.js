import confirm from "./DelModal.vue";
export default function(Vue) {
  const confirmConstructor = Vue.extend(confirm);
  Vue.prototype.$del = function(
    content = "删除后不可撤回，确认删除该项？",
    title = "提示"
  ) {
    return new Promise((res, rej) => {
      const confirmDom = new confirmConstructor({
        el: document.createElement("div")
      });
      document.body.appendChild(confirmDom.$el);
      confirmDom.visible = true;
      confirmDom.content = content;
      confirmDom.title = title;
      confirmDom.handleSubmit = function() {
        res();
        confirmDom.visible = false;
      };
      confirmDom.cancel = function() {
        rej();
        confirmDom.visible = false;
      };
    });
  };
}
