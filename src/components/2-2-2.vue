<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:49:45
 * @FilePath: /hello-vue3/src/components/2-2-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>2.2.2 项目实例：Hello Vue3</h1>
  <p>修改 App.vue 代码的分别为下面代码</p>
  <n-code word-wrap show-line-numbers language="html" :code="`
<template>
  <!-- template 标签里面填写 HTML 代码 -->
  <!-- p 标签在 HTML 中表示一个段落 -->
  <p>{{ hello }}</p>
</template>`" />
  <n-code word-wrap show-line-numbers language="js" :code="`<script setup>
  // 从 vue 包中导入 ref 函数
  import { ref } from 'vue'
  // 定义一个名称为 hello 的常量，利用 ref 函数赋值为一个字符串
  const hello = ref('Hello Vue3')
</script>`" />
  <n-blockquote>在 JavaScript（后续简称 JS）中，<n-text type="info">单引号</n-text>和<n-text
      type="info">双引号</n-text>都可以表示字符串</n-blockquote>
  <p>修改 main.js 代码为下面代码</p>
  <n-code word-wrap show-line-numbers language="js" :code="`import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`" />
  <p>实验结果</p>
  <p>{{ hello }}</p>
</template>

<script setup>
// 从 vue 包中导入 ref 函数
import { ref } from 'vue'
defineOptions({
    inheritAttrs: false
})
// 定义一个名称为 hello 的常量，利用 ref 函数赋值为一个字符串
const hello = ref('Hello Vue3')
</script>