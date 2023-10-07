<template>
  <h1>3.2.2 计算属性</h1>
  <p>计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 <n-text code>getter</n-text> 和 <n-text
      code>setter</n-text> 来创建：</p>
  <p>下例中创建了一个可读可写的计算属性 tripple ，它的值会保持为 num 的三倍。单击按钮会将 tripple 的值变为 9 。此时，num 的值会变为 3 。</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="普通函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
  <p>num：{{ num }}</p>
  <p>tripple：{{ tripple }}</p>
  <button @click='changeBtn'>9</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { computed, ref } from 'vue';

const num = ref(1)

const tripple = computed({
  get: function () {
    return num.value * 3
  },
  set: function (val) {
    num.value = val / 3
  }
})

const changeBtn = function () {
  tripple.value = 9
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="箭头函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
  <p>num：{{ num }}</p>
  <p>tripple：{{ tripple }}</p>
  <button @click='changeBtn'>9</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { computed, ref } from 'vue';

const num = ref(3)

const tripple = computed({
  get: () => {
    return num.value * 3
  },
  set: (val) => {
    num.value = val / 3
  }
})

const changeBtn = () => {
  tripple.value = 9
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="实验结果">
      <p>num：{{ num }}</p>
      <p>tripple：{{ tripple }}</p>
      <button @click='changeBtn'>9</button>
    </n-tab-pane>
  </n-tabs>
  <h1>避免直接修改计算属性值</h1>
  <p>从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p>
</template>

<script setup>
import { computed, ref } from 'vue';

const num = ref(1)

const tripple = computed({
  get: function () {
    return num.value * 3
  },
  set: function (val) {
    num.value = val / 3
  }
})

const changeBtn = function () {
  tripple.value = 9
}
</script>