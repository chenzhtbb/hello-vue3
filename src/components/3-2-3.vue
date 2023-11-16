<template>
  <h1>3.2.3 侦听属性</h1>
  <p>计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”。</p>
  <p>可以使用 <n-text type="primary">watch</n-text> 函数在每次响应式状态发生变化时触发回调函数：</p>
  <n-blockquote>回调函数：把一段可执行的代码像参数传递那样传给其他代码，而这段代码会在某个时刻被调用执行，这就叫做回调。如果代码立即被执行就称为同步回调，如果在之后晚点的某个时间再执行，则称之为异步回调。</n-blockquote>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code word-wrap show-line-numbers language="html" :code="`<template>
  <p>num：{{ data.num }}</p>
  <button @click='data.num--'>num --</button>
  <button @click='data.num++'>num ++</button>

  <p>count：{{ count }}</p>
  <button @click='count--'>count --</button>
  <button @click='count++'>count ++</button>
</template>`"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code word-wrap show-line-numbers language="js" :code="`<script setup>
import { reactive, ref, watch } from 'vue';

const data = reactive({
  num: 1
})

const count = ref(0)

watch(
  function () {
    return data.num
  },
  function (newVal, oldVal) {
    console.log('newNum: ', newVal)
    console.log('oldNum: ', oldVal)
  }
)

watch(
  function () {
    // 如采用箭头函数，不需要.value
    return count.value
  },
  function (newVal, oldVal) {
    console.log('newCount: ', newVal)
    console.log('oldCount: ', oldVal)
  }
)
</script>`"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="实验结果">
      <p>按下 <n-text type="info">F12</n-text> 打开命令行工具，并切换到 <n-text type="info">console</n-text> 选项卡查看运行结果</p>
      <p>num：{{ data.num }}</p>
      <button @click="data.num--">num --</button>
      <button @click="data.num++">num ++</button>

      <p>count：{{ count }}</p>
      <button @click="count--">count --</button>
      <button @click="count++">count ++</button>
    </n-tab-pane>
  </n-tabs>
  <n-blockquote>本例及后续例子将不再给出 <n-text type="info">箭头函数</n-text> 版本的代码。</n-blockquote>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

defineOptions({
    inheritAttrs: false
})
const data = reactive({
  num: 1
})

const count = ref(0)

watch(
  function () {
    return data.num
  },
  function (newVal, oldVal) {
    console.log('newNum: ', newVal)
    console.log('oldNum: ', oldVal)
  }
)

watch(
  function () {
    // 如采用箭头函数，不需要.value
    return count.value
  },
  function (newVal, oldVal) {
    console.log('newCount: ', newVal)
    console.log('oldCount: ', oldVal)
  }
)
</script>