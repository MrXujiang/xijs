---
title: store - 本地存储库
nav:
  title: 使用文档
  path: /lib
group:
  path: /browser
  title: 浏览器相关
  order: 2
---

## store

> 基于 localStorage 上层封装的支持过期时间设置的缓存库, 支持操作回调.

Demo:

```tsx | pure
import { store } from 'xijs';

// 将对象序列化
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);

// 设置成功后的回调
store.set('dooring', 'xuxiaoxi', Date.now() + 1000, (status, key, value) => {
  console.log('success');
});
```

```tsx
/**
 * title: 打开控制台查看结果
 */

import { store } from 'xijs';

// 设置过期时间
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);

// 设置成功后的回调
store.set('name', 'dooring', Date.now() + 1000, (status, key, value) => {
  console.log('success');
});
```
