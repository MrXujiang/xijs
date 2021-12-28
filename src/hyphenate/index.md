---
title: hyphenate - 驼峰命名转横线命名
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 12
---

## hyphenate

> 驼峰命名转横线命名

Demo:

```tsx | pure
import { hyphenate } from 'xijs';

const name = hyphenate('abCdEf');
console.log(name); // abCdEf ==> ab-cd-ef
```
