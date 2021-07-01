<!--
 * @Description: farm 测试 children 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-06-29 15:56:23
-->
<template>
    <div>
        <header>
            这是测试 router-view
            <button @click="$router.go(-1)">返回</button>
        </header>
        <router-view></router-view>
    </div>
</template>
