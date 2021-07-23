<template>
    <el-upload
        :listType="listType"
        :accept="acceptTypes"
        :multiple="multiple"
        action
        :file-list="fileList"
        :before-remove="handleRemove"
        :on-change="uploadFile"
        :auto-upload="autoUpload"
        v-bind="$attrs"
        style="width:90%"
        :limit="limit"
        class="upload"
        :class="{ hideUpload: hideUpload }"
    >
        <el-button type="link" v-if="listType === 'text'">请上传</el-button>
        <i class="el-icon-plus" v-if="listType === 'picture-card'"></i>
        <div slot="tip" class="el-upload__tip">{{ tips }}</div>
    </el-upload>
</template>
  
  <script>
/* eslint-disable no-unused-vars */
// import { uploadImg, uploadFile, uploadFan } from "@/api/infoSet/v2/upload.js";
// import { docStr2List } from "../../utils/index";
export default {
    name: "ZUpload",
    props: {
        listType: {
            type: String,
            default: "text"
        },
        accept: {
            type: String,
            default: null
        },
        document: {
            type: String,
            default: null
        },
        multiple: {
            type: Boolean,
            default: true
        },
        splitType: {
            type: String,
            default: "*"
        },
        uploadType: {
            type: String,
            default: "pics"
        },
        autoUpload: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: null
        }
    },
    computed: {
        // 限制文件类型
        acceptTypes() {
            const { uploadType } = this;
            if (uploadType === "pics") {
                return "image/png,image/jpeg,image/jpg";
            } else if (uploadType === "cardPic") {
                return ".png,.jpg,.pdf";
            } else {
                return ".doc,.docx,.xls,.xlsx,.pdf";
            }
        },
        tips() {
            const { uploadType } = this;
            const fileType = {
                pics: "只能上传jpg/png文件，且单张不超过10MB",
                fan: "只能上传xls,xlsx文件，且单个不超过50MB",
                file: "只能上传doc,docx,pdf,xls,xlsx文件，且单个不超过50MB",
                cardPic: "上传营业执照或者工作证支持扩展名：.png .jpg .pdf"
            };
            return fileType[uploadType];
        }
    },
    watch: {
        document() {
            this.fileList = [];
            this.handleDocumentString();
        }
    },
    created() {
        this.handleDocumentString();
    },
    data() {
        return {
            fileList: [],
            hideUpload: false
        };
    },
    methods: {
        handlePictureCardPreview(value) { },
        getFile() {
            return this.fileList;
        },
        handleCheckdLimit() {
            this.hideUpload = this.fileList.length === this.limit;
        },
        handleRemove(file) {
            const index = this.fileList.indexOf(file);
            const newFileList = this.fileList.slice();
            newFileList.splice(index, 1);
            this.fileList = newFileList;
            this.handleCheckdLimit();
        },
        // 原有附件
        handleDocumentString() {
            const { document, splitType } = this;
            if (document === null) {
                return;
            }
            this.fileList = docStr2List(document, splitType);
            this.handleCheckdLimit();
        },
        uploadFile(file) {
            const { uploadType } = this;
            const MAX_NUMBER = 5;
            const MAX_SIZE = uploadType === "pics" ? 10485760 : 52428800; // byte,单个文件的大小
            const ERR_MSG_NUMBER = "超出附件上传数量";
            const ERR_MSG_SIZE = "超出附件上传大小";
            if (this.fileList.length >= MAX_NUMBER) {
                this.fileList = [...this.fileList];

                this.$tip.error(ERR_MSG_NUMBER);
                return;
            } else if (file.size >= MAX_SIZE) {
                this.$tip.error(ERR_MSG_SIZE);
                this.fileList = [...this.fileList];
                return;
            } else {
                this.fileList = [...this.fileList, file];
            }
            this.handleCheckdLimit();
            // this.hideUpload = this.fileList.length === this.limit;
        },
        async getDocument() {
            const { uploadType } = this;
            const uploadAttr =
                uploadType === "file" || uploadType === "cardPic"
                    ? "files"
                    : uploadType === "fan"
                        ? "fan"
                        : "pics";
            // const _this = this;
            let DOCUMENT = null;
            const fileUploadedURL = []; // 已上传的文件
            const fileData = new FormData();

            this.fileList.forEach(file => {
                if ("hasUpload" in file) {
                    const { url } = file;
                    const arr = url.split("/");
                    const length = arr.length;
                    fileUploadedURL.push(`${arr[length - 2]}/${arr[length - 1]}`);
                } else {
                    fileData.append(uploadAttr, file.raw);
                }
            });

            const URLS = [];
            if (fileData.getAll(uploadAttr).length > 0) {
                // 有新增文件时，上传
                const res =
                    uploadType === "file" || uploadType === "cardPic"
                        ? await uploadFile(fileData)
                        : uploadType === "fan"
                            ? await uploadFan(fileData)
                            : await uploadImg(fileData);
                if (res.code === "0") {
                    res.data.forEach(e => {
                        URLS.push(e.url);
                    });
                    DOCUMENT = [...URLS, ...fileUploadedURL].join("*");
                } else {
                    this.$tip.error(res.message);
                }
            } else if (fileUploadedURL.length > 0) {
                DOCUMENT = fileUploadedURL.join("*");
            }
            this.fileList = [];
            // this.document = null;
            return DOCUMENT;
        }
    }
};
</script>
  <style lang="scss" scoped>
$size: 100px;
.hideUpload .el-upload--picture-card {
    display: none;
}

.el-upload--picture-card {
    width: $size;
    height: $size;
    line-height: $size;
}
.el-upload-list--picture-card .el-upload-list__item {
    width: $size;
    height: $size;
    line-height: $size;
}
</style>
  