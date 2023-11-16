<template>
    <h1>10.2.1 Vue 文件</h1>
    <p>我们在之前的章节编写了非常多的 <n-text code>*.vue</n-text> 文件，这种类型的文件叫做 Vue 单文件组件 (SFC)。</p>
    <p>一个 SFC 通常使用 <n-text code>*.vue</n-text> 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。</p>
    <p>每一个 <n-text code>*.vue</n-text> 文件都由三种顶层语言块构成：&lt;template&gt;、&lt;script&gt; 和 &lt;style&gt;，以及一些其他的自定义块。</p>
    <h2>&lt;template&gt;</h2>
    <ul>
        <li>每个 <n-text code>*.vue</n-text> 文件最多可以包含一个顶层 &lt;template&gt; 块。</li>
        <li>语块包裹的内容将会被提取、传递给 @vue/compiler-dom，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 render 选项。</li>
    </ul>
    <h2>&lt;script&gt;</h2>
    <ul>
        <li>每个 <n-text code>*.vue</n-text> 文件最多可以包含一个 &lt;script&gt; 块。(使用 &lt;script setup&gt; 的情况除外)</li>
        <li>这个脚本代码块将作为 ES 模块执行。</li>
        <li>默认导出应该是 Vue 的组件选项对象，可以是一个对象字面量或是 defineComponent 函数的返回值。</li>
    </ul>
    <h2>&lt;script setup&gt;</h2>
    <ul>
        <li>每个 <n-text code>*.vue</n-text> 文件最多可以包含一个 &lt;script setup&gt;。(不包括一般的 &lt;script&gt;)</li>
        <li>这个脚本块将被预处理为组件的 setup() 函数，这意味着它将为每一个组件实例都执行。&lt;script setup&gt; 中的顶层绑定都将自动暴露给模板。</li>
    </ul>
    <h2>&lt;style&gt;</h2>
    <ul>
        <li>每个 <n-text code>*.vue</n-text> 文件可以包含多个 &lt;style&gt; 标签。</li>
        <li>一个 &lt;style&gt; 标签可以使用 scoped 或 module attribute (查看 SFC 样式功能了解更多细节) 来帮助封装当前组件的样式。使用了不同封装模式的多个 &lt;style&gt; 标签可以被混合入同一个组件。</li>
    </ul>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>