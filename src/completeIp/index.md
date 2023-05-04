---
title: completeIp - ip地址补全
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## completeIp

> ip 地址补全

Demo:

```tsx | pure
import { completeIp } from 'xijs';

const newIp = completeIp('127.0.0.1');
console.log(newIp); // 127.000.000.001
```
