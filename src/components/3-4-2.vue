<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:27
 * @FilePath: /hello-vue3/src/components/3-4-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.4.2 v-model 与修饰符</h1>
  <h2>.lazy</h2>
  <p><n-text type="primary">.lazy</n-text> 默认情况下，<n-text type="primary">v-model</n-text> 会在每次 <n-text code>input</n-text>
    事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 <n-text code>lazy</n-text> 修饰符来改为在每次 <n-text code>change</n-text> 事件后更新数据：</p>
  <n-code word-wrap language="html" :code="code1"></n-code>
  <p>lazy Msg: {{ msg1 }}</p>
  <input v-model.lazy="msg1" />
  <h2>.number</h2>
  <p>如果你想让用户输入自动转换为数字，你可以在 <n-text type="primary">v-model</n-text> 后添加 <n-text type="primary">.number</n-text> 修饰符来管理输入：
  </p>
  <n-code word-wrap language="html" :code="code2"></n-code>
  <p>Msg: {{ msg2 }}</p>
  <input v-model.number="msg2" />
  <h2>.trim</h2>
  <p>如果你想要默认自动去除用户输入内容中两端的空格，你可以在 <n-text type="primary">v-model</n-text> 后添加 <n-text type="primary">.trim</n-text> 修饰符：
  </p>
  <n-code word-wrap language="html" :code="code3"></n-code>
  <p>trim Msg: {{ msg3 }}</p>
  <input v-model.trim="msg3" />
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const code1 = `<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />`
const code2 = `<input v-model.number="age" />`
const code3 = `<input v-model.trim="msg" />`
const msg1 = ref('')
const msg2 = ref('')
const msg3 = ref('')

</script>