import isArray from '../index';

describe('isArray', () => {
  it('should return `true` for array', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(Object([]))).toBe(true);
  });

  it('should return `false` for non-array', () => {
    expect(isArray(true)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({ length: 0 })).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(new Error())).toBe(false);
    expect(isArray(/a/)).toBe(false);
    expect(isArray('0')).toBe(false);
    expect(isArray(Symbol)).toBe(false);
  });
});
