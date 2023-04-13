import {
  average,
  difference,
  random,
  shuffle,
  factorial,
  fibonacci,
  sum,
} from '../src/index';
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
    const arr = [1, 3, 5, 7, 4, 3],
      arrStr = arr.toString();
    let shuffleCount = 0;
    for (let i = 0; i < 100; i++) {
      const shuffleArr = shuffle(arr.slice());
      if (shuffleArr.toString() !== arrStr) {
        shuffleCount++;
      }
    }
    const probability = shuffleCount / 100;
    expect(probability).toBeGreaterThanOrEqual(0.9);
  });

  test('求和', () => {
    expect(sum([0])).toBe(0);
    expect(sum([0, 1, 2, 3, 4, 5])).toBe(15);
    expect(sum([2, 38, 9, 1, 64])).toBe(114);
  });

  test('阶乘', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(18)).toBe(6402373705728000);
    expect(factorial(19)).toBe(121645100408832000n);
  });

  test('斐波那契数', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(10)).toBe(55);
  });
});
