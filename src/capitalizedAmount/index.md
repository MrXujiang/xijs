---
title: capitalizedAmount - 数字金额转为大写
nav:
  title: 使用文档
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## capitalizedAmount

> 数字金额转为大写
>
> 注意：最大只支持到千亿

Demo:

```tsx | pure
import { capitalizedAmount } from 'xijs';

capitalizedAmount(100000000); // 壹亿元整
capitalizedAmount('2023.04'); // 贰仟零贰拾叁元肆分
capitalizedAmount(-1024); // 欠壹仟零贰拾肆元整
```
