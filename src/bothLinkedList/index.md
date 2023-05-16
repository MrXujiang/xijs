---
title: BothLinkedList - 双向链表
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## BothLinkedList

> 双向链表
>
> bothLinkedList.insertHead(param): param 是 需要插入的元素，插入到元素链表尾部    <br>
> bothLinkedList.insertIndex(param, index): param 是 需要插入的元素，index： 需要插入的位置    <br>
> bothLinkedList.getHead(): 从头开始遍历链表   <br>
> bothLinkedList.getTail(): 从尾开始遍历链表   <br>
> bothLinkedList.getData(index): index: 通过索引获取元素值   <br>
> bothLinkedList.getSize(): 获取链表长度   <br>
> bothLinkedList.deleteFrom(index): index 通过索引删除元素节点   <br>
> bothLinkedList.deleteData(param): index 通过元素值删除元素节点   <br>
>
> 返回值：Node 类型:
>
> { data: 1, next: undefined, prev: undefined }

Demo:

```tsx | pure
import { BothLinkedList } from 'xijs';

let bothLinkedList = new BothLinkedList()
bothLinkedList.insertHead(1);
bothLinkedList.insertHead(2);
// bothLinkedList.insertHead(3)
console.log(bothLinkedList.getHead())
bothLinkedList.deleteFrom(1)
bothLinkedList.deleteData(1)
console.log(bothLinkedList.getHead())
// console.log(bothLinkedList.getTail())
// console.log(bothLinkedList.getData(3))
```
