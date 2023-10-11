<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:09
 * @FilePath: /hello-vue3/src/components/3-5-3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.5.3 v-if 对比 v-show</h1>
  <p><n-text type="primary">v-if</n-text> 和 <n-text type="primary">v-show</n-text> 功能类似。</p>
  <p><n-text type="primary">v-if</n-text> 会根据条件直接销毁/重构元素。</p>
  <p><n-text type="primary">v-show</n-text> 是切换 CSS 属性，做到视觉上的隐藏。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>