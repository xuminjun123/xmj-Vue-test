<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-02 10:28:48
-->
<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            default-expand-all
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column align="center" width="100">
                <template slot="header" slot-scope="scope">
                    <el-checkbox v-model="checkedAll" @change="handleCheckedAll(scope)" />
                </template>
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.checked" @change="handleCheckedOne(scope.row)" />
                </template>
            </el-table-column>
            <!-- <el-table-column type="selection" width="55"></el-table-column> -->
            <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-button @click="checkedNode(tableData)">点击</el-button>
        <el-button @click="filterIds">dian</el-button>
    </div>
</template>
    <script>
export default {
    data() {
        return {
            ids: [],
            checkedAll: false,
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                // checked: false,
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                // checked: false,
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                // checked: false,
                address: '上海市普陀区金沙江路 1519 弄',
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    // checked: false,
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    // checked: false,
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        id: 61,
                        date: '2016-05-01',
                        name: '王小虎',
                        // checked: false,
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        id: 62,
                        date: '2016-05-01',
                        name: '王小虎',
                        // checked: false,
                        address: '广州市普陀区金沙江路 1519 弄'
                    }]
                }]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                // checked: false,
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.tableData.forEach((item, index) => {
                console.log('item', item);
                if (item.children) {
                    this.addCkeckedChildrenFalse(item.children)
                }
                this.addCkeckedFalse(item, 'checked', false)
            })
        })
    },

    methods: {
        // 添加 checked: false
        addCkeckedFalse(data) {
            this.$set(data, 'checked', false)
        },

        // 子节点添加 checked: false 
        addCkeckedChildrenFalse(arr) {
            // console.log('arr', arr);
            arr.forEach((item, index) => {
                this.addCkeckedFalse(item)
                if (item.children) {
                    this.addCkeckedChildrenFalse(item.children); // 递归
                }
            })
            // console.log('tableData', this.tableData);
        },



        // boolValue接收一个布尔值
        checkOne(obj, boolValue) {
            obj.checked = boolValue
            // 判断存不存在children,存在就递归赋值
            if (obj.children) {
                obj.children.forEach(item => this.checkOne(item, boolValue))
            }
        },

        // 绑定每一行checkbox的change事件
        handleCheckedOne(row) {
            console.log('row.',row.checked);
            
            if (row.checked) {
                this.checkOne(row, true)
                this.checkedNode(row)
            } else {
                this.checkOne(row, false)
            }
        },

        checkAll(arr, boolValue) {
            arr.forEach((item) => {
                // item.checked = boolValue
                this.$set(item, 'checked', boolValue)
                // children同样是数组
                if (item.children) {
                    this.checkAll(item.children, boolValue)
                }
            })
        },

        // 全选
        handleCheckedAll(scope) {
            // 实际上scope并没有什么用处，仅为了解决上面提到的表头checkbox不显示的bug
            // console.log('全选',scope.column)

            if (this.checkedAll) {
                this.checkAll(this.tableData, true)
            
            } else {
                this.ids = []
                this.checkAll(this.tableData, false)
            }

        },

        filterIds(){
            this.tableData.forEach((item,index) =>{
               if(item.checked == true) {
                this.ids = [... new Set(this.ids)]
               }
               console.log('this.ids',this.ids);
            })  
        },

        // 获取选中的节点 id
        checkedNode(row) {
            if(row.children){
                row.children.forEach((item)=>{
                    this.checkedNode(item)
                })
            }
            this.idsFilter(row)
            this.ids = [... new Set(this.ids)]
            console.log('this.checkedTrue', this.ids);
        },

        idsFilter(row) {
            if (row.checked === true) {
                this.ids.push(row.id)
            }
        },



        // tree子节点懒加载
        load(tree, treeNode, resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }
                ])
            }, 1000)
        }
    },
}
</script>
<style>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
  