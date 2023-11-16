<template>
    <h1>10.1.3 src 文件夹</h1>
    <p>src 文件夹是项目源代码所在的目录。</p>
    <p>src/assets 文件夹通常用于存放css、图标、图片、音视频资料等资源文件。</p>
    <p>src/main.js 是 vite 的入口文件（vue2 为 webpack）。该文件名一般不推荐更改。</p>
    <p>src/App.vue 用于创建 vue 的根组件。默认在 main.js 中指定，也可以更改。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>