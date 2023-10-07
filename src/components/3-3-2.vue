<template>
  <h1>3.3.2 绑定 class、style 与 prop</h1>
  <h2>Class 与 Style 绑定</h2>
  <p>数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。</p>
  <p>因为 <n-text code>class</n-text> 和 <n-text code>style</n-text> 都是 attribute，我们可以和其他 attribute 一样使用 <n-text
      type="primary">v-bind</n-text> 将它们和动态的字符串绑定。</p>
  <p>但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 <n-text code>class</n-text> 和 <n-text code>style</n-text> 的 <n-text
      type="primary">v-bind</n-text> 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。</p>
  <h2>绑定 HTML class</h2>
  <h3>绑定对象</h3>
  <p>我们可以给 <n-text code>:class</n-text> (<n-text code>v-bind:class</n-text> 的缩写) 传递一个对象来动态切换 <n-text code>class</n-text>：
  </p>
  <n-code language="html" :code="`<div :class='{ active: isActive }'></div>`"></n-code>
  <p>上面的语法表示 <n-text code>active</n-text> 是否存在取决于数据属性 <n-text code>isActive</n-text> 的真假值。</p>
  <p>可以在对象中写多个字段来操作多个 <n-text code>class</n-text> 。此外，<n-text code>:class</n-text> 指令也可以和一般的 <n-text code>class</n-text>
    attribute 共存。</p>
  <p>假设有下述 template 和 script ：</p>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code language="html" :code="code"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code language="js" :code="classCodeJS1"></n-code>
    </n-tab-pane>
  </n-tabs>
  <p>得到的渲染结果是</p>
  <n-code language="html" :code="classCodeHTML1"></n-code>
  <n-switch :value="isActive" :on-update:value="(val) => isActive = val">
    <template #checked>
      isActive：true
    </template>
    <template #unchecked>
      isActive：false
    </template>
  </n-switch>
  <br>
  <n-switch :value="hasError" :on-update:value="(val) => hasError = val">
    <template #checked>
      hasError：true
    </template>
    <template #unchecked>
      hasError：false
    </template>
  </n-switch>
  <p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：</p>
  <n-code language="js" :code="`const classObject = reactive({
  active: true,
  'text-danger': false
})`"></n-code>
  <n-code language="html" :code="`<div :class='classObject'></div>`"></n-code>
  <h3>绑定数组</h3>
  <p>可以给 <n-text code>:class</n-text> 绑定一个数组来渲染多个 CSS class：</p>
  <n-code language="js" :code="`const activeClass = ref('active')
const errorClass = ref('text-danger')`"></n-code>
  <n-code language="html" :code="`<div :class='[activeClass, errorClass]'></div>`"></n-code>
  <p>渲染的结果是：</p>
  <n-code language="html" :code="`<div class='active text-danger'></div>`"></n-code>
  <h2>绑定内联样式</h2>
  <h3>绑定对象</h3>
  <p><n-text code>:style</n-text> 支持绑定 JavaScript 对象值，对应的是 <n-a target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style">HTML 元素的 style 属性</n-a>：</p>
  <n-code language="js" :code="`const activeColor = ref('red')
const fontSize = ref(30)`"></n-code>
  <n-code language="html" :code="styleCodeHTML1"></n-code>
  <p>或</p>
  <n-code language="html" :code="styleCodeHTML2"></n-code>
  <p>直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁：</p>
  <n-code language="js" :code="`const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})`"></n-code>
  <n-code language="html" :code='`<div :style="styleObject"></div>`'></n-code>
  <h3>绑定数组</h3>
  <p>还可以给 <n-text code>:style</n-text> 绑定一个包含多个样式对象的数组。这些对象会被合并后渲染到同一元素上：</p>
  <n-code language="html" :code='`<div :style="[baseStyles, overridingStyles]"></div>`'></n-code>
</template>

<script setup>
import { computed, ref } from 'vue';

const isActive = ref(true)
const hasError = ref(false)

const code = `<div
  class='static'
  :class="{ active: isActive, 'text-danger': hasError }"></div>`

const styleCodeHTML1 = `<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`
const styleCodeHTML2 = `<div :style="{ 'font-size': fontSize + 'px' }"></div>`

const classCodeJS1 = computed(() => {
  return `const isActive = ref(${isActive.value})
const hasError = ref(${hasError.value})`
})

const classCodeHTML1 = computed(() => {
  return `<div class="static${isActive.value ? ' active' : ''}${hasError.value ? ' text-danger' : ''}"></div>`
})
</script>