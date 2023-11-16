<template>
    <h1>8.2.2 响应参数变化</h1>
    <p>在上一节中，我们实现了带参数的动态路由匹配。</p>
    <p>当用户从 /user/joe 跳转到 /user/jack 时，将重用相同的组件实例。</p>
    <p>如果重用了相同的组件实例，就不会产生新的生命周期，生命周期钩子函数将无法触发！</p>
    <p>如果我们需要在组件中对参数变化做出响应，就要使用 watch 函数来监听参数的变化，例如：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
</template>

<script setup>
import { onActivated, onMounted } from 'vue';

defineOptions({
    inheritAttrs: false
})

onMounted(() => {
    console.log('mounted')
})

onActivated(() => {
    console.log('activated')
})

const code1 = `
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watch(route, (newVal, oldVal) => {
    console.log(newVal.params, oldVal.params);
})
<\/script>`
</script>