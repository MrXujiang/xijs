import fibonacci from '../index';

describe('fibonacci', () => {
  test('斐波那契数', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(10)).toBe(55);
  });
});
