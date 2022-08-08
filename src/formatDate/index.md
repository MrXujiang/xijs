---
title: formatDate - 时间格式化
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 7
---

## formatDate

> 开箱即用的时间格式化工具

Demo:

```tsx | pure
import { formatDate } from 'xijs';

formatDate(new Date().getTime()); //2021-11-12 10:05:30

formatDate(new Date().getTime(), 'YY年MM月DD日'); //2021年11月12日

formatDate(new Date().getTime(), '今天是YY/MM/DD hh:mm:ss'); //今天是2021/11/12
```
