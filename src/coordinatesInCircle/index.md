---
title: coordinatesInCircle - 生成圆内任意坐标
nav:
  title: 使用文档
  path: /lib
group:
  path: /geometricCalculations
  title: 几何计算
  order: 13
---

## coordinatesInCircle(center, r)

> 生成圆内任意坐标
>
> 参数
>
> center: 圆心的坐标
>
> r: 圆的半径

Demo:

```tsx | pure
import { coordinatesInCircle } from 'xijs';

const point = coordinatesInCircle([2, 3], 2);
console.log(point); // -> [ 2, 4 ]
```
