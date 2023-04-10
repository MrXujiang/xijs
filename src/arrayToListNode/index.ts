/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */
interface ListNode {
  data: any;
  next?: ListNode;
}
const arrayToListNode = (arr: any[]): ListNode | undefined => {
  let len = arr.length;
  if (!len) {
    return undefined;
  }
  let node: ListNode = {
    data: arr[len - 1],
  }
  for (let i = len - 2; i >= 0; i--) {
    node = {
      data: arr[i],
      next: node,
    };
  }
  return node;
};
export default arrayToListNode;
