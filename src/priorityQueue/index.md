---
title: PriorityQueue - 优先级队列
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## PriorityQueue(compareFunction?)

> 优先级队列
>
> 参数：
>
> compareFunction: 可选，定义排序顺序的函数。返回值应该是一个数字，其正负性表示两个元素的相对顺序。
>
> 该函数使用两个参数调用：
>
>     a: 第一个用于比较的元素
>
>     b: 第二个用于比较的元素

Demo:

```tsx | pure
import { PriorityQueue } from 'xijs';
const customCompare = (a: number, b: number) => {
  return b - a;
};

const pq = new PriorityQueue(customCompare);

pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);

expect(pq.dequeue()).toBe(8);
expect(pq.dequeue()).toBe(5);
expect(pq.dequeue()).toBe(3);
```
