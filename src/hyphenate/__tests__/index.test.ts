import hyphenate from '../index';

describe('hyphenate', () => {
  test('驼峰命名转横线命名', () => {
    const s = 'AaBb1Cc2Dd_Ee.Ff';
    expect(hyphenate(s)).toBe('aa-bb1-cc2-dd_-ee.ff');
    expect(hyphenate(s, '_')).toBe('aa_bb1_cc2_dd__ee.ff');
  });
});
