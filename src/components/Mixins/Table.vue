<!--
 * @Description: 作废文件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 11:13:08
-->
<script>
export default {
    props: {
        // 表格列
        columns: {
            type: Array,
            default: _ => { return [] }
        },
        // 表格数据
        tableData: {
            type: Array,
            default: _ => { return [] }
        },
        // loading 标志
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        sortChange(obj) {
            this.$emit('sortChange', obj)
        }
    },
    render() {
        return (
            <el-table border stripe v-loading={this.loading} element-loading-text="拼命加载中" data={this.tableData} on-sort-change={obj => { this.sortChange(obj) }} style="width: 100%">
                {
                    this.columns.map(columnObj => {
                        return <el-table-column prop={columnObj.prop} label={columnObj.label} sortable={columnObj.sortable} width={columnObj.width}
                            {...{
                                scopedSlots: {
                                    default: scope => {
                                        return columnObj.hasOwnProperty('render') ? columnObj.render(scope.index, scope.row) : scope.row[columnObj.prop]
                                    }
                                }
                            }}
                        >
                        </el-table-column>
                    })
                }
            </el-table>
        )
    }
}
</script>
