---
title: binaryTree - 二叉树
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## binaryTree

> 二叉树
>
> binaryTree.insert(param):&emsp; param 是 需要插入的元素    <br>
> binaryTree.find(param):&emsp; param 是 需要寻找的元素，返回值为所找到的节点   <br>
> binaryTree.removeNode(param):&emsp; param 需要删除的元素   <br>
> binaryTree.getRoot():&emsp; 获取二叉树的根节点  <br>
> binaryTree.getMinNode():&emsp; 获取二叉树 某个节点的最小值  <br>
> binaryTree.getMaxNode():&emsp; 获取二叉树 某个节点的最小值  <br>
> binaryTree.preOrderTraversal(binaryTree.getRoot()):&emsp; 需要传入进行遍历的节点,  遍历结束之后, 可以通过  binaryTree.getRoot().preOrder  获取先序遍历的结果集  <br>
> binaryTree.centerOrderTraversal(binaryTree.getRoot()):&emsp;需要传入进行遍历的节点, 遍历结束之后, 可以通过  binaryTree.getRoot().centerOrder  获取中序遍历的结果集 <br>
> binaryTree.postOrderTraversal(binaryTree.getRoot()):&emsp;需要传入进行遍历的节点, 遍历结束之后, 可以通过  binaryTree.getRoot().postOrder 获取后序遍历的结果集  <br>

Demo:

```tsx | pure
import { binaryTree } from 'xijs';
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(0);
// binaryTree.insert(4);
// binaryTree.insert(-1);

const res = binaryTree.find(2);
console.log('find: ', res)
binaryTree.removeNode(2)
console.log('getRoot: ', binaryTree.getRoot())
console.log('getMinNode: ', binaryTree.getMinNode())
console.log('getMaxNode: ', binaryTree.getMaxNode())
binaryTree.preOrderTraversal(binaryTree.getRoot())
binaryTree.centerOrderTraversal(binaryTree.getRoot())
binaryTree.postOrderTraversal(binaryTree.getRoot())
console.log(`preOrder: `, binaryTree.getRoot().preOrder)
console.log(`centerOrder: `, binaryTree.getRoot().centerOrder)
console.log(`postOrder: `, binaryTree.getRoot().postOrder)

```
