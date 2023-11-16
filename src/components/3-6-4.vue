<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:47:54
 * @FilePath: /hello-vue3/src/components/3-6-4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.6.4 列表渲染的 key</h1>
  <p>Vue 默认按照“就地更新”的策略来更新通过 <n-text type="primary">v-for</n-text> 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM
    元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。</p>
  <p>为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 <n-text code>key</n-text> attribute：</p>
  <n-code word-wrap language="html" :code="code1"></n-code>
  <p>当使用 <n-text code>&lt;template v-for&gt;</n-text> 时，<n-text code>key</n-text> 应该被放置在这个 <n-text
      code>&lt;template&gt;</n-text> 容器上：</p>
  <n-code word-wrap language="html" :code="code2"></n-code>
  <n-blockquote>应在任何可行的时候为 <n-text type="primary">v-for</n-text> 提供一个 <n-text code>key</n-text> attribute，除非所迭代的 DOM
    内容非常简单。</n-blockquote>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>`
const code2 = `<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>`
</script>