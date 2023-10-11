<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-10 20:35:48
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:46:31
 * @FilePath: /hello-vue3/src/components/js-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>JavaScript 语法</h1>
  <h2>分号</h2>
  <p>分号用于分隔 JavaScript 语句。</p>
  <p>通常我们在每条可执行的语句结尾添加分号。</p>
  <p>使用分号的另一用处是在一行中编写多条语句。</p>
  <h2>注释</h2>
  <p>单行注释以 <n-text code>//</n-text> 开头。</p>
  <p>多行注释以 <n-text code>/*</n-text> 开始，以 <n-text code>*/</n-text> 结尾。</p>
  <h2>JavaScript 字面量</h2>
  <p>在编程语言中，一般固定值称为字面量，如 3.14。</p>
  <p>数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)。</p>
  <n-code language="js" :code="`3.14
1001
123e5`"></n-code>
  <p>字符串（String）字面量 可以使用单引号或双引号:</p>
  <n-code language="js" :code="code1"></n-code>
  <p>数组（Array）字面量 定义一个数组：</p>
  <n-code language="js" :code="`[40, 100, 1, 5, 25, 10]`"></n-code>
  <p>对象（Object）字面量 定义一个对象：</p>
  <n-code language="js" :code="code2"></n-code>
  <p>函数（Function）字面量 定义一个函数：</p>
  <n-code language="js" :code="`function myFunction(a, b) {
  return a * b;
}`"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `"John Doe"
'John Doe'`
const code2 = `{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}`
</script>