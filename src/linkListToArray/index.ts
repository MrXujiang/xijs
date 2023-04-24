interface ListNode {
  value: number;
  next?: ListNode;
}
/**
 *
 * @param linkList
 * @returns
 */
const linkListToArray = (linkList: ListNode | undefined): Array<any> => {
  const arr = [];
  let header = linkList;
  while (header) {
    arr.push(header.value);
    header = header.next;
  }
  return arr;
};

export default linkListToArray;
