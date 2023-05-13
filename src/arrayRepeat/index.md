---
title: arrayRepeat - 计算数组中重复元素以及重复元素的次数
nav:
  title: 使用文档
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## arrayRepeat

> 计算数组中重复元素以及重复元素的次数

Demo:

```tsx | pure
import { arrayRepeat } from 'xijs';
const arr = ['1', '2', '1', 1, 2, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1}, {c: 3, b: 2, a: 1}, {a: 1, b: 2}, {a: 1, c: 'w', b: 2}, {a: 1, b: 2, c: 'w'}]
console.log(arrayRepeat(arr)) // {"1":1,"2":1,""1"":2,""2"":1,"{"a":1,"b":2}":2,"{"a":1,"b":3}":1,"{"a":1,"b":2,"c":3}":3,"{"a":1,"c":"w","b":2}":2}
console.log(arrayRepeat([{ 1: 1 }, {a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1}, {c: 3, b: 2, a: 1}]))
console.log(arrayRepeat([{b: 2, a: 1}]))
```
