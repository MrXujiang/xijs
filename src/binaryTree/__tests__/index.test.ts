import binaryTree from '../index';

describe('BinaryTree', () => {
  test('二叉树', () => {
    // const bt = new BinaryTree();
    expect(binaryTree.insert(1));
    expect(binaryTree.getRoot()).toEqual({
      centerOrder: [],
      count: 1,
      data: 1,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(binaryTree.insert(2));
    expect(binaryTree.insert(0));
    expect(binaryTree.find(2)).toEqual({
      centerOrder: [],
      count: 0,
      data: 2,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(binaryTree.getMinNode(binaryTree.getRoot())).toEqual({
      centerOrder: [],
      count: 0,
      data: 0,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(binaryTree.getMaxNode(binaryTree.getRoot())).toEqual({
      centerOrder: [],
      count: 0,
      data: 2,
      left: undefined,
      postOrder: [],
      preOrder: [],
      right: undefined,
    });
    expect(binaryTree.removeNode(2)).toEqual(undefined);
    binaryTree.insert(2);
    binaryTree.preOrderTraversal(binaryTree.getRoot());
    binaryTree.centerOrderTraversal(binaryTree.getRoot());
    binaryTree.postOrderTraversal(binaryTree.getRoot());
    expect(binaryTree.getRoot()!.preOrder).toEqual([0, 1, 2]);
    expect(binaryTree.getRoot()!.centerOrder).toEqual([1, 0, 2]);
    expect(binaryTree.getRoot()!.postOrder).toEqual([0, 2, 1]);
  });
});
