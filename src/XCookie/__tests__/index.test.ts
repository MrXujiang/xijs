import XCookie from '../index';
import sleep from '../../sleep';

describe('XCookie', () => {
  test('增加，删除，获取所有 cookie 的操作', async () => {
    const key = 'foo',
      value = 'bar';
    XCookie.set(key, value, { maxAge: 3 });
    expect(XCookie.get(key)).toBe(value);
    await sleep(3000);
    expect(XCookie.get(key)).toBe('');

    const cookies = {
      foo: 'bar',
      foo1: 'bar1',
      foo2: 'bar2',
    };
    for (const key in cookies) {
      XCookie.set(key, cookies[key]);
    }
    XCookie.remove('foo');
    Reflect.deleteProperty(cookies, 'foo');

    expect(XCookie.allCookies()).toEqual(cookies);
  });
});
