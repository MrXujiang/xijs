import { xss } from '../src/index';

describe('Dom 操作相关测试', () => {
  test('xss - 转义html标签', () => {
    let html = '<a href="#">Me & you</a>';
    expect(xss(html)).toBe(
      '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;',
    );
  });
});
