import floatAdd from '../index';

describe('floatAdd', () => {
  test('Computes floating-point precision addition', () => {
    expect(floatAdd(0.1, 0.2)).toEqual(0.3);
    expect(floatAdd(1, 2)).toEqual(3);
    expect(floatAdd(1, 1.2)).toEqual(2.2);
    expect(floatAdd(1.2, 1)).toEqual(2.2);
  });
  test('Computes floating-point precision addition', () => {
    const spy = jest.spyOn(console, 'warn');
    expect(floatAdd()).toBeNaN();
    expect(floatAdd('1', '2')).toBeNaN();
    expect(floatAdd(null, undefined)).toBeNaN();
    expect(spy).toBeCalledWith('Please pass in the number type');
    spy.mockRestore();
  });
});
