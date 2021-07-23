<!--
 * @Description:  作废文件
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 11:25:17
-->
<script>
export default {
    name: "comp",
    // props: {
    //     open: {
    //         type: Boolean,
    //         default: true
    //     },
    // },
    data(){
        return {
            open:true
        }
    },
    // watch: {
    //     open: {
    //         handler(oldvalue, newvalue) {
    //             return newvalue
    //         },
    //         immediate: true
    //     }
    // },
    // computed: {

    // },
    methods: {
        view(val) {
            this.open = true
        },
        // close(){
        //     this.open = false
        // }
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
                    <el-button on-click={() => { this.open = false }}>取 消</el-button>
                    <el-button type="primary" on-click={() => { this.open = false }}>确 定</el-button>
                </span>
            </el-dialog>
        )
    }
}
</script>
