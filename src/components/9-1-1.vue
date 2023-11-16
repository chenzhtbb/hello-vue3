<template>
    <h1>9.1.1 什么是Pinia</h1>
    <p>Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：</p>
    <ul>
        <li>
            <p>Devtools 支持</p>
            <ul>
                <li>追踪 actions、mutations 的时间线</li>
                <li>在组件中展示它们所用到的 Store</li>
                <li>让调试更容易的 Time travel</li>
            </ul>
        </li>
        <li>
            <p>热更新</p>
            <ul>
                <li>不必重载页面即可修改 Store</li>
                <li>开发时可保持当前的 State</li>
            </ul>
        </li>
        <li>插件：可通过插件扩展 Pinia 功能</li>
        <li>为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能。</li>
        <li>支持服务端渲染</li>
    </ul>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>