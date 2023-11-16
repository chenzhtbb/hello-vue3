<template>
    <h1>9.4 Getter</h1>
    <p>Getter 完全等同于 store 的 state 的计算值。可以通过 defineStore() 中的 getters 属性（计算属性）来定义它们。推荐使用箭头函数，并且它将接收 state 作为第一个参数：</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>大多数时候，getter 仅依赖 state，不过，有时它们也可能会使用其他 getter。因此，即使在使用常规函数定义 getter 时，我们也可以通过 this 访问到整个 store 实例，但(在 TypeScript 中)必须定义返回类型。这是为了避免 TypeScript 的已知缺陷，不过这不影响用箭头函数定义的 getter，也不会影响不使用 this 的 getter。</p>
    <n-code word-wrap language="js" :code="code3"></n-code>
    <p>然后你可以直接访问 store 实例上的 getter 了：</p>
    <n-code word-wrap language="html" :code="code4"></n-code>
    <n-code word-wrap language="js" :code="code5"></n-code>
    <h2>访问其他 getter</h2>
    <p>与计算属性一样，你也可以组合多个 getter。通过 this，你可以访问到其他任何 getter。</p>
    <n-code word-wrap language="js" :code="code6"></n-code>
    <h2>向 getter 传递参数</h2>
    <p>Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，你可以从 getter 返回一个函数，该函数可以接受任意参数：</p>
    <n-code word-wrap language="js" :code="code7"></n-code>
    <p>并在组件中使用：</p>
    <n-code word-wrap language="js" :code="code8"></n-code>
    <n-code word-wrap language="html" :code="code9"></n-code>
    <p>请注意，当你这样做时，getter 将不再被缓存，它们只是一个被你调用的函数。不过，你可以在 getter 本身中缓存一些结果，虽然这种做法并不常见，但有证明表明它的性能会更好：</p>
    <n-code word-wrap language="js" :code="code10"></n-code>
    <h2>访问其他 store 的 getter</h2>
    <p>想要使用另一个 store 的 getter 的话，那就直接在 getter 内使用就好：</p>
    <n-code word-wrap language="js" :code="code11"></n-code>
    <h2>使用 setup() 时的用法</h2>
    <p>作为 store 的一个属性，你可以直接访问任何 getter(与 state 属性完全一样)：</p>
    <n-code word-wrap language="js" :code="code12"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code2 = `export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})`

const code3 = `export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 自动推断出返回类型是一个 number
    doubleCount(state) {
      return state.count * 2
    },
    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注 ✨
      return this.doubleCount + 1
    },
  },
})`

const code4 = `<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>`
const code5 = `<script setup>
import { useCounterStore } from './counterStore'
const store = useCounterStore()
<\/script>`

const code6 = `export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 类型是自动推断出来的，因为我们没有使用 \`this\`
    doubleCount: (state) => state.count * 2,
    // 这里我们需要自己添加类型(在 JS 中使用 JSDoc)
    // 可以用 this 来引用 getter
    /**
     * 返回 count 的值乘以 2 加 1
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // 自动补全 ✨
      return this.doubleCount + 1
    },
  },
})`

const code7 = `export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})`

const code8 = `<script setup>
import { useUserListStore } from './store'
const userList = useUserListStore()
const { getUserById } = storeToRefs(userList)
// 请注意，你需要使用 \`getUserById.value\` 来访问
// <script setup> 中的函数
<\/script>`
const code9 = `<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>`

const code10 = `export const useStore = defineStore('main', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})`

const code11 = `import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})`

const code12 = `<script setup>
const store = useCounterStore()
store.count = 3
store.doubleCount // 6
<\/script>`
</script>