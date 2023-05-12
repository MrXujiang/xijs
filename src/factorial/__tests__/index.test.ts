import factorial from '../index';

describe('factorial', () => {
  test('阶乘', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(18)).toBe(6402373705728000);
    expect(factorial(19)).toBe(121645100408832000n);
  });
});
