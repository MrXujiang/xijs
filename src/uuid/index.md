---
title: uuid - 生成唯一id
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 2
---

## uuid

> 生成唯一 id, 支持设置长度

Demo:

```tsx | pure
import { uuid } from 'xijs';

const id1 = uuid(8);

console.log(id1); // -> RvuUN6RS

const id2 = uuid(10);
console.log(id2); // -> kvKnvYC2Jb

const id3 = uuid(16);
console.log(id3); // -> su7itMfdk6f8ZcGi
```
