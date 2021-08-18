<!--
 * @Description:  监听路由
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-07 15:35:04
-->
<template>
    <div class="wrapper">
        <watch-router :msg="msg"></watch-router>
        <a
            v-for="item in tags"
            :key="item.id"
            :class="{ activeLink: activeLink === item.id }"
            @click="onLinkClick(item.id, item.name)"
        >{{ item.title }}</a>
        <!-- <a :class="{ activeLink: activeLink === 2 }" @click="onLinkClick(2, 'about')">About us</a>
        <a :class="{ activeLink: activeLink === 3 }" @click="onLinkClick(3, 'case')">Case</a>-->

        <div id="home">
            <p>1</p>
            <p>122</p>
        </div>

        <div id="about">
            <p>2</p>
            <p>222</p>
        </div>

        <div id="case">
            <p>3</p>
            <p>333</p>
        </div>
    </div>
</template>

<script>
import WatchRouter from '@/components/WatchRouter.vue';
export default {
    name: 'WatchRouterFather',
    components: { WatchRouter },
    props: {},
    data() {
        return {
            activeLink: 1,
            msg: "message2",
            tags: [
                {
                    id: 1,
                    name: "home",
                    title: "home"
                },
                {
                    id: 2,
                    name: "about",
                    title: "about us"
                },
                {
                    id: 3,
                    name: "case",
                    title: "case"
                },
            ]
        };
    },
    watch: {
        activeLink: {
            handler(value) {
                console.log('value====>', value);
            },
            deep: true,
            immediate: true
        }
    },
    computed: {},
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        onLinkClick(value, name) {
            this.activeLink = value;
            document.querySelector(`#${name}`).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        },
        handleScroll() {
            let scrollTop = window.pageYOffset;
            console.log("ST===>", scrollTop);
            if (scrollTop >= 200) {
              
            }
        },
    },
    created() { },
};
</script>
<style lang="scss" scoped>
.wrapper {
    //丝滑滚动
    // scroll-behavior: smooth;
    .activeLink {
        background-color: red;
    }
    a {
        cursor: pointer;
        padding: 10px;
        border: 1px solid black;
    }
    #home {
        background: yellow;
        height: 1000px;
    }
    #about {
        background: darkblue;
        height: 1000px;
    }
    #case {
        cursor: pointer;
        background: darkcyan;
        height: 1000px;
    }
}
</style>