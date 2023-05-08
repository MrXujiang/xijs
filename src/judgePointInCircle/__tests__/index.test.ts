import judgePointInCircle from '../index';

describe('judgePointInCircle', () => {
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
