<template>
    <h1>7.1.2 局部注册</h1>
    <p>局部注册的组件只能用在其被注册之后的 Vue 根实例及其子组件的模板中。</p>
    <p>局部注册与全局注册最显著的区别是：局部注册在 *.vue 中注册，全局注册在 main.js 中注册</p>
    <p>同样使用 element-plus 组件库作为讲解的示例</p>
    <n-text code>npm install element-plus --save</n-text>
    <p>执行完上述指令后，在 App.vue 文件中局部注册 Button 组件</p>
    <p>实际上，由于我们使用 setup 的方式编写 Vue 组件，我们仅需要导入这个组件就可以使用了</p>
    <n-code language="js" :code="code1"></n-code>
    <p>导入完成后，我们使用 kebab-case 的风格来使用这个组件</p>
    <n-code language="html" :code="code2"></n-code>
    <p>注意：此时这个按钮是没有样式的，如下图</p>
    <n-image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAA/CAYAAAD0d3YZAAADd0lEQVR4Ae2bTY7iMBCFfcFIfRoWiBvADeiTwJoFa8Qip8gRalSJfxPb2G1HY5KHFNHTsQv7ffXKdoYWhFczCohmRoKBEGA0lATi8XgQrjY0gDNackZDY9n9UOCMhlIAMACjIQUaGgqcARgNKdDQUOAMwGhIgYaGAmcARkMKNDQUOOPbYTyfTzqfz3Q4HHZx8Vx5zmu/sp3Bg7pcLvR6vWgYhl1cPFee89pAsmFwluwJhEo4njPPfc1XNgwuTWqAe3vnua/5AoyMUgsYGWKt7VTAAIxwZcSaEdam9A7WjAznoUxliIU1I1msG52EoO63D2+N31fqxIluSTF7uv4IEj9X6pPalx9QN+SMBBj3EwkhSBxvYWBKeNn2dLdEHmGKKQbHiVzRpFCfMXvfF4xhoNuRRfzkDumKWLsRVkfXtwVrFDchKWYQVPnbMAwlaDyDTXYbQP1v5816J9tDMKR7HEcFxFcQ1PvXwwgLd5tqfkJJmmJIGFJMR3iPmE4f+/6eYaisGoZ5eZDO0DCm+771whZ2/Fn3mZcg82+7jxnDQANgsEhzGEY4FmsST1BS+ZCCmhK2XGcAwy4Hi59jMMKucLLaiRmLp+CadUbHGUH6FnY3OXR76zO/fs0wk5LiHU/UiY6udz5TpC7eUzt3nfDA8DrG9xl7hmGLND+kyXuu0DJLQzuiMVs9MKwsHrfI88/i+9GYcXd8vTPMucEvnrm/FMInqFpb3PVi6Rxf39Gle4axKFP245BRmMAjkphjPjoj8qgEMDjrl87o373eRQleR/RpWR0IPQuwLkXLeAb8fNtsXBfcZem4pq2JN/3u68uUmVBMPLP/t8tPfJvrxmORzboDGB8e7rniGUhWJsqyNQGJuYL7yHjj7mz+cBEwCmCosmQeieuFOnTatsAtHTSB+nSa9yZEpFxtp0zJBdkRLrblHUUxkJx++p7tHgkg4+xiyprlzk3DsDJY/0eQ/p0tZkQQH8iIaLkZn9p+O874D+KlipzaDjAagggYgBH+BhBnR6qtt9auOWfgW+jhRC29k/0lNvx9Rqnk4f7ZMDgUA2GHsG33cPFc1/5DGdb1TzDCbHGnRAHAKFGvcl/AqCxoSTjAKFGvcl/AqCxoSTjAKFGvcl/AqCxoSTjAKFGvcl/AqCxoSTjAKFGvcl/AqCxoSTjAKFGvct9/VPHfTOBIDpQAAAAASUVORK5CYII="></n-image>
    <p>我们需要在 main.js 中全局导入样式文件</p>
    <n-code language="js" :code="code3"></n-code>
    <p>导入后，组件样式则显示正常，如下图。</p>
    <n-image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAABJCAYAAAANOdVAAAAEVklEQVR4Ae2dS27bMBCGc1TDCx/CXuQQBux7GMgtHJ+gRQsUSdF2kQJdBE0BTzESKY0kUqImUkSavwDDlMXh459Pw4cN+Y5wQIFABe4C8yEbFCDAAgiCFQAswVIhI2ABA8EKAJZgqZARsICBYAUAS7BUyAhYwECwAoAlWCpkBCxgIFgBwBIsFTK+C5aX33/o29Mv+vz1O3368ozXSA1YN9aPdUzhUMHy9vav6OSPny/0+vqXrtdrCn2Nro2sG+vHOjI0rGvMhwqWlO6GmMWXbbNRWn4WW3o0LNwpvhNwTK8A6xrzkDQaFo4qHDpxTK8A68r6xnqMhoUnZZijzONO1pX1jfUYDQuvenDMp0DM+gKW+fyuKhmwqGTL0wiw5Ol3Va8Bi0q2PI0AS55+V/UasKhky9MIsOTpd1WvAYtKtjyNAIvC70+ne1qt7+nUuwd4of1gHlH58wNt1xva9hcqDD4+CVgUmgfB8nik1XpDq90DPQXU4SzTlsHlDL0C6wloijcLYPFK47/gdKwje2g+Io5CG1odLo5SzEcFOO5odj6EQ+mvYPgKYBnWqJOjC4Fx9tDdL67L4aYsrxs99o+iai8sz3TaAZbIvhvyA7E9PQxHhsrvZTk1LOV5A4wqr0gAFiFGNxkZLHUDvZGlGkYMWNV5bWuHHAtLMYQ480kbom6d9rqJLAFlWAvtO4YhhXJ+x5nCzMR0e7gMTG4ZqiPtec4hhijXxLis80jnTnsBC0uSUGRperCIFmOWzWxuAPMNR35Y+qJYs13vPUNkUSjYH1mUznPBYj7rRJ12FOJzDEPjPPlR5FtY9gfenDvSeYxTK0e3hhQXLKL7/uVxCaedAwmTyZMfpa+m4VEOQyUo5Ryj46C+XVjnNROFKoCacxdZPmDpRyguWISzbWRp7sybiSZHGke/3DYiozayiHaJ0mZJIrIoZHU63jhbRoO66IB5TC8sPRtvgKWQOa7IUnveuedxfrxQuQrioaS5LR+0OgIsQuHxyaRgaXTP3O1yFeOOOMKqBQsDVi+je/ZSTF11XlHmxEkMQwpBncNQu5wWMIPOtMPYjldY7aUwYGnL2z5PNLKIFY792YABoVhmt3tpzn1DWHm5Z86DyFJIFDksrVVPBYT/G+AyIrWjhqGFnd7YWBPQeZbWcpgr0602maKnesMwFKykXRo391jqiBDqqJ6VTXBblskIWJbRPclaAUuSblum0YBlGd2TrBWwJOm2ZRoNWJbRPclaAUuSblum0YBlGd2TrBWwJOm2ZRp9U7DgAYTzQXRzDyDEo03ng+XmHm2KhybPB8vNPTSZpcLj2KcH5iYfx84y4Y8epoEliz96sFLZu4EnvTyLx2ucBqxbSlF69O9ZLCh4z08BwJKfz9U9Bixq6fIzBCz5+VzdY8Cili4/Q8CSn8/VPQYsaunyMwQs+flc3WPAopYuP0PAkp/P1T0GLGrp8jMELPn5XN1jwKKWLj/D/09VzSDF+lD9AAAAAElFTkSuQmCC"></n-image>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<script setup>
import {
  ElButton
} from 'element-plus'
<\/script>`

const code2 = `
<template>
  <el-button>按钮</el-button>
</template>`

const code3 = `import 'element-plus/dist/index.css'`
</script>