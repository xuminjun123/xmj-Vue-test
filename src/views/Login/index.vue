<!--
 * @Description: login 
 * @Author: xmj
 * @Date: 2021-07-24 18:12:30
-->
<template>
    <div class="login-container">
        <div header="请先登录" class="login-card">
            <el-form @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input v-model="model.password" type="password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button round type="primary" size="medium" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
import { useStore } from '@/store'
import { UserActionTypes } from '@/store/modules/user/action-types'
// import { PermissionActionType } from '@/store/modules/permission/action-types'
export default {
    data() {
        return {
            model: {
                username: '',
                password: ''
            },
            redirect: undefined
        };
    },
    watch: {
        $route: {
            handler: function (route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true
        },

    },

    methods: {
        //  登录
        async login() {
            // const res = await this.$http.post("login", this.model);
            // console.log(this.model)
            const store = useStore()
            await store.dispatch(UserActionTypes.ACTION_LOGIN, this.model)
           
            await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO)
            // await    store.dispatch(PermissionActionType.ACTION_SET_ROUTES, ['admin'])
            console.log('tiaozhuan ', this.redirect);

            this.$router.push({
                path: this.redirect || '/',
            })
           
            // 跳转到首页
            // await this.$store
            //     .dispatch(UserActionTypes.ACTION_LOGIN, this.model)
            //     .then(() => {
            //         this.$router.push({ path: this.redirect || "/" });
            //         this.$message({
            //             type: "success",
            //             message: "登录成功",
            //         });
            //     })
        },
        // getOtherQuery(query) {
        //     return Object.keys(query).reduce((acc, cur) => {
        //         if (cur !== 'redirect') {
        //             acc[cur] = query[cur]
        //         }
        //         return acc
        //     }, {})
        // }
    },
};
</script>
<style lang="scss" scoped>
.login-container {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: url("~@/assets/images/login/login.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .login-card {
        width: 25rem;
        margin: 15rem auto;
    }
}
</style>
  