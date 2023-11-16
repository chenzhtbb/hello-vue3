<template>
    <h1>9.6 在组件外使用 store</h1>
    <p>Pinia store 依靠 pinia 实例在所有调用中共享同一个 store 实例。大多数时候，只需调用你定义的 useStore() 函数，完全开箱即用。例如，在 setup() 中，你不需要再做任何事情。但在组件之外，情况就有点不同了。 </p>
    <p>实际上，useStore() 给你的 app 自动注入了 pinia 实例。这意味着，如果 pinia 实例不能自动注入，你必须手动提供给 useStore() 函数。 你可以根据不同的应用，以不同的方式解决这个问题。</p>
    <h2>单页面应用</h2>
    <p>如果你不做任何 SSR(服务器端渲染)，在用 app.use(pinia) 安装 pinia 插件后，对 useStore() 的任何调用都会正常执行：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>为确保 pinia 实例被激活，最简单的方法就是将 useStore() 的调用放在 pinia 安 装后才会执行的函数中。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore()`
</script>