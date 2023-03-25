---
title: judgePointInCircle - 判断一点是否在圆内
nav:
  title: 使用文档
  path: /lib
group:
  path: /geometricCalculations
  title: 几何计算
  order: 13
---

## judgePointInCircle(circle, x, y)

> 判断一点是否在圆内
>
> 参数
>
> circle: 描述圆形信息的对象，包含 center 属性和 r 属性，center 表示圆心的坐标，r 表示圆的半径。
>
> x: 该点的 x 轴坐标
>
> y: 该点的 y 轴坐标

Demo:

```tsx | pure
import { judgePointInCircle } from 'xijs';

const res = judgePointInCircle(
  {
    center: [3, 4],
    r: 5,
  },
  4,
  6,
);
console.log(res); // -> true
```
