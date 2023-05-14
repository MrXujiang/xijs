import hyCompact from '../index';

describe('hyCompact', () => {
  test('紧凑型驼峰命名转横线命名', () => {
    const s = 'AABBCcDd';
    expect(hyCompact(s)).toBe('aa-bb-cc-dd');
    expect(hyCompact(s, '+')).toBe('aa+bb+cc+dd');
  });
});
