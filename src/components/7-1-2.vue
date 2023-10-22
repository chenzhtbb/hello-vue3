<template>
    <h1>7.1.2 局部注册</h1>
    <p>局部注册的组件只能用在其被注册之后的 Vue 根实例及其子组件的模板中。</p>
    <p>局部注册与全局注册最显著的区别是：局部注册在 *.vue 中注册，全局注册在 main.js 中注册</p>
    <p>同样使用 element-plus 组件库作为讲解的示例</p>
    <n-text code>npm install element-plus --save</n-text>
    <p>执行完上述指令后，在 App.vue 文件中进行局部注册</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>