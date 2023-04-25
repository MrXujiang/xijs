---
title: transformArray - 树结构转扁平数组
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## transformArray(tree, childField)

> 将树结构转换成扁平数组
>
> 参数
>
> tree: 树结构数组
>
> childField: 每个节点中子树的字段名，默认值为 'children'。

Demo:

```tsx | pure
import { transformArray } from 'xijs';

const tree = [
  {
    id: '0',
    name: '趣谈前端',
    pid: '',
    children: [
      {
        id: '0-1',
        name: 'js',
        pid: '0',
        children: [],
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
        children: [
          {
            id: '0-2-1',
            name: 'css3',
            pid: '0-2',
            children: [],
          },
        ],
      },
    ],
  },
];
console.log(transformArray(tree));
/*
[
  {
    id: '0',
    name: '趣谈前端',
    pid: '',
  },
  {
    id: '0-1',
    name: 'js',
    pid: '0',
  },
  {
    id: '0-2',
    name: 'css',
    pid: '0',
  },
  {
    id: '0-2-1',
    name: 'css3',
    pid: '0-2',
  },
];
/*
```
