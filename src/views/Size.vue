<!--
 * @Description:
 * @param :
 * @return:
 * @Author: xmj
 * @Date: 2021-03-09 15:44:19
-->

  

<template>
    <div>
        <el-tooltip content="布局大小" effect="dark" placement="bottom">
            <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>
  

<script>
import SizeSelect from '@/components/SizeSelect'
export default {
    name: '',
    components: {
        SizeSelect
    },
    props: {},
    data() {
        return {

            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]

        };
    },
    computed: {},
    created() { },
    mounted() { },
    methods: {},
    watch: {}
}

</script>
