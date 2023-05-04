---
title: hyCompact - 紧凑型驼峰命名转换
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## hyCompact

> 紧凑型驼峰命名转横线命名,区别在于出现连续 2 个字母都是大写的情况

Demo:

```tsx | pure
import { hyCompact } from 'xijs';

// 默认用横线分隔
const name = hyCompact('EACdEf');
console.log(name); // EACdEf ==> ea-cd-ef

// 自定义分隔符
const name1 = hyCompact('EACdEf', '_');
console.log(name1); // EACdEf ==> ea_cd_ef
```
