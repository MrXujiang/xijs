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
> 
> xss(html): html 为需要进行xss转义的字符串
> 
> 返回值：string类型。 &lt;a href=&quot;javascipt: 0&quot;&gt;Me &amp; you&lt;/a&gt;

Demo:

```tsx | pure
import {xss} from 'xijs';
let html = '<a href="#">Me & you</a>'
console.log(xss(html))
html = '<a href="javascipt: 0">Me & you</a>'
console.log(xss(html))
```
