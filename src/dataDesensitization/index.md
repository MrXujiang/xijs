---
title: dataDesensitization - 数据脱敏
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## dataDesensitization

> 数据脱敏
>
> regex(param1, param2, param3m param4): param1 是 需要脱敏的类型，param2：需要脱敏的数据, param3: 自定义脱敏时 脱敏开始位置, param4: 自定义脱敏的位数
>
> idCard： 身份证 脱敏<br>
> phone： 手机号 脱敏<br>
> fixPhone： 手机号 脱敏<br>
> email： 邮箱 脱敏<br>
> username： 姓名 脱敏<br>
> custom： 自定义 脱敏<br>
>
> 返回值为 string 值，脱敏完的字符串

Demo:

```tsx | pure

// 按需引入
import { dataDesensitization } from 'xijs';

console.log('610222188709080909: ', dataDesensitization('idCard', '610222188709080909'));
console.log('18396781187: ', dataDesensitization('phone', '18396781187'));
console.log('18396781187: ', dataDesensitization('custom', '18396781187', 1, 8));
console.log('深证市龙岗区五和: ', dataDesensitization('address', '深证市龙岗区五和'));
console.log('1832291@qq.com: ', dataDesensitization('email', '1832291@qq.com'));
console.log('小小西: ', dataDesensitization('username', '小小西'));
console.log('小西: ', dataDesensitization('username', '小西'));
console.log('小西小西: ', dataDesensitization('username', '小西小西'));
console.log('012-1823293: ', dataDesensitization('fixPhone', '012-1823293'));
```
