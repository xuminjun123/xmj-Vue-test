<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-21 17:34:49
-->
<template>
    <div class="wrapper">
        <table-list
            :loading="loading"
            :table-data="tableData"
            :table-label="tableLabel"
            tableRef="tableRef"
            select-show
            :row-key="rowKey"
            @handleSelectionChange="handleSelectionChange"
        ></table-list>
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
            :cell-style="changeCellStyle"
        >
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>
  
<script>
import TableList from "@/components/Table/TableList.vue"    
export default {
    components:{
        TableList
    },
    data() {
        return {
            loading:false,
            rowKey:"",
            tableLabel:[],
            tableData: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: 4,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: 2,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },

                {
                    id: 9,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: 12,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 14,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: 10,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
                ,
                {
                    id: 20,
                    date: '2016-05-03',
                    name: '王小虎111111',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    },
    methods: {
        handleSelectionChange(e){
            console.log('e',e);
            
        },
        tableRowClassName({ row, rowIndex }) {
            console.log('tableRowClassName=====>',);
            if (row.name === "王小虎") {
                return 'warning-row2';
            }
            // if (rowIndex === 1) {
            //     return 'warning-row';
            // } else if (rowIndex === 3) {
            //     return 'success-row';
            // }
            return '';
        },

        changeCellStyle({ row, column, rowIndex, columnIndex }) {
            console.log(row, column);
            if (columnIndex %2  == 1) {
                return { background: '#409eff' };
            }else {
                return { background: "oldlace" };
            }
        },
    },
    mounted() {
        this.tableData.sort((a, b) => { return a.id - b.id })//升序
        console.log('tableDate=====>', this.tableData);

        // 表格每行第五列开始添加点击效果
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    /deep/ .el-table .warning-row {
        background: oldlace;
    }

    /deep/ .el-table .success-row {
        background: #f0f9eb;
    }
    /deep/ .el-table .warning-row2 {
        background: darkcyan;
    }

    /deep/ .el-table .success-row2 {
        background: darkblue;
    }

    /deep/ .el-tabl .red {
        background: red;
    }
}
</style>