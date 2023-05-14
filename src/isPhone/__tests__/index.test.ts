import isPhone from '../index';

describe('isPhone', () => {
  it('判断手机号格式', () => {
    expect(isPhone(13827462333)).toBe(true);
    expect(isPhone(1382746233)).toBe(false);
  });
});
