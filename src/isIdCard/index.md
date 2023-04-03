---
title: isIdCard - 判断身份证格式函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## isIdCard

> 判断身份证格式函数

Demo:

```tsx | pure
import { isIdCard } from 'xijs';

// 判断是否为正确的邮箱格式 => 18位
console.log(isIdCard('142431199009093611')); // -> true
// 判断是否为正确的邮箱格式 => 15位
console.log(isIdCard('130503670401001')); // -> true
```
