---
title: factorial - 阶乘
nav:
  title: 使用文档
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## factorial(n)

> 阶乘
>
> 参数
>
> n: 需要求阶乘的数字
>
> 返回值
>
> 若参数 n 大于 18，返回值用 bigint 类型表示。

Demo:

```tsx | pure
import { factorial } from 'xijs';

factorial(5); // -> 120
factorial(19); // -> 121645100408832000n
```
