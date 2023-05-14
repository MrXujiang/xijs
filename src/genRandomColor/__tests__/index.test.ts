import genRandomColor from '../index';

const reg16 = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const regRgb =
  /rgb\((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\)/;
const regRgba =
  /rgba\((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(0.\d+|0|1)|(1.0)\)/;
const regHsl = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/;
const regHsla =
  /hsla\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%),(0.\d+|0|1)|(1.0)\)/;
describe('genRandomColor', () => {
  test('随机生成颜色', async () => {
    expect(genRandomColor(16)).toMatch(reg16);
    expect(genRandomColor('16')).toMatch(reg16);
    expect(genRandomColor('rgb')).toMatch(regRgb);
    expect(genRandomColor('rgba')).toMatch(regRgba);
    expect(genRandomColor('hsl')).toMatch(regHsl);
    expect(genRandomColor('hsla')).toMatch(regHsla);
  });
});
