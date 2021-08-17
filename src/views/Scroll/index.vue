<!--
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 18:27:47
-->
<template>
    <div class="wrapper">
        <el-card shadow="hover" style="height: 300px; overflow: auto" v-infinite-scroll="load">
            <div slot="header" class="clearfix">
                <span>进出记录</span>
            </div>

            <el-table :show-header="false" :data="todoList3" style="width: 100%">
                <!-- <el-table-column width="40">
                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
                </el-table-column>-->
                <el-table-column>
                    <template slot-scope="scope">
                        <div class="todo-item" :class="{ 'todo-item-del': scope.row.status }">
                            {{ scope.row.username }} &nbsp; &nbsp; &nbsp;{{
                                scope.row.enterTime
                            }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column width="60">
                    <!-- <template slot-scope="scope"> -->
                    <!-- <i class="el-icon-edit"></i> -->
                    <template>
                        <i class="el-icon-delete"></i>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
  
<script>
import ScrollBar from "@/components/ScrollBar.vue";
export default {
    name: "ScrollBar",
    components: { ScrollBar },
    props: {},
    data() {
        return {
            todoList1: [
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
                { username: "2", enterTime: "11" },
            ],
            todoList2: [
                { username: "23", enterTime: "11333333333333" },
                { username: "231", enterTime: "112" },
                { username: "232", enterTime: "113" },
                { username: "233", enterTime: "114" },
                { username: "234", enterTime: "115" },
                { username: "235", enterTime: "116" },
                { username: "236", enterTime: "117" },
            ],
            todoList3: [],
        };
    },
    watch: {},
    computed: {},
    methods: {
        load() {
            console.log('load------>');
            
            this.todoList3 = [...this.todoList1, ...this.todoList2];
        },
        getList() {
            //   this.todoList = [...this.todoList, ...this.todoList2];
        },
    },
    created() { },
    mounted() { },
};
</script>
