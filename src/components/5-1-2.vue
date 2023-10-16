<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-11 11:46:04
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:47:14
 * @FilePath: /hello-vue3/src/components/5-1-2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <h1>5.1.2 json 过滤器</h1>
    <p>JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null 。</p>
    <p>假设有以下对象</p>
    <n-code language="js" :code="code1"></n-code>
    <p>可以使用 json 过滤器将其序列化为 JSON 字符串</p>
    <n-code language="html" :code="code2"></n-code>
    <p>序列化后的结果如下</p>
    <pre>{{ json(obj1, 2) }}</pre>
    <p>json 过滤器的实现如下，其中参数 space 锁进空格数量，最小为1，最大为10</p>
    <n-code language="js" :code="code3"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const obj1 = [
    {
        name: '张三',
        age: 20
    }, {
        name: '李四',
        age: 22
    }
]
const code1 = `const obj1 = [
    {
        name: '张三',
        age: 20
    },{
        name: '李四',
        age: 22
    }
]`
const code2 = `<pre>{{ json(obj1, 2) }}</pre>`
const code3 = `// json 过滤器
function json(value, space = 2) {
    if (!value) return ''
    space = (space > 10) ? 10 : space
    space = (space < 1) ? 1 : space
    value = JSON.stringify(value, null, space)
    return value
}`
// json 过滤器
function json(value, space = 2) {
    if (!value) return ''
    space = (space > 10) ? 10 : space
    space = (space < 1) ? 1 : space
    value = JSON.stringify(value, null, space)
    return value
}
</script>