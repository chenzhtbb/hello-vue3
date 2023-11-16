<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:19
 * @FilePath: /hello-vue3/src/components/3-5-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.5.1 v-if、v-else-if、v-else 指令</h1>
  <h2>v-if</h2>
  <p>基于表达式值的真假性，来条件性地渲染元素或者模板片段。这个渲染元素或者模板片段只会在指令的表达式返回真值时才被渲染。</p>
  <p>当 <n-text type="primary">v-if</n-text> 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。</p>
  <n-code word-wrap language="html" :code="`<h2 v-if='awesome'>Vue is awesome!</h2>`"></n-code>
  <h2>v-else</h2>
  <p>表示 <n-text type="primary">v-if</n-text> 或 <n-text type="primary">v-if</n-text> / <n-text
      type="primary">v-else-if</n-text> 链式调用的“else 块”。</p>
  <n-code word-wrap language="html" :code="code1"></n-code>
  <n-code word-wrap language="js" :code="`const awesome = ref(true)`"></n-code>
  <n-divider title-placement="left">显示效果</n-divider>
  <button @click="awesome = !awesome">Toggle</button>
  <h2 v-if="awesome">Vue is awesome!</h2>
  <h2 v-else>Oh no 😢</h2>
  <n-divider title-placement="left">渲染效果</n-divider>
  <n-code word-wrap language="html" :code="code2"></n-code>
  <h2>v-else-if</h2>
  <p>表示 <n-text type="primary">v-if</n-text> 的“else if 块”。可以进行链式调用。限定：上一个兄弟元素必须有 <n-text type="primary">v-if</n-text> 或
    <n-text type="primary">v-else-if</n-text>。
  </p>
</template>

<script setup>
import { computed, ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const awesome = ref(true)

const code2 = computed(() => {
  return awesome.value?`<template>
  <h2>Vue is awesome!</h2>
</template>`:`<template>
  <h2>Oh no 😢</h2>
</template>`
})

const code1 = `<button @click="awesome = !awesome">Toggle</button>
<h2 v-if="awesome">Vue is awesome!</h2>
<h2 v-else>Oh no 😢</h2>`
</script>