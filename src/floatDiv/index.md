---
title: floatDiv - 浮点数精度除法
nav:
  title: 使用文档
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## 浮点数精度加法

> 浮点数精度除法, 可以实现精准除法, 不会让小数失真

Demo:

```tsx | pure
import { floatDiv } from 'xijs';
console.log(floatDiv(10.44, 100)); // -> 0.1044
```