/*
 * @Description: base-dialog  作废文件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 12:07:03
 */

export const mixin =
{
    name: "dialog",
    data() {
        return {
            open: true
        }
    },

    methods: {
        view(val) {
            this.open = true
        },

    },
    render() {
        return (
            <el-dialog
                on={{ ['update:visible']: this.view }} visible={this.open}
                title="提示"
                width="30%"
            >
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button on-click={() => { this.open = this.d }}>取 消</el-button>
                    <el-button type="primary" on-click={() => { this.open = false }}>确 定</el-button>
                </span>
            </el-dialog>
        )
    }
}

