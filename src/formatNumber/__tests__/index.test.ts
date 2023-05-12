import formatNumber from '../index';

describe('formatNumber', () => {
  test('数值千分位格式化', () => {
    const num = 123456.789;
    const formatNum = formatNumber(num);
    expect(formatNum).toBe(num.toLocaleString());
  });
});
