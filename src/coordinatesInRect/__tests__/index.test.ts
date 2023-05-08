import coordinatesInRect from '../index';

describe('coordinatesInRect', () => {
  test('生成矩形内任意坐标', () => {
    const rectArr = [
      [[3, 4], 5, 6],
      [[2, 3], 1, 3],
      [[5, 7], 8, 4],
    ];

    rectArr.forEach((rect) => {
      const [startPos, w, h] = rect;
      const [pointX, pointY] = coordinatesInRect(startPos, w, h);

      expect(pointX).toBeLessThanOrEqual(startPos[0] + w);
      expect(pointX).toBeGreaterThanOrEqual(startPos[0]);

      expect(pointY).toBeLessThanOrEqual(startPos[1] + h);
      expect(pointY).toBeGreaterThanOrEqual(startPos[1]);
    });
  });
});
