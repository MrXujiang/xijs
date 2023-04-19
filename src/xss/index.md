---
title: xss - 转义html标签
nav:
  title: 使用文档
  path: /lib
group:
  path: /dom
  title: dom操作
  order: 2
---

## xss

> 对 html 标签进行转义解决xss注入

Demo:

```tsx | pure
import {xss} from 'xijs';
let html = '<a href="#">Me & you</a>'
console.log(xss(html))
html = '<a href="javascipt: 0">Me & you</a>'
console.log(xss(html))
```
