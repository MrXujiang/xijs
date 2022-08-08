---
title: getRuntimeEnv - 获取运行环境
nav:
  title: 使用文档
  path: /lib
group:
  path: /browser
  title: 浏览器相关
  order: 12
---

## getRuntimeEnv

> 获取当前运行环境,返回运行环境的集合判断

Demo:

```tsx | pure
import { getRuntimeEnv } from 'xijs';

const env = getRuntimeEnv();
console.log(env);
/* {
  isAndroid: false
  isChrome: true
  isEdge: false
  isIE: false
  isIE9: false
  isIOS: false
  isWeex: false
}
*/
```
