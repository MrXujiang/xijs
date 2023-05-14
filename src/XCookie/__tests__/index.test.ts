import xCookie from '../index';
import sleep from '../../sleep';

describe('XCookie', () => {
  test('增加，删除，获取所有 cookie 的操作', async () => {
    const key = 'foo',
      value = 'bar';
    xCookie.set(key, value, { maxAge: 3 });
    expect(xCookie.get(key)).toBe(value);
    await sleep(3000);
    expect(xCookie.get(key)).toBe('');

    const cookies: { [propName: string]: string } = {
      foo: 'bar',
      foo1: 'bar1',
      foo2: 'bar2',
    };
    for (const key in cookies) {
      xCookie.set(key, cookies[key]);
    }
    xCookie.remove('foo');
    Reflect.deleteProperty(cookies, 'foo');

    expect(xCookie.allCookies()).toEqual(cookies);
  });
});
