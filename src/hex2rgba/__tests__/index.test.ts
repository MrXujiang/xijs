import hex2rgba from '../index';

describe('hex2rgba', () => {
  test('hex 色值转 rgba', async () => {
    const transformRgba = hex2rgba('#fff'),
      expectRgbaObj = {
        v: 'rgba(255,255,255,1)',
        o: { r: 255, g: 255, b: 255, a: 1 },
      };

    expect(transformRgba).toEqual(expectRgbaObj);
  });
});
