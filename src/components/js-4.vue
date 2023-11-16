<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-10 20:35:48
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:46:48
 * @FilePath: /hello-vue3/src/components/js-4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h2>对象</h2>
  <p>JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...此外，JavaScript 允许自定义对象。</p>
  <h2>所有事物都是对象</h2>
  <p>JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有属性和方法的特殊数据类型。</p>
  <ul>
    <li>布尔型可以是一个对象。</li>
    <li>数字型可以是一个对象。</li>
    <li>字符串也可以是一个对象</li>
    <li>日期是一个对象</li>
    <li>数学和正则表达式也是对象</li>
    <li>数组是一个对象</li>
    <li>甚至函数也可以是对象
    </li>
  </ul>
  <p>对象只是一种特殊的数据。对象拥有属性和方法。</p>
  <h2>访问对象的属性</h2>
  <p>访问对象属性的语法是：</p>
  <n-code word-wrap language="js" :code="`objectName.propertyName`"></n-code>
  <h2>访问对象的方法</h2>
  <p>方法是能够在对象上执行的动作，可以通过以下语法来调用方法：</p>
  <n-code word-wrap language="js" :code="`objectName.methodName()`"></n-code>
  <h2>创建 JavaScript 对象</h2>
  <h3>使用 Object </h3>
  <n-code word-wrap language="js" :code="`// 以构造函数形式来调用
new Object([value])`"></n-code>
  <p>以下是创建对象的例子：</p>
  <n-code word-wrap language="js" :code='`person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";`'></n-code>
  <h3>使用对象字面量</h3>
  <n-code word-wrap language="js" :code="`{ name1 : value1, name2 : value2,...nameN : valueN }`"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>