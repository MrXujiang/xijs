---
title: linkListToArray - 链表结构转数组结构
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 12
---

## 链表结构转数组结构

> 链表结构转数组结构

Demo:

```tsx | pure
import { linkListToArray } from 'xijs';

const linkList = {
  value: 100,
  next: { value: 200, next: { value: 300, next: { value: 400 } } },
};
const arr = linkListToArray(linkList);
console.log(arr); // -> [100,200,300,400]
```
