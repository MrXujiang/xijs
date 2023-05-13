---
title: isObjEqual - 判断两个对象是否相等
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## isObjEqual

> 判断两个对象是否相等

Demo:

```tsx | pure
import { isObjEqual } from 'xijs';

console.log(isObjEqual({a: 1, b: 2, c: {d: 222}}, {b: 2, c: {d: 222}, a: 1}));
console.log(isObjEqual({b: 2, c: {d: 222}, a: 1}, {a: 1, b: 2, c: {d: 222}}));
// console.log(isObjEqual({a: 1, b: 2, c: {d: 222}}, {b: 2, c: {d: 222}, a: 1, d: 9}));
```
