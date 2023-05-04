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
>
> dateCalculate(date, num, flag):
>
> date: 是 new Date() 或者 格式化时间字符串，
>
> num: 是需要加上或者减去的数字 加为整数(例如：1)，减为负数(例如：-1)，
>
> flag：是需要对日期的哪一个进行计算：年(year)、月(month)、日(day)、小时(hour)、分钟(minute)、秒(second)、毫秒(milliseconds)
>
> 返回值：string 类型。已经格式化好的字符串(例如：2019-01-01 08:00:00)

Demo:

```tsx | pure
// 按需引入的方式
import { dateCalculate, formatDate } from 'xijs';

let data = new Date('2020-01-01');
console.log('year:', dateCalculate(data, -1, 'year'));

data = new Date('2020-01-01');
console.log('month:', dateCalculate(data, -1, 'month'));

data = new Date('2020-01-01');
console.log('day:', dateCalculate(data, -1, 'day'));

data = new Date('2020-01-01 08:00:00');
console.log('hour:', dateCalculate(data, -1, 'hour'));

data = new Date('2020-01-01 08:00:00');
console.log('minute:', dateCalculate(data, -1, 'minute'));

data = new Date('2020-01-01 08:00:00');
console.log('second:', dateCalculate(data, -1, 'second'));
```
