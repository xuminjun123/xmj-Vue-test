<!--
 * @Description: 多文件上传
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-17 11:27:56
-->
<template>
    <div>
        <file-upload
            ref="fileUploadDialog"
            :billId="form.noticeId"
            :billType="10"
            @input="getAttachList"
        ></file-upload>
        <el-button
            type="primary"
            plain
            icon="el-icon-plus"
            size="mini"
            @click="handleAdd"
            :disabled="notEdit"
        >上传</el-button>
    </div>
</template>

<script>
import FileUpload from '@/components/FileUpload'
export default {
    name: 'upload',
    components: {
        FileUpload
    },
    props: {},
    data() {
        return {
            form:{},
            notEdit:false
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {
        handleAdd() {
            this.$refs.fileUploadDialog.show()
        },
        getAttachList() {
            this.loading = true
            this.attachQuery.billId = this.form.noticeId
            this.attachQuery.billType = 10
            // listAttachment(this.attachQuery).then(response => {
            //     this.attachList = response.rows
            //     this.attachList.forEach(el => {
            //         // 转为kb，取小数点后2位
            //         el.fileSize = parseFloat(el.fileSize / 1024).toFixed(2)
            //     })
            //     this.attachTotal = response.total
            //     this.loading = false
            // }).catch(() => { })
        },

    },

    watch: {}

}

</script>
<style lang='scss' scoped>
</style>