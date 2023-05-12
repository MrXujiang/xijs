import formatPercent from '../index';

describe('formatPercent', () => {
  test('数值转换为百分数表示', () => {
    const num1 = 0.456789,
      num2 = 3,
      num3 = 10.234;
    const percentNum1 = formatPercent(num1, 1);
    const percentNum2 = formatPercent(num2, 2);
    const percentNum3 = formatPercent(num3, 3);
    expect(percentNum1).toBe('45.7%');
    expect(percentNum2).toBe('300%');
    expect(percentNum3).toBe('1023.400%');
  });
});
