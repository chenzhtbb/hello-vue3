<template>
    <h1>8.1.3 跳转</h1>
    <p>vue-router 提供了一个组件用于显示路由渲染的内容 router-view ，路由行为只在这个标签中发生，且需要配合路由跳转使用。</p>
    <p>vue-router 提供了两种方式进行路由跳转：</p>
    <h2>1. 使用 router-link 组件</h2>
    <p>router-link 组件是 vue-router 提供的一个组件，它会被渲染成一个 a 标签，它的使用方式如下：</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <p>router-link 组件的 to 属性可以是一个字符串，也可以是一个对象。如果是一个字符串，则会被当作一个普通的 a 标签的 href 属性值，如果是一个对象，则会被当作一个路由对象，它的属性有：</p>
    <ul>
        <li>name：路由的名称</li>
        <li>path：路由的路径</li>
        <li>params：路由的参数</li>
        <li>query：路由的查询参数</li>
        <li>hash：路由的 hash 值</li>
    </ul>
    <h2>2. 使用 router 实例的 push 方法</h2>
    <p>router 实例提供了一个 push 方法，它的使用方式如下：</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>push 方法的参数和 router-link 组件的 to 属性的值一样。</p>
    <p>router 实例需要调用 useRouter 函数导出</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>`

const code2 = `router.push('/')`
</script>