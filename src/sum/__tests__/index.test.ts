import sum from '../index';

describe('sum', () => {
  test('求和', () => {
    expect(sum([0])).toBe(0);
    expect(sum([0, 1, 2, 3, 4, 5])).toBe(15);
    expect(sum([2, 38, 9, 1, 64])).toBe(114);
  });
});
