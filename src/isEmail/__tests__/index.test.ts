import isEmail from '../index';

describe('isEmail', () => {
  test('判断邮箱格式', () => {
    expect(isEmail('13827462333@163.com')).toBe(true);
    expect(isEmail('1382746233@')).toBe(false);
  });
});
