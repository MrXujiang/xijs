import calculateMemory from '../index';

describe('calculateMemory', () => {
  const obj = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'traveling'],
    address: {
      city: 'New York',
      country: 'USA',
    },
    sayHi: function () {
      console.log('Hi');
    },
  };
  test('calculateMemoryUsage', () => {
    expect(calculateMemory(obj)).toEqual('114 B');
    expect(calculateMemory(obj, 'B')).toStrictEqual('114 B');
    expect(calculateMemory(obj, 'KB')).toStrictEqual('0.11 KB');
    expect(calculateMemory(obj, 'MB')).toStrictEqual('0.00 MB');
  });
});
