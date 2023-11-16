<template>
    <h1>8.3.3 可重复参数</h1>
    <p>使用修饰符 *（0个或多个） 或 +（1个或多个） 可以将参数标记为可重复参数，例如：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>实际上，* 和 + 都是正则表达式的内容。我们仅做了解。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `const routes = [
    { name: 'user', path: '/user/:id+', component: User }
]`
</script>