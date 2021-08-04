<!--
 * @Description: tree
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-14 16:59:54
-->

<template>
    <div>{{ tree }}</div>
</template>

<script>
import { arrayToTree } from "@/utils/buildTree.js"
export default {
    name: 'tree',
    components: {},
    props: {},
    data() {
        return {
            tree: ''
        };
    },

    computed: {},

    created() { },

    mounted() {
        let arr = [{ id: 1, name: '部门1', pid: 0 },
        { id: 2, name: '部门2', pid: 1 },
        { id: 3, name: '部门3', pid: 1 },
        { id: 4, name: '部门4', pid: 3 },
        { id: 5, name: '部门5', pid: 4 },]
      this.tree = arrayToTree(arr)
    },

    methods: {},

    watch: {}

}

</script>
