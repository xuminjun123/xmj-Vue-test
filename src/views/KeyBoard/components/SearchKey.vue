<!--
 * @Description: 键盘 item- svg
  https://juejin.cn/post/6921536009859497991
  为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

            - enter 
            - tab 
            - delete (捕获“删除”和“退格”键) 
            - esc 
            - space 
            - up 
            - down 
            - left 
            - right

 * @param : 
 * @return: 
 * @Author: xmj  
 * @Date: 2021-08-12 11:31:25
                @keyup.up="onUp"
                @keyup.down="onDown"
                @keyup.enter="onEnter"
                @keyup.esc="onEsc"
-->
<template>
    <div class="wrapper">
        <ul class="infinite-list">
            <li
                v-for="(item,index) in count"
                class="infinite-list-item"
                :class="{ active: index === currentIndex }"
                :key="index"
            >{{ item }}</li>
        </ul>
        <div class="svgStyle">
            <svg-icon iconClass="arrowUpOutline" :styleObject="styleObject"></svg-icon>
            <svg-icon iconClass="arrowDownOutline" :styleObject="styleObject"></svg-icon>
            <svg-icon iconClass="iconEnterOutlined" :styleObject="styleObject"></svg-icon>
            <svg-icon iconClass="keyboardEsc" :styleObject="styleObject"></svg-icon>
        </div>
    </div>
</template>

<script>

export default {
    name: 'searchKeyItem',
    components: {},
    props: {},
    data() {
        return {
            count: [1, 2, 3, 4, 5],
            currentIndex: 0,
            styleObject: {
                width: "30px",
                height: "30px",
                border: "1px solid #333",
                margin: "10px",
                padding: "3px",
                boxSizing: "content-box"

            }
        };
    },


    computed: {},

    created() { },

    mounted() {
        this.$nextTick(() => {  // 监听键盘事件
            document.onkeydown = (e) => {
                console.log('e-->', window.event.keyCode);
                let keyBoard = window.event.keyCode

                switch (keyBoard) {
                    case 38:
                        this.onUp()
                        break;
                    case 40:
                        this.onDown()
                        break;
                    case 13:
                        this.onEnter()
                        break;
                    case 27:
                        this.onEsc()
                        break;

                }
            }
        })

    },

    methods: {
        onEnter() {
            console.log('enter');
            this.$tip.info('点击了回车')
        },
        onUp() {
            console.log('up');
            if (this.currentIndex == (this.count.length - 1)) {
                this.currentIndex = 0
            } else {
                this.currentIndex++;
            }
        },
        onDown() {
            console.log('down');
   
            if (this.currentIndex <= 0) {
                this.currentIndex = (this.count.length - 1)
            } else {
                this.currentIndex--;
            }
        },
        onEsc() {
            console.log('esc');
            this.$tip.info('点击了取消')
        },
        init() {
            // // enter search 回车键
            this.onEnter();

            // // Monitor keyboard arrow keys 上键
            this.onUp();

            // //下键
            this.onDown();

            // // esc close ; esc退出
            this.onEsc();
        }

    },

    watch: {}

}

</script>
<style lang='scss' scoped>
.wrapper {
    .infinite-list-item {
        width: 80%;
        height: 20px;
        padding: 10px;
        box-sizing: content-box;
        color: white;
        text-align: center;
        margin: 0 auto;
        border: 1px solid white;
        background-color: #666;
    }

    .active {
        background-color: lightblue;
    }

    .svgStyle {
        display: flex;
        justify-content: space-between;
    }
}
</style>