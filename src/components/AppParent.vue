<!--
 * @Description: App-parent
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-01 11:33:47
-->
<template>
    <div>
        <h3>父组件</h3>
        <!-- { "age": "18", "name": "传给父组件的值" } -->
        <div>组件名上绑定的 props特性($props): {{ $props }}</div>

        <!-- { "test": "123" } -->
        <div>组件名上绑定的非props特性($attrs): {{ $attrs }}</div>
        <app-child v-on="$listeners" v-bind="$props"></app-child>
    </div>
</template>

<script>
import AppChild from './AppChild.vue';
export default {
    data() {
        return {

        };
    },
    inheritAttrs: false,
    props: ['name', 'age'],
    components: {
        AppChild
    },
    mounted() {
        console.log('$attrs=========>',this.$attrs);
        
        this.$emit('start1');  //
    }
}
</script>