<template>
    <h1>7.3.5 作用域插槽</h1>
    <p>在前面小节的插槽作用域中我们讨论到，插槽的内容无法访问到子组件的状态。</p>
    <p>然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。</p>
    <p>我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <p>当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。下面我们将先展示默认插槽如何接受 props，通过子组件标签上的 v-slot 指令，直接接收到了一个插槽 props 对象：</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <p>子组件传入插槽的 props 作为了 v-slot 指令的值，可以在插槽内的表达式中访问。</p>
    <p>v-slot="slotProps" 可以类比这里的函数签名，和函数的参数类似，我们也可以在 v-slot 中使用解构：</p>
    <n-code word-wrap language="html" :code="code3"></n-code>
    <h2>具名作用域插槽</h2>
    <p>具名作用域插槽的工作方式也是类似的，插槽 props 可以作为 v-slot 指令的值被访问到：v-slot:name="slotProps"。当使用缩写时是这样：</p>
    <n-code word-wrap language="html" :code="code4"></n-code>
    <p>向具名插槽中传入 props：</p>
    <n-code word-wrap language="html" :code="code5"></n-code>
    <br>
    <n-alert title="注意" type="warning">
        插槽上的 name 是一个 Vue 特别保留的 attribute，不会作为 props 传递给插槽。因此最终 headerProps 的结果是 { message: 'hello' }。
    </n-alert>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>`

const code2 = `<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>`

const code3 = `<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>`

const code4 = `<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>

  <template #default="defaultProps">
    {{ defaultProps }}
  </template>

  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>`

const code5 = `<slot name="header" message="hello"></slot>`

</script>