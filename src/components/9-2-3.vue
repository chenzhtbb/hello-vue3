<template>
    <h1>9.2.3 定义 Store</h1>
    <p>在深入研究核心概念之前，我们得知道 Store 是用 defineStore() 定义的，它的第一个参数要求是一个<strong>独一无二</strong>的名字：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>这个<strong>名字</strong>，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。</p>
    <p>defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。</p>
    <h2>Setup Store</h2>
    <p>与 Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>在 Setup Store 中：</p>
    <ul>
        <li>ref() 就是 state 属性</li>
        <li>computed() 就是 getters</li>
        <li>function() 就是 actions</li>
    </ul>
    <p>Setup store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。</p>
    <h2>使用 Store</h2>
    <p>虽然我们前面定义了一个 store，但在我们使用 &lt;script setup&gt; 调用 useStore() 之前，store 实例是不会被创建的：</p>
    <n-code word-wrap language="js" :code="code3"></n-code>
    <p>你可以定义任意多的 store，但为了让使用 pinia 的益处最大化，你应该在不同的文件中去定义 store。</p>
    <p>一旦 store 被实例化，你可以直接访问在 store 的 state、getters 和 actions 中定义的任何属性。我们将在后续章节继续了解这些细节，目前自动补全将帮助你使用相关属性。</p>
    <p>请注意，store 是一个用 reactive 包装的对象，这意味着不需要在 getters 后面写 .value，就像 setup 中的 props 一样</p>
    <p>为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。它将为每一个响应式属性创建引用。当你只使用 store 的状态而不调用任何 action 时，它会非常有用。请注意，你可以直接从 store 中解构 action，因为它们也被绑定到 store 上。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `import { defineStore } from 'pinia'

// 你可以对 \`defineStore()\` 的返回值进行任意命名，但最好使用 store 的名字，同时以 \`use\` 开头且以 \`Store\` 结尾。
(比如 \`useUserStore\`，\`useCartStore\`，\`useProductStore\`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})`

const code2 = `export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})`

const code3 = `<script setup>
import { useCounterStore } from '@/stores/counter'
// 可以在组件中的任意位置访问 \`store\` 变量 ✨
const store = useCounterStore()
<\/script>`
</script>