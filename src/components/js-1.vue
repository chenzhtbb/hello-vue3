<template>
  <h1>JavaScript 输出</h1>
  <p>JavaScript 本身没有任何打印或者输出的函数，但是可以通过不同的方式来输出数据。</p>
  <h2>使用 window.alert()</h2>
  <p>可以弹出警告框来显示数据：</p>
  <n-code language="js" :code="`window.alert(5 + 6);`"></n-code>
  <br>
  <n-button type="info" @click="handle1">尝试一下</n-button>
  <h2>操作 HTML 元素</h2>
  <n-code language="html" :code="code2"></n-code>
  <n-code language="js" :code="`document.getElementById('demo').innerHTML = '段落已修改。';`"></n-code>
  <p v-html="code2"></p>
  <n-space>
    <n-button type="info" @click="() => flag2 = false">改变</n-button>
    <n-button @click="() => flag2 = true">还原</n-button>
  </n-space>
  <h2>打印到控制台</h2>
  <n-code language="js" :code="`console.log('Hello World!')`"></n-code>
  <p>按下 <n-text type="info">F12</n-text> 切换到 <n-text type="info">console</n-text> 选项卡来查看打印结果</p>
  <n-button type="info" @click="() => console.log('Hello World!')">打印</n-button>
</template>

<script setup>
import { computed, ref } from 'vue';

const handle1 = () => {
  window.alert(5 + 6)
}
const flag2 = ref(true)
const code2 = computed(() => {
  return flag2.value ? `<p id="demo">我的第一个段落</p>` : `<p id="demo">段落已修改。</p>`
})
</script>