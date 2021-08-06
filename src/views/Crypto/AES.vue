<!--
 * @Description: AES　加解密　
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 14:35:15
-->

<template>
    <div>
        <h1>AES 加密</h1>
        <p>原数据 {{ value }}</p>
        <p>加密后的数据 {{ newVal }}</p>
        <el-input v-model="value"></el-input>
        <el-button @click="encrypt" type="primary" :disabled="disabled">加密</el-button>

        <h1>AES 解密</h1>
        <el-alert :title="`加密数据${newVal}`" type="success"></el-alert>
        <p>解密之后的数据  {{ aesValue }}</p>
        <el-button @click="open" type="primary" :disabled="disabled">解密</el-button>

    </div>
</template>

<script>
import cryptogram from "@/utils/crypto/aes.js";
export default {
    name: 'AES',
    components: {},
    props: {},
    data() {
        return {
            value: '',  // 原数据 
            newVal: "", // 加密数据
            disabled: true,
            aesValue:'' // 解密后的数据
        };
    },

    created() { },

    mounted() { },

    methods: {
        // 加密
        encrypt() {
            if (!this.value) {
                this.$tip.error('请输入数据')
            }
            let oldVal = cryptogram.aesEncrypt(this.value);
            if (!oldVal) {
                this.$tip.error('加密失败')
            }
            this.newVal = oldVal
        },
        // 解密
        open(){
            if(!this.newVal) {
                this.$tip.error('请先加密数据')
            }
            let oldVal = cryptogram.aesDecrypt(this.newVal);
            this.aesValue = oldVal
        }
    },


    watch: {
        value: {
            handler(newV, oldV) {
                console.log('new', newV);
                if (!newV) {
                    this.newVal = '';
                    this.aesValue = ''
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            },
            immediate: true
        }
    }

}

</script>
<style lang='' scoped>

</style>