import charCount from '../index';

describe('charCount', () => {
  test('获取字符串中指定字符的个数', () => {
    const s = 'abc-def-h5-dooring';
    expect(charCount(s, '-')).toBe(3);
    expect(charCount(s, '!')).toBe(0);
  });
});
