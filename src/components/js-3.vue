<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-10 20:35:48
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:46:36
 * @FilePath: /hello-vue3/src/components/js-3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h2>JavaScript 变量</h2>
  <p>变量可以使用短名称（比如 x 和 y），也可以使用描述性更好的名称（比如 age, sum, totalvolume）。</p>
  <ol>
    <li>变量必须以字母开头</li>
    <li>变量也能以 $ 和 _ 符号开头（不推荐这么做）</li>
    <li>变量名称对大小写敏感（y 和 Y 是不同的变量）</li>
  </ol>
  <p>使用 <n-text code>let</n-text> 关键词来声明<n-text type="info">变量</n-text>。也可以用 <n-text code>var</n-text> 来声明<n-text
      type="info">变量</n-text>，但是不推荐。</p>
  <p>使用 <n-text code>const</n-text> 关键词来声明<n-text type="info">常量</n-text>。</p>
  <h2>数据类型</h2>
  <p>值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol</p>
  <p>引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）</p>
  <h2>JavaScript 拥有动态类型</h2>
  <p>JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：</p>
  <n-code word-wrap language="js" :code="code1"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `let x;          // x 为 undefinedvar 
x = 5;          // 现在 x 为数字
let x = "John"; // 现在 x 为字符串`
</script>