<template>
    <h1>1. 简单电影网</h1>
    <p>本次课程的课程大作业为：<el-link href="http://vue3.gxnuyiban.cn/movie" target="_blank">简单电影网</el-link></p>
    <h2>带领完成页面</h2>
    <p>带领完成页面需要跟随老师编写代码，理解编码和设计思路：</p>
    <ol>
        <li><el-link href="http://vue3.gxnuyiban.cn/movie" target="_blank">首页</el-link></li>
        <li><el-link href="http://vue3.gxnuyiban.cn/movie/login" target="_blank">登录页</el-link></li>
        <li><el-link href="http://vue3.gxnuyiban.cn/movie/register" target="_blank">注册页</el-link></li>
        <li><el-link href="http://vue3.gxnuyiban.cn/movie/video/%E5%AF%BB%E6%A2%A6%E7%8E%AF%E6%B8%B8%E8%AE%B0"
                target="_blank">视频播放页</el-link></li>
        <li><el-link href="http://vue3.gxnuyiban.cn/movie/type/list?hash=%E5%96%9C%E5%89%A7" target="_blank">分类列表页</el-link>
        </li>
    </ol>
    <h2>自主完成页面</h2>
    <p>自主完成页面不会给出示例，不提供模仿模板，请根据自己的能力来设计如下页面，要求美观大方，可以使用网络素材、UI组件等内容：</p>
    <ol>
        <li>登录完成后的首页</li>
        <li>热门页</li>
        <li>排行榜页</li>
        <li>搜索结果页</li>
        <li>个人中心页</li>
    </ol>
    <h2>提交方式</h2>
    <p>提供一个提交程序，使用提交程序提交课程大作业，提交程序限制上传压缩包大小为<n-text code>50 MB</n-text>，格式为<n-text code>.zip</n-text>。</p>
    <p>每人会获得一个提交程序的账户，拿到账户后请立即更改密码并牢记密码，由于密码保管不慎导致的作业异常将获得0分的成绩。</p>
    <p>提交程序及账户将在预备结课时公布。</p>
    <h2>评分标准</h2>
    <n-alert title="请注意" type="warning">
        <p>不回答诸如以下提问：</p>
        <ul>
            <li>“我的页面好看吗？”</li>
            <li>“我的页面功能完善了吗？”</li>
            <li>“我的页面可以获得多少分？”</li>
            <li>“…………”</li>
        </ul>
    </n-alert>
    <p>带领完成页面+自主完成页面共10个页面。</p>
    <p>每个页面满分为<n-text code>10%</n-text>分数，具体评分细则如下：</p>
    <ol>
        <li>提交了页面：<n-text code>3%</n-text>分数</li>
        <li>满足基本功能：<n-text code>2%</n-text>分数</li>
        <li>页面美观：<n-text code>3%</n-text>分数</li>
        <li>提升体验的拓展功能：<n-text code>2%</n-text>分数</li>
    </ol>
    <p>提升体验的拓展功能举例：</p>
    <ul>
        <li>用户登录后，鼠标移动到用户头像可以弹出功能菜单，并有注销登录按钮。</li>
        <li>…………</li>
    </ul>
    <h3>额外页面</h3>
    <p>如果完成了基础10个页面更多的页面，每个额外页面将最少获得<n-text code>6%</n-text>分数，最多获得<n-text code>10%</n-text>分数。如果额外页面分数没有达到<n-text code>6%</n-text>分数，则<n-text code>0</n-text>分数。</p>
    <p>额外页面将累加到总成绩（不包含：作业、实验报告、考勤）。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>