import coordinatesInCircle from '../index';

describe('coordinatesInCircle', () => {
  test('生成圆内任意坐标', () => {
    const circleArr = [
      [[2, 3], 2],
      [[3, 3], 5],
      [[0, 0], 3],
    ];
    circleArr.forEach((circle) => {
      const point = coordinatesInCircle(circle[0], circle[1]),
        [x, y] = circle[0],
        sumOfSquares = Math.pow(point[0] - x, 2) + Math.pow(point[1] - y, 2),
        distance = Math.sqrt(sumOfSquares);
      expect(distance).toBeLessThanOrEqual(circle[1]);
    });
  });
});
