---
title: XCookie - cookie 的操作
nav:
  title: 使用文档
  path: /lib
group:
  path: /browser
  title: 浏览器相关
  order: 2
---

## XCookie

> XCookie 是一个对象，它的方法有：
>
> 1.  set(key, value, option?)：设置 cookie
>
>     参数：
>
>     key: cookie 的键
>
>     value: cookie 的值
>
>     option: 可选参数，用于设置 cookie 的 path，domain，max-age，expires，secure 属性值，
>
>     以对象的形式传入，{path, maxAge, secure, domain, expires}。
>
>     返回值：document.cookie
>
> 2.  get(key)：获取 cookie
>
>     参数：
>
>     key: cookie 的键
>
>     返回值：cookie 的值
>
> 3.  remove(key)：删除 cookie
>
>     参数：
>
>     key: cookie 的键
>
> 4.  allCookies()：获取所有的 cookie
>
>     返回值：一个对象，对象的键为 cookie 的键，值为 cookie 的值。

Demo:

```tsx | pure
import { xCookie } from 'xijs';
// 设置 cookie,
xCookie.set('foo', 'bar', {
  path: './',
  maxAge: 10,
  secure: true,
  domain: 'localhost',
  expires: 'Wed, 21 Oct 2023 07:28:00 GMT',
});
// 获取 cookie
xCookie.get('foo'); // bar
// 删除 cookie
xCookie.remove('foo');
xCookie.get('foo'); // ''

// 获取所有 cookie
xCookie.set('foo', 'bar');
xCookie.set('foo1', 'bar1');
xCookie.allCookies(); // {foo: 'bar', foo1: 'bar1'}
```
