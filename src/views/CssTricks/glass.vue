<!--
 * @Description: 毛玻璃效果
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 11:08:17
-->

<template>
    <div>
        <h1>毛玻璃效果 CSS效果</h1>
        <main>
            <section>
                <article>安能摧眉折腰事權貴，使我不得開心顏。</article>
                <footer>
                    --
                    <cite>李白 《梦游天姥吟留别》</cite>
                </footer>
            </section>
        </main>
    </div>
</template>

<script>

export default {
    name: 'glassComp',
    components: {},
    props: {},
    data() {
        return {

        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {},

    watch: {}

}

</script>
<style lang='scss' scoped>
main {
    height: 500px;
    background: url("~@/assets/images/CssTricks/glassBkg.jpg") fixed center -50px / cover no-repeat;
    position: relative;

    section {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        width: 80%;
        height: 55%;
        box-sizing: border-box;
        padding: 66px 30px;
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            filter: blur(10px);
            background: url("~@/assets/images/CssTricks/glassBkg.jpg") fixed center -50px / cover
                no-repeat;
            z-index: -1;
        }
        footer {
            font-size: 14px;
            text-align: right;
        }
    }
}
</style>