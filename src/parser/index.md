---
title: parser - json超级解析器
nav:
  title: 使用文档
  path: /lib
group:
  path: /highFn
  title: js高级函数
  order: 10
---

## parser

> 该 json 解析器基于原生`JSON API`进行的上层封装, 支持序列化函数类型

- 支持原生 json api 调用方式`nativeStringify`, `nativeParse`
- 支持序列化和反序列化函数 `stringify`, `fastStringify`, `parse`
- 支持序列化和反序列化正则 `stringify`, `fastStringify`, `parse`
- 内置开箱即用的工具方法
  - 判断函数类型 `isFunc`
  - 判断对象类型 `isObj`
  - 判断数组类型 `isArr`
  - 判断对象或数组类型 `isArrOrObj`
  - 判断正则类型 `isRegExp`

Demo:

```tsx | pure
import { parser } from 'xijs';

const door = {
  a: 1,
  b: function () {},
  c: {
    c1: 'h5-dooring',
    c2: () => {},
    c3: {
      c: '3fvc',
      d: {
        dd: () => {},
        ee: /[a-z]/g,
      },
    },
  },
  d: /[0-9]/g,
};

// 将对象序列化
parser.stringify(door);

// 结果如下:
// {
//   a: 1,
//   b: '__xfunc__function () {}',
//   c: {
//     c1: 'h5-dooring',
//     c2: '__xfunc__() => {}',
//     c3: {
//        c: '3fvc',
//        d: {
//          dd: '__xfunc__() => {}',
//          ee: '__xreg__/[a-z]/g'
//        }
//     },
//   },
//   d: '__xreg__/[0-9]/g',
// };

// 将json数据反解析成对象
parser.parse(parser.stringify(door));

// 结果如下:
// {
//   a: 1,
//   b: function () {},
//   c: {
//     c1: 'h5-dooring',
//     c2: () => {},
//     c3: {
//       c: '3fvc',
//       d: {
//         dd: () => {},
//         ee: /[a-z]/g,
//       },
//     },
//   },
//   d: /[0-9]/g,
// };

// 使用原生json api
parser.nativeStringify(door);
parser.nativeParse(door);
```

```tsx
/**
 * title: 打开控制台查看结果
 */
import { parser } from 'xijs';

const door = {
  a: 1,
  b: function () {},
  c: {
    c1: 'h5-dooring',
    c2: () => {},
    c3: {
      c: '3fvc',
      d: {
        dd: () => {},
        ee: /[a-z]/g,
      },
    },
  },
  d: /[0-9]/g,
};

// 将对象序列化
console.log('stringify', parser.stringify(door));
console.log('fastStringify', parser.fastStringify(door));

// 将json数据反解析成对象
console.log(parser.parse(parser.stringify(door)));

console.log('native stringify', parser.nativeStringify(door));
```
