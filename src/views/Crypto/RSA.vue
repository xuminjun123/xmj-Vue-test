<!--
 * @Description: RSA 加密
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 13:36:24
-->

<template>
    <div>
        <h1>RSA 加密</h1>
        <p>原数据 {{ value }}</p>
        <p>加密后的数据 {{ newVal }}</p>
        <el-input v-model="value"></el-input>
        <el-button @click="encrypt" type="primary" :disabled="disabled">加密</el-button>
        <br />
        <p>解密后的数据 {{ rsaValue }}</p>
        <el-button @click="decrypt" type="primary" :disabled="disabled">解密</el-button>
    </div>
</template>

<script>
import { setEncrypt, RSAdecrypt } from "@/utils/crypto/rsa.js";
export default {
    name: 'RSA',
    components: {},
    props: {},
    data() {
        return {
            value: '',
            newVal: "",
            disabled: true,
            rsaValue: ''
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
            let oldVal = setEncrypt(this.value);
            this.newVal = oldVal
        },
        // 解密
        decrypt() {
            console.log('Val',this.newVal);
            
            let data = RSAdecrypt(this.newVal)
            console.log('data', data);

        }
    },


    watch: {
        value: {
            handler(newV, oldV) {
                console.log('new', newV);
                if (!newV) {
                    this.newVal = '';
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