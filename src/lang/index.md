---
title: lang - 判断中英文
nav:
  title: 使用文档
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## lang

> lang 语言处理函数

- lang.isEn 英文
- lang.isCn 中文

Demo:

```tsx | pure
import { lang } from 'xijs';

// 判断是否为英文
console.log(lang.isEn('sadsad')); // -> true
// 判断是否为中文
console.log(lang.isCn('萨达')); // -> true
```
