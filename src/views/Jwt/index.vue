<!--
 * @Description:  测试JWt使用
 * @Author: xmj
 * @Date: 2021-06-13 03:16:42
-->
<template>
    <div class="wrapper">
        <h1>JWT</h1>
        <p>{{token}}</p> 
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="用户名">
                <el-input v-model="sizeForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="sizeForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
  <script>
import { getJwt } from "@/api/login";
export default {
    name: "vueName",
    components: {},
    props: {},
    data() {
        return {
            token: null,
            sizeForm: {
                username: "admin",
                password: "123456",
            },
        };
    },
    watch: {},
    computed: {},
    methods: {
        onSubmit() {
            const { username, password } = this.sizeForm;
            console.log("submit!", username, password);
            getJwt(this.sizeForm).then((res) => {
                console.log('res=====》', res.token);
                this.token = res.token
            });
        },
    },
    created() { },
    mounted() { },
};
</script>
  <style lang="scss" scoped>
.wrapper {
}
</style>
  