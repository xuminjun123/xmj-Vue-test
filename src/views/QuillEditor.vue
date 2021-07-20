<!--
 * @Description: 文本编辑器
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-18 22:33:02
-->
<template>
    <div class="wrapper">
        <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item
                label="年龄"
                prop="age"
                :rules="[
                    { required: true, message: '年龄不能为空' },
                    { type: 'number', message: '年龄必须为数字值' }
                ]"
            >
                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>

        <el-form :model="formData" :rules="rules" ref="formData">
            <el-form-item label="内容" prop="v">
                <!--  自定义富文本组件  -->
                <el-input v-model="formData.v"></el-input>
            </el-form-item>
            <!-- 添加ref, 用来调用$emit -->
            <el-form-item label="内容" prop="inputValue" ref="inputValueRef">
                <!--  自定义富文本组件  -->
                <editor-comp
                    v-model="formData.inputValue"
                    @onEditorBlur="onEditorBlur"
                    @onEditorFocus="onEditorFocus"
                    @onEditorReady="onEditorReady"
                    @onEditorChange="onEditorChange"
                ></editor-comp>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit('formData')">提交</el-button>
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

            numberValidateForm: {
                age: ''
            },


            formData: {
                v: "",
                inputValue: ''
            },

            // 验证规则
            rules: {
                v: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ],
                inputValue: [
                    { required: true, message: '请输入内容', trigger: 'blur' },
                ]
            }
        };
    },
    watch: {},
    computed: {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 提交
        submit(formName) {
            this.$refs[formName].validate((valid) => {
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
            // this.$refs.inputValueRef.$emit('el.form.blur', e); // 重点！
            console.log('onEditorBlur', e);
        },

        onEditorFocus(e) {
            console.log('onEditorFocus', e);
        },

        onEditorReady(e) {
            console.log('onEditorReady', e);
        },
        onEditorChange(html) {
            console.log('html----->', html);
            console.log('onEditorChange', html);
        }
    },
    created() { },
    mounted() { }
}
</script>
  