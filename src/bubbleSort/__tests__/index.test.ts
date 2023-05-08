import bubbleSort from '../index';

describe('bubbleSort', () => {
  let arr = [1, 4, 2, 3];
  let objArr = [
    { name: '8', age: 18 },
    { name: '3', age: 13 },
    { name: '5', age: 15 },
    { name: '2', age: 12 },
  ];
  let arrAsc = [1, 2, 3, 4];
  let arrDesc = [4, 3, 2, 1];
  let objArrAsc = [
    { name: '2', age: 12 },
    { name: '3', age: 13 },
    { name: '5', age: 15 },
    { name: '8', age: 18 },
  ];
  let objArrDesc = [
    { name: '8', age: 18 },
    { name: '5', age: 15 },
    { name: '3', age: 13 },
    { name: '2', age: 12 },
  ];
  test('冒泡排序', () => {
    expect(bubbleSort(arr)).toStrictEqual(arrAsc);
    expect(bubbleSort(arr, '', 'desc')).toStrictEqual(arrDesc);
    expect(bubbleSort(objArr, 'age')).toStrictEqual(objArrAsc);
    expect(bubbleSort(objArr, 'age', 'desc')).toStrictEqual(objArrDesc);
  });
});
