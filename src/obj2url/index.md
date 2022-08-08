---
title: obj2url - 将对象参数解析为url字符串
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## obj2url

> 将对象转换成编码后的 url 字符串

Demo:

```tsx | pure
import { obj2url } from 'xijs';

obj2url({ a: 123, b: 'H5-Dooring' }); // a=123&b=H5-Dooring
```
