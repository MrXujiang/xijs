import { isArray, isEmpty, isPhone } from '../src/index';

describe('常用判断函数相关测试', () => {
  test('判断数组类型', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test('判断空对象', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ name: 'jack' })).toBe(false);
    expect(isEmpty([])).toBe(false);
  });

  test('判断手机号格式', () => {
    expect(isPhone(13827462333)).toBe(true);
    expect(isPhone(1382746233)).toBe(false);
  });
});
