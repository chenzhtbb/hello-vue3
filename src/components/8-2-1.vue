<template>
    <h1>8.2.1 带参数的动态路由匹配</h1>
    <p>很多时候，需要将具有给定模式的多个路由映射到同一组件。例如，可能有一个 User 组件是为所有用户展示的，但不同之处在于具有不同的用户 ID。在 vue-router 中，可以在路径中使用一个动态段来实现，称为 param
        ，路径参数。</p>
    <n-code language="js" :code="code1"></n-code>
    <p>现在像 /users/123 和 /users/456 这样的 URL 都会映射到同一个路由。</p>
    <p>动态路由匹配使用冒号前缀 : 来标记，后面跟着一个名称。在路由匹配时，参数值会被设置到 this.$route.params 可以在每个组件内使用。</p>
    <p>this.$route 对象可以通过 useRoute 函数获得。</p>
    <p>因此，我们可以通过更新 User 的模板来呈现当前的用户 ID：</p>
    <n-code language="html" :code="code2"></n-code>
    <p>还可以在同一个路由中设置有多个 路径参数，它们会映射到 $route.params 上的相应字段。例如：</p>
    <n-table :single-line="false">
    <thead>
      <tr>
        <th>匹配模式</th>
        <th>匹配路径</th>
        <th>$route.params</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>/users/:username</td>
        <td>/users/eduardo</td>
        <td>{ username: 'eduardo' }</td>
      </tr>
      <tr>
        <td>/users/:username/posts/:postId	</td>
        <td>/users/eduardo/posts/123</td>
        <td>{ username: 'eduardo', postId: '123' }</td>
      </tr>
      
    </tbody>
  </n-table>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `const User = {
  template: '<div>User</div>',
}

const routes = [
  // 动态字段以冒号开始
  { path: '/users/:id', component: User },
]`

const code2 = `const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}`
</script>