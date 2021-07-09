<!--
 * @Description:  这是拖拽 -- 单列拖拽
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-09 09:48:23
-->
<template>
    <div class="wrapper">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div>{{ drag ? '拖拽中' : '拖拽停止' }}</div>
                    <!--使用draggable组件-->
                    <draggable
                        v-model="myArray"
                        chosenClass="chosen"
                        forceFallback="true"
                        group="people"
                        animation="1000"
                        @start="onStart"
                        @end="onEnd"
                    >
                        <transition-group>
                            <div
                                class="item"
                                v-for="element in myArray"
                                :key="element.id"
                            >{{ element.name }}</div>
                        </transition-group>
                    </draggable>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>

  <script>
//导入draggable组件
import draggable from 'vuedraggable'
export default {
    //注册draggable组件
    components: {
        draggable,
    },
    data() {
        return {
            drag: false,
            //定义要被拖拽对象的数组
            myArray: [
                { people: 'cn', id: 10, name: 'www.itxst.com' },
                { people: 'cn', id: 20, name: 'www.baidu.com' },
                { people: 'cn', id: 30, name: 'www.taobao.com' },
                { people: 'us', id: 40, name: 'www.yahoo.com' }
            ]
        };
    },
    methods: {
        //开始拖拽事件
        onStart() {
            this.drag = true;
        },
        //拖拽结束事件
        onEnd() {
            this.drag = false;
        },
    },
};
</script>
 
<style scoped>
.wrapper {
    margin: 0 auto;
}   
/*被拖拽对象的样式*/
.item {
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #eee;
    margin-bottom: 10px;
    cursor: move;
}
/*选中样式*/
.chosen {
    border: solid 1px #3089dc !important;
}
</style>