import designateRepeat from '../index';

describe('计算指定字符在字符串中出现的次数', () => {
  test('计算指定字符在字符串中出现的次数', () => {
    expect(designateRepeat('123334567898765433', '3')).toEqual(5);
    expect(designateRepeat('12546565454754', '3')).toEqual(0);
  });
});
