<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:15
 * @FilePath: /hello-vue3/src/components/3-5-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.5.2 v-show 指令</h1>
  <p>基于表达式值的真假性，来改变元素的可见性。<n-text type="info">v-show</n-text> 通过设置内联样式的 display CSS 属性来工作，当元素可见时将使用初始 display 值。</p>
  <n-code language="html" :code="`<h1 v-show='ok'>Hello!</h1>`"></n-code>
  <n-divider title-placement="left">显示效果</n-divider>
  <button @click="ok = !ok">Toggle</button>
  <h1 v-show='ok'>Hello!</h1>
  <n-divider title-placement="left">渲染效果</n-divider>
  <n-code language="html" :code="code1"></n-code>
</template>

<script setup>
import { computed, ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const ok = ref(true)

const code1 = computed(() => {
  return ok.value ? `<template>
  <h1>Hello!</h1>
</template>` : `<template>
  <h1 style="display: none;">Hello!</h1>
</template>`
})
</script>