import url2obj from '../index';

describe('url2obj', () => {
  test('将 url 字符串转换为对象', () => {
    const transformObj = url2obj('?name=h5-dooring&desc=h5-mark'),
      expectdObj = { name: 'h5-dooring', desc: 'h5-mark' };
    expect(transformObj).toEqual(expectdObj);
  });
});
