<template>
    <h1>7.3.4 具名插槽</h1>
    <p>有时在一个组件中包含多个插槽出口是很有用的。举例来说，在一个 &lt;BaseLayout&gt; 组件中，有如下模板：</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <p>对于这种场景，&lt;slot&gt; 元素可以有一个特殊的 attribute name，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容：</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <p>这类带 name 的插槽被称为具名插槽 (named slots)。没有提供 name 的 &lt;slot&gt; 出口会隐式地命名为“default”。</p>
    <p>在父组件中使用 &lt;BaseLayout&gt; 时，我们需要一种方式将多个插槽内容传入到各自目标插槽的出口。此时就需要用到具名插槽了：</p>
    <p>要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 &lt;template&gt; 元素，并将目标插槽的名字传给该指令：</p>
    <n-code word-wrap language="html" :code="code3"></n-code>
    <p>v-slot 有对应的简写 #，因此 &lt;template v-slot:header&gt; 可以简写为 &lt;template #header&gt;。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。</p>
    <p>下面我们给出完整的、向 &lt;BaseLayout&gt; 传递插槽内容的代码，指令均使用的是缩写形式：</p>
    <n-code word-wrap language="html" :code="code4"></n-code>
    <p>当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 &lt;template&gt; 节点都被隐式地视为默认插槽的内容。所以上面也可以写成：</p>
    <n-code word-wrap language="html" :code="code5"></n-code>
    <p>现在 &lt;template&gt; 元素中的所有内容都将被传递到相应的插槽。最终渲染出的 HTML 如下：</p>
    <n-code word-wrap language="html" :code="code6"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<div class="container">
  <header>
    <!-- 标题内容放这里 -->
  </header>
  <main>
    <!-- 主要内容放这里 -->
  </main>
  <footer>
    <!-- 底部内容放这里 -->
  </footer>
</div>`

const code2 = `<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>`

const code3 = `<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>`

const code4 = `<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>`

const code5 = `<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- 隐式的默认插槽 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>`

const code6 = `<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>`
</script>