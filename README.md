![](http://cdn.dooring.cn/dr/xijs.png)

# xijs

> 招募有想法, 热衷技术的小伙伴一起共建啦! 致力于打造最好用的前端工具库, 您可以提 issue 或者 pr 来共建项目, 或者加作者微信, 一起让项目更健壮.

一款面向复杂业务场景的 js 类库, 目前已支持:

- parser json 解析器, 在原生 json api 基础上支持序列化和反序列化函数, 正则等
- store 一款支持设置过期时间且支持回调的本地缓存库, 基于 localStorage 二次封装
- formatDate 支持自定义的时间格式化函数
- obj2url 将对象转换成编码后的 url 字符串
- url2obj 将 url 字符串转换成对象
- isPc 判断设备是否为 pc 端类型
- debounce 防抖函数
- throttle 节流函数
- randomStr 生成指定个数随机字符串的函数
- uuid 生成唯一 id
- shuffle 数组乱序, 洗牌算法
- randomStr 生成随机字符串
- transformTree 将扁平数组转换成树结构

等等开发中常用的工具函数, 轻松提高业务研发效率.

## API Doc

[xijs 文档](http://h5.dooring.cn/xijs)

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

### 注意⚠️
对于出现`regeneratorRuntime is not defined问题的解决`, 我们可以在webpack做如下配置, 来支持es的async / await :
```bash
npm install --save-dev @babel/plugin-transform-runtime
```

配置:

```js
 use: {
     loader: 'babel-loader',
     options: {
         plugins: ["@babel/plugin-transform-runtime"]
     }
 }

```

## 更多推荐

| name                                                                              | Description                                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [H5-Dooring](https://github.com/MrXujiang/h5-Dooring)                             | 让 H5 制作像搭积木一样简单, 轻松搭建 H5 页面, H5 网站, PC 端网站, LowCode 平台.         |
| [V6.Dooring](https://github.com/MrXujiang/v6.dooring.public)                      | 可视化大屏解决方案, 提供一套可视化编辑引擎, 助力个人或企业轻松定制自己的可视化大屏应用. |
| [dooring-electron-lowcode](https://github.com/MrXujiang/dooring-electron-lowcode) | 基于 electron 的 H5-Dooring 编辑器桌面端.                                               |
|                                                                                   |
| [DooringX](https://github.com/H5-Dooring/dooringx)                                | 快速高效搭建可视化拖拽平台.                                                             |

## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 共建 | Contribute

欢迎参与到项目的共建中, 您可以提 issue 或者 pr 来共建项目, 或者加作者微信, 一起让项目更健壮.

## 技术反馈和交流群 | Technical feedback and communication

微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
