<template>
    <h1>6.1.2 基于 style 的动画和过渡</h1>
    <p>一些过渡效果可以通过插值的方式来实现，这会导致在发生交互时将样式绑定到元素上，例如：</p>
    <div class="ani-box" :style="{ 'background-color': `hsl(${x}, 70%, 90%)` }" @mousemove="handler">
        <p>鼠标的横坐标：{ {{ x }} }</p>
    </div>
    <p>代码如下：</p>
    <n-code language="html" :code="code1" word-wrap></n-code>
    <n-code language="js" :code="code2"></n-code>
    <n-code language="html" :code="code3"></n-code>
    <p>每次鼠标在方框区域内移动时都会触发 handler 函数并更新其背景颜色。</p>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
    inheritAttrs: false
})
const x = ref(0)
function handler($e) {
    x.value = $e.offsetX
}

const code1 = `<template>
    <div class="ani-box" :style="{ 'background-color': \`hsl(${x}, 70%, 90%)\` }" @mousemove="handler">
        <p>鼠标的横坐标：{ \{\{ x \}\} }</p>
    </div>
</template>`
const code2 = `<script setup>
import { ref } from 'vue'
const x = ref(0)
function handler($e) {
    x.value = $e.offsetX
}
<\/script>`
const code3 = `<style scoped>
.ani-box {
    position: relative;
    width: 600px;
    height: 400px;
    border: 1px red solid;
    transition: 0.1s background-color ease;
}
</style>`
</script>

<style scoped>
.ani-box {
    position: relative;
    width: 600px;
    height: 400px;
    border: 1px red solid;
    transition: 0.1s background-color ease;
}
</style>