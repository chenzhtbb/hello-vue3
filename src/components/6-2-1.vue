<template>
    <h1>6.2.1 进入与离开过渡</h1>
    <p>&lt;Transition&gt; 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：</p>
    <ul>
        <li>由 v-if 所触发的切换</li>
        <li>由 v-show 所触发的切换</li>
        <li>由特殊元素 &lt;component&gt; 切换的动态组件</li>
        <li>改变特殊的 key 属性</li>
    </ul>
    <p>以下是最基本用法的示例：</p>
    <n-button @click="show = !show">Toggle</n-button>
    <Transition>
        <p v-if="show">hello</p>
    </Transition>
    <p>代码如下：</p>
    <n-code language="html" :code="code1"></n-code>
    <n-code language="html" :code="code2"></n-code>
    <br>
    <n-alert title="提示" type="warning">
        &lt;Transition&gt; 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。
    </n-alert>
    <p>当一个 &lt;Transition&gt; 组件中的元素被插入或移除时，会发生下面这些事情：</p>
    <ol>
        <li>Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 CSS 过渡 class 会在适当的时机被添加和移除。</li>
        <li>如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。</li>
        <li>如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。</li>
    </ol>
    <h2>transition</h2>
    <p>过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 :hover，:active 或者通过 JavaScript 实现的状态变化。</p>
    <p>transition属性可以被指定为一个或多个 CSS 属性的过渡效果，多个属性之间用逗号进行分隔。</p>
    <p>每个单属性转换都描述了应该应用于单个属性的转换（或特殊值all和none）。这包括：</p>
    <ul>
        <li>
            <p>零或一个值，表示转换应适用的属性。这可能是以下任何一种：</p>
            <ul>
                <li>关键字none</li>
                <li>关键字all</li>
                <li>命名 CSS 属性的 custom-ident 。</li>
            </ul>
        </li>
        <li>零或一个 single-transition-timing-function 值表示要使用的过渡函数</li>
        <li>零，一或两个 time 值。可以解析为时间的第一个值被分配给 transition-duration，并且可以解析为时间的第二个值被分配给transition-delay。</li>
    </ul>
    <h2>ease</h2>
    <p>规定慢速开始，然后变快，然后慢速结束的过渡效果(cubic-bezier(0.25,0.1,0.25,1))(相对于匀速，中间快，两头慢)。</p>
    <h2>opacity</h2>
    <p>opacity 属性指定了一个元素的不透明度。换言之，opacity 属性指定了一个元素后面的背景的被覆盖程度。</p>
    <p>当 opacity 属性的值应用于某个元素上时，是把这个元素（包括它的内容）当成一个整体看待，即使这个值没有被子元素继承。因此，一个元素和它包含的子元素都会具有和元素背景相同的透明度，哪怕这个元素和它的子元素有不同的 opacity 属性值。</p>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
    inheritAttrs: false
})
const show = ref(true)

const code1 = `<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>`

const code2 = `/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}`
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>