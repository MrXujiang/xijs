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
> regex(param1, param2): param1 是需要校验的正则表达式，param2：是需要检验文本内容
>
> emailRegexp： 邮箱<br>
> phoneRegexp： 手机号码 <br>
> fixPhone： 国内电话号码 <br>
> idRegexp： 身份证号(15 位、18 位数字)<br>
> ipv4Regexp： IPv4<br>
> chineseRegexp： 是否包含中文<br>
> qqRegexp： 匹配 qq 号 腾讯 QQ 号从 10000 开始<br>
> chinesePostcodeRegexp： 匹配中国邮政编码<br>
> usPostcodeRegexp： 匹配英国邮政编码<br>
> ukPostcodeRegexp： 匹配美国邮政编码<br>
> carNumberRegexp： 车架号<br>
> accountRegexp： 帐号是否合法(字母开头，允许 5-16 位，允许字母数字下划线)<br>
> rgbRegexp： rgb 颜色<br>
> rgbaRegexp： rgba 颜色<br>
> numberRegexp： 十六进制颜色代码<br>
> hslRegexp： 匹配 hsl 值 <br>
> hslaRegexp： 匹配 hsla 值
>
> 返回值为 boolean 值，返回 true 则是满足校验规则， 返回 false 则是不满足校验规则

Demo:

```tsx | pure
// 全量引用
// import  * as xijs from 'xijs';
//
// console.log('18396781187: ', xijs.regex('phoneRegexp', '18396781187'))
// console.log('1839678117 : ', xijs.regex('phoneRegexp', '1839678117'))
//
// console.log('车架号: ', xijs.regex('carNumberRegexp', 'LHGTG2824K8024652'))

// 按需引入
import { regex } from 'xijs';

console.log('18396781187: ', regex('phoneRegexp', '18396781187'));
console.log('1839678117 : ', regex('phoneRegexp', '1839678117'));

console.log('车架号: ', regex('carNumberRegexp', 'LHGTG2824K8024652'));
console.log('车架号: ', regex('carNumberRegexp', 'LHGTG2824K8024652'))
```
