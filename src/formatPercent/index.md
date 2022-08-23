---
title: formatPercent - 值转换为百分数表示
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 2
---

## formatPercent

> 数值千分位格式化

Demo:

```tsx | pure
import { formatPercent } from 'xijs';
const num = formatPercent(10.234, 2);
console.log(num); // -> 10.23%
```
