import arrayToListNode from '../index';

describe('arrayToListNode', () => {
  test('数组转成链表', () => {
    let result = {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
          },
        },
      },
    };
    let arr = [1, 2, 3, 4];
    expect(arrayToListNode(arr)).toEqual(result);

    let result1 = undefined;
    let arr1 = [];
    expect(arrayToListNode(arr1)).toEqual(result1);

    let arr2 = ['ok', 'next', 'post', 'type'];
    let result2 = {
      data: 'ok',
      next: {
        data: 'next',
        next: {
          data: 'post',
          next: {
            data: 'type',
          },
        },
      },
    };
    expect(arrayToListNode(arr2)).toEqual(result2);

    let arr3 = [true, false];
    let result3 = {
      data: true,
      next: {
        data: false,
      },
    };
    expect(arrayToListNode(arr3)).toEqual(result3);
  });
});
