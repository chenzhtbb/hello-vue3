<template>
  <h1>2.2.7 方法实例：修改响应式对象的值</h1>
  <p>在<n-text code>&lt;template&gt;</n-text>中定义一个<n-text code>&lt;button&gt;</n-text>标签，该标签表示按钮</p>
  <n-code language="html" :code="`<button @click='changeBtn'>改变</button>`" />
  <p>然后，在<n-text code>&lt;script setup&gt;</n-text>中编写一个修改值的方法</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="普通函数">
      <n-code show-line-numbers language="js" :code="`function changeBtn(){
  state.b = 5
  state.c = 'changed'
  // a 由 ref 函数创建，在 JS 中需要通过 .value 访问
  a.value = 8
}`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="箭头函数">
      <n-code show-line-numbers language="js" :code="`const changeBtn = () => {
  state.b = 5
  state.c = 'changed'
  // a 由 ref 函数创建，在 JS 中需要通过 .value 访问
  a.value = 8
}`" />
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="实验结果">
      <p>{{ a }}</p>
      <p>{{ b }}</p>
      <p>{{ c }}</p>
      <button @click='changeBtn'>改变</button>
    </n-tab-pane>
  </n-tabs>
  <n-blockquote>本节内容需在 <n-button text type="primary" @click="handleClick">2.2.5</n-button> 节的基础上完成。</n-blockquote>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
defineOptions({
    inheritAttrs: false
})
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleClick = () => emit('update:modelValue', '2-2-5')

const a = ref(2)
const state = reactive({
  b: 3,
  c: "Vue 3.0.0"
})
const { b, c } = toRefs(state)

const changeBtn = () => {
  state.b = 5
  state.c = 'changed'
  // a 由 ref 函数创建，在 JS 中需要通过 .value 访问
  a.value = 8
}
</script>