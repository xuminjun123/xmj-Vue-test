<!--
 * @Description: 监听滚动事件 v-on:scroll.passive="onScroll"
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-22 13:49:03
-->
<template>
    <div v-on:scroll.passive="onScroll" class="wrapper">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>1</li>
            <li>2</li>
            <li>34</li>
            <li>42</li>

            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>1</li>
            <li>2</li>
            <li>34</li>
            <li>42</li>
            
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>1</li>
            <li>2</li>
            <li>34</li>
            <li>42</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {
        onScroll(e){
            let  event = e.path;
            event.forEach(el => {
                console.log('el', el.window.innerHeight);
                
            });  
        }
    },
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped>
.wrapper {
    width: 200px;
    height: 500px;
    overflow: scroll;
    margin: 0 auto;
}
</style>