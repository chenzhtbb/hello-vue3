<template>
    <h1>8.5 命名路由</h1>
    <p>除了 path 之外，你还可以为任何路由提供 name。这有以下优点：</p>
    <ul>
        <li>没有硬编码的 URL</li>
        <li>params 的自动编码/解码</li>
        <li>防止你在 url 中出现打字错误</li>
        <li>绕过路径排序</li>
    </ul>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>要链接到一个命名的路由，可以向 router-link 组件的 to 属性传递一个对象：</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <p>这跟代码调用 router.push() 是一回事：</p>
    <n-code word-wrap language="js" :code="code3"></n-code>
    <p>在这两种情况下，路由将导航到路径 /user/evan</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
]`

const code2 = `<router-link :to="{ name: 'user', params: { username: 'evan' }}">
  User
</router-link>`

const code3 = `router.push({ name: 'user', params: { username: 'evan' } })`
</script>