<!--
 * @Description: 键盘操作
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-12 11:01:50
-->
<template>
    <div>
        <button @click="tab"> 点击 </button>
        <base-modal
            title="键盘事件"
            :visible.sync="visible"
            @cancel="cancel"
            width="400px"
            btnTxt="确定"
            @click="handleSubmit"
        >
           <!-- 键盘 -->
           <search-key></search-key>
        </base-modal>
    </div>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue';
import SearchKey from './components/SearchKey.vue';

export default {
    name: 'keyBoard',
    components: { 
        BaseModal,
        SearchKey 
    },
    props: {},
    data() {
        return {
            visible: true
        };
    },


    computed: {},

    created() { },

    mounted() { },

    methods: {
        tab(){},
        handleSubmit(){},
        cancel(){

        }
    },

    watch: {}

}

</script>
<style lang='' scoped>

</style>