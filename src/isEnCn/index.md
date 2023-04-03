---
title: isEnCn - 判断中英文
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## isEnCn

> isEnCn 判断中英文

- isEnCn.isEn 英文
- isEnCn.isCn 中文

Demo:

```tsx | pure
import { isEnCn } from 'xijs';

// 判断是否为英文
console.log(isEnCn.isEn('sadsad')); // -> true
// 判断是否为中文
console.log(isEnCn.isCn('萨达')); // -> true
```
