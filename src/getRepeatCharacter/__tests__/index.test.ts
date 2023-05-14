import getRepeatCharacter from '../index';

describe('getRepeatCharacter', () => {
  test('计算字符串中重复字符以及重复字符的次数', () => {
    expect(getRepeatCharacter('bigBbbi')).toMatchObject({
      b: 3,
      i: 2,
      g: 1,
      B: 1,
    });
  });
});
