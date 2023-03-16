import { bubbleSort,quickSort } from '../src/index';

describe('排序相关测试', () => {
  test('冒泡排序', () => {
    let arr = [1, 2, 3, 9, 6, 4, 10, 1];
    let objArr = [
      { name: '8', age: 18 },
      { name: '3', age: 13 },
      { name: '5', age: 15 },
      { name: '2', age: 12 },
    ];
    console.log(bubbleSort(arr));
    // 升序
    console.log(bubbleSort(objArr,'age'));
    // 降序
    console.log(bubbleSort(objArr,'age','desc'));
    
    console.log(quickSort(arr))
    console.log(quickSort(objArr,'age'))
    console.log(quickSort(objArr,'age','desc'))
    // console.log(quickSort(str,'age','desc'))
  });
});
