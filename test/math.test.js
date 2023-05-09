import {
  average,
  difference,
  random,
  shuffle,
  factorial,
  fibonacci,
  sum,
  capitalizedAmount,
  floatAdd,
  floatDiv,
  floatMul,
  floatSub
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

  test('金额转换', () => {
    expect(capitalizedAmount(100000000)).toBe('壹亿元整');
    expect(capitalizedAmount('2023.04')).toBe('贰仟零贰拾叁元肆分');
    expect(capitalizedAmount(-1024)).toBe('欠壹仟零贰拾肆元整');
  });
  describe('Correct floating-point calculation', () => {
    test('Computes floating-point precision addition', () => {
      expect(floatAdd(0.1, 0.2)).toEqual(0.3);
      expect(floatAdd(1, 2)).toEqual(3);
      expect(floatAdd(1, 1.2)).toEqual(2.2);
      expect(floatAdd(1.2, 1)).toEqual(2.2);
    });
    test('Computes floating-point precision subtraction', () => {
      expect(floatSub(0.4, 0.1)).toEqual(0.3);
      expect(floatSub(0.1, 0.4)).toEqual(-0.3);
      expect(floatSub(3, 1)).toEqual(2);
      expect(floatSub(1.2, 1)).toEqual(0.2);
      expect(floatSub(1, 0.8)).toEqual(0.2);
    });
    test('Calculate floating-point precision division', () => {
      expect(floatDiv(10.44, 100)).toEqual(0.1044);
      expect(floatDiv(100, 1)).toEqual(100);
      expect(floatDiv(1, 10000000000)).toEqual(0.0000000001);
      expect(floatDiv(85, 85)).toEqual(1);
      expect(floatDiv(1, 3)).toEqual(0.3333333333333333);
    });
    test('Computes floating-point precision multiplication', () => {
      expect(floatMul(1.255, 100)).toEqual(125.5);
      expect(floatMul(1.2555555555, 1.2555555555555)).toEqual(
        1.576419753016597,
      );
      expect(floatMul(floatDiv(1, 3), 100)).toEqual(33.33333333333333);
      expect(floatMul(0, 0)).toEqual(0);
      expect(floatMul(1, 0)).toEqual(0);
    });
  });

  describe('Incorrect floating-point calculation', () => {
    test('Computes floating-point precision addition', () => {
      const spy = jest.spyOn(console, 'warn');
      expect(floatAdd()).toBeNaN();
      expect(floatAdd('1', '2')).toBeNaN();
      expect(floatAdd(null, undefined)).toBeNaN();
      expect(spy).toBeCalledWith('Please pass in the number type');
      spy.mockRestore();
    });
    test('Computes floating-point precision subtraction', () => {
      const spy = jest.spyOn(console, 'warn');
      expect(floatSub(floatSub())).toBeNaN();
      expect(floatSub(floatSub('1', '2'))).toBeNaN();
      expect(floatSub(floatSub(null, undefined))).toBeNaN();
      expect(spy).toBeCalledWith('Please pass in the number type');
      spy.mockRestore();
    });
    test('Calculate floating-point precision division', () => {
      const spy = jest.spyOn(console, 'warn');
      expect(floatDiv()).toBeNaN();
      expect(floatDiv('1', '2')).toBeNaN();
      expect(floatDiv(null, undefined)).toBeNaN();
      expect(spy).toBeCalledWith('Please pass in the number type');
      spy.mockRestore();
    });
    test('Computes floating-point precision multiplication', () => {
      const spy = jest.spyOn(console, 'warn');
      expect(floatMul()).toBeNaN();
      expect(floatMul('1', '2')).toBeNaN();
      expect(floatMul(null, undefined)).toBeNaN();
      expect(spy).toBeCalledWith('Please pass in the number type');
      spy.mockRestore();
    });
  });
});
