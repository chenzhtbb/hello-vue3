<template>
    <h1>2. 项目打包与提交</h1>
    <h2>项目打包</h2>
    <n-alert title="vite.config.js" type="success">
        <n-code word-wrap language="js" :code="code1"></n-code>
    </n-alert>
    <h3>班级代号</h3>
    <ul>
        <li>网络工程：class-net</li>
        <li>计科1班：class-cs-1</li>
        <li>计科2班：class-cs-2</li>
        <li>计科3班：class-cs-3</li>
        <li>计科4班：class-cs-4</li>
    </ul>
    <h3>示例</h3>
    <el-text>/work/class-net/202000000000001/</el-text>
    <h2>项目提交</h2>
    <p>项目打包后会得到 <n-text code>dist</n-text> 文件夹，直接压缩该文件夹，得到 <n-text code>dist.zip</n-text> 文件。</p>
    <p>登录提交程序后，使用如下命令提交。</p>
    <p>项目压缩包大小限制为<n-text code>50 MB</n-text>，可以反复提交，但所有提交的大小之和限制在<n-text code>1 GB</n-text>，若超过则无法提交。频繁占用服务器资源酌情扣分，至多扣分至0分。</p>
    <p>项目提交后，可以访问 URL：http://vue3.gxnuyiban.cn/work/{班级代号}/{完整学号} 来预览提交的项目。如果页面显示 404，则说明提交未成功。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/work/{班级代号}/{完整学号}/'
})`
</script>