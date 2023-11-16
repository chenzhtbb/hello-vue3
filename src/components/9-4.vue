<template>
    <h1>9.4 Getter</h1>
    <p>Getter 完全等同于 store 的 state 的计算值。可以通过 defineStore() 中的 getters 属性（计算属性）来定义它们。推荐使用箭头函数：</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <h2>使用 setup() 时的用法</h2>
    <p>作为 store 的一个属性，你可以直接访问任何 getter(与 state 属性完全一样)：</p>
    <n-code word-wrap language="js" :code="code12"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code2 = `export const useStore = defineStore('main', () => {
  const count = ref(0)

  const doubleCount = computed(()=>{
    return count * 2
  })

  return {
    count,
    doubleCount
  }
})`

const code12 = `<script setup>
const store = useCounterStore()
store.count = 3
store.doubleCount // 6
<\/script>`
</script>