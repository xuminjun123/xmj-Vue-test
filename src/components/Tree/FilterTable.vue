<template>
  <div class="fifter-table" :style="{ 'display': isInlineBlock === true ? 'inline-block' : 'block' }">
    {{ title }}
    <el-popover placement="bottom" :title="title" width="200" trigger="click" @hide="hide">
      <el-input clearable placeholder="输入关键字筛选" v-model="filterText"></el-input>
      <el-checkbox v-model="checked" @change="change" v-if="!filterText">全选</el-checkbox>
      <el-tree
        class="filter-tree es-scroll"
        :data="treeData"
        :props="defaultProps"
        default-expand-all
        node-key="label"
        :filter-node-method="filterNode"
        show-checkbox
        @check-change="handleCheckChange"
        ref="tree"
      ></el-tree>
      <i
        class="iconfont icon-shaixuan1"
        :style="{ color: selectList.length > 0 ? getColor : '#999999' }"
        slot="reference"
        @click.stop
      ></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "FilterTable",
  props: {
    data: {},
    scope: {},
    filterKey: {
      type: String,
      default: () => ""
    },
    title: {},
    fifterShow: {},
    id: {},
    root: {
      default: true,
    },
    fid: {},
    scopeMap: {
      default: null,
    },
    rootId: {
      default: "00000000-0000-0000-0000-000000000000",
      type: String,
    },
    defaultCheckedKeys: {
      default: () => [],
      type: Array,
    },
    isInlineBlock: {
      default: false,
      type: Boolean
    },
    //需要回调true,需要父页面备份数据
    callbackType: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      // show: false,
      filterText: "",
      checked: false,
      // tableData: this.data,
      treeData: [],
      defaultProps: {
        label: "label",
      },
      selectList: [],
      baseTabelData: [],
      init: false
    };
  },
  created() {
    this.baseTabelData = this.tableData
    let arr = [];
    let arrPush = (data) => {
      data.forEach((element) => {
        arr.push(element[this.scope]);
        if (element.children) {
          arrPush(element.children);
        }
      });
    };
    arrPush(this.baseTabelData);
    arr = Array.from(new Set(arr));
    arr.forEach((element) => {
      if (this.scopeMap && element != "undefined" && element != undefined) {
        if (this.scopeMap[element]) {
          this.treeData.push({
            label: this.scopeMap[element] + "",
          });
        }
      } else if (
        element != "undefined" &&
        element != "" &&
        element != undefined
      ) {
        this.treeData.push({
          label: element + "",
        });
      }
    });
    this.selectList = this.defaultCheckedKeys;
    if (this.selectList.length > 0) {
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.selectList);
      })
    }

    // console.log('selectList',this.selectList)
    const { selectList, id, fid, scope, filterKey, scopeMap } = this
    this.$store.dispatch('filter/addFilter', { filter: selectList, key: scope, filterKey, scopeMap, id, fid })
    // console.log(this.$store.state.filter.filterList)

  },
  watch: {
    data(val) {
      if (val.length) {
        // this.show = false;
        // this.selectList = [];
        // this.tableData = this.data;
        if (val && val.length > 0 && this.baseTabelData.length <= 0) {
          this.baseTabelData = val
        }
        else if (this.callbackType) {
          this.baseTabelData = val
        }
        let arr = [];
        this.treeData = [];
        let arrPush = (data) => {
          data.forEach((element) => {
            arr.push(element[this.scope]);
            if (element.children) {
              arrPush(element.children);
            }
          });
        };
        arrPush(this.baseTabelData);
        arr = Array.from(new Set(arr));
        arr.forEach((element) => {
          if (this.scopeMap && element != "undefined" && element != undefined) {
            if (this.scopeMap[element]) {
              this.treeData.push({
                label: this.scopeMap[element] + "",
              });
            }
          } else if (
            element != "undefined" &&
            element != "" &&
            element != undefined
          ) {
            this.treeData.push({
              label: element + "",
            });
          }
        });
        this.$refs.tree.setCheckedKeys(this.selectList);
        if (
          this.selectList.length > 0 &&
          this.selectList.length != this.treeData.length
        ) {
          this.hide();
        }
        if (!this.init) {
          this.init = true
          this.hide();
        }
      }

    },
    filterText(val) {
      this.selectList = [];
      this.$refs.tree.setCheckedKeys(this.selectList);
      this.checked = false;
      this.$refs.tree.filter(val);
    },
    selectList(val) {
      // console.log('筛选条件改变',val)
      const { id, fid, scope, filterKey, scopeMap } = this
      this.$store.dispatch('filter/changeFilter', { filter: val, key: scope, filterKey, scopeMap, id, fid })
    }
  },
  mounted() {
    this.baseTabelData = this.data
  },
  computed: {
    getColor() {
      return this.$store.state.settings.theme;
    },
    tableData() {
      console.log(this.data)
      return this.data
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleCheckChange() {
      let arr = this.$refs.tree.getCheckedNodes();
      this.selectList = [];
      arr.forEach((element) => {
        this.selectList.push(element.label);
      });
      this.checked = this.selectList.length === this.treeData.length
    },
    change() {
      if (this.checked) {
        this.selectList = [];
        this.treeData.forEach((element) => {
          this.selectList.push(element.label);
        });
        this.$refs.tree.setCheckedKeys(this.selectList);
      } else {
        this.selectList = [];
        this.$refs.tree.setCheckedKeys(this.selectList);
      }
    },

    hide() {
      // console.log(this.$store.state.filter.filterList)
      let arr = this.baseTabelData
      this.$store.state.filter.filterList.forEach(filter => {
        if (filter.filterKey === this.filterKey && filter.filter && filter.filter.length > 0) {
          arr = this.fliter(arr, filter)
        }
      })
      // arr = this.fliter(this.baseTabelData);

      // arr = this.fliter(this.tableData)
      // console.log(newArr,newArrTree);
      this.$emit("fifterData", arr);
      // }
    },

    fliter(table, filterData) {
      // console.log(filterData)
      let newArr = [];
      let newArrTree = [];
      // console.log(this.selectList)
      // if (
      //   this.selectList.length == 0 ||
      //   this.selectList.length == this.treeData.length
      // ) {
      //   this.show = false;
      //   this.$emit("fifterData", this.baseTabelData);
      // } else {
      let list = [];
      const { scopeMap, filter, id, fid, key } = filterData
      if (scopeMap) {
        filter.forEach((element) => {
          Object.entries(scopeMap).map((item) => {
            if (item[1] == element) {
              list.push(item[0]);
            }
          });
        });
      } else {
        list = filter;
      }
      const treeFilter = (tree, func) => {
        // 使用map复制一下节点，避免修改到原树
        return tree
          .map((node) => ({ ...node }))
          .filter((node) => {
            node.children = node.children && treeFilter(node.children, func);
            if (func(node)) {
              newArrTree.push({ ...node, children: [] });
            }
            return func(node) || (node.children && node.children.length);
          });
      };
      newArr = treeFilter(table, (node) => {
        return list.findIndex((item) => item == node[key]) !== -1;
      });
      // const { id, fid } = this;
      const listToTree = (list) => {
        let arr = [];
        //一级节点
        list.forEach((item) => {
          let pNodeIndex = list.findIndex((node) => node[id] === item[fid]);
          if (pNodeIndex === -1) {
            arr.push(item);
          }
        });
        // console.log(arr)
        //递归添加子节点
        arr.forEach((item) => {
          const getChildren = (node) => {
            //找到子节点
            const cNodes = list.filter((item) => item[fid] == node[id]);
            if (cNodes.length > 0) {
              node.children = [...cNodes];
              cNodes.forEach((i) => {
                getChildren(i);
              });
            }
          };

          getChildren(item);
        });
        // console.log(arr)
        return arr;
      };
      if (id) {
        newArrTree = listToTree(newArrTree);
      }

      return newArrTree
    }
  },
};
</script>

<style lang="scss" scoped>
.fifter-table {
  color: #333;
}
.el-popover {
  .el-checkbox {
    margin-top: 10px;
    padding-bottom: 5px;
  }
  .el-tree {
    max-height: 150px;
    overflow-y: auto;
    ::v-deep .el-tree-node__expand-icon.is-leaf {
      display: none;
    }
  }
}
</style>
