import rgba2obj from '../index';

describe('rgba2obj', () => {
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
