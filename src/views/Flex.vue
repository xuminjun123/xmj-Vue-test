<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-08 13:08:27
-->
<template>
    <div>
        flex 布局
        <base-flex multiline :list="list"></base-flex>
        <div class="m-flex">
            <div v-for="item in lists" :key="item">{{ item }}</div>
        </div>
    </div>
</template>

<script>
import BaseFlex from '../components/BaseFlex.vue';
import { getArrEqual } from "@/utils/getArrEqual.js"
export default {
    name: '',
    components: { BaseFlex },
    props: {},

    data() {
        return {
            list: [
                {
                    img: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%20%E7%A5%9D%E7%A6%8F&step_word=&hs=0&pn=37&spn=0&di=99770&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=354214213%2C994460251&os=3488474995%2C3811904964&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1389861203899_R&fm=&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fe824b899a9014c08b03d86f973082e0e7af4f4e6.jpeg%3Ftoken%3Db06320aedc7de5da2d2d0861fd25dd3d%26s%3DB5A7A7BE4EA90882669A977403005039&gsm=3c&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
                    text: "1"
                },
                {
                    img: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%20%E7%A5%9D%E7%A6%8F&step_word=&hs=0&pn=37&spn=0&di=99770&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=354214213%2C994460251&os=3488474995%2C3811904964&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1389861203899_R&fm=&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fe824b899a9014c08b03d86f973082e0e7af4f4e6.jpeg%3Ftoken%3Db06320aedc7de5da2d2d0861fd25dd3d%26s%3DB5A7A7BE4EA90882669A977403005039&gsm=3c&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
                    text: "2"
                },
                {
                    img: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%20%E7%A5%9D%E7%A6%8F&step_word=&hs=0&pn=37&spn=0&di=99770&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=354214213%2C994460251&os=3488474995%2C3811904964&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1389861203899_R&fm=&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fe824b899a9014c08b03d86f973082e0e7af4f4e6.jpeg%3Ftoken%3Db06320aedc7de5da2d2d0861fd25dd3d%26s%3DB5A7A7BE4EA90882669A977403005039&gsm=3c&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
                    text: "3"
                },
                {
                    img: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%20%E7%A5%9D%E7%A6%8F&step_word=&hs=0&pn=37&spn=0&di=99770&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=354214213%2C994460251&os=3488474995%2C3811904964&simid=0%2C0&adpicid=0&lpn=0&ln=1975&fr=&fmq=1389861203899_R&fm=&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fe824b899a9014c08b03d86f973082e0e7af4f4e6.jpeg%3Ftoken%3Db06320aedc7de5da2d2d0861fd25dd3d%26s%3DB5A7A7BE4EA90882669A977403005039&gsm=3c&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
                    text: "4"
                }
            ],

            lists: [
                1, 2, 3, 4, 5
            ]
        };
    },
    computed: {},

    created() { },

    mounted() {
        let arr1 = [1, 23, 4, 5];
        let arr2 = [1, 23, 45, 4, 5];
        const newArr = getArrEqual(arr1, arr2);
        console.log('newArr===>>', newArr);
    },
    methods: {},
    watch: {}
}

</script>
<style lang='scss' scoped>
.m-flex {
    display: flex;
}
.m-flex div {
    width: calc(100% / 6);
    height: 50px;
    line-height: 50px;
    border: 1px solid bisque;
}
</style>