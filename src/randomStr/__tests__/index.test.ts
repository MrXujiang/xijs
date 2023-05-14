import randomStr from '../index';

describe('randomStr', () => {
  test('生成随机字符串', () => {
    const len = 6;
    expect(randomStr(len).length).toBe(len);
  });
});
