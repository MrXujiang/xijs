---
title: coordinatesInRect - 生成矩形内任意坐标
nav:
  title: 使用文档
  path: /lib
group:
  path: /geometricCalculations
  title: 几何计算
  order: 14
---

## coordinatesInRect(startPos, w, h)

> 生成矩形内任意坐标
>
> 参数
>
> startPos: 左上顶点的坐标
>
> w: 矩形的宽
>
> h: 矩形的高

Demo:

```tsx | pure
import { coordinatesInRect } from 'xijs';

const point = coordinatesInRect([3, 4], 5, 6);
console.log(point); // -> [ 5, 7 ]
```
