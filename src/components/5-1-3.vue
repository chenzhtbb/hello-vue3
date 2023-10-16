<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-16 14:21:02
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-16 16:06:25
 * @FilePath: /hello-vue3/src/components/5-1-3.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        {{ filterBy([1,2,3], ()=>('i' in [2])) }}
    </div>
</template>

<script setup>
function limitBy(arr, N, offset = 0) {
    return arr.slice(offset, N + offset + 1)
}

function filterBy(arr, filter) {
    console.log(arr);
    console.log(filter);
    if (typeof filter === 'string') {
        filter = function () { }
    }

}
</script>