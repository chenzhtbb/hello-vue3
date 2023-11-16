<template>
    <h1>9.1.2 安装 Pinia</h1>
    <p>Pinia 的安装与其他插件的安装方式类似：</p>
    <n-code word-wrap language="bash" :code=code1></n-code>
    <p>创建一个 pinia 实例 (根 store) 并将其传递给应用：</p>
    <n-code word-wrap language="js" :code=code2></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `npm install pinia`

const code2 = `import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')`
</script>