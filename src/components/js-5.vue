<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-10 20:35:48
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:46:53
 * @FilePath: /hello-vue3/src/components/js-5.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>Array（数组） 对象</h1>
  <p>数组对象的作用是：使用单独的变量名来存储一系列的值。</p>
  <h2>创建数组</h2>
  <ol>
    <li>
      <span>常规方式</span>
      <n-code word-wrap language="js" :code='`let myCars = new Array();
myCars[0] = "Saab";      
myCars[1] = "Volvo";
myCars[2] = "BMW";`'></n-code>
    </li>
    <li>
      <span>简洁方式</span>
      <n-code word-wrap language="js" :code='`let myCars = new Array("Saab", "Volvo", "BMW");`'></n-code>
    </li>
    <li>
      <span>字面</span>
      <n-code word-wrap language="js" :code='`let myCars = ["Saab", "Volvo", "BMW"];`'></n-code>
    </li>
  </ol>
  <h2>访问数组</h2>
  <n-code word-wrap language="js" :code='`name = myCars[0];
myCars[0] = "Opel";`'></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>