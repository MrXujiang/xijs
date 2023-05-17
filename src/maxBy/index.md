---
title: maxBy - 对象数组最大值
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## 对象数组最大值

> 判断对象数组的最大值返回一个最大值的对象

Demo:

```tsx | pure
import { maxBy } from 'xijs';

const maxData = maxBy([{ id: 1 }, { id: 2 }, { id: 3 }], 'id');
console.log(maxData); // -> { id: 3 }
```
