<template>
    <h1>自定义正则表达式</h1>
    <p><strong>正则表达式是比较难的知识</strong>，不要求掌握。实际开发中，几乎不会在前端路由部分匹配正则表达式。这部分通常由后端路由完成。</p>
    <p>使用正则表达式可以规范前端路由，例如：要求 userId 必须为数字，否则无法匹配到这个路由。主要目的是防范用户恶意篡改前端路由参数，并以此来攻击前端网页。但是，在 SPA 开发中，前端页面是静态的，攻击静态页面是没有任何意义的。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>