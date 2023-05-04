/**
 * @param tree 树结构
 * @param childField 每个节点中子树的字段名
 * @returns 扁平数组
 */

function transformArray(tree: any[] = [], childField = 'children') {
  // 层序遍历
  const treeNodes: any[] = [];
  const res: any[] = [];
  for (const rootNode of tree) {
    treeNodes.push(rootNode);
  }
  while (treeNodes.length > 0) {
    const node = treeNodes.shift();
    if (node[childField] && node[childField].length > 0) {
      for (const childNode of node[childField]) {
        treeNodes.push(childNode);
      }
    }
    delete node[childField];
    res.push(node);
  }
  return res;
}

export default transformArray;
