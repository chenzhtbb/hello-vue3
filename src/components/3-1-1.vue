<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:49:16
 * @FilePath: /hello-vue3/src/components/3-1-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.1.1 文本插值与表达式</h1>
  <p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：</p>
  <n-code language="html" :code="`// span 标签是通用行内容器
<span>Message: {{ msg }}</span>`" />
  <n-blockquote>双大括号标签会被替换为相应组件实例（<n-text code>&lt;script setup&gt;</n-text>）中 <n-text code>msg</n-text> 的值。同时每次 <n-text
      code>msg</n-text> 属性更改时它也会同步更新。</n-blockquote>
  <p>此外，文本插值也允许使用表达式和条件运算符</p>
  <n-code language="html" :code="`<p>表达式：{{ 5 + 10 }}</p>
<p>条件运算符：{{ true ? 5 : 10 }}</p>`" />
  <h2>实验结果</h2>
  <span>Message: {{ msg }}</span>
  <p>表达式：{{ 5 + 10 }}</p>
  <p>条件运算符：{{ true ? 5 : 10 }}</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const msg = 'Hello 文本插值'
</script>