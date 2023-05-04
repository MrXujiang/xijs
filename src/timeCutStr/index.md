---
title: timeCutStr - 计算时间差
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 2
---

## timeCutStr

> 计算传入的时间和当前时间的差值，比如计算几秒前、几分前、几秒后、几分后等等
>
> 支持传入数字或字符串：1682179200000、'1682179200000'、'2023-4-23'

Demo:

```tsx | pure
import { timeCutStr } from 'xijs';

// 以下所有计算都以当前时间 2023-4-23 23:59:59 为例

let diff = timeCutStr(+new Date('2023-4-23 23:59:59'));
console.log(diff); // 刚刚

diff = timeCutStr(String(+new Date('2023-4-23 23:59:58')));
console.log(diff); // 1秒前

diff = timeCutStr('2023-4-23 23:58:30');
console.log(diff); // 1分钟前

diff = timeCutStr('2023-4-23 22:58:30');
console.log(diff); // 1小时前

diff = timeCutStr('2023-4-22 22:58:30');
console.log(diff); // 1天前

diff = timeCutStr('2023-3-23 22:58:30');
console.log(diff); // 1个月前

diff = timeCutStr('2022-4-23 22:58:30');
console.log(diff); // 1年前

diff = timeCutStr('2023-4-24 00:00:00');
console.log(diff); // 1秒后

diff = timeCutStr('2023-4-24 00:01:00');
console.log(diff); // 1分钟后

diff = timeCutStr('2023-4-24 01:00:00');
console.log(diff); // 1小时后

diff = timeCutStr('2023-4-25 00:00:00');
console.log(diff); // 1天后

diff = timeCutStr('2023-5-24 00:00:00');
console.log(diff); // 1个月后

diff = timeCutStr('2024-4-24 00:00:00');
console.log(diff); // 1年后
```
