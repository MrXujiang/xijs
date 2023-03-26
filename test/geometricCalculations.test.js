import {
  coordinatesInCircle,
  coordinatesInRect,
  judgePointInCircle,
} from '../src/index';

describe('几何计算相关测试', () => {
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
  test('判断一点是否在圆内', () => {
    const circleArr = [
      {
        center: [3, 4],
        r: 5,
      },
      {
        center: [2, 3],
        r: 4,
      },
      {
        center: [1, 0],
        r: 3,
      },
    ];
    const point = [
      {
        coordinates: [3, 5],
        expect: true,
      },
      {
        coordinates: [2, 7],
        expect: true,
      },
      {
        coordinates: [1, 4],
        expect: false,
      },
    ];
    circleArr.forEach((circle, index) => {
      const res = judgePointInCircle(circle, ...point[index].coordinates);
      expect(res).toEqual(point[index].expect);
    });
  });
});
