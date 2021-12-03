---
title: store - 本地存储库
nav:
  title: 使用文档
  path: /lib
group:
  path: /
  order: 2
---

## store

Demo:

```tsx | pure
import { store } from 'xijs';
// 将对象序列化
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);
```

```tsx
/**
 * title: 打开控制台查看结果
 */

import { store } from 'xijs';

// 将对象序列化
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);
```
