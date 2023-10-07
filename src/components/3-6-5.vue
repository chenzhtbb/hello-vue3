<template>
  <h1>3.6.5 v-for 与 v-if 指令共用</h1>
  <n-blockquote>同时使用 <n-text type="primary">v-for</n-text> 和 <n-text type="primary">v-if</n-text> 是<n-text
      type="error">不推荐</n-text>的，因为这样二者的优先级不明显。</n-blockquote>
  <p>当它们同时存在于一个节点上时，<n-text type="primary">v-if</n-text> 比 <n-text type="primary">v-for</n-text> 的优先级更高。这意味着 <n-text
      type="primary">v-if</n-text>
    的条件将无法访问到 <n-text type="primary">v-for</n-text> 作用域内定义的变量别名：</p>
  <n-code language="html" :code="code1"></n-code>
  <p>在外新包装一层 &lt;template&gt; 再在其上使用 <n-text type="primary">v-for</n-text> 可以解决这个问题 (这也更加明显易读)：</p>
  <n-code language="html" :code="code2"></n-code>
</template>

<script setup>
const code1 = `<!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>`
const code2 = `<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>`
</script>