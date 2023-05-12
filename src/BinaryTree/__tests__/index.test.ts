import BinaryTree from '../index';

describe('BinaryTree', () => {
  test('二叉树', () => {
    const bt = new BinaryTree();
    expect(bt.insert(1)).toEqual();
    expect(bt.getRoot()).toEqual({
      centerOrder: [],
      count: 1,
      data: 1,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(bt.insert(2)).toEqual();
    expect(bt.insert(0)).toEqual();
    expect(bt.find(2)).toEqual({
      centerOrder: [],
      count: 0,
      data: 2,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(bt.getMinNode(bt.getRoot())).toEqual({
      centerOrder: [],
      count: 0,
      data: 0,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(bt.getMaxNode(bt.getRoot())).toEqual({
      centerOrder: [],
      count: 0,
      data: 2,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(bt.removeNode(2)).toEqual(undefined);
    bt.insert(2);
    bt.preOrderTraversal(bt.getRoot());
    bt.centerOrderTraversal(bt.getRoot());
    bt.postOrderTraversal(bt.getRoot());
    expect(bt.getRoot().preOrder).toEqual([0, 1, 2]);
    expect(bt.getRoot().centerOrder).toEqual([1, 0, 2]);
    expect(bt.getRoot().postOrder).toEqual([0, 2, 1]);
  });
});
