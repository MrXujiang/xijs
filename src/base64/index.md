---
title: base64 - base64编码和解码
nav:
  title: 使用文档
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## base64

> base64 编码和解码

- base64.encode 编码
- base64.decode 解码

Demo:

```tsx | pure
import { base64 } from 'xijs';

base64.encode('h5-dooring'); // -> aDUtZG9vcmluZw==
base64.decode('aDUtZG9vcmluZw=='); // -> h5-dooring
```
