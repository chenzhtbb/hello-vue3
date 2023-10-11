<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:49:24
 * @FilePath: /hello-vue3/src/components/2-2-6.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
defineOptions({
    inheritAttrs: false
})
</script>