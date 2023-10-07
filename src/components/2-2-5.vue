<template>
  <h1>2.2.5 数据实例：显示响应式对象</h1>
  <p>修改 App.vue 代码的分别为下面代码</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="template">
      <n-code show-line-numbers language="html" :code="`<template>
  <p>{{ a }}</p>
  <p>{{ b }}</p>
  <p>{{ c }}</p>
</template>`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code show-line-numbers language="js" :code="`<script setup>
import { reactive, ref, toRefs } from 'vue'

const a = ref(2)
const state = reactive({
  b: 3,
  c: 'Vue 3.0.0'
})
const { b, c } = toRefs(state)
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="实验结果">
      <p>{{ a }}</p>
      <p>{{ b }}</p>
      <p>{{ c }}</p>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'

const a = ref(2)
const state = reactive({
  b: 3,
  c: "Vue 3.0.0"
})
const { b, c } = toRefs(state)
</script>