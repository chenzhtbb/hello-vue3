<template>
  <h1>3.6.4 列表渲染的 key</h1>
  <p>Vue 默认按照“就地更新”的策略来更新通过 <n-text type="primary">v-for</n-text> 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM
    元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。</p>
  <p>为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 <n-text code>key</n-text> attribute：</p>
  <n-code language="html" :code="code1"></n-code>
  <p>当使用 <n-text code>&lt;template v-for&gt;</n-text> 时，<n-text code>key</n-text> 应该被放置在这个 <n-text
      code>&lt;template&gt;</n-text> 容器上：</p>
  <n-code language="html" :code="code2"></n-code>
  <n-blockquote>应在任何可行的时候为 <n-text type="primary">v-for</n-text> 提供一个 <n-text code>key</n-text> attribute，除非所迭代的 DOM
    内容非常简单。</n-blockquote>
</template>

<script setup>
const code1 = `<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>`
const code2 = `<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>`
</script>