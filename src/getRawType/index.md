---
title: getRawType - 获取数据类型
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 12
---

## getRawType

> 获取数据类型，返回结果为 Number、String、Object、Array 等

Demo:

```tsx | pure
import { getRawType } from 'xijs';

const name = getRawType('h5-dooring');
console.log(name); // String
```
