<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-16 21:49:17
 * @FilePath: /hello-vue3/src/components/3-7-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template @keydown="action = '监听按下任意键'">
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
  <h2>监听实例</h2>
  <p style="font-size: 48px;">监听动作：<n-gradient-text type="info">
      {{ action }}
    </n-gradient-text></p>
  <div class="box-div" @click="action = '监听单击'">监听单击</div>
  <div class="box-div" @dblclick="action = '监听双击'">监听双击</div>
  <div class="box-div" @contextmenu="action = '监听右击'">监听右击</div>
  <div class="box-div" @mouseover="action = '监听指针移入'">监听指针移入</div>
  <div class="box-div" @mouseout="action = '监听指针移出'">监听指针移出</div>
  <p>下面这两个事件单纯监听是无效的</p>
  <div class="box-div" @keydown="action = '监听按下任意键'">监听按下任意键</div>
  <div class="box-div" @keyup="action = '监听释放任意键'">监听释放任意键</div>
  <p>要这样使用</p>
  <div class="box-div">
    <div><span>监听按下回车键: </span><input @keyup.enter="action = '监听按下回车键'" type="text"></div>
    <div><span>监听按下Alt+任意键: </span><input @keyup.alt="action = '监听按下Alt+任意键'" type="text"></div>
    <div><span>监听按下Shift+任意键: </span><input @keyup.shift="action = '监听按下Shift+任意键'" type="text"></div>
    <div><span>监听按下Ctrl+任意键: </span><input @keyup.ctrl="action = '监听按下Ctrl+任意键'" type="text"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
  inheritAttrs: false
})
const action = ref('')
</script>

<style>
.box-div {
  padding: 8px;
  margin: 8px 0;
  background-color: chocolate;
  font-size: 18px;
  cursor: pointer;
}
</style>