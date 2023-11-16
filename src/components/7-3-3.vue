<template>
    <h1>7.3.3 插槽的后备内容</h1>
    <p>在外部没有提供任何内容的情况下，可以为插槽指定默认内容。比如有这样一个 &lt;SubmitButton&gt; 组件：</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <p>如果我们想在父组件没有提供任何插槽内容时在 &lt;button&gt; 内渲染“Submit”，只需要将“Submit”写在 &lt;slot&gt; 标签之间来作为默认内容：</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <p>现在，当我们在父组件中使用 &lt;SubmitButton&gt; 且没有提供任何插槽内容时：</p>
    <n-code word-wrap language="html" :code="code3"></n-code>
    <p>“Submit”将会被作为默认内容渲染：</p>
    <n-code word-wrap language="html" :code="code4"></n-code>
    <p>但如果我们提供了插槽内容：</p>
    <n-code word-wrap language="html" :code="code5"></n-code>
    <p>那么被显式提供的内容会取代默认内容：</p>
    <n-code word-wrap language="html" :code="code6"></n-code>

</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<button type="submit">
  <slot></slot>
</button>`

const code2 = `<button type="submit">
  <slot>
    Submit <!-- 默认内容 -->
  </slot>
</button>`

const code3 = `<SubmitButton />`

const code4 = `<button type="submit">Submit</button>`

const code5 = `<SubmitButton>Save</SubmitButton>`

const code6 = `<button type="submit">Save</button>`
</script>