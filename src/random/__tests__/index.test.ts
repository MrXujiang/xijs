import random from '../index';

describe('random', () => {
  test('返回指定范围的随机数', () => {
    const min = 2,
      max = 5;
    const r = random(min, max);
    expect(r).toBeGreaterThanOrEqual(min);
    expect(r).toBeLessThanOrEqual(max);
  });
});
