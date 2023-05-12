import obj2url from '../index';

describe('obj2url', () => {
  test('将对象参数解析为 url 字符串', () => {
    const transformStr = obj2url({ a: 123, b: 'H5-Dooring' }),
      expectdStr = 'a=123&b=H5-Dooring';
    expect(transformStr).toBe(expectdStr);
  });
});
