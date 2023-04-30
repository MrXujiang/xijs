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

## 全部函数列表

- 浏览器相关
  - getRuntimeEnv - 获取运行环境
  - getSelection - 获取选中文本
  - redirect - 重定向
  - store - 本地存储库
- 字符串操作
  - base64 - base64编码和解码
  - camelize - 横线转驼峰命名
  - charCount - 获取字符数
  - formatNumber - 数值千分位格式化
  - formatPercent - 值转换为百分数表示
  - hyCompact - 紧凑型驼峰命名转换
  - hyphenate - 驼峰命名转横线命名
  - randomStr - 生成随机字符串
  - repeat - 生成重复字符串
  - uuid - 生成唯一id
- 常用判断函数
  - isArray - 判断数组类型
  - isEmpty - 判断空对象
  - isPc - 判断设备类型
  - isPhone - 判断手机号格式
  - isEmail - 判断邮箱函数
  - isIdCard - 判断身份证格式函数
  - lang - 判断中英文
  - regexp - 常用正则表达式
  - dataDesensitization - 数据脱敏
- 数据结构相关
  - cloneDeep - 数据深拷贝
  - arrayToListNode - 数组转成链表
  - linkListToArray - 链表结构转数组结构
  - dateCalculate - 日期计算
  - timeCutStr - 计算时间差
  - timeSub - 计算时间间隔
  - transformArray - 树结构转扁平数组
  - formatDate - 时间格式化
  - getRawType - 获取数据类型
  - obj2url - 将对象参数解析为url字符串
  - transformTree - 扁平转树结构
  - url2obj - url字符串转对象  
  - bothLinkedList - 双向链表
- 图片处理函数
  - compressImg - 自定义压缩图片函数
  - file2img - 文件转图片对象
  - hex2rgba - hex色值转rgba
  - rgba2obj - 将rgba值转化为rgba对象
  - genRandomColor - 获取随机颜色
- js高级函数
  - debounce - 防抖函数
  - parser - json超级解析器
  - sleep - 睡眠函数
  - throttle - 节流函数
- 常用算法和数据结构
  - bubbleSort - 冒泡排序
  - quickSort - 快速排序
- 数学计算
  - average - 计算数组平均值
  - difference - 创建一个排除指定项的数组
  - random - 返回区域内随机数
  - shuffle - 打乱数组
  - factorial - 阶乘
  - fibonacci - 计算斐波那契数
  - sum - 求和数组
- 几何计算
  - coordinatesInCircle - 生成圆内任意坐标
  - coordinatesInRect - 生成矩形内任意坐标
  - judgePointInCircle - 判断一点是否在圆内
- dom操作
  - downloadFileWithText - 下载文本文件
  - downloadFileWithUrl - 下载链接文件
  - $ - 通过id,class等获取dom
  - getDomPageXY - 获取dom元素在当前文档中的绝对位置
  - getDomScreenXY - 获取dom元素相对于screen绝对位置
  - getDomText - 获取文本内容
  - xss - 转义html标签

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
