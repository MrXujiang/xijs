import linkListToArray from '../index';

describe('linkListToArray', () => {
  test('链表结构转换为数组结构', () => {
    const linkList = {
      value: 100,
      next: { value: 200, next: { value: 300, next: { value: 400 } } },
    };
    const arr = [100, 200, 300, 400];
    expect(linkListToArray(linkList)).toEqual(arr);
  });
});
