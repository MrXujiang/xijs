---
title: regexp - 常用正则表达式
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## regexp

> 常用正则表达式 常用正则表达式

Demo:

```tsx | pure
import  * as xijs from 'xijs';

console.log('18396781187: ', xijs.regex(xijs.phoneRegexp, '18396781187'))
console.log('1839678117 : ', xijs.regex(xijs.phoneRegexp, '1839678117'))

console.log('车架号: ', xijs.regex(xijs.carNumberRegexp, 'LHGTG2824K8024652'))
```
