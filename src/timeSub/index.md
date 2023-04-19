---
title: timeSub - 计算时间间隔
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## timeSub

> 计算两个时间间隔: 返回值为 毫秒

Demo:

```tsx | 

// 按需引入的方式
import {timeSub} from 'xijs';

let start = new Date('2020-01-01 08:00:08')
let end = new Date('2020-01-01 09:00:08')
console.log('timeSub: ', timeSub(start, end))
```
