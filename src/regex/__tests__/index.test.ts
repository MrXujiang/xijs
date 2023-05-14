import regex from '../index';

describe('regex', () => {
  test('正则表达式判断', () => {
    expect(regex('phoneRegexp', '18396781187')).toBe(true);
    expect(regex('phoneRegexp', '1839678118')).toBe(false);
    expect(regex('carNumberRegexp', 'LHGTG2824K8024652')).toBe(true);
  });
});
