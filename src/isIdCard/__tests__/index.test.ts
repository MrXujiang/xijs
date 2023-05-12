import isIdCard from '../index';

describe('isIdCard', () => {
  test('判断身份证格式', () => {
    // 18位身份证
    expect(isIdCard('142431199009093611')).toBe(true);
    // 15位身份证
    expect(isIdCard('130503670401001')).toBe(true);
    // 18位
    expect(isIdCard('14243119901909361M')).toBe(false);
    // 15位
    expect(isIdCard('130503671401001')).toBe(false);
  });
});
