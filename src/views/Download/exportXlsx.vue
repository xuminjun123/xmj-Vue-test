<!--
 * @Description: 前端文件下载导出Excel
        对于导出数据而言,返回二进制流文件是最常见的, 而前端打开链接下载excel文件一般有三种方式, 
        第一种是form表单方式 , 也是同步下载方式,直接下载. 这种方式的优点在于不需要对返回数据进行转换操作, 
                浏览器会自动同步解析. 但缺点是无法对返回结果进行操作, 
                如:一般工作中需要对请求进行鉴权, 这个时候,form表单方式下载是无法在请求头中带上token的, 后端只能通过从cookie中获取.

        第二种是a标签下载方式, 将返回结果处理成一个新链接, 
                通过创建a标签打开, 这种方式的优点在于内部请求不需要对鉴权做多余处理, 也可以拿到返回结果进行操作,
                缺点在于不注意之间会产生乱码,及数据量太大导致网络失败. 
                使用blob容器可以解决数据量大导致网络失败的问题, 
                而乱码问题在二进制流前拼接字符串'\ufeff'即可
-->
<template>
    <div>
        <!-- // 为表格绑定一个id， 特别注意 -->
        <div>
            <el-button @click="getXlsx" type="primary">导出表格</el-button>
        </div>
        <el-table id="table" :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
    name: 'exportXlsx',
    components: {},
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

    methods: {
        getXlsx() {
            let wb = XLSX.utils.table_to_book(document.querySelector('#table'));
            /* #table 就是表格的id */
            let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
            try {
                FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '导出数据.xlsx');
            } catch (e) {
                if (typeof console !== 'undefined')
                    console.log(e, wbout)
            }

            this.$tip.success("导出成功")
            return wbout
        },

        // 后端返回二进制数据流,生成Excel
        //   this.$axios({
        //       method: params.method,
        //       url: params.url,
        //       data: params.data,
        //       responseType: 'blob'  // 指明返回格式, 这里注明一下, 如果导出EXCEL为[object blob]的话, 可以把这段responseType:'blob' 注释掉试一下.  
        //     }).then(res => {
        //       console.log(res) // 返回结果
        //       // 这里尤其需要注意, '\ufeff' 用于解决乱码问题, blob可以解决数据量大导致网络失败.
        //       const blob = new Blob(['\ufeff' + res.data], { type: 'text/csv;charset=utf-8' })
        //       const url = window.URL.createObjectURL(blob)
        //       // 通过创建a标签实现
        //       const link = document.createElement('a')
        //       link.href = url
        //       // 对下载的文件命名, 如果后端返回名称出现乱码, 需要后端编码一下.
        //       link.download = decodeURI(res.headers['content-disposition'].split('=')[1]) || '发货单导出数据表.csv'
        //       document.body.appendChild(link)
        //       link.click()
        //       document.body.removeChild(link)
        //     })


    },

    watch: {}



}

</script>
