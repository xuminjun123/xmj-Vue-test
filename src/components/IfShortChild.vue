<!--
 * @Description:  if 简写
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-08 16:08:14
-->
<template>
    <div class="wrapper">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                el-tab-pane
                v-for="item in lists"
                :key="item.id"
                :label="item.name"
                :name="item.id"
            >{{ item.name }}</el-tab-pane>
        </el-tabs>
        <button @click="tab">点击</button>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    props: {},
    data() {
        return {
            lists: [
                {
                    id: "1",
                    name: "用户管理",
                },
                {
                    id: "2",
                    name: "配置管理",
                },
                {
                    id: "3",
                    name: "信息管理",
                }
            ],
            activeName: "1",
            data: "name"
        };
    },
    watch: {},
    computed: {},
    methods: {
        short() {
            const actions = {
                '1': this.data,
                '2': "age",
                '3': "sex",
                'default': null,
            }
            const { activeName } = this;
            return actions[activeName];
        },
        tab() {
            /** 通过switch 发送不同数据 */
            // const { activeName } = this;
            // switch (activeName) {
            //     case "1":
            //         this.$emit('getProp', "name")
            //         break;
            //     case "2":
            //         this.$emit('getProp', "age")
            //         break;
            //     case "3":
            //         this.$emit('getProp', "sex")
            //         break;
            // }

            this.$emit('getProp', this.short())
        },
        handleClick(tab, event) {
            console.log(tab, event);
            console.log('activeName', this.activeName);
        }
    },
    created() { },
    mounted() {
        this.short()
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>