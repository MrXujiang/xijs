---
title: camelize - 横线转驼峰命名
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## camelize

> 横线转驼峰命名

Demo:

```tsx | pure
import { camelize } from 'xijs';

const name = camelize('ab-cd-ef');
console.log(name); //ab-cd-ef ==> abCdEf
```
