<template>
    <h1>10.3.2 项目部署</h1>
    <p>将 dist 目录内容使用 ftp 等工具上传到服务器即可。</p>
    <p>常见的服务器有：Nginx、Apache等。</p>
    <n-alert title="请注意" type="warning">
        <p>服务器有以下三种含义，本节指的是：服务器软件。在其他地方，请自行判断服务器指代的具体含义。</p>
        <ul>
            <li>服务器物理机设备</li>
            <li>服务器操作系统</li>
            <li>服务器软件</li>
        </ul>
    </n-alert>
    <h2>如果使用 Nginx</h2>
    <n-code language="bash" :code="code1"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `location /[path] {
    try_files $uri $uri/ /[path]/index.html;
}`

</script>