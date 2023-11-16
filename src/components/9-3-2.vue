<template>
    <h1>9.3.2 重置 state</h1>
    <p>在 Setup Stores 中，您需要创建自己的 $reset() 方法来重置 state：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})`
</script>