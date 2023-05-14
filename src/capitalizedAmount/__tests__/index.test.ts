import capitalizedAmount from '../index';

describe('capitalizedAmount', () => {
  test('金额转换', () => {
    expect(capitalizedAmount(100000000)).toBe('壹亿元整');
    expect(capitalizedAmount('2023.04')).toBe('贰仟零贰拾叁元肆分');
    expect(capitalizedAmount(-1024)).toBe('欠壹仟零贰拾肆元整');
  });
});
