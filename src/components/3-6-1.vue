<template>
  <h1>3.6.1 v-for 指令</h1>
  <p><n-text type="primary">v-for</n-text> 指令可以基于原始数据多次渲染元素或模板块。</p>
  <p>使用 <n-text type="primary">v-for</n-text> 指令基于一个数组来渲染一个列表。<n-text type="primary">v-for</n-text> 指令的值需要使用 <n-text
      code>item in items</n-text> 形式的特殊语法，其中 <n-text code>items</n-text> 是源数据的数组，而 <n-text code>item</n-text> 是迭代项的别名：
  </p>
  <n-code language="js" :code="`const items = ref([{ message: 'Foo' }, { message: 'Bar' }])`"></n-code>
  <n-code language="html" :code="code1"></n-code>
  <n-divider title-placement="left">渲染效果</n-divider>
  <li v-for="item in code1items">
    {{ item.message }}
  </li>
  <p>在 <n-text type="primary">v-for</n-text> 块中可以完整地访问父作用域内的属性和变量。<n-text type="primary">v-for</n-text>
    也支持使用可选的第二个参数表示当前项的位置索引。</p>
  <n-code language="js" :code="`const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])`"></n-code>
  <n-code language="html" :code="code2"></n-code>
  <n-divider title-placement="left">渲染效果</n-divider>
  <li v-for="(item, index) in code2items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</template>

<script setup>
import { ref } from 'vue';

const code1items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const code1 = `<li v-for="item in items">
  {{ item.message }}
</li>`

const parentMessage = ref('Parent')
const code2items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const code2 = `<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>`
</script>