<template>
    <h1>9.3.5 订阅 state</h1>
    <p>可以通过 store 的 $subscribe() 方法侦听 state 及其变化。比起普通的 watch()，使用 $subscribe() 的好处是 subscriptions 在 patch 后只触发一次</p>
    <p>也可以在 pinia 实例上使用 watch() 函数侦听整个 state。</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)`
</script>