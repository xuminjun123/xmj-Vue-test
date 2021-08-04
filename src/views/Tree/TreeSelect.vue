<!--
 * @Description: vue treeselect
      :normalizer="normalizer" 自定义

    - // 转换菜单数据结构
    normalizer (node) {
      if (node.children && !node.children.length) {
        delete node.children;
      }
      return {
        // id: node.subjectCode,
        id: node.id,
        label: node.xxx,
        children: node.children
      };
    },

API 官网: https://www.vue-treeselect.cn/#events 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-02 16:44:50
-->
<!-- Vue SFC -->
<template>
    <div id="app">
        <treeselect v-model="value" :multiple="true" :options="options" />
    </div>
</template>
  
  <script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
    // register the component
    components: { Treeselect },
    data() {
        return {
            // define the default value
            value: null,
            // define options
            options: [{
                id: 'a',
                label: 'a',
                children: [{
                    id: 'aa',
                    label: 'aa',
                }, {
                    id: 'ab',
                    label: 'ab',
                }],
            }, {
                id: 'b',
                label: 'b',
            }, {
                id: 'c',
                label: 'c',
            }],
        }

    },
}
</script>