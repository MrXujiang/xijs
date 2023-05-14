import floatSub from '../index';

describe('floatSub', () => {
  test('Computes floating-point precision subtraction', () => {
    expect(floatSub(0.4, 0.1)).toEqual(0.3);
    expect(floatSub(0.1, 0.4)).toEqual(-0.3);
    expect(floatSub(3, 1)).toEqual(2);
    expect(floatSub(1.2, 1)).toEqual(0.2);
    expect(floatSub(1, 0.8)).toEqual(0.2);
  });
  test('Computes floating-point precision subtraction', () => {
    const spy = jest.spyOn(console, 'warn');
    expect(floatSub(floatSub())).toBeNaN();
    expect(floatSub(floatSub('1', '2'))).toBeNaN();
    expect(floatSub(floatSub(null, undefined))).toBeNaN();
    expect(spy).toBeCalledWith('Please pass in the number type');
    spy.mockRestore();
  });
});
