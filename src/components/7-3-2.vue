<template>
    <h1>7.3.2 插槽的作用域</h1>
    <p>插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。举例来说：</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <p v-pre>这里的两个 {{ message }} 插值表达式渲染的内容都是一样的。</p>
    <p>插槽内容无法访问子组件的数据。Vue 模板中的表达式只能访问其定义时所处的作用域，这和 JavaScript 的词法作用域规则是一致的。换言之：</p>
    <p>父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>`
</script>