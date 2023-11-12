<template>
    <h1>8.1.2 vue-router 的基本使用</h1>
    <p>vue-router 的基本使用步骤如下：</p>
    <h2>1. 安装 vue-router</h2>
    <h2>2. 创建路由</h2>
    <p>在 src 目录下创建 router 目录，并在其中创建 index.js 文件。然后按照以下步骤进行：</p>
    <h3>2.1 导入 createRouter</h3>
    <n-code language="js" :code="code1"></n-code>
    <h3>2.2 定义路由</h3>
    <n-code language="js" :code="code2"></n-code>
    <h3>2.3 创建路由实例并注册路由</h3>
    <n-code language="js" :code="code3"></n-code>
    <h3>2.4 导出路由</h3>
    <n-code language="js" :code="code4"></n-code>
    <h2>3. 在 main.js 中导入路由</h2>
    <n-code language="js" :code="code5"></n-code>
    <h2>4. 在 main.js 中注册路由</h2>
    <n-code language="js" :code="code6"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `import { createRouter } from 'vue-router'
`
const code2 = `import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]`

const code3 = `import { createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes
})`

const code4 = `export default router`

const code5 = `import router from './router'`

const code6 = `app.use(router)`
</script>