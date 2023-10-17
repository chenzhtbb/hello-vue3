<template>
  <h1>3.7.2 事件修饰符</h1>
  <p>在处理事件时调用 <n-text code>event.preventDefault()</n-text> 或 <n-text code>event.stopPropagation()</n-text>
    是很常见的。尽管可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。</p>
  <p>为解决这一问题，Vue 为 <n-text type="primary">v-on</n-text> 提供了事件修饰符。修饰符是用 . 表示的指令后缀，包含以下这些：</p>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>名称</th>
        <th>可用事件</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>.stop</td>
        <td>任意</td>
        <td>当事件触发时，阻止事件冒泡</td>
      </tr>
      <tr>
        <td>.prevent</td>
        <td>任意</td>
        <td>当事件触发时，阻止元素默认行为</td>
      </tr>
      <tr>
        <td>.capture</td>
        <td>任意</td>
        <td>当事件触发时，阻止事件捕获</td>
      </tr>
      <tr>
        <td>.self 自身</td>
        <td>任意</td>
        <td>限制事件仅作用于节点自身</td>
      </tr>
      <tr>
        <td>.once</td>
        <td>任意</td>
        <td>事件被触发一次后即解除监昕</td>
      </tr>
      <tr>
        <td>.passive</td>
        <td>滚动</td>
        <td>移动端，限制事件永不调用 <n-text code>preventDefault()</n-text> 方法</td>
      </tr>
    </tbody>
  </n-table>
  <h2>事件修饰符实例：普通事件</h2>
  <div class="div1" @click="onClick('你点击了底部div')">
    <p>这是一个div标签，他有一个普通的点击事件</p>
    <div class="div2" @click="onClick('你点击了重叠div')">
      <p>这是一个重叠的div标签</p>
    </div>
  </div>
  <br><br><br><br>
  <h2>事件修饰符实例：stop 修饰</h2>
  <div class="div1" @click="onClick('你点击了底部div')">
    <p>这是一个div标签，他有一个普通的点击事件</p>
    <div class="div2" @click.stop="onClick('你点击了重叠div，但是被stop修饰了')">
      <p>这是一个重叠的div标签</p>
    </div>
  </div>
  <br><br><br><br>
  <h2>事件修饰符实例：prevent 修饰</h2>
  <div class="div1">
    <a href="https://www.gxmzu.edu.cn" target="_blank">这是一个超链接，它会跳转到广西民族大学官网</a>
    <a href="https://www.gxmzu.edu.cn" target="_blank" @click.prevent="onClick('这个超链接被阻止了默认行为')">这是一个超链接，但是它没办法跳转</a>
  </div>
  <h2>事件修饰符实例：capture 修饰</h2>
  <div class="div1" @click.capture="onClick('你点击了底部div')">
    <p>这是一个div标签，他有一个普通的点击事件</p>
    <div class="div2" @click="onClick('你点击了重叠div，由于底部div被capture修饰了，所以它第二个才弹出来')">
      <p>这是一个重叠的div标签</p>
    </div>
  </div>
  <br><br><br><br>
  <h2>事件修饰符实例：self 修饰</h2>
  <div class="div1" @click.self="onClick('你点击了底部div，但是被self修饰了')">
    <p>这是一个div标签，他有一个普通的点击事件</p>
    <div class="div2" @click="onClick('你点击了重叠div')">
      <p>这是一个重叠的div标签</p>
    </div>
  </div>
  <br><br><br><br>
  <h2>事件修饰符实例：once 修饰</h2>
  <div class="div1" @click.once="onClick('你点击了底部div，但是被once修饰了')">
    <p>这是一个div标签，他有一个普通的点击事件</p>
    <div class="div2" @click.once="onClick('你点击了重叠div，但是被once修饰了')">
      <p>这是一个重叠的div标签</p>
    </div>
  </div>
  <br><br><br><br>
  <h2>事件修饰符实例：passive 修饰</h2>
  <h3>下方的div标签内部可以滚动，并在滚动过程中出发scroll时间</h3>
  <div @scroll="onScroll('正在滚动')" style="border: 4px red solid; height: 100px; overflow-y: scroll; width: 100px;">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
  <h3>下方的div标签内部可以滚动，但是被passive修饰了</h3>
  <div @scroll.passive="onScroll('正在滚动passive，你会发现加不加passive没有任何变化')" style="border: 4px red solid; height: 100px; overflow-y: scroll; width: 100px;">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})
function onClick(msg = '你触发了一个点击事件') {
  alert(msg)
}
function onScroll(msg) {
  console.log(msg);
}
</script>

<style scoped>
a {
  display: block;
}

.div1 {
  position: relative;
  background-color: #00CCFF;
  padding: 16px;
}

.div2 {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #66FF99;
  padding: 16px;
}
</style>