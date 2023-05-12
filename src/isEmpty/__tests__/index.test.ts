import isEmpty from '../index';

describe('isEmpty', () => {
  test('判断空对象', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ name: 'jack' })).toBe(false);
    expect(isEmpty([])).toBe(false);
  });
});
