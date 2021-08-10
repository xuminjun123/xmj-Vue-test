<!--
 * @Description: 腾讯地图
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 14:07:20
-->
<template>
    <div>
        <p>Animate {{ name }}</p>
        <p>Person {{ person_name }}</p>
    </div>
</template>

<script>
import Animate from './Animate.js'
import person from "./People.js"
export default {
    name: 'test-class',
    components: {},
    props: {},
    data() {
        return {
            name: null,
            person_name: null 
        };
    },


    computed: {},

    created() { },

    mounted() {
        let animate =  new Animate();
        animate.setName("dog")
        let name = animate.getName();
        this.name = name
        
        // person 调用 父类
        this.personName()
    },

    methods: {
        personName(){
           let name =  person.changeName();
           console.log('peo',name);
           
           this.person_name = name
        }
       
    },

    watch: {}

}

</script>
<style lang='' scoped>

</style>