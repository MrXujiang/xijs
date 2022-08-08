---
title: sleep - 睡眠函数
nav:
  title: 使用文档
  path: /lib
group:
  path: /highFn
  title: js高级函数
  order: 10
---

## sleep

> 让 async 内部程序等待一定时间后再执行

Demo:

```tsx | pure
import { sleep } from 'xijs';

async function sayLove() {
  await sleep(3000);
  console.log('i love you');
}
```
