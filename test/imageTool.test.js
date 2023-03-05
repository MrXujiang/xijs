import { hex2rgba, rgba2obj } from '../src/index';

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
});
