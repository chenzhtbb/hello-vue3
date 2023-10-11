<template>
  <h1>3.2.1 计算属性的概念</h1>
  <p><n-text type="info">计算属性</n-text>通常用于描述依赖响应式状态的复杂逻辑。例如，我们有这样一份代码：</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="普通函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
    <p>num：{{ num }}</p>
    <p>double：{{ num * 2 }}</p>
    <p>tripple：{{ num * 3 }}</p>
  <button @click='addBtn'>num + 1</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { ref } from 'vue';

const num = ref(1)

function addBtn() {
  num.value++
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="箭头函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
    <p>num：{{ num }}</p>
    <p>double：{{ num * 2 }}</p>
    <p>tripple：{{ num * 3 }}</p>
  <button @click='addBtn'>num + 1</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { ref } from 'vue';

const num = ref(1)

const addBtn = () => {
  num.value++
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="显示效果">
      <p>num：{{ num }}</p>
      <p>double：{{ num * 2 }}</p>
      <p>tripple：{{ num * 3 }}</p>
      <button @click="addBtn">num + 1</button>
    </n-tab-pane>
  </n-tabs>
  <p>直接使用文本插值计算表达式的值固然方便，但如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。</p>
  <p> 更重要的是，如果在模板中需要<n-text type="warning">不止一次这样的计算</n-text>，我们可不想将这样的代码在模板里重复好多遍。</p>
  <p>因此我们推荐使用<n-text type="info">计算属性</n-text>来描述依赖响应式状态的复杂逻辑。这是重构后的示例：</p>
  <n-tabs type="line" animated>
    <n-tab-pane name="fun1" tab="普通函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
  <p>num：{{ num }}</p>
  <p>double：{{ double }}</p>
  <p>tripple：{{ tripple }}</p>
  <button @click='addBtn'>num + 1</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { computed, ref } from 'vue';

const num = ref(1)

const double = computed(function () {
  return num.value * 2
})

const tripple = computed(function () {
  return num.value * 3
})

function addBtn() {
  num.value++
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="箭头函数：App.vue">
      <n-code show-line-numbers language="html" :code="`
  <template>
  <p>num：{{ num }}</p>
  <p>double：{{ double }}</p>
  <p>tripple：{{ tripple }}</p>
  <button @click='addBtn'>num + 1</button>
</template>
`" />
      <n-code show-line-numbers language="js" :code="`<script setup>
import { computed, ref } from 'vue';

const num = ref(1)

const double = computed(() => {
  return num.value * 2
})

const tripple = computed(() => {
  return num.value * 3
})

const addBtn = () => {
  num.value++
}
</script>`" />
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="显示效果">
      <p>num：{{ num }}</p>
      <p>double：{{ double }}</p>
      <p>tripple：{{ tripple }}</p>
      <button @click="addBtn">num + 1</button>
    </n-tab-pane>
  </n-tabs>
</template>

<!-- <template>
  <p>num：{{ num }}</p>
  <p>double：{{ num * 2 }}</p>
  <p>tripple：{{ num * 3 }}</p>
  <button @click="addBtn">num + 1</button>
</template> -->

<script setup>
import { computed, ref } from 'vue';

defineOptions({
    inheritAttrs: false
})
const num = ref(1)

const double = computed(function () {
  return num.value * 2
})

const tripple = computed(function () {
  return num.value * 3
})

function addBtn() {
  num.value++
}
</script>