<template>
  <h1>3.1.2 过滤器</h1>
  <n-blockquote>由于 Vue 3 中已经删除过滤器，故本节内容将在 <n-button text type="primary" @click="handleClick">第5章</n-button>
    讲解过滤器的实现方法。</n-blockquote>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleClick = () => emit('update:modelValue', '5-1')
</script>