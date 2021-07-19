<template>
    <div :class="prefixCls">
        <quill-editor
            ref="myQuillEditor"
            v-model="content"
            class="ql-editor-class"
            :disabled="disabled"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            @change="onEditorChange($event)"
        />
    </div>
</template>
  
  <script>
// 工具栏配置
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
    ['blockquote', 'code-block'], // 引用  代码块
    [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }], // 缩进
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
    [{ font: [] }],
    [{ align: [] }], // 对齐方式
    ['clean'] // 清除文本格式
]

export default {
    name: 'QuillEditor',
    components: {
        quillEditor
    },

    props: {
        placeholder: {
            type: String,
            default: '请输入公告内容'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        prefixCls: {
            type: String,
            default: 'el-editor-quill'
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            content: this.value,
            editorOption: {
                theme: 'snow', // or 'bubble'
                placeholder: this.placeholder,
                modules: {
                    toolbar: {
                        container: toolbarOptions
                    }
                }
            }
        }
    },
    watch: {
        value: function (val) {
            this.content = val
        }
    },

    methods: {
        onEditorBlur(quill) {
            // console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            // console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            // console.log('editor ready!', quill)
        },
        onEditorChange({ quill, html, text }) {
            // console.log('editor change!', quill, html, text)
            this.$emit('change', html)
        },
        // 富文本图片上传前
        quillImgBefore(file) {
            const isJpgOrPng =
                file.type === 'image/jpeg' || file.type === 'image/png'
            if (!isJpgOrPng) {
                this.$message.error('请插入图片类型文件(jpg/jpeg/png)')
            }
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isLt2M) {
                this.$message.error('Image must smaller than 2MB!')
            }
            return isJpgOrPng && isLt2M
        },

        quillImgSuccess(info) {
            if (info.file.status === 'done') {
                const response = info.file.response
                const { code } = response
                const quill = this.$refs.myQuillEditor.quill
                console.log('上传的成功的文件地址', info)
                if (code === 0) {
                    const [uploadImg] = response.data
                    const imageUrl = `${this.$fileUrl}${uploadImg.url}`

                    const length = quill.getSelection().index
                    quill.insertEmbed(length, 'image', imageUrl)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
            }
        }
    }
}
</script>
  
<style lang="scss" scoped>
.el-editor-quill {
    height: 220px !important;
}
//解决图标样式错乱 https://blog.csdn.net/qq_27295403/article/details/96482198
.ql-editor-class {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    padding: 0 !important;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    word-wrap: break-word;
}
</style>
  <style>
.editor {
    line-height: normal !important;
    height: 192px;
}
.quill-img {
    display: none;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存";
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体";
}
</style>
  