---
title: floatAdd - 浮点数精度减法
nav:
  title: 使用文档
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## 浮点数精度加法

> 浮点数精度减法, 可以实现精准减法, 不会让小数失真

Demo:

```tsx | pure
import { floatSub } from 'xijs';

let floatBoolean = (0.4, 0.1) === 0.3;
console.log(floatBoolean); // -> true
```
