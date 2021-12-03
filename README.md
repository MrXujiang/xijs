# xijs

一款面向复杂业务场景的 js 类库, 目前已支持:

- parser json 解析器, 在原生 json api 基础上支持序列化和反序列化函数, 正则等
- store 一款支持设置过期时间且支持回调的本地缓存库, 基于 localStorage 二次封装

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

## 更多推荐

| name                                                                              | Description                                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [H5-Dooring](https://github.com/MrXujiang/h5-Dooring)                             | 让 H5 制作像搭积木一样简单, 轻松搭建 H5 页面, H5 网站, PC 端网站, LowCode 平台.         |
| [V6.Dooring](https://github.com/MrXujiang/v6.dooring.public)                      | 可视化大屏解决方案, 提供一套可视化编辑引擎, 助力个人或企业轻松定制自己的可视化大屏应用. |
| [dooring-electron-lowcode](https://github.com/MrXujiang/dooring-electron-lowcode) | 基于 electron 的 H5-Dooring 编辑器桌面端.                                               |
|  |
| [DooringX](https://github.com/H5-Dooring/dooringx)                                | 快速高效搭建可视化拖拽平台.                                                             |

## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication

微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
