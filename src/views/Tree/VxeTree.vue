<!--
 * @Description: vxe - tree
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-02 17:22:51
-->
<template>
    <div>
        <vxe-table
        border
            resizable
            :tree-config="{ children: 'children' }"
            :data="tableData"
            :checkbox-config="{ labelField: 'id', highlight: true }"
            @checkbox-change="selectChangeEvent"
        >
            <vxe-table-column type="checkbox" title="ID" width="280" tree-node></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="size" title="Size"></vxe-table-column>
            <vxe-table-column field="type" title="Type"></vxe-table-column>
            <vxe-table-column field="date" title="Date"></vxe-table-column>
            <vxe-table-column fixed="right" label="操作" width="300">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="primary"  plain
                        size="small"
                    >添加</el-button>
              
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="success" plain
                        size="small"
                    >修改</el-button>
                </template>
            </vxe-table-column>
        </vxe-table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tableData: [
                { id: 1000, name: 'vxe-table 从入门到放弃1', type: 'mp3', size: 1024, date: '2020-08-01' },
                {
                    id: 1005,
                    name: 'Test2',
                    type: 'mp4',
                    size: null,
                    date: '2021-04-01',
                    children: [
                        { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                        { id: 20045, name: 'vxe-table 从入门到放弃4', type: 'html', size: 600, date: '2021-04-01' },
                        {
                            id: 10053,
                            name: 'vxe-table 从入门到放弃96',
                            type: 'avi',
                            size: null,
                            date: '2021-04-01',
                            children: [
                                { id: 24330, name: 'vxe-table 从入门到放弃5', type: 'txt', size: 25, date: '2021-10-01' },
                                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
                            ]
                        }
                    ]
                },
                { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 24555, name: 'vxe-table 从入门到放弃9', type: 'avi', size: 224, date: '2020-10-01' }
            ]
        }
    },
    methods: {
        // 勾选的数据
        selectChangeEvent({ records }) {
            this.$tip.success(`勾选${records.length}个树形节点`, records)
            // console.info(`勾选${records.length}个树形节点`, records)
        }
    }
}


</script>