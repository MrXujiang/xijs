---
title: quickSort - 快速排序
nav:
  title: 使用文档
  path: /lib
group:
  path: /algorithm
  title: 常用算法和数据结构
  order: 11
---

## quickSort

> 数组对象或者简单格式数组快速排序

Demo:

```tsx | pure
import { quickSort } from 'xijs';
let arr = [1, 3, 2, 8, 4];
let objArr = [
  { name: '8', age: 18 },
  { name: '3', age: 13 },
  { name: '5', age: 15 },
  { name: '2', age: 12 },
];
// quickSort(arr,arrKey,orderby)  参数说明： 1、arr => 简单数组or对象数组 2、arrKey => 对象数组key 3、orderby => 排序方式（默认升序('asc')、降序（'desc'））
// 简单数组快速排序 --> 升序
quickSort(arr); // -> [1,2,3,4,8]
// 简单数组快速排序 --> 降序
quickSort(arr,'','desc'); // -> [8,4,3,2,1]
// 对象数组快速排序 注：默认升序
quickSort(objArr,'age'); // -> [{ name: '2', age: 12 },{ name: '3', age: 13 },{ name: '5', age: 15 }...]
// 对象数组快速排序 --> 降序
quickSort(objArr,'age','desc'); // -> [{ name: '8', age: 18 },{ name: '5', age: 15 },{ name: '3', age: 13 }...]
```
