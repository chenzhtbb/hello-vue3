<template>
    <h1>9.3 State</h1>
    <p>在大多数情况下，state 都是你的 store 的核心。人们通常会先定义能代表他们 APP 的 state。在 Pinia 中，state 被定义为一个返回初始状态的函数。这使得 Pinia 可以同时支持服务端和客户端。</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <h2>9.3.1 访问 state</h2>
    <p>默认情况下，你可以通过 store 实例访问 state，直接对其进行读写。</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('storeId', () => {
    const count = ref(0)
    const name= ref('evan')
    const isAdmin = ref(true)
    const items = ref([])
    const hasChanged = ref(true)
})`
const code2 = `const store = useStore()

store.count++`
</script>