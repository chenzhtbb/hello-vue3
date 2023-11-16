<template>
    <h1>10.1.4 .gitignore</h1>
    <p>.gitignore 分为3个部分查看</p>
    <ul>
        <li><n-text type="info" code>.</n-text>在 linux 中表示隐藏文件的意思
        </li>
        <li><n-text type="info" code>git</n-text>表示 Git 软件</li>
        <li><n-text type="info" code>ignore</n-text>单词忽略</li>
    </ul>
    <p>.gitignore 文件的目的是确保某些未被 Git 跟踪的文件保持不被跟踪。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>