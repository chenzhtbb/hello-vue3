<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-10 20:36:09
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:46:14
 * @FilePath: /hello-vue3/src/components/err-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h2>运行 <n-text code>npm create vue@3.7.3</n-text> 报错问题</h2>
  <n-image :src="Err1"></n-image>
  <br>
  <n-a href="https://juejin.cn/post/7045270973813096455" target="_blank">解决办法</n-a>
  <h2>VS Code 提示无法保存文件</h2>
  <n-image :src="Err2"></n-image>
  <br>
  <n-a href="https://juejin.cn/post/7045270973813096455" target="_blank">解决办法</n-a>
</template>

<script setup>
import Err1 from '@/assets/img/err1.png';
import Err2 from '@/assets/img/err2.png'; defineOptions({
  inheritAttrs: false
})
</script>