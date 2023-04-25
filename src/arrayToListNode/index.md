---
title: arrayToListNode - 数组转成链表
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## arrayToListNode

> 数组转成链表
>
> arrayToListNode(param): param 是 传入一个数组
>
> 返回值：ListNode 类型:
>
> { data: 'ok', next: { data: 'next', next: { data: 'post', next: { data: 'type' } } } }

Demo:

```tsx | pure
import { arrayToListNode } from 'xijs';

const arr = [1, 2, 3];
console.log(arrayToListNode(arr)); // { data: 1, next: { data: 2, next: { data: 3 } } }
const arr1 = [];
console.log(arrayToListNode(arr1)); // undefined
let arr2 = ['ok', 'next', 'post', 'type']; // { data: 'ok', next: { data: 'next', next: { data: 'post', next: { data: 'type' } } } }
console.log(arrayToListNode(arr2));
let arr3 = [true, false];
console.log(arrayToListNode(arr3)); // { data: true, next: { data: false} }
```
