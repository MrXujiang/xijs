---
title: BinaryTree - 二叉树
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 2
---

## BinaryTree

> 二叉树
>
> bt.insert(param):&emsp; param 是 需要插入的元素    <br>
> bt.find(param):&emsp; param 是 需要寻找的元素，返回值为所找到的节点   <br>
> bt.removeNode(param):&emsp; param 需要删除的元素   <br>
> bt.getRoot():&emsp; 获取二叉树的根节点  <br>
> bt.getMinNode():&emsp; 获取二叉树 某个节点的最小值  <br>
> bt.getMaxNode():&emsp; 获取二叉树 某个节点的最小值  <br>
> bt.preOrderTraversal(bt.getRoot()):&emsp; 需要传入进行遍历的节点,  遍历结束之后, 可以通过  bt.getRoot().preOrder  获取先序遍历的结果集  <br>
> bt.centerOrderTraversal(bt.getRoot()):&emsp;需要传入进行遍历的节点, 遍历结束之后, 可以通过  bt.getRoot().centerOrder  获取中序遍历的结果集 <br>
> bt.postOrderTraversal(bt.getRoot()):&emsp;需要传入进行遍历的节点, 遍历结束之后, 可以通过  bt.getRoot().postOrder 获取后序遍历的结果集  <br>

Demo:

```tsx | pure
import { BinaryTree } from 'xijs';
const bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(0);
// bt.insert(4);
// bt.insert(-1);

const res = bt.find(2);
console.log('find: ', res)
bt.removeNode(2)
console.log('getRoot: ', bt.getRoot())
console.log('getMinNode: ', bt.getMinNode())
console.log('getMaxNode: ', bt.getMaxNode())
bt.preOrderTraversal(bt.getRoot())
bt.centerOrderTraversal(bt.getRoot())
bt.postOrderTraversal(bt.getRoot())
console.log(`preOrder: `, bt.getRoot().preOrder)
console.log(`centerOrder: `, bt.getRoot().centerOrder)
console.log(`postOrder: `, bt.getRoot().postOrder)

```
