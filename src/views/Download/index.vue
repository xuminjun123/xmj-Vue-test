<!--
 * @Description: file saver 的使用
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-05 10:11:26
-->
<template>
    <div class="wrapper">
        <el-row>
            <el-col :span="8">
                <div>
                    <el-button @click="download" type="primary">下载图片</el-button>
                </div>
                <el-image
                    :src="src"
                    :preview-src-list="srcList"
                    style="width: 300px; height: auto"
                    class="picture"
                    :fit="fit"
                ></el-image>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light"></div>
                <div>
                    <el-button @click="exportExcel" type="primary">导出表格</el-button>
                    <el-button @click="printExcel" type="primary">打印表格</el-button>
                </div>
                <el-table :data="tableData" style="width: 100%" class="table">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>

                <div style="margin-top:20px">
                    <el-alert title="根据后台接口文件流下载" type="success" />
                    <el-button type="primary" class="my-4" @click="handleDownByData">文件流下载</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import printJS from 'print-js';

import { downloadByData } from "@/utils/download"
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import img from '@/assets/images/CssTricks/bg1.jpg'
export default {
    name: 'file-saver',
    components: {},
    props: {},
    data() {
        return {
            src: img,
            fit: 'fill',
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
            }],
            srcList: [
                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {
        download() {
            this.$message({
                message: "图片正在下载中，请稍作等候，谢谢！",
                type: "warning"
            });
            setTimeout(() => {
                let node = document.querySelector('.picture')
                domtoimage.toBlob(node)
                    .then(blob => {
                        saveAs(blob, 'downLoad.jpg');
                        this.$message({
                            message: "图片下载成功！",
                            type: "success"
                        });
                    })
                    .catch(() => {
                        this.$message({
                            message: "图片下载失败！",
                            type: "warning"
                        });
                    });
            }, 500);
        },
        exportExcel() {

        },
        printExcel() {
            printJS({
                printable:this.tableData,
                properties:['date','name','address'],
                type: 'json'
            });
        },
        handleDownByData() {
            this.$tip.error("没实现")
            // let table =  document.querySelector(".table")
            // downloadByData(this.tableData, 'testName.csv');
        }
    },

    watch: {}

}

</script>
<style lang='scss' scoped>
.wrapper {
    height: 500px;
    .el-image {
    }
}
</style>