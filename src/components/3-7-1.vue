<template>
  <h1>3.7.1 v-on 指令</h1>
  <h2>监听事件</h2>
  <p>使用 <n-text type="primary">v-on</n-text> 指令 (简写为 <n-text code>@</n-text>) 来监听 DOM 事件，并在事件触发时执行对应的
    JavaScript。用法：<n-text code>v-on:click="handler"</n-text> 或 <n-text code>@click="handler"</n-text>。</p>
  <p>事件可以是自定义事件，也可以是标准事件。标准事件见下表：</p>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>事件</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>click</td>
        <td>单击</td>
      </tr>
      <tr>
        <td>dblclick</td>
        <td>双击</td>
      </tr>
      <tr>
        <td>contextmenu</td>
        <td>右击（上下文菜单）</td>
      </tr>
      <tr>
        <td>mouseover</td>
        <td>指针移到有事件监听的元素或其子元素内</td>
      </tr>
      <tr>
        <td>mouseout</td>
        <td>指针移出有事件监听的元素，或移到其子元素上</td>
      </tr>
      <tr>
        <td>keydown</td>
        <td>按下任意键</td>
      </tr>
      <tr>
        <td>keyup</td>
        <td>释放任意键</td>
      </tr>
    </tbody>
  </n-table>
</template>

<script setup></script>