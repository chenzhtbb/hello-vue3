<template>
    <h1>7.3.1 插槽的基本用法</h1>
    <p>一些情况下我们会希望能和 HTML 元素一样向组件中传递内容。这可以通过 Vue 的自定义 &lt;slot&gt; 元素来实现：</p>
    <n-code language="html" :code="code1"></n-code>
    <p>插槽可以包含任何模板代码或其他组件，包括 HTML。当组件渲染时，&lt;slot&gt; 标签将会被替换。如果，子组件中没有包含 &lt;slot&gt; 元素，则组件的开始标签和结束标签之间的所有内容都会被直接抛弃。</p>

</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `
<!-- 父组件 -->
<my-component>
    <i class="fas fa-plus"></i>
    <font-awesome-icon name="plus"></font-awesome-icon>
    Add something
</my-component>

<!-- 子组件 -->
<button class="btn-primary">
    <slot></slot>
</button>

<!-- 渲染结果 -->
<button class="btn-primary">
    <i class="fas fa-plus"></i>
    <font-awesome-icon name="plus"></font-awesome-icon>
    Add something
</button>
`
</script>