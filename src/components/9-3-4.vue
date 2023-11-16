<template>
    <h1>9.3.4 替换 state</h1>
    <p>你不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是，你可以 patch 它。</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>你也可以通过变更 pinia 实例的 state 来设置整个应用的初始 state。这常用于 SSR 中的激活过程。</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `// 这实际上并没有替换\`$state\`
store.$state = { count: 24 }
// 在它内部调用 \`$patch()\`：
store.$patch({ count: 24 })`

const code2 = `pinia.state.value = {}`
</script>