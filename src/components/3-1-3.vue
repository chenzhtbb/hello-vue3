<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:49:09
 * @FilePath: /hello-vue3/src/components/3-1-3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.1.3 HTML 插值</h1>
  <p>双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 <n-text type="primary">v-html</n-text> 指令</p>
  <n-blockquote>这里我们遇到了一个新的概念。这里看到的 <n-text type="primary">v-html</n-text> attribute 被称为一个指令。指令由 <n-text
      type="primary">v-</n-text> 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute</n-blockquote>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="template">
      <n-code word-wrap language="html" :code="`<p>文本插值：{{ rawHtml }}</p>
<p>HTML 插值：<div v-html='rawHtml'></div></p>`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code word-wrap show-line-numbers language="js" :code="`import { ref } from 'vue';

const rawHtml = ref(\`
<span>Hello HTML 插值</span>
\`)`" />
      <n-blockquote>这里我们遇到了一个新的语法 —— 反引号：<n-text code>``</n-text>，也称作<n-text type="info">模板字面量</n-text>和<n-text
          type="info">模板字符串</n-text>，在其内部允许输入多行字符串。</n-blockquote>
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="实验结果">
      <p>文本插值：{{ rawHtml }}</p>
      <p>HTML 插值：
      <div v-html='rawHtml'></div>
      </p>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
    inheritAttrs: false
})
const rawHtml = ref(`
<span>Hello HTML 插值</span>
`)
</script>