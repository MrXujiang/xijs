import isObjEqual from '../index';

describe('isObjEqual', () => {
  test('判断两个对象是否相等', () => {
    expect(
      isObjEqual({ a: 1, b: 2, c: { d: 222 } }, { b: 2, c: { d: 222 }, a: 1 }),
    ).toEqual(true);
    expect(
      isObjEqual({ a: 1, b: 2, c: { d: 222 } }, { b: 2, c: { d: 222 } }),
    ).toEqual(false);
  });
});
