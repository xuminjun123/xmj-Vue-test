<!--
 * @Description: 排序
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-09 10:58:51
-->

<template>
    <div class="wrapper">
        <el-button>111</el-button>
        <ul>
            <li v-for="(item,index)  in list" :key="index">
                <span>{{ item }}</span> ----
                <button @click="up(index)">向上</button>
                <button @click="down(index)">向下</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6]
        };
    },

    computed: {},

    created() { },

    mounted() { },

    methods: {
        up(i) {
            console.log('i=>',i);   
        },
        down(i) {
            console.log('i=>',i);   
        }
    },

    watch: {}

}

</script>
<style lang='scss' scoped>
.wrapper {
    width: 60vw;
    ul li {
        list-style: none;
        padding: 20px 0;
        border: 1px solid;
        background-color: darkgray;
        & span {
            font-size: 20px;
            color: red;
        }
        & button:nth-of-type(1) {
            color: darkcyan;
        }
        & button:nth-of-type(2) {
            color: rgb(255, 145, 0);
        }
    }
}
</style>