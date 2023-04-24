import { hex2rgba, rgba2obj, genRandomColor } from '../src/index';

const reg16 = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const regRgb =
  /rgb\((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\)/;
const regRgba =
  /rgba\((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),(0.\d+|0|1)|(1.0)\)/;
const regHsl = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/;
const regHsla =
  /hsla\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%),(0.\d+|0|1)|(1.0)\)/;
describe('图片处理函数相关测试', () => {
  test('hex 色值转 rgba', async () => {
    const transformRgba = hex2rgba('#fff'),
      expectRgbaObj = {
        v: 'rgba(255,255,255,1)',
        o: { r: 255, g: 255, b: 255, a: 1 },
      };

    expect(transformRgba).toEqual(expectRgbaObj);
  });

  test('rgba值转化为rgba对象', async () => {
    const transformRgbaObj = rgba2obj('rgba(20,100,20,0.2)'),
      expectRgbaObj = {
        r: 20,
        g: 100,
        b: 20,
        a: 0.2,
      };

    expect(transformRgbaObj).toEqual(expectRgbaObj);
  });
  test('随机生成颜色', async () => {
    expect(genRandomColor(16)).toMatch(reg16);
    expect(genRandomColor('16')).toMatch(reg16);
    expect(genRandomColor('rgb')).toMatch(regRgb);
    expect(genRandomColor('rgba')).toMatch(regRgba);
    expect(genRandomColor('hsl')).toMatch(regHsl);
    expect(genRandomColor('hsla')).toMatch(regHsla);
  });
});
