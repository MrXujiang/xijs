/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */
interface ListNode<T> {
  data: T;
  next?: ListNode<T>;
}

const arrayToListNode = <T>(arr: Array<T>): ListNode<T> | undefined => {
  const len = arr.length;
  if (!len) {
    return undefined;
  }
  let node: ListNode<T> = {
    data: arr[len - 1],
  };
  for (let i = len - 2; i >= 0; i--) {
    node = {
      data: arr[i],
      next: node,
    };
  }
  return node;
};
export default arrayToListNode;
