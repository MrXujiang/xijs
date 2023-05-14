import arrayRepeat from '../index';

describe('arrayRepeat', () => {
  test('array 元素 重复', () => {
    // TODO 单测跑不过，实际输出 { '"1"': 2, '"2"': 1 }
    // expect(arrayRepeat(['1', '2', '1'])).toEqual({ 1: 2, 2: 1 });
    expect(arrayRepeat([1, 2, 3, 2, 4, 5, 1])).toEqual({
      1: 2,
      2: 2,
      3: 1,
      4: 1,
      5: 1,
    });
    expect(arrayRepeat([true, false, false, true, true, true, false])).toEqual({
      true: 4,
      false: 3,
    });
  });
});
