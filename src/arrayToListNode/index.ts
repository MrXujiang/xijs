/**
 * 定义链表结构
 * @param data
 * @param next
 * @constructor
 */
function ListNode(this: any, data: undefined, next: undefined) {
  this.data = (data === undefined ? 0 : data)
  this.next = (next === undefined ? null : next)
}
// 将数组转化为链表
const arrayToListNode = (arr: any[]) => {
  if (arr.length === 0) {
    // @ts-ignore
    return new ListNode(null, null)
  }
  // @ts-ignore
  const nodes = arr.map(data => new ListNode(data))
  nodes.reduce((prev: { next: any }, curr: any) => (prev.next = curr))
  return nodes[0];
}

export default arrayToListNode;
