import repeat from '../index';

describe('repeat', () => {
  test('生成一个重复的字符串，有 n 个 str 组成', () => {
    const str = 'xijs';
    expect(repeat(str, 5)).toBe('xijsxijsxijsxijsxijs');
  });
});
