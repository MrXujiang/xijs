---
title: debounce - 防抖函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 8
---

## debounce

> 防抖函数

Demo:

```tsx | pure
import { debounce } from 'xijs';

function sayLove(name) {
  return name;
}

debounce(sayLove, 200)('xuxiaoxi');
```
