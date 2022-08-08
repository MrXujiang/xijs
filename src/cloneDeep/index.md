---
title: cloneDeep - 数据深拷贝
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 12
---

## 数据深拷贝

> 数据深拷贝, 提取自 lodash, 最小化模块体积

Demo:

```tsx | pure
import { cloneDeep } from 'xijs';

const door = cloneDeep([1, 2, 3, 4, 5]);
console.log(door); // -> [1, 2, 3, 4, 5]
```
