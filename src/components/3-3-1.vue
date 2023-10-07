<template>
  <h1>3.3.1 v-bind 指令</h1>
  <p>动态的绑定一个或多个 attribute，也可以是组件的 prop。</p>
  <n-blockquote>缩写是<n-text code>:</n-text></n-blockquote>
  <p>下述 script 为本例运行基础</p>
  <n-code show-line-numbers language="js" :code="`<script setup>
import welcome from '@/assets/img/welcome.png';

const imgSrc = welcome
const fileName = 'welcome.png'
</script>`"></n-code>
  <h2>绑定 attribute</h2>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code show-line-numbers language="html" :code="`<template>
  <!-- 绑定 attribute -->
  <img v-bind:src='imgSrc' />
</template>`"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="运行结果">
      <img v-bind:src="imgSrc" />
    </n-tab-pane>
  </n-tabs>
  <h2>缩写</h2>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code show-line-numbers language="html" :code="`<template>
  <!-- 缩写 -->
  <img :src='imgSrc' />
</template>`"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="运行结果">
      <img :src="imgSrc" />
    </n-tab-pane>
  </n-tabs>
  <h2>内联字符串拼接</h2>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code show-line-numbers language="html" :code="code"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="运行结果">
      <img :src="'/src/assets/img/' + fileName" />
    </n-tab-pane>
  </n-tabs>
</template>

<!-- <template>
  绑定 attribute
  <img v-bind:src="imgSrc" />
</template> -->

<script setup>
import welcome from '@/assets/img/welcome.png';

const imgSrc = welcome
const fileName = 'welcome.png'

const code = `<template>
  <!-- 内联字符串拼接 -->
  <img :src="'/src/assets/img/' + fileName" />
</template>`
</script>