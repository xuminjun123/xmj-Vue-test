<!--
 * @Description: slot 
        - 默认插槽的话直接在子组件的标签内写入内容即可
        - 具名插槽是在默认插槽的基础上加上slot属性，值为子组件插槽name属性值
        - 作用域插槽则是通过slot-scope获取子组件的信息，在内容中使用。这里可以用解构语法去直接获取想要的属性

 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-11 14:37:07-->

 <template>
    <div class="wrapper">
        <slot-test>
            <p>content1</p>
            <p slot="user">content2</p>

            <!-- 父组件键接受 子组件 传递的testpros -->
            <div slot="footer" slot-scope="slotProps">{{ slotProps.testProps }}</div>

            <template v-slot:main>
                <!-- 这里v-slot：后边的值与组件内的slot的name属性对应，也就是插槽的名称。 -->
                <div>test</div>
            </template>

            <template v-slot:page="message">
                <div>{{ message.aa }}</div>
            </template>
        </slot-test>
        <!-- 流光按钮 -->
        <button class="btn">button</button>
    </div>
</template>

<script>
import SlotTest from '@/components/SlotTest.vue';
export default {
    name: 'slotStudy',
    components: { 
        SlotTest
     },
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() {
        this.$del().then((result) => {
            console.log(result);
            
        }).catch((err) => {
            
        });
     }
};
</script>
<style lang="scss" scoped>
.wrapper {
    .btn {
        border: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 230px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        color: #fff;
        font-size: 25px;
        text-transform: uppercase;
        cursor: pointer;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 60px;
    }

    .btn:hover {
        animation: animate 8s linear infinite;
    }

    @keyframes animate {
        0% {
            background-position: 0%;
        }

        100% {
            background-position: 400%;
        }
    }

    .btn::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 40px;
        opacity: 0;
        transition: 0.5s;
    }

    .btn:hover::before {
        filter: blur(20px);
        opacity: 1;
        animation: animate 8s linear infinite;
    }
}
</style>
