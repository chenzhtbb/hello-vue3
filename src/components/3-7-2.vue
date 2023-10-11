<template>
  <h1>3.7.2 事件修饰符</h1>
  <p>在处理事件时调用 <n-text code>event.preventDefault()</n-text> 或 <n-text code>event.stopPropagation()</n-text>
    是很常见的。尽管可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。</p>
  <p>为解决这一问题，Vue 为 <n-text type="primary">v-on</n-text> 提供了事件修饰符。修饰符是用 . 表示的指令后缀，包含以下这些：</p>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>名称</th>
        <th>可用事件</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>.stop</td>
        <td>任意</td>
        <td>当事件触发时，阻止事件冒泡</td>
      </tr>
      <tr>
        <td>.prevent</td>
        <td>任意</td>
        <td>当事件触发时，阻止元素默认行为</td>
      </tr>
      <tr>
        <td>.capture</td>
        <td>任意</td>
        <td>当事件触发时，阻止事件捕获</td>
      </tr>
      <tr>
        <td>.self 自身</td>
        <td>任意</td>
        <td>限制事件仅作用于节点自身</td>
      </tr>
      <tr>
        <td>.once</td>
        <td>任意</td>
        <td>事件被触发一次后即解除监昕</td>
      </tr>
      <tr>
        <td>.passlve</td>
        <td>滚动</td>
        <td>移动端，限制事件永不调用 <n-text code>preventDefault()</n-text> 方法</td>
      </tr>
    </tbody>
  </n-table>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>