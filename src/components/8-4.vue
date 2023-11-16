<template>
    <h1>8.4 嵌套路由</h1>
    <p>嵌套路由是指路由中包含路由，例如：/user/123/profile，这个路由中包含了两个路由：/user 和 /profile。</p>
    <p>其中，/profile 是 /user 的子路由。定义方式如下：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>此外，还需要在 User 组件中 再写一个 router-view 标签。User 组件内部的路由渲染组件将渲染定义的嵌套路由。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `const routes = [
    {
        path: '/user/:id?',
        component: User,
        children: [
            // 嵌套路由写在这里，其他用法与普通路由一致
            {
                path: 'info',
                component: Info
            }
        ]
    }
]`
</script>