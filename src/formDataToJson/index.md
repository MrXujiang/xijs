---
title: formDataToJson - 表单数据转成JSON
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## formDataToJson

> 表单数据转成JSON

Demo:

```tsx | pure
import { formDataToJson } from 'xijs';
const data = new FormData();
data.set('user', '1');
data.set('age', 29);
data.set('phone', '18329208292')
console.log(formDataToJson(data));
const data1 = new FormData();
console.log(formDataToJson(data1));
```
