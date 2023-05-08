import quickSort from '../index';

describe('quickSort', () => {
  let arr = [1, 4, 2, 3];
  let objArr = [
    { name: '8', age: 18 },
    { name: '3', age: 13 },
    { name: '5', age: 15 },
    { name: '2', age: 12 },
  ];
  let arrAsc = [1, 2, 3, 4];
  let objArrAsc = [
    { name: '2', age: 12 },
    { name: '3', age: 13 },
    { name: '5', age: 15 },
    { name: '8', age: 18 },
  ];
  test('快速排序', () => {
    expect(quickSort(arr)).toStrictEqual(arrAsc);
    expect(quickSort(objArr, 'age')).toStrictEqual(objArrAsc);
  });
});
