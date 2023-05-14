import average from '../index';

describe('average', () => {
  test('计算数组平均值', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [8, 1, 3, 2, 4, 5],
      [7, 2, 3, 4],
    ];
    arr.forEach((item) => {
      const avg = item.reduce((a, b) => a + b, 0) / item.length;
      expect(average(item)).toBe(avg);
    });
  });
});
