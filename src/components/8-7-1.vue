<template>
    <h1>8.7.1 向路由组件传递参数的基本语法</h1>
    <p>在你的组件中使用 $route 会与路由紧密耦合，这限制了组件的灵活性，因为它只能用于特定的 URL。虽然这不一定是件坏事，但我们可以通过 props 配置来解除这种行为：</p>
    <p>我们可以将下面的代码</p>
    <n-code word-wrap language="html" :code="code0"></n-code>
    <p>router/index.js</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>替换成</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <n-code word-wrap language="js" :code="code3"></n-code>
    <p>router/index.js</p>
    <n-code word-wrap language="js" :code="code4"></n-code>
    <p>这允许你在任何地方使用该组件，使得该组件更容易重用和测试。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code0 = `
<template>
    <div>
        Welcome {{ $route.params.id }}!
    </div>
</template>`
const code1 = `const routes = [{ path: '/user/:id', component: User }]`

const code2 = `<template>
    <div>
        Welcome {{ id }}!
    </div>
</template>`

const code3 = `<script setup>
const props = defineProps(['id'])
<\/script>`

const code4 = `const routes = [{ path: '/user/:id', component: User, props: true }]`
</script>