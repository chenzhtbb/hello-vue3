<template>
    <component :is="autoImportComponent" />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
const props = defineProps({
    page: String
})

const page = computed(() => {
    return props.page
})
const autoImportComponent = computed(() => {
    return !page.value ? null : defineAsyncComponent(() => import(`@/components/${page.value}.vue`))
})

</script>