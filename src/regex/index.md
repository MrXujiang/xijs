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
> 
> 
> regex(param1, param2): param1 是需要校验的正则表达式，param2：是需要检验文本内容
> 
> 返回值为 boolean 值，返回 true 则是满足校验规则， 返回 false 则是不满足校验规则

Demo:

```tsx | pure
// 全量引用
// import  * as xijs from 'xijs';
//
// console.log('18396781187: ', xijs.regex(xijs.phoneRegexp, '18396781187'))
// console.log('1839678117 : ', xijs.regex(xijs.phoneRegexp, '1839678117'))
//
// console.log('车架号: ', xijs.regex(xijs.carNumberRegexp, 'LHGTG2824K8024652'))

// 按需引入
import  {phoneRegexp, carNumberRegexp, regex} from 'xijs';

console.log('18396781187: ', regex(phoneRegexp, '18396781187'))
console.log('1839678117 : ', regex(phoneRegexp, '1839678117'))

console.log('车架号: ', regex(carNumberRegexp, 'LHGTG2824K8024652'))
```
