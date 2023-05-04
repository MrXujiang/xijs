---
title: downloadFileWithUrl - 下载链接文件
nav:
  title: 使用文档
  path: /lib
group:
  path: /dom
  title: dom操作
  order: 13
---

## downloadFileWithUrl(url, fileName)

> 下载链接文件
>
> 参数
>
> url: 下载链接
>
> fileName: 可选参数，下载后的文件名，默认为链接中最后一个 / 号后面的字符串。

Demo:

```tsx | pure
import { downloadFileWithUrl } from 'xijs';

// 请求链接为 url 的文件
downloadFileWithUrl('url', 'xxx.xx');
```
