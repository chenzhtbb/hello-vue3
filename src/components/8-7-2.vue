<template>
    <h1>8.7.2 传递参数的模式</h1>
    <h2>布尔模式</h2>
    <p>当 props 设置为 true 时，route.params 将被设置为组件的 props。</p>
    <h2>其他模式</h2>
    <p>除了布尔模式，还有其他三个模式，分别是：命名视图、对象模式、函数模式。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>