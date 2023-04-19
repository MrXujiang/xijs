---
title: dateCalculate - 日期计算
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## dateCalculate

> 对日期进行计算，比如计算前一天，前一个月，后一天，后一个月等等

Demo:

```tsx | pure

// 按需引入的方式
import {dateCalculate} from 'xijs';

let data = new Date('2020-01-01')
console.log('year:', dateCalculate(data, -1, 'year'))

data = new Date('2020-01-01')
console.log('month:', dateCalculate(data, -1, 'month'))

data = new Date('2020-01-01')
console.log('day:', dateCalculate(data, -1, 'day'))

data = new Date('2020-01-01 08:00:08')
console.log('hour:', dateCalculate(data, -1, 'hour'))

data = new Date('2020-01-01 08:00:08')
console.log('minute:', dateCalculate(data, -1, 'minute'))

data = new Date('2020-01-01 08:00:08')
console.log('second:', dateCalculate(data, -1, 'second'))
```
