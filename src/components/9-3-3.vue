<template>
    <h1>9.3.3 变更 state</h1>
    <p>除了用 store.count++ 直接改变 store，你还可以调用 $patch 方法。它允许你用一个 state 的补丁对象在同一时间更改多个属性：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 splice 操作）都需要你创建一个新的集合。因此，$patch 方法也接受一个函数来组合这种难以用补丁对象实现的变更。</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>两种变更 store 方法的主要区别是，$patch() 允许你将多个变更归入 devtools 的同一个条目中。同时请注意，直接修改 state，$patch() 也会出现在 devtools 中，而且可以进行 time travel (在 Vue 3 中还没有)。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})`

const code2 = `store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})`
</script>