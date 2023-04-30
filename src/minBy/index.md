---
title: minBy - 对象数组最小值
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## 对象数组最小值

> 判断对象数组的最小值返回一个最小值的对象

Demo:

```tsx | pure
import { minBy } from 'xijs';

const minData = minBy([{ id: 1 }, { id: 2 }, { id: 3 }]);
console.log(minData); // -> { id: 1 }
```
