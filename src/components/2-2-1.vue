<template>
  <h1>2.2.1 构建 Vue 3.0 项目</h1>
  <n-code show-line-numbers language="js" :code="`
// 打开 CMD 查看 node 和 npm 的版本号，有显示则表明 node 安装正确
node -v
npm -v
// 首先更换 npm 源
npm config set registry http://mirrors.cloud.tencent.com/npm/
// 换源后创建 Vue 3 项目，为了方便学习，此处采用固定版本安装
npm create vue@3.7.3
// 安装过程需要输入 Project name 以及配置一些选项，所有选项全部选择 No
// 安装完毕后，进入到 <project-name> 目录
cd <project-name>
// 进入到 <project-name> 目录后，安装依赖并运行 Vue 3 项目
npm install
npm run dev
`" />
</template>

<script setup></script>