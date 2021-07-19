<!--
 * @Description: 文本编辑器
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-18 22:33:02
-->
<template>
    <div class="wrapper">
        <el-form :model="formData" :rule="rules" ref="formRef">
            <!-- 添加ref, 用来调用$emit -->
            <el-form-item label="内容" prop="inputValue" ref="inputValueRef" >
                <!--  自定义富文本组件  -->
                <editor-comp
                    :title="title"
                    v-model="formData.inputValue"
                    @onEditorBlur="onEditorBlur"
                    @onEditorFocus="onEditorFocus"
                    @onEditorReady="onEditorReady"
                    @onEditorChange="onEditorChange"
                ></editor-comp>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
  
<script>
import EditorComp from '../components/EditorComp.vue';
export default {
    components: {
        EditorComp
    },
    data() {
        return {
            title:"标题",
            formData: {
                inputValue: ''
            },

            // 验证规则
            rules: {
                inputValue: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ]
            }
        };
    },
    watch: {},
    computed: {},
    methods: {
        // 提交
        submit() {
            this.$refs.formRef.validate((valid) => {
              if (valid) {
                console.log('submit!', valid);
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        },

        // 失焦
        onEditorBlur(e) {
            this.$refs.inputValueRef.$emit('el.form.blur', e); // 重点！
            console.log('onEditorBlur', e);
        },

        onEditorFocus(e) {
            console.log('onEditorFocus', e);
        },

        onEditorReady(e) {
            console.log('onEditorReady', e);
        },
        onEditorChange(html) {
            console.log('html----->',html);      
            console.log('onEditorChange', html);
        }
    },
    created() { },
    mounted() { }
}
</script>
  