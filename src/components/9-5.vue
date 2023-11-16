<template>
  <h1>9.5 Action</h1>
  <p>Action 相当于组件中的 method。它们可以通过 defineStore() 中的 actions 属性来定义，并且它们也是定义业务逻辑的完美选择。</p>
  <n-code word-wrap language="js" :code="code1"></n-code>
  <p>类似 getter，action 也可访问整个 store 实例，并支持完整的类型标注。不同的是，action 可以是异步的，你可以在它们里面 await 调用任何 API，以及其他 action！</p>
  <p>你也完全可以自由地设置任何你想要的参数以及返回任何结果。</p>
  <p>Action 可以像函数或者通常意义上的方法一样被调用：</p>
  <n-code word-wrap language="js" :code="code2"></n-code>
  <n-code word-wrap language="html" :code="code3"></n-code>
  <h2>订阅 action</h2>
  <p>你可以通过 store.$onAction() 来监听 action 和它们的结果。传递给它的回调函数会在 action 本身之前执行。</p>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})

const code1 = `export const useCounterStore = defineStore('main', () => {
  const count = ref(0)

  function increment() {
    count++
  }

  function randomizeCounter() {
    count = Math.round(100 * Math.random())
  }  

  return {
    count,
    increment,
    randomizeCounter
  }
})`

const code2 = `<script setup>
const store = useCounterStore()
// 将 action 作为 store 的方法进行调用
store.randomizeCounter()
<\/script>`

const code3 = `<template>
  <!-- 即使在模板中也可以 -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>`

</script>