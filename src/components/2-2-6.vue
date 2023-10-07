<template>
  <h1>2.2.6 方法</h1>
  <p><n-text type="info">方法</n-text>类似 C/C++ 中的函数，需要定义在 <n-text code>&lt;script setup&gt;</n-text> 标签中</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="普通函数">
      <n-code show-line-numbers language="js" :code="`function add(num1, num2) {
  return num1 + num2
}`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="箭头函数">
      <n-code show-line-numbers language="js" :code="`const add = (num1, num2) => {
  return num1 + num2
}`" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
</script>