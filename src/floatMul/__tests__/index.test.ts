import floatMul from '../index';
import floatDiv from '../../floatDiv';

describe('floatMul', () => {
  test('Computes floating-point precision multiplication', () => {
    expect(floatMul(1.255, 100)).toEqual(125.5);
    expect(floatMul(1.2555555555, 1.2555555555555)).toEqual(1.576419753016597);
    expect(floatMul(floatDiv(1, 3), 100)).toEqual(33.33333333333333);
    expect(floatMul(0, 0)).toEqual(0);
    expect(floatMul(1, 0)).toEqual(0);
  });
});
