import floatDiv from '../index';

describe('floatDiv', () => {
  test('Calculate floating-point precision division', () => {
    expect(floatDiv(10.44, 100)).toEqual(0.1044);
    expect(floatDiv(100, 1)).toEqual(100);
    expect(floatDiv(1, 10000000000)).toEqual(0.0000000001);
    expect(floatDiv(85, 85)).toEqual(1);
    expect(floatDiv(1, 3)).toEqual(0.3333333333333333);
  });
  test('Calculate floating-point precision division', () => {
    const spy = jest.spyOn(console, 'warn');
    expect(floatDiv()).toBeNaN();
    expect(floatDiv('1', '2')).toBeNaN();
    expect(floatDiv(null, undefined)).toBeNaN();
    expect(spy).toBeCalledWith('Please pass in the number type');
    spy.mockRestore();
  });
});
