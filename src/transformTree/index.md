---
title: transformTree - 扁平转树结构
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## transformTree

> 将扁平数组转换成树结构

Demo:

```tsx | pure
import { transformTree } from 'xijs';

const data = [
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

console.log(transformTree(data));
/**
 [
   {
     id: '0',
     name: '趣谈前端',
     pid: '',
     children: [
       {
        id: '0-1',
        name: 'js',
        pid: '0',
        children: []
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
            children: []
          },
        ]
      },
     ]
   }
 ]
   */
```
