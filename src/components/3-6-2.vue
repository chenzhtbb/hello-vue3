<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:02
 * @FilePath: /hello-vue3/src/components/3-6-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.6.2 在 v-for 里使用对象</h1>
  <p>可以使用 <n-text type="primary">v-for</n-text> 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 <n-text code>Object.keys()</n-text> 的返回值来决定。
  </p>
  <n-code word-wrap language="js" :code="`const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})`"></n-code>
  <n-code word-wrap language="html" :code="code1"></n-code>
  <n-divider title-placement="left">渲染效果</n-divider>
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <p>还可以通过提供第二个参数表示属性名 (例如 key)：</p>
  <n-code word-wrap language="html" :code="code2"></n-code>
  <n-divider title-placement="left">渲染效果</n-divider>
  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>
  <p>第三个参数表示位置索引：</p>
  <n-code word-wrap language="html" :code="code3"></n-code>
  <n-divider title-placement="left">渲染效果</n-divider>
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</template>

<script setup>
import { reactive } from 'vue';

defineOptions({
    inheritAttrs: false
})
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
const code1 = `<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>`

const code2 = `<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>`

const code3 = `<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>`
</script>