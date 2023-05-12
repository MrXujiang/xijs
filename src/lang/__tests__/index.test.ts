import lang from '../index';

describe('lang', () => {
  test('判断中英文', () => {
    expect(lang.isEn('sadsad')).toBe(true);
    expect(lang.isCn('萨达')).toBe(true);
  });
});
