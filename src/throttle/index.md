---
title: throttle - 节流函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /highFn
  title: js高级函数
  order: 10
---

## throttle

> 节流函数

Demo:

```tsx | pure
import { throttle } from 'xijs';

function sayLove(name) {
  return name;
}

throttle(sayLove, 200)('xuxiaoxi');
```
