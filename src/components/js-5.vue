<template>
  <h1>Array（数组） 对象</h1>
  <p>数组对象的作用是：使用单独的变量名来存储一系列的值。</p>
  <h2>创建数组</h2>
  <ol>
    <li>
      <span>常规方式</span>
      <n-code language="js" :code='`let myCars = new Array();
myCars[0] = "Saab";      
myCars[1] = "Volvo";
myCars[2] = "BMW";`'></n-code>
    </li>
    <li>
      <span>简洁方式</span>
      <n-code language="js" :code='`let myCars = new Array("Saab", "Volvo", "BMW");`'></n-code>
    </li>
    <li>
      <span>字面</span>
      <n-code language="js" :code='`let myCars = ["Saab", "Volvo", "BMW"];`'></n-code>
    </li>
  </ol>
  <h2>访问数组</h2>
  <n-code language="js" :code='`name = myCars[0];
myCars[0] = "Opel";`'></n-code>
</template>

<script setup></script>