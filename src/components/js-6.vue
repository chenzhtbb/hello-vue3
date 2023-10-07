<template>
  <h2>函数</h2>
  <n-code language="js" :code="`function functionname()
{
  // 执行代码
}`"></n-code>
  <h2>条件语句</h2>
  <h3>if 语句</h3>
  <n-code language="js" :code="`if (condition)
{
    当条件为 true 时执行的代码
}`"></n-code>
  <h3>if...else 语句</h3>
  <n-code language="js" :code="`if (condition)
{
    当条件为 true 时执行的代码
}
else
{
    当条件不为 true 时执行的代码
}`"></n-code>
  <h3>if...else if...else 语句</h3>
  <n-code language="js" :code="`if (condition1)
{
    当条件 1 为 true 时执行的代码
}
else if (condition2)
{
    当条件 2 为 true 时执行的代码
}
else
{
  当条件 1 和 条件 2 都不为 true 时执行的代码
}`"></n-code>
  <h2>switch 语句</h2>
  <n-code language="js" :code="`switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}`"></n-code>
  <h2>for 循环</h2>
  <n-code language="js" :code="`for (语句 1; 语句 2; 语句 3)
{
    被执行的代码块
}`"></n-code>
  <p>语句 1 （代码块）开始前执行</p>
  <p>语句 2 定义运行循环（代码块）的条件</p>
  <p>语句 3 在循环（代码块）已被执行之后执行</p>
  <h2>while 循环</h2>
  <n-code language="js" :code="`while (条件)
{
    需要执行的代码
}`"></n-code>
  <h2>break 语句</h2>
  <p>它用于跳出 switch() 语句。break 语句也可用于跳出循环。break 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）。</p>
  <h2>continue 语句</h2>
  <p>continue 语句中断当前的循环中的迭代，然后继续循环下一个迭代。</p>
  <h2>事件</h2>
  <p>HTML 事件是发生在 HTML 元素上的事情。当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。</p>
</template>

<script setup></script>