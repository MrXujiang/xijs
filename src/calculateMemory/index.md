---
title: calculateMemory - calculateMemory计算占用内存
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## base64

> calculateMemory 计算占用内存

Demo:

```tsx | pure
import { calculateMemory } from 'xijs';

calculateMemory(obj); // -> 114 B
calculateMemory(obj, 'B'); // -> 114 B
calculateMemory(obj, 'KB');// -> 0.11 KB
calculateMemory(obj, 'MB');// -> 0.00 MB
```
