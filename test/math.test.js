import { average, difference, random, shuffle } from '../src/index';
describe('数学计算相关测试', () => {
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
  test('创建一个排除指定项的数组', () => {
    const omitArr = difference([1, 2, 2, 3, 3, 4, 5], [2, 3]);
    expect(omitArr).toEqual([1, 4, 5]);
  });
  test('返回指定范围的随机数', () => {
    const min = 2,
      max = 5;
    const r = random(min, max);
    expect(r).toBeGreaterThanOrEqual(min);
    expect(r).toBeLessThanOrEqual(max);
  });
  test('打乱数组', () => {
    const arr = [1, 3, 5, 7, 4, 3];
    expect(shuffle(arr.slice())).not.toEqual(arr);
  });
});
