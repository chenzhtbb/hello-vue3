<template>
    <h1>8.3.2 可选参数</h1>
    <p>使用修饰符 ? 可以将参数标记为可选参数，例如：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>

</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `const routes = [
    { name: 'user', path: '/user/:id?', component: User }
]`
</script>